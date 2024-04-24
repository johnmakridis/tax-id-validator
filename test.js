const TaxIdNumberValidator = require('./lib/index').TaxIdNumberValidator;

const validator = new TaxIdNumberValidator();

const result = validator.validate({ country_code: 'PH', tax_id: '246801627387' });
console.log(result);