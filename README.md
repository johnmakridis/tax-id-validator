# @johnmakridis/tax-id-validator

[![npm version](https://img.shields.io/npm/v/@johnmakridis/tax-id-validator.svg)](https://www.npmjs.com/package/@johnmakridis/tax-id-validator)
[![license](https://img.shields.io/npm/l/@johnmakridis/tax-id-validator.svg)](./LICENSE)
[![CI](https://github.com/johnmakridis/tax-id-validator/actions/workflows/ci.yml/badge.svg)](https://github.com/johnmakridis/tax-id-validator/actions/workflows/ci.yml)

Validate the **format** of tax identification numbers (VAT, GST, TIN, EIN, and similar) for **167 of 245 ISO countries and territories** (plus Northern Ireland's post-Brexit `XI` VAT jurisdiction), written in TypeScript with zero-config regex-based validation. Optionally cross-check EU VAT numbers live against the European Commission's [VIES](https://ec.europa.eu/taxation_customs/vies/) service.

## Install

```bash
npm install @johnmakridis/tax-id-validator
```

## Quick start

```ts
import { TaxIdNumberValidator } from '@johnmakridis/tax-id-validator';

const validator = new TaxIdNumberValidator();

const result = validator.validate({ country_code: 'DE', tax_id: 'DE123456789' });

console.log(result);
// {
//   country_name: 'Germany',
//   country_code: 'DE',
//   tax_prefix: 'DE',
//   tax_id: 'DE123456789',
//   is_valid_format: true
// }
```

CommonJS works the same way:

```js
const { TaxIdNumberValidator } = require('@johnmakridis/tax-id-validator');
```

## API

### `new TaxIdNumberValidator()`

Creates a validator instance and pre-computes the list of countries that currently have at least one working validation rule.

### `validate({ country_code, tax_id })`

Checks the structural format of a tax ID against the rule(s) registered for the given ISO 3166-1 alpha-2 `country_code`.

- Throws if the country code isn't supported, or has no validation rules.
- Throws if the country requires a fixed prefix (e.g. EU VAT numbers) and `tax_id` doesn't start with it.
- Returns a `ValidationResponse`:

  ```ts
  interface ValidationResponse {
      country_name: string;
      country_code: string;
      tax_prefix: string;   // e.g. 'DE' for EU VAT numbers, null otherwise
      tax_id: string;
      is_valid_format: boolean;
  }
  ```

### `getAllCountries()`

Returns every ISO country/territory the library knows about (245), including ones with no validation rules yet (`tax: null`).

### `getAvailableCountries()`

Returns only the countries that currently have at least one working validation rule (167).

### `getAvailableCountryNames()` / `getAvailableCountryCodes()`

Convenience lists of names / ISO codes for the countries returned by `getAvailableCountries()`.

### `getVIESData({ country_code, vat_number })`

For EU countries only: validates the format locally first, then calls the live [VIES](https://ec.europa.eu/taxation_customs/vies/) SOAP service to confirm the VAT number is actually registered, returning the registered business name and address when available.

```ts
const vies = await validator.getVIESData({ country_code: 'DE', vat_number: 'DE123456789' });
// {
//   country_name: 'Germany',
//   country_code: 'DE',
//   vat_number: '123456789',
//   valid_format: true,
//   valid_vat: true | false,
//   business_name: string | null,
//   business_address: string | null
// }
```

Rejects with `{ message: string }` on invalid input, invalid format, or if the VIES service itself is unreachable/errors.

## What "validation" means here

This library validates **structure only** — character set, length, literal prefixes/separators — via regular expressions. It does **not** verify checksums, and it does **not** confirm a number is actually registered with a tax authority (except `getVIESData`, which does a live lookup for EU VAT numbers specifically). A tax ID that matches the expected shape will report `is_valid_format: true` even if it was never issued.

## Supported countries

167 of the 245 ISO countries/territories are covered as of this release, spanning EU VAT numbers plus national VAT/GST/TIN/EIN-style identifiers (e.g. US EIN, UK VAT, India GST, Brazil CNPJ/CPF, Australia ABN, and many more). Countries without an independently documented tax ID format (e.g. uninhabited territories, or places without their own tax administration) are intentionally left unsupported rather than guessed. Run `getAllCountries()` / `getAvailableCountries()` to inspect the exact list and each entry's `tax_id_description` and `example` at runtime, or see [`src/config.ts`](./src/config.ts) for the full data set.

Note on the UK and Northern Ireland: since Brexit (01/01/2021), the EU's VIES service no longer checks `GB` VAT numbers at all — `getVIESData()` will reject them. The UK (`GB`) entry here still validates *format* only. Northern Ireland issues its own `XI`-prefixed VAT numbers under the EU protocol, which VIES *does* still check live — it's listed as its own entry (code `XI`) since it isn't its own ISO country.

## TypeScript

Type definitions are bundled — no `@types` package needed. See [`src/models/index.ts`](./src/models/index.ts) for `Country`, `ValidationResponse`, `VIESRequestBody`, and `VIESResponse`.

## License

MIT © [John Makridis](https://makridis.dev)
