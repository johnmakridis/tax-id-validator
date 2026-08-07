const TaxIdNumberValidator = require('./lib/index').TaxIdNumberValidator;

const validator = new TaxIdNumberValidator();

const result = validator.validate({ country_code: 'VN', tax_id: '1234567890' });
console.log(result);

// https://www.fonoa.com/blog/tax-number-formats-around-the-world