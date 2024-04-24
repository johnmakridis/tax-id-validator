const TaxIdNumberValidator = require('./lib/index').TaxIdNumberValidator;

const validator = new TaxIdNumberValidator();

const result = validator.validate({ country_code: 'CO', tax_id: '123456789-0' });
console.log(result);