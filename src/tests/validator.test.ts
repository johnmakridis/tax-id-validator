import { TaxIdNumberValidator } from '../index';

describe('TaxIdNumberValidator', () => {

    const validator = new TaxIdNumberValidator();

    describe('validate', () => {

        it('accepts a correctly formatted EU VAT number', () => {
            const result = validator.validate({ country_code: 'DE', tax_id: 'DE123456789' });
            expect(result).toEqual({
                country_name: 'Germany',
                country_code: 'DE',
                tax_prefix: 'DE',
                tax_id: 'DE123456789',
                is_valid_format: true,
            });
        });

        it('accepts a correctly formatted non-EU tax id', () => {
            const result = validator.validate({ country_code: 'us', tax_id: '12-3456789' });
            expect(result.country_code).toBe('US');
            expect(result.is_valid_format).toBe(true);
            expect(result.tax_prefix).toBeNull();
        });

        it('is case-insensitive on country_code', () => {
            const result = validator.validate({ country_code: 'de', tax_id: 'DE123456789' });
            expect(result.country_code).toBe('DE');
        });

        it('rejects a malformed tax id without throwing', () => {
            const result = validator.validate({ country_code: 'US', tax_id: 'not-an-ein' });
            expect(result.is_valid_format).toBe(false);
            expect(result.tax_prefix).toBeNull();
        });

        it('throws for an unsupported country code', () => {
            expect(() => validator.validate({ country_code: 'AQ', tax_id: '123' }))
                .toThrow('Country AQ is not supported');
        });

        it('throws for an unknown country code', () => {
            expect(() => validator.validate({ country_code: 'ZZ', tax_id: '123' }))
                .toThrow('Country ZZ is not supported');
        });

        it('throws when the tax id does not start with the required vat_prefix', () => {
            expect(() => validator.validate({ country_code: 'DE', tax_id: 'FR123456789' }))
                .toThrow("Invalid VAT number prefix for country 'DE'");
        });

        // Regression coverage for a country that mixes a prefixed EU VAT number with an
        // unprefixed local tax id (Spain: CIF has no prefix, EU VAT number is prefixed 'ES').
        // A blanket "every tax type needs this prefix" check previously made the unprefixed
        // CIF format unusable, and separately always reported the first entry's prefix
        // regardless of which format actually matched.
        describe('country with a mix of prefixed and unprefixed tax types (Spain)', () => {

            it('accepts the unprefixed local format without throwing', () => {
                const result = validator.validate({ country_code: 'ES', tax_id: 'A12345678' });
                expect(result.is_valid_format).toBe(true);
                expect(result.tax_prefix).toBeNull();
            });

            it('accepts the prefixed EU VAT format and reports its prefix', () => {
                const result = validator.validate({ country_code: 'ES', tax_id: 'ESA1234567Z' });
                expect(result.is_valid_format).toBe(true);
                expect(result.tax_prefix).toBe('ES');
            });

            it('rejects garbage input without throwing', () => {
                const result = validator.validate({ country_code: 'ES', tax_id: 'garbage' });
                expect(result.is_valid_format).toBe(false);
                expect(result.tax_prefix).toBeNull();
            });

        });

    });

    describe('country listings', () => {

        it('getAllCountries includes both supported and unsupported countries', () => {
            const all = validator.getAllCountries();
            const available = validator.getAvailableCountries();
            expect(all.length).toBeGreaterThan(available.length);
        });

        it('getAvailableCountries only returns countries with working rules', () => {
            const available = validator.getAvailableCountries();
            expect(available.length).toBeGreaterThan(0);
            for (const country of available) {
                expect(country.tax && country.tax.length > 0).toBe(true);
                expect(country.tax.some((t) => t.regex.length > 0)).toBe(true);
            }
        });

        it('getAvailableCountryNames/Codes match getAvailableCountries', () => {
            const available = validator.getAvailableCountries();
            expect(validator.getAvailableCountryNames()).toEqual(available.map((c) => c.name));
            expect(validator.getAvailableCountryCodes()).toEqual(available.map((c) => c.code));
        });

    });

});
