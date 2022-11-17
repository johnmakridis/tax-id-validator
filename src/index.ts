import { countries } from './config';
import { Country, ValidationResponse, VIESRequestBody, VIESResponse } from './models';
import axios from 'axios';
import * as xml2js from 'xml2js';


export class TaxIdNumberValidator {

    private available_countries: Country[] = [];
    private available_countries_names: string[] = [];
    private available_countries_codes: string[] = [];

    constructor() {

        this.available_countries = this.getAvailableCountries();

        for (const country of this.available_countries) {
            this.available_countries_names.push(country.name);
            this.available_countries_codes.push(country.code);
        }

    }



    public validate(params: { country_code: string; tax_id: string; }): ValidationResponse {

        const country = this.available_countries.find((c) => {
            return c.code === params.country_code.toUpperCase() // country code exists
                && c.tax.length > 0  // country have tax records
                && c.tax.some((t) => t.regex.length > 0); // tax records have validation regex
        });

        if (!country?.code)
            throw new Error(`Country ${params.country_code.toUpperCase()} is not supported`);

        if (country.tax.some((t) => t.vat_prefix && !params.tax_id.toUpperCase().startsWith(t.vat_prefix)))
            throw new Error(`Invalid VAT number prefix for country '${params.country_code.toUpperCase()}'`);


        const isValid = country.tax
            .map((t) => t.regex)
            .map((r) => (r[0]).test(params.tax_id))
            .filter((result) => result === true)
            .length > 0 ? true : false;


        const data: ValidationResponse = {
            country_name: country.name,
            country_code: country.code,
            tax_prefix: null,
            tax_id: params.tax_id,
            is_valid_format: isValid,
        };


        if (isValid)
            data.tax_prefix = country.tax.map((t) => t.vat_prefix)?.[0] || null;


        return data;

    }



    public getAllCountries(): Country[] {
        return countries;
    }



    public getAvailableCountries(): Country[] {
        const availableCountries = countries.filter((country) => country.tax?.length > 0 && country.tax.some((tax) => tax.regex.length > 0));
        return availableCountries;
    }



    public getAvailableCountryNames(): string[] {
        return this.available_countries_names;
    }



    public getAvailableCountryCodes(): string[] {
        return this.available_countries_codes;
    }



    public async getVIESData(params: VIESRequestBody): Promise<any> {

        try {

            if (!params.country_code)
                return Promise.reject({ message: 'Missing input: EU country code' });

            if (!params.vat_number)
                return Promise.reject({ message: 'Missing input: VAT Number' });


            let vatNumberValidationResult: ValidationResponse = null;

            try {

                vatNumberValidationResult = this.validate({
                    country_code: params.country_code.toUpperCase(),
                    tax_id: params.vat_number
                });

                if (!vatNumberValidationResult?.is_valid_format)
                    return Promise.reject({ message: 'Invalid VAT Number format' });


                if (vatNumberValidationResult.tax_prefix) {

                    if (params.vat_number.startsWith(vatNumberValidationResult.tax_prefix))
                        params.vat_number = params.vat_number.replace(vatNumberValidationResult.tax_prefix, '');

                    params.vat_prefix = vatNumberValidationResult.tax_prefix;
                }

            } catch (error) {
                return Promise.reject({ message: error.message });
            }


            const viesXmlRequestBody = `<?xml version="1.0" encoding="UTF-8"?>
            <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns0="urn:ec.europa.eu:taxud:vies:services:checkVat:types" xmlns:ns1="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <SOAP-ENV:Header />
            <ns1:Body>
                <ns0:checkVat>
                    <ns0:countryCode>${params.vat_prefix}</ns0:countryCode>
                    <ns0:vatNumber>${params.vat_number}</ns0:vatNumber>
                </ns0:checkVat>
            </ns1:Body>
            </SOAP-ENV:Envelope>`;



            const viesXmlRespose = await axios.post('http://ec.europa.eu/taxation_customs/vies/services/checkVatService', viesXmlRequestBody, {
                headers: { 'Content-Type': 'text/xml' }
            });


            const xmlToJsonData = await xml2js.parseStringPromise(viesXmlRespose.data, {
                tagNameProcessors: [xml2js.processors.stripPrefix],
                explicitArray: false
            });

            let jsonData: VIESResponse = null;

            if (xmlToJsonData?.Envelope?.Body?.Fault?.faultstring)
                return Promise.reject({ message: xmlToJsonData.Envelope.Body.Fault.faultstring });


            if (xmlToJsonData?.Envelope?.Body?.checkVatResponse) {

                const vatResponse = xmlToJsonData.Envelope.Body.checkVatResponse;

                jsonData = {
                    vatNumber: vatResponse?.vatNumber || null,
                    is_valid: (vatResponse?.valid === 'true') ? true : false,
                    countryCode: vatResponse?.countryCode || null,
                    businessName: vatResponse?.name || null,
                    businessAddress: vatResponse?.address || null,
                };

            }

            const response = {
                country_name: vatNumberValidationResult.country_name,
                country_code: vatNumberValidationResult.country_code,
                vat_number: vatNumberValidationResult.tax_id,
                valid_format: vatNumberValidationResult.is_valid_format,
                valid_vat: jsonData?.is_valid || false,
                business_name: jsonData?.businessName || null,
                business_address: jsonData?.businessAddress || null
            };


            return Promise.resolve(response);


        } catch (error) {
            return Promise.reject({ message: (error as any)?.message || 'VIES VAT number validation failed.' });
        }

    }

}
