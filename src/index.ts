import { countries } from './config';
import { Country, ValidationResponse } from './models';

export class TaxIdNumberValidator {

    public available_countries: Country[] = [];
    public available_countries_names: string[] = [];
    public available_countries_codes: string[] = [];

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

        if (country.tax.some((t) => t.vat_prefix && !t.vat_prefix.some((prefix) => params.tax_id.toUpperCase().startsWith(prefix))))
            throw new Error(`Invalid VAT number prefix for country '${params.country_code.toUpperCase()}'`);


        const isValid = country.tax
            .map((t) => t.regex)
            .map((r) => (r[0]).test(params.tax_id))
            .filter((result) => result === true)
            .length > 0 ? true : false;


        return {
            country_name: country.name,
            country_code: country.code,
            tax_id: params.tax_id,
            valid: isValid,
        };

    }



    private getAvailableCountries(): Country[] {

        const availableCountries = countries.filter((country) => country.tax?.length > 0 && country.tax.some((tax) => tax.regex.length > 0));
        return availableCountries;

    }

}
