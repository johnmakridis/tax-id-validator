const TaxIdNumberValidator = require('./lib/index').TaxIdNumberValidator;

const validator = new TaxIdNumberValidator();

const result = validator.validate({ country_code: 'CN', tax_id: '12345678901234567X' });
console.log(result);