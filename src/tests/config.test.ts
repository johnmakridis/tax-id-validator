import { countries } from '../config';

describe('countries config', () => {

    const withRules = countries.filter((c) => c.tax && c.tax.length > 0);

    it('has at least one country with validation rules', () => {
        expect(withRules.length).toBeGreaterThan(0);
    });

    it('every ISO code is a unique, upper-case 2-letter string', () => {
        const codes = countries.map((c) => c.code);
        expect(new Set(codes).size).toBe(codes.length);
        for (const code of codes) {
            expect(code).toMatch(/^[A-Z]{2}$/);
        }
    });

    it('every country name is unique', () => {
        const names = countries.map((c) => c.name);
        expect(new Set(names).size).toBe(names.length);
    });

    describe.each(withRules.map((c) => [c.code, c] as const))('%s', (_code, country) => {

        for (const tax of country.tax) {

            describe(tax.enum, () => {

                it('has a non-empty enum, description and example', () => {
                    expect(tax.enum.length).toBeGreaterThan(0);
                    expect(tax.tax_id_description.length).toBeGreaterThan(0);
                    expect(tax.tax_id_description_country.length).toBeGreaterThan(0);
                    expect(tax.example.length).toBeGreaterThan(0);
                });

                it('has exactly one regex', () => {
                    expect(Array.isArray(tax.regex)).toBe(true);
                    expect(tax.regex.length).toBe(1);
                    expect(tax.regex[0]).toBeInstanceOf(RegExp);
                });

                it('regex matches its own example', () => {
                    expect(tax.regex[0].test(tax.example)).toBe(true);
                });

                it('regex is anchored (^...$) so partial matches are rejected', () => {
                    expect(tax.regex[0].source.startsWith('^')).toBe(true);
                    expect(tax.regex[0].source.endsWith('$')).toBe(true);
                });

                if (tax.vat_prefix) {
                    it('example starts with its own vat_prefix', () => {
                        expect(tax.example.toUpperCase().startsWith(tax.vat_prefix as string)).toBe(true);
                    });
                }

            });

        }

    });

    // enums are allowed to repeat *across* countries that share the same scheme (e.g. 'eu_vat'),
    // but must be unique *within* a single country's own tax[] array.
    it('every enum is unique within its own country', () => {
        for (const country of withRules) {
            const enums = country.tax.map((t) => t.enum);
            expect(new Set(enums).size).toBe(enums.length);
        }
    });

});
