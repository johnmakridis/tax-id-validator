const TaxIdNumberValidator = require('./lib/index').TaxIdNumberValidator;

const validator = new TaxIdNumberValidator();

const result = validator.validate({ country_code: 'SA', tax_id: '398765432198765' });
console.log(result);