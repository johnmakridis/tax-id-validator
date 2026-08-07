import axios from 'axios';
import { TaxIdNumberValidator } from '../index';

jest.mock('axios');

const mockedPost = axios.post as jest.MockedFunction<typeof axios.post>;

function soapEnvelope(body: string): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>${body}</soap:Body>
</soap:Envelope>`;
}

function checkVatResponseXml(opts: { countryCode: string; vatNumber: string; valid: boolean; name?: string; address?: string; }): string {
    return soapEnvelope(`
        <ns2:checkVatResponse xmlns:ns2="urn:ec.europa.eu:taxud:vies:services:checkVat:types">
            <ns2:countryCode>${opts.countryCode}</ns2:countryCode>
            <ns2:vatNumber>${opts.vatNumber}</ns2:vatNumber>
            <ns2:requestDate>2024-01-01+01:00</ns2:requestDate>
            <ns2:valid>${opts.valid}</ns2:valid>
            <ns2:name>${opts.name || '---'}</ns2:name>
            <ns2:address>${opts.address || '---'}</ns2:address>
        </ns2:checkVatResponse>
    `);
}

function faultXml(faultstring: string): string {
    return soapEnvelope(`
        <soap:Fault>
            <faultcode>soap:Server</faultcode>
            <faultstring>${faultstring}</faultstring>
        </soap:Fault>
    `);
}

describe('TaxIdNumberValidator.getVIESData', () => {

    const validator = new TaxIdNumberValidator();

    beforeEach(() => {
        mockedPost.mockReset();
    });

    it('rejects when country_code is missing, without calling VIES', async () => {
        await expect(validator.getVIESData({ country_code: '', vat_number: 'DE123456789' } as any))
            .rejects.toEqual({ message: 'Missing input: EU country code' });
        expect(mockedPost).not.toHaveBeenCalled();
    });

    it('rejects when vat_number is missing, without calling VIES', async () => {
        await expect(validator.getVIESData({ country_code: 'DE', vat_number: '' } as any))
            .rejects.toEqual({ message: 'Missing input: VAT Number' });
        expect(mockedPost).not.toHaveBeenCalled();
    });

    it('rejects a malformed VAT number locally, without calling VIES', async () => {
        await expect(validator.getVIESData({ country_code: 'DE', vat_number: 'DE12' }))
            .rejects.toEqual({ message: 'Invalid VAT Number format' });
        expect(mockedPost).not.toHaveBeenCalled();
    });

    it('rejects for a country with no VAT rules, without calling VIES', async () => {
        await expect(validator.getVIESData({ country_code: 'AQ', vat_number: '123456789' }))
            .rejects.toEqual({ message: 'Country AQ is not supported' });
        expect(mockedPost).not.toHaveBeenCalled();
    });

    it('strips the country prefix before sending the request to VIES', async () => {
        mockedPost.mockResolvedValueOnce({
            data: checkVatResponseXml({ countryCode: 'DE', vatNumber: '123456789', valid: true, name: 'Test GmbH', address: 'Test Str. 1' }),
        });

        await validator.getVIESData({ country_code: 'DE', vat_number: 'DE123456789' });

        expect(mockedPost).toHaveBeenCalledTimes(1);
        const [, requestBody] = mockedPost.mock.calls[0];
        expect(requestBody).toContain('<ns0:countryCode>DE</ns0:countryCode>');
        expect(requestBody).toContain('<ns0:vatNumber>123456789</ns0:vatNumber>');
    });

    it('resolves with the registered business details for a valid, registered VAT number', async () => {
        mockedPost.mockResolvedValueOnce({
            data: checkVatResponseXml({ countryCode: 'DE', vatNumber: '123456789', valid: true, name: 'Test GmbH', address: 'Test Str. 1' }),
        });

        const result = await validator.getVIESData({ country_code: 'DE', vat_number: 'DE123456789' });

        expect(result).toEqual({
            country_name: 'Germany',
            country_code: 'DE',
            vat_number: 'DE123456789',
            valid_format: true,
            valid_vat: true,
            business_name: 'Test GmbH',
            business_address: 'Test Str. 1',
        });
    });

    it('resolves with valid_vat: false for a correctly formatted but unregistered VAT number', async () => {
        mockedPost.mockResolvedValueOnce({
            data: checkVatResponseXml({ countryCode: 'DE', vatNumber: '000000000', valid: false }),
        });

        const result = await validator.getVIESData({ country_code: 'DE', vat_number: 'DE000000000' });

        expect(result.valid_vat).toBe(false);
        // VIES itself returns the literal placeholder '---' for unregistered numbers instead of an empty field.
        expect(result.business_name).toBe('---');
        expect(result.business_address).toBe('---');
    });

    it('rejects with the VIES fault message when the service returns a SOAP fault', async () => {
        mockedPost.mockResolvedValueOnce({ data: faultXml('MS_UNAVAILABLE') });

        await expect(validator.getVIESData({ country_code: 'DE', vat_number: 'DE123456789' }))
            .rejects.toEqual({ message: 'MS_UNAVAILABLE' });
    });

    it('rejects with a message when the HTTP request itself fails', async () => {
        mockedPost.mockRejectedValueOnce(new Error('network error'));

        await expect(validator.getVIESData({ country_code: 'DE', vat_number: 'DE123456789' }))
            .rejects.toEqual({ message: 'network error' });
    });

});
