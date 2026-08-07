import { Country } from './models';

export const countries: Country[] = [
    {
        name: 'Afghanistan',
        code: 'AF',
        tax: [
            {
                vat_prefix: null,
                enum: 'af_tin',
                tax_id_description: 'Afghanistan Taxpayer Identification Number',
                tax_id_description_country: 'Afghanistan (Taxpayer Identification Number)',
                example: '1234567890',
                regex: [/^[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'Åland Islands',
        code: 'AX',
        tax: null
    },
    {
        name: 'Albania',
        code: 'AL',
        tax: [
            {
                vat_prefix: null,
                enum: 'al_tin',
                tax_id_description: 'Albania Tax Identification Number (NIPT)',
                tax_id_description_country: 'Albania (Tax Identification Number (NIPT))',
                example: 'J12345678N',
                regex: [/^[A-Z][0-9]{8}[A-Z]$/]
            }
        ]
    },
    {
        name: 'Algeria',
        code: 'DZ',
        tax: [
            {
                vat_prefix: null,
                enum: 'dz_nif',
                tax_id_description: 'Algeria NIF (Numero d\'Identification Fiscale)',
                tax_id_description_country: 'Algeria (NIF (Numero d\'Identification Fiscale))',
                example: '123456789012345',
                regex: [/^[0-9]{15}$/]
            }
        ]
    },
    {
        name: 'American Samoa',
        code: 'AS',
        tax: null
    },
    {
        name: 'Andorra',
        code: 'AD',
        tax: [
            {
                vat_prefix: null,
                enum: 'ad_nrt',
                tax_id_description: 'Andorra NRT (Numero de Registre Tributari)',
                tax_id_description_country: 'Andorra (NRT (Numero de Registre Tributari))',
                example: 'A-123456-Z',
                regex: [/^[A-Z]-[0-9]{6}-[A-Z]$/]
            }
        ]
    },
    {
        name: 'Angola',
        code: 'AO',
        tax: [
            {
                vat_prefix: null,
                enum: 'ao_tin',
                tax_id_description: 'Angola Tax Identification Number',
                tax_id_description_country: 'Angola (Tax Identification Number)',
                example: '5123456789',
                regex: [/^[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'Anguilla',
        code: 'AI',
        tax: [
            {
                vat_prefix: null,
                enum: 'ai_tin',
                tax_id_description: 'Anguilla Tax Identification Number',
                tax_id_description_country: 'Anguilla (Tax Identification Number)',
                example: '2123456789',
                regex: [/^[12][0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Antarctica',
        code: 'AQ',
        tax: null
    },
    {
        name: 'Antigua and Barbuda',
        code: 'AG',
        tax: null
    },
    {
        name: 'Argentina',
        code: 'AR',
        tax: [
            {
                vat_prefix: null,
                enum: 'ar_cuit',
                tax_id_description: 'Argentina Unique Tax Identification Code (AR CUIT)',
                tax_id_description_country: 'Argentina (Argentina Unique Tax Identification Code (AR CUIT))',
                example: '23234567892',
                regex: [/^(20|23|24|25|26|27)(\d{8})\d$/]
            }
        ]
    },
    {
        name: 'Armenia',
        code: 'AM',
        tax: [
            {
                vat_prefix: null,
                enum: 'am_tin',
                tax_id_description: 'Armenia Tax Identification Number',
                tax_id_description_country: 'Armenia (Tax Identification Number)',
                example: '02538904',
                regex: [/^[0-9]{8}$/]
            }
        ]
    },
    {
        name: 'Aruba',
        code: 'AW',
        tax: [
            {
                vat_prefix: null,
                enum: 'aw_tin',
                tax_id_description: 'Aruba Tax Identification Number',
                tax_id_description_country: 'Aruba (Tax Identification Number)',
                example: '12345678',
                regex: [/^[0-9]{8}$/]
            }
        ]
    },
    {
        name: 'Australia',
        code: 'AU',
        tax: [
            {
                vat_prefix: null,
                enum: 'au_abn',
                tax_id_description: 'Australian Business Number (AU ABN)',
                tax_id_description_country: 'Australia (Australian Business Number (AU ABN))',
                example: '12345678912',
                regex: [/^[0-9]{11}$/]
            }
        ]
    },
    {
        name: 'Austria',
        code: 'AT',
        tax: [
            {
                vat_prefix: 'AT',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Austria (European VAT number)',
                example: 'ATU12345678',
                regex: [/^(AT)?U[0-9]{8}$/]
            }
        ]
    },
    {
        name: 'Azerbaijan',
        code: 'AZ',
        tax: [
            {
                vat_prefix: null,
                enum: 'az_tin',
                tax_id_description: 'Azerbaijan Tax Identification Number (VOEN)',
                tax_id_description_country: 'Azerbaijan (Tax Identification Number (VOEN))',
                example: '0123456789',
                regex: [/^[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'Bahamas',
        code: 'BS',
        tax: [
            {
                vat_prefix: null,
                enum: 'bs_tin',
                tax_id_description: 'Bahamas Tax Identification Number',
                tax_id_description_country: 'Bahamas (Tax Identification Number)',
                example: '123456789',
                regex: [/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}$/]
            }
        ]
    },
    {
        name: 'Bahrain',
        code: 'BH',
        tax: [
            {
                vat_prefix: null,
                enum: 'bh_vat',
                tax_id_description: 'Bahrain VAT Number',
                tax_id_description_country: 'Bahrain (VAT Number)',
                example: '123456789012345',
                regex: [/^[0-9]{15}$/]
            }
        ]
    },
    {
        name: 'Bangladesh',
        code: 'BD',
        tax: [
            {
                vat_prefix: null,
                enum: 'bd_bin',
                tax_id_description: 'Bangladesh Business Identification Number (e-BIN)',
                tax_id_description_country: 'Bangladesh (Business Identification Number (e-BIN))',
                example: '1234567890123',
                regex: [/^[0-9]{13}$/]
            }
        ]
    },
    {
        name: 'Barbados',
        code: 'BB',
        tax: [
            {
                vat_prefix: null,
                enum: 'bb_tin',
                tax_id_description: 'Barbados Taxpayer Identification Number',
                tax_id_description_country: 'Barbados (Taxpayer Identification Number)',
                example: '1123456789012',
                regex: [/^1[0-9]{12}$/]
            }
        ]
    },
    {
        name: 'Belarus',
        code: 'BY',
        tax: [
            {
                vat_prefix: null,
                enum: 'by_tin',
                tax_id_description: 'Belarus Tax Identification Number (UNP)',
                tax_id_description_country: 'Belarus (Tax Identification Number (UNP))',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Belgium',
        code: 'BE',
        tax: [
            {
                vat_prefix: 'BE',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Belgium (European VAT number)',
                example: 'BE0123456789',
                regex: [/^(BE)?0[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Belize',
        code: 'BZ',
        tax: null
    },
    {
        name: 'Benin',
        code: 'BJ',
        tax: [
            {
                vat_prefix: null,
                enum: 'bj_ifu',
                tax_id_description: 'Benin IFU (Identifiant Fiscal Unique)',
                tax_id_description_country: 'Benin (IFU (Identifiant Fiscal Unique))',
                example: '1234567890123',
                regex: [/^[0-9]{13}$/]
            }
        ]
    },
    {
        name: 'Bermuda',
        code: 'BM',
        tax: null
    },
    {
        name: 'Bhutan',
        code: 'BT',
        tax: null
    },
    {
        name: 'Bolivia',
        code: 'BO',
        tax: [
            {
                vat_prefix: null,
                enum: 'bo_tin',
                tax_id_description: 'Bolivia NIT (Numero de Identificacion Tributaria)',
                tax_id_description_country: 'Bolivia (NIT (Numero de Identificacion Tributaria))',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Bosnia and Herzegovina',
        code: 'BA',
        tax: [
            {
                vat_prefix: null,
                enum: 'ba_tin',
                tax_id_description: 'Bosnia and Herzegovina JIB (Unique Identification Number)',
                tax_id_description_country: 'Bosnia and Herzegovina (JIB (Unique Identification Number))',
                example: '1234567890123',
                regex: [/^[0-9]{13}$/]
            }
        ]
    },
    {
        name: 'Botswana',
        code: 'BW',
        tax: null
    },
    {
        name: 'Bouvet Island',
        code: 'BV',
        tax: null
    },
    {
        name: 'Brazil',
        code: 'BR',
        tax: [
            {
                vat_prefix: null,
                enum: 'br_cnpj',
                tax_id_description: 'Brazilian CNPJ number',
                tax_id_description_country: 'Brazil (Brazilian CNPJ number)',
                example: '01.234.456/5432-10',
                regex: [/^[0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2}$/]
            },
            {
                vat_prefix: null,
                enum: 'br_cpf',
                tax_id_description: 'Brazilian CPF number',
                tax_id_description_country: 'Brazil (Brazilian CPF number)',
                example: '123.456.789-87',
                regex: [/^([-\.\s]?(\d{3})){3}[-\.\s]?(\d{2})$/]
            }
        ]
    },
    {
        name: 'British Indian Ocean Territory',
        code: 'IO',
        tax: null
    },
    {
        name: 'Brunei Darussalam',
        code: 'BN',
        tax: [
            {
                vat_prefix: null,
                enum: 'bn_rc',
                tax_id_description: 'Brunei Company Registration Number',
                tax_id_description_country: 'Brunei Darussalam (Company Registration Number)',
                example: 'RC12345678',
                regex: [/^RC[0-9]{8}$/]
            },
            {
                vat_prefix: null,
                enum: 'bn_p',
                tax_id_description: 'Brunei Business Names Registration Number',
                tax_id_description_country: 'Brunei Darussalam (Sole Proprietorship/Partnership Registration Number)',
                example: 'P12345678',
                regex: [/^P[0-9]{8}$/]
            }
        ]
    },
    {
        name: 'Bulgaria',
        code: 'BG',
        tax: [
            {
                vat_prefix: 'BG',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Bulgaria (European VAT number)',
                example: 'BG0123456789',
                regex: [/^(BG)[0-9]{9,10}$/]
            }
        ]
    },
    {
        name: 'Burkina Faso',
        code: 'BF',
        tax: [
            {
                vat_prefix: null,
                enum: 'bf_ifu',
                tax_id_description: 'Burkina Faso Identifiant Financier Unique',
                tax_id_description_country: 'Burkina Faso (Identifiant Financier Unique)',
                example: '12345678A',
                regex: [/^[0-9]{8}[A-Z]$/]
            }
        ]
    },
    {
        name: 'Burundi',
        code: 'BI',
        tax: [
            {
                vat_prefix: null,
                enum: 'bi_nif',
                tax_id_description: 'Burundi Numéro d\'Identification Fiscale',
                tax_id_description_country: 'Burundi (Numéro d\'Identification Fiscale)',
                example: '6217884709',
                regex: [/^[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'Cambodia',
        code: 'KH',
        tax: [
            {
                vat_prefix: null,
                enum: 'kh_tin',
                tax_id_description: 'Cambodia Tax Identification Number',
                tax_id_description_country: 'Cambodia (Tax Identification Number)',
                example: '1001-123456789',
                regex: [/^[0-9]{4}-[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Cameroon',
        code: 'CM',
        tax: [
            {
                vat_prefix: null,
                enum: 'cm_niu',
                tax_id_description: 'Cameroon Numéro d\'Identifiant fiscal Unique',
                tax_id_description_country: 'Cameroon (Numéro d\'Identifiant fiscal Unique)',
                example: 'M123456789000L',
                regex: [/^[A-Z][0-9]{12}[A-Z]$/]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        tax: [
            {
                vat_prefix: null,
                enum: 'ca_bn',
                tax_id_description: 'Canadian BN',
                tax_id_description_country: 'Canada (Canadian BN)',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            },
            {
                vat_prefix: null,
                enum: 'ca_qst',
                tax_id_description: 'Canadian QST number',
                tax_id_description_country: 'Canada (Canadian QST number)',
                example: '1234567890TQ1234',
                regex: [/^[0-9]{10}(TQ)[0-9]{4}$/]
            }
        ]
    },
    {
        name: 'Cape Verde',
        code: 'CV',
        tax: [
            {
                vat_prefix: null,
                enum: 'cv_nif',
                tax_id_description: 'Cape Verde Número de Identificação Fiscal',
                tax_id_description_country: 'Cape Verde (Número de Identificação Fiscal)',
                example: '213456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Cayman Islands',
        code: 'KY',
        tax: null
    },
    {
        name: 'Central African Republic',
        code: 'CF',
        tax: null
    },
    {
        name: 'Chad',
        code: 'TD',
        tax: null
    },
    {
        name: 'Chile',
        code: 'CL',
        tax: [
            {
                vat_prefix: null,
                enum: 'cl_tin',
                tax_id_description: 'Chilean TIN',
                tax_id_description_country: 'Chile (Chilean TIN)',
                example: '12.345.678-K',
                regex: [/^(\d{1,3}(?:\.\d{1,3}){2}-[\dK])$/]
            }
        ]
    },
    {
        name: 'China',
        code: 'CN',
        tax: [
            {
                vat_prefix: null,
                enum: 'cn_ussc',
                tax_id_description: 'Chinese Uniform Social Credit Code (USSC) [Business]',
                tax_id_description_country: 'China (Chinese Uniform Social Credit Code (USSC))',
                example: '12345678901234567X',
                regex: [/^\d{17}[\dxX]$/]
            },
            {
                vat_prefix: null,
                enum: 'cn_tin',
                tax_id_description: 'Chinese National ID number [Individuals]',
                tax_id_description_country: 'China (National ID number [Individuals])',
                example: '123456789012345678',
                regex: [/^\d{17}[\dxX]$/]
            }
        ]
    },
    {
        name: 'Christmas Island',
        code: 'CX',
        tax: null
    },
    {
        name: 'Cocos (Keeling) Islands',
        code: 'CC',
        tax: null
    },
    {
        name: 'Colombia',
        code: 'CO',
        tax: [
            {
                vat_prefix: null,
                enum: 'co_tin_b',
                tax_id_description: 'Colombian TIN Business',
                tax_id_description_country: 'Colombia (Colombian TIN Business)',
                example: '123456789-0',
                regex: [/^\d{9}-\d$/]
            },
            {
                vat_prefix: null,
                enum: 'co_tin_i',
                tax_id_description: 'Colombian TIN Individual',
                tax_id_description_country: 'Colombia (Colombian TIN Individual)',
                example: '12345678-9',
                regex: [/^\d{8}-\d$/]
            }
        ]
    },
    {
        name: 'Comoros',
        code: 'KM',
        tax: null
    },
    {
        name: 'Congo',
        code: 'CG',
        tax: null
    },
    {
        name: 'Congo, The Democratic Republic of the',
        code: 'CD',
        tax: [
            {
                vat_prefix: null,
                enum: 'cd_nif',
                tax_id_description: 'DR Congo Número de Identificação Fiscal',
                tax_id_description_country: 'Congo, The Democratic Republic of the (Número de Identificação Fiscal)',
                example: 'A0123456M',
                regex: [/^[A-Z][0-9]{7}[A-Z]$/]
            }
        ]
    },
    {
        name: 'Cook Islands',
        code: 'CK',
        tax: [
            {
                vat_prefix: null,
                enum: 'ck_tin',
                tax_id_description: 'Cook Islands Tax Identification Number',
                tax_id_description_country: 'Cook Islands (Tax Identification Number)',
                example: '12345',
                regex: [/^[0-9]{5}$/]
            }
        ]
    },
    {
        name: 'Costa Rica',
        code: 'CR',
        tax: [
            {
                vat_prefix: null,
                enum: 'cr_tin',
                tax_id_description: 'Costa Rica Tax Identification Number (Cédula Jurídica/Física)',
                tax_id_description_country: 'Costa Rica (Tax Identification Number)',
                example: '1-234-567890',
                regex: [/^[0-9]-[0-9]{3}-[0-9]{6}$/]
            }
        ]
    },
    {
        name: 'Cote D\'Ivoire',
        code: 'CI',
        tax: [
            {
                vat_prefix: null,
                enum: 'ci_ncc',
                tax_id_description: 'Cote D\'Ivoire Numéro de Compte Contribuable',
                tax_id_description_country: 'Cote D\'Ivoire (Numéro de Compte Contribuable)',
                example: '9500015F',
                regex: [/^[0-9]{7}[A-Z]$/]
            }
        ]
    },
    {
        name: 'Croatia',
        code: 'HR',
        tax: [
            {
                vat_prefix: 'HR',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Croatia (European VAT number)',
                example: 'HR12345678912',
                regex: [/^(HR)[0-9]{11}$/]
            }
        ]
    },
    {
        name: 'Cuba',
        code: 'CU',
        tax: null
    },
    {
        name: 'Cyprus',
        code: 'CY',
        tax: [
            {
                vat_prefix: 'CY',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Cyprus (European VAT number)',
                example: 'CY12345678Z',
                regex: [/^(CY)[0-9]{8}([A-Z])$/]
            }
        ]
    },
    {
        name: 'Czech Republic',
        code: 'CZ',
        tax: [
            {
                vat_prefix: 'CZ',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Czech Republic (European VAT number)',
                example: 'CZ1234567890',
                regex: [/^(CZ)[0-9]{8,10}$/]
            }
        ]
    },
    {
        name: 'Denmark',
        code: 'DK',
        tax: [
            {
                vat_prefix: 'DK',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Denmark (European VAT number)',
                example: 'DK12345678',
                regex: [/^(DK)[0-9]{8}$/]
            }
        ]
    },
    {
        name: 'Djibouti',
        code: 'DJ',
        tax: null
    },
    {
        name: 'Dominica',
        code: 'DM',
        tax: [
            {
                vat_prefix: null,
                enum: 'dm_tin',
                tax_id_description: 'Dominica Tax Identification Number',
                tax_id_description_country: 'Dominica (Tax Identification Number)',
                example: '1234567',
                regex: [/^[0-9]{7}$/]
            }
        ]
    },
    {
        name: 'Dominican Republic',
        code: 'DO',
        tax: [
            {
                vat_prefix: null,
                enum: 'do_rcn',
                tax_id_description: 'Dominican Republic RNC/RCN number',
                tax_id_description_country: 'Dominican Republic (RNC/RCN number)',
                example: '123-4567890-1',
                regex: [/^[0-9]{3}-[0-9]{7}-[0-9]$/]
            }
        ]
    },
    {
        name: 'Ecuador',
        code: 'EC',
        tax: [
            {
                vat_prefix: null,
                enum: 'ec_ruc',
                tax_id_description: 'Ecuadorian RUC number',
                tax_id_description_country: 'Ecuador (RUC number)',
                example: '1234567890001',
                regex: [/^[0-9]{13}$/]
            }
        ]
    },
    {
        name: 'Egypt',
        code: 'EG',
        tax: [
            {
                vat_prefix: null,
                enum: 'eg_tin',
                tax_id_description: 'Egyptian Tax Identification Number',
                tax_id_description_country: 'Egypt (Tax Identification Number)',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'El Salvador',
        code: 'SV',
        tax: [
            {
                vat_prefix: null,
                enum: 'sv_nit',
                tax_id_description: 'Salvadoran NIT number',
                tax_id_description_country: 'El Salvador (NIT number)',
                example: '1234-567890-123-4',
                regex: [/^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]$/]
            }
        ]
    },
    {
        name: 'Equatorial Guinea',
        code: 'GQ',
        tax: null
    },
    {
        name: 'Eritrea',
        code: 'ER',
        tax: null
    },
    {
        name: 'Estonia',
        code: 'EE',
        tax: [
            {
                vat_prefix: 'EE',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Estonia (European VAT number)',
                example: 'EE123456789',
                regex: [/^(EE)[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Ethiopia',
        code: 'ET',
        tax: [
            {
                vat_prefix: null,
                enum: 'et_tin',
                tax_id_description: 'Ethiopia Tax Identification Number',
                tax_id_description_country: 'Ethiopia (Tax Identification Number)',
                example: '1234567890',
                regex: [/^[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'Falkland Islands (Malvinas)',
        code: 'FK',
        tax: null
    },
    {
        name: 'Faroe Islands',
        code: 'FO',
        tax: [
            {
                vat_prefix: 'FO',
                enum: 'fo_vat',
                tax_id_description: 'Faroe Islands VAT number (V-tal)',
                tax_id_description_country: 'Faroe Islands (VAT number)',
                example: 'FO123456',
                regex: [/^(FO)?[0-9]{6}$/]
            }
        ]
    },
    {
        name: 'Fiji',
        code: 'FJ',
        tax: [
            {
                vat_prefix: null,
                enum: 'fj_tin',
                tax_id_description: 'Fiji Taxpayer Identification Number',
                tax_id_description_country: 'Fiji (Taxpayer Identification Number)',
                example: '2912345678',
                regex: [/^29[0-9]{8}$/]
            }
        ]
    },
    {
        name: 'Finland',
        code: 'FI',
        tax: [
            {
                vat_prefix: 'FI',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Finland (European VAT number)',
                example: 'FI12345678',
                regex: [/^(FI)[0-9]{8}$/]
            }
        ]
    },
    {
        name: 'France',
        code: 'FR',
        tax: [
            {
                vat_prefix: 'FR',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'France (European VAT number)',
                example: 'FRAB123456789',
                regex: [/^(FR)[0-9A-Z]{2}[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'French Guiana',
        code: 'GF',
        tax: null
    },
    {
        name: 'French Polynesia',
        code: 'PF',
        tax: null
    },
    {
        name: 'French Southern Territories',
        code: 'TF',
        tax: null
    },
    {
        name: 'Gabon',
        code: 'GA',
        tax: [
            {
                vat_prefix: null,
                enum: 'ga_nif',
                tax_id_description: 'Gabon Numéro d\'Identification Fiscale',
                tax_id_description_country: 'Gabon (NIF number)',
                example: '1234567890123',
                regex: [/^[0-9]{13}$/]
            }
        ]
    },
    {
        name: 'Gambia',
        code: 'GM',
        tax: [
            {
                vat_prefix: null,
                enum: 'gm_tin',
                tax_id_description: 'Gambia Taxpayer Identification Number',
                tax_id_description_country: 'Gambia (Taxpayer Identification Number)',
                example: '1234567890',
                regex: [/^[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'Georgia',
        code: 'GE',
        tax: [
            {
                vat_prefix: null,
                enum: 'ge_vat',
                tax_id_description: 'Georgian VAT/Tax Identification Number (legal entities)',
                tax_id_description_country: 'Georgia (VAT/Tax ID, business)',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            },
            {
                vat_prefix: null,
                enum: 'ge_tin_i',
                tax_id_description: 'Georgian personal number (used as individual TIN)',
                tax_id_description_country: 'Georgia (Tax ID, individual)',
                example: '12345678901',
                regex: [/^[0-9]{11}$/]
            }
        ]
    },
    {
        name: 'Germany',
        code: 'DE',
        tax: [
            {
                vat_prefix: 'DE',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Germany (European VAT number)',
                example: 'DE123456789',
                regex: [/^(DE)[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Ghana',
        code: 'GH',
        tax: [
            {
                vat_prefix: null,
                enum: 'gh_tin_i',
                tax_id_description: 'Ghana Card Personal Identification Number (individual TIN)',
                tax_id_description_country: 'Ghana (Ghana Card PIN, individual)',
                example: 'GHA-123456789-1',
                regex: [/^GHA-[0-9]{9}-[0-9]$/]
            },
            {
                vat_prefix: null,
                enum: 'gh_tin_b',
                tax_id_description: 'Ghana Revenue Authority business Taxpayer Identification Number',
                tax_id_description_country: 'Ghana (business TIN)',
                example: 'C0012345678',
                regex: [/^[CGQV][0-9A-Z]{10}$/]
            }
        ]
    },
    {
        name: 'Gibraltar',
        code: 'GI',
        tax: [
            {
                vat_prefix: null,
                enum: 'gi_tin',
                tax_id_description: 'Gibraltar Tax Identification Number',
                tax_id_description_country: 'Gibraltar (Tax Identification Number)',
                example: '12345',
                regex: [/^[0-9]{5}$/]
            }
        ]
    },
    {
        name: 'Greece',
        code: 'GR',
        tax: [
            {
                vat_prefix: 'EL',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Greece (European VAT number)',
                example: 'EL123456789',
                regex: [/^(EL|GR)[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Greenland',
        code: 'GL',
        tax: null
    },
    {
        name: 'Grenada',
        code: 'GD',
        tax: [
            {
                vat_prefix: null,
                enum: 'gd_tin',
                tax_id_description: 'Grenada Taxpayer Identification Number',
                tax_id_description_country: 'Grenada (Taxpayer Identification Number)',
                example: '1200000001',
                regex: [/^12[0-9]{8}$/]
            }
        ]
    },
    {
        name: 'Guadeloupe',
        code: 'GP',
        tax: null
    },
    {
        name: 'Guam',
        code: 'GU',
        tax: null
    },
    {
        name: 'Guatemala',
        code: 'GT',
        tax: [
            {
                vat_prefix: null,
                enum: 'gt_nit',
                tax_id_description: 'Guatemala Número de Identificación Tributaria (NIT)',
                tax_id_description_country: 'Guatemala (NIT number)',
                example: '12345678-9',
                regex: [/^[0-9]{1,11}-[0-9K]$/]
            }
        ]
    },
    {
        name: 'Guernsey',
        code: 'GG',
        tax: [
            {
                vat_prefix: null,
                enum: 'gg_crn',
                tax_id_description: 'Guernsey Company Registration Number',
                tax_id_description_country: 'Guernsey (Company Registration Number)',
                example: '123456',
                regex: [/^[0-9]{1,6}$/]
            },
            {
                vat_prefix: null,
                enum: 'gg_tin',
                tax_id_description: 'Guernsey Tax Reference Number (non-locally-incorporated companies)',
                tax_id_description_country: 'Guernsey (Tax Reference Number)',
                example: '1C123456/O',
                regex: [/^[0-9][A-Z][0-9]{6}(\/[A-Z])?$/]
            }
        ]
    },
    {
        name: 'Guinea',
        code: 'GN',
        tax: [
            {
                vat_prefix: null,
                enum: 'gn_nif',
                tax_id_description: 'Guinea Numéro d\'Identification Fiscale',
                tax_id_description_country: 'Guinea (NIF number)',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Guinea-Bissau',
        code: 'GW',
        tax: [
            {
                vat_prefix: null,
                enum: 'gw_nif',
                tax_id_description: 'Guinea-Bissau Número de Identificação Fiscal (NIF)',
                tax_id_description_country: 'Guinea-Bissau (Número de Identificação Fiscal (NIF))',
                example: '510025439',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Guyana',
        code: 'GY',
        tax: null
    },
    {
        name: 'Haiti',
        code: 'HT',
        tax: [
            {
                vat_prefix: null,
                enum: 'ht_nif',
                tax_id_description: 'Haitian Numéro d\'Identification Fiscale (NIF / matricule fiscale)',
                tax_id_description_country: 'Haiti (Numéro d\'Identification Fiscale (NIF / matricule fiscale))',
                example: '1234567890',
                regex: [/^[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'Heard Island and Mcdonald Islands',
        code: 'HM',
        tax: null
    },
    {
        name: 'Holy See (Vatican City State)',
        code: 'VA',
        tax: null
    },
    {
        name: 'Honduras',
        code: 'HN',
        tax: [
            {
                vat_prefix: null,
                enum: 'hn_rtn',
                tax_id_description: 'Honduran Registro Tributario Nacional (RTN)',
                tax_id_description_country: 'Honduras (Registro Tributario Nacional (RTN))',
                example: '12345678901234',
                regex: [/^[0-9]{14}$/]
            }
        ]
    },
    {
        name: 'Hong Kong',
        code: 'HK',
        tax: [
            {
                vat_prefix: null,
                enum: 'hk_br',
                tax_id_description: 'Hong Kong BR number',
                tax_id_description_country: 'Hong Kong (Hong Kong BR number)',
                example: '12345678',
                regex: [/^[0-9]{8}$/]
            }
        ]
    },
    {
        name: 'Hungary',
        code: 'HU',
        tax: [
            {
                vat_prefix: 'HU',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Hungary (European VAT number)',
                example: 'HU12345678912',
                regex: [/^(HU)[0-9]{8,11}$/]
            }
        ]
    },
    {
        name: 'Iceland',
        code: 'IS',
        tax: [
            {
                vat_prefix: null,
                enum: 'is_vat',
                tax_id_description: 'Icelandic VAT number (VSK number)',
                tax_id_description_country: 'Iceland (Icelandic VAT number (VSK number))',
                example: '123456',
                regex: [/^[0-9]{5,6}$/]
            }
        ]
    },
    {
        name: 'India',
        code: 'IN',
        tax: [
            {
                vat_prefix: null,
                enum: 'in_gst',
                tax_id_description: 'Indian GST number',
                tax_id_description_country: 'India (Indian GST number)',
                example: '12ABCDE3456FGZH',
                regex: [/^([0][1-9]|[1-2][0-9]|[3][0-7])([A-Z]{5})([0-9]{4})([A-Z]{1}[1-9A-Z]{1})([Z]{1})([0-9A-Z]{1})+$/]
            }
        ]
    },
    {
        name: 'Indonesia',
        code: 'ID',
        tax: [
            {
                vat_prefix: null,
                enum: 'id_npwp',
                tax_id_description: 'Indonesian NPWP number',
                tax_id_description_country: 'Indonesia (Indonesian NPWP number)',
                example: '12.345.678.9-012.345',
                regex: [/^(\d{2})[\.](\d{3})[\.](\d{3})[\.](\d{1})[\-](\d{3})[\.](\d{3})$/]
            }
        ]
    },
    {
        name: 'Iran, Islamic Republic Of',
        code: 'IR',
        tax: [
            {
                vat_prefix: null,
                enum: 'ir_id',
                tax_id_description: 'Iranian national ID number (Kod-e Melli), used as tax ID for individuals',
                tax_id_description_country: 'Iran (Iranian national ID number (Kod-e Melli), used as tax ID for individuals)',
                example: '001-234567-8',
                regex: [/^[0-9]{3}-?[0-9]{6}-?[0-9]{1}$/]
            },
            {
                vat_prefix: null,
                enum: 'ir_legal',
                tax_id_description: 'Iranian legal entity national ID / economic code (Shenase Melli)',
                tax_id_description_country: 'Iran (Iranian legal entity national ID / economic code (Shenase Melli))',
                example: '10861234561',
                regex: [/^[0-9]{11}$/]
            }
        ]
    },
    {
        name: 'Iraq',
        code: 'IQ',
        tax: null
    },
    {
        name: 'Ireland',
        code: 'IE',
        tax: [
            {
                vat_prefix: 'IE',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Ireland (European VAT number)',
                example: 'IE1234567AB',
                regex: [/^(IE)[0-9][0-9A-Z\+\*][0-9]{5}[A-Z]{1,2}$/]
            }
        ]
    },
    {
        name: 'Isle of Man',
        code: 'IM',
        tax: [
            {
                vat_prefix: 'GB',
                enum: 'im_vat',
                tax_id_description: 'Isle of Man VAT registration number',
                tax_id_description_country: 'Isle of Man (Isle of Man VAT registration number)',
                example: 'GB001234567',
                regex: [/^(GB)?00[0-9]{7}$/]
            }
        ]
    },
    {
        name: 'Israel',
        code: 'IL',
        tax: [
            {
                vat_prefix: null,
                enum: 'il_vat',
                tax_id_description: 'Israel VAT number',
                tax_id_description_country: 'Israel (VAT number)',
                example: '246801357',
                regex: [/^\d{9}$/]
            }
        ]
    },
    {
        name: 'Italy',
        code: 'IT',
        tax: [
            {
                vat_prefix: 'IT',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Italy (European VAT number)',
                example: 'IT12345678912',
                regex: [/^(IT)[0-9]{11}$/]
            }
        ]
    },
    {
        name: 'Jamaica',
        code: 'JM',
        tax: [
            {
                vat_prefix: null,
                enum: 'jm_trn',
                tax_id_description: 'Jamaica Taxpayer Registration Number (TRN)',
                tax_id_description_country: 'Jamaica (Taxpayer Registration Number (TRN))',
                example: '123-456-789',
                regex: [/^[0-9]{3}-?[0-9]{3}-?[0-9]{3}$/]
            }
        ]
    },
    {
        name: 'Japan',
        code: 'JP',
        tax: [
            {
                vat_prefix: null,
                enum: 'jp_cn',
                tax_id_description: 'Japanese Corporate Number (Hōjin Bangō)',
                tax_id_description_country: 'Japan (Japanese Corporate Number (Hōjin Bangō))',
                example: '1234567891234',
                regex: [/^[0-9]{13}$/]
            }
        ]
    },
    {
        name: 'Jersey',
        code: 'JE',
        tax: null
    },
    {
        name: 'Jordan',
        code: 'JO',
        tax: null
    },
    {
        name: 'Kazakhstan',
        code: 'KZ',
        tax: [
            {
                vat_prefix: null,
                enum: 'kz_bin',
                tax_id_description: 'Kazakhstan Business Identification Number (BIN)',
                tax_id_description_country: 'Kazakhstan (Business Identification Number (BIN))',
                example: '123456789012',
                regex: [/^[0-9]{12}$/]
            }
        ]
    },
    {
        name: 'Kenya',
        code: 'KE',
        tax: [
            {
                vat_prefix: null,
                enum: 'ke_pin',
                tax_id_description: 'Kenya Revenue Authority Personal Identification Number (PIN)',
                tax_id_description_country: 'Kenya (Kenya Revenue Authority Personal Identification Number (PIN))',
                example: 'P000111111A',
                regex: [/^[A-Z][0-9]{9}[A-Z]$/]
            }
        ]
    },
    {
        name: 'Kiribati',
        code: 'KI',
        tax: null
    },
    {
        name: 'Korea, Democratic People\'S Republic of',
        code: 'KP',
        tax: null
    },
    {
        name: 'Korea, Republic of',
        code: 'KR',
        tax: [
            {
                vat_prefix: null,
                enum: 'kr_brn',
                tax_id_description: 'Korean BRN',
                tax_id_description_country: 'Korea, Republic of (Korean BRN)',
                example: '123-45-67890',
                regex: [/^[0-9]{3}[\-][0-9]{2}[\-][0-9]{5}$/]
            }
        ]
    },
    {
        name: 'Kuwait',
        code: 'KW',
        tax: [
            {
                vat_prefix: null,
                enum: 'kw_tin',
                tax_id_description: 'Kuwait Tax Identification Number (entity TIN)',
                tax_id_description_country: 'Kuwait (Tax Identification Number (entity TIN))',
                example: '123456',
                regex: [/^[0-9]{6}$/]
            }
        ]
    },
    {
        name: 'Kyrgyzstan',
        code: 'KG',
        tax: [
            {
                vat_prefix: null,
                enum: 'kg_inn',
                tax_id_description: 'Kyrgyzstan Taxpayer Identification Number (INN)',
                tax_id_description_country: 'Kyrgyzstan (Taxpayer Identification Number (INN))',
                example: '12345678901234',
                regex: [/^[0-9]{14}$/]
            }
        ]
    },
    {
        name: 'Lao People\'S Democratic Republic',
        code: 'LA',
        tax: [
            {
                vat_prefix: null,
                enum: 'la_tin',
                tax_id_description: 'Laos Tax Identification Number (TIN)',
                tax_id_description_country: 'Laos (Tax Identification Number (TIN))',
                example: '123456789-000',
                regex: [/^[0-9]{9}-[0-9]{3}$/]
            }
        ]
    },
    {
        name: 'Latvia',
        code: 'LV',
        tax: [
            {
                vat_prefix: 'LV',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Latvia (European VAT number)',
                example: 'LV12345678912',
                regex: [/^(LV)[0-9]{11}$/]
            }
        ]
    },
    {
        name: 'Lebanon',
        code: 'LB',
        tax: [
            {
                vat_prefix: null,
                enum: 'lb_tin',
                tax_id_description: 'Lebanon Tax Identification Number / VAT number',
                tax_id_description_country: 'Lebanon (Tax Identification Number / VAT number)',
                example: '22-987654321-601',
                regex: [/^[0-9]{2}-[0-9]{9}-[0-9]{3}$/]
            }
        ]
    },
    {
        name: 'Lesotho',
        code: 'LS',
        tax: [
            {
                vat_prefix: null,
                enum: 'ls_tin',
                tax_id_description: 'Lesotho Tax Identification Number (TIN)',
                tax_id_description_country: 'Lesotho (Tax Identification Number (TIN))',
                example: '12345678',
                regex: [/^[0-9]{8}$/]
            }
        ]
    },
    {
        name: 'Liberia',
        code: 'LR',
        tax: [
            {
                vat_prefix: null,
                enum: 'lr_tin',
                tax_id_description: 'Liberia Taxpayer Identification Number (TIN)',
                tax_id_description_country: 'Liberia (Taxpayer Identification Number (TIN))',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Libyan Arab Jamahiriya',
        code: 'LY',
        tax: null
    },
    {
        name: 'Liechtenstein',
        code: 'LI',
        tax: [
            {
                vat_prefix: null,
                enum: 'li_uid',
                tax_id_description: 'Liechtensteinian UID number',
                tax_id_description_country: 'Liechtenstein (Liechtensteinian UID number)',
                example: 'CHE123456789',
                regex: [/^(CHE)[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Lithuania',
        code: 'LT',
        tax: [
            {
                vat_prefix: 'LT',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Lithuania (European VAT number)',
                example: 'LT123456789123',
                regex: [/^(LT)?([0-9]{9}|[0-9]{12})$/]
            }
        ]
    },
    {
        name: 'Luxembourg',
        code: 'LU',
        tax: [
            {
                vat_prefix: 'LU',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Luxembourg (European VAT number)',
                example: 'LU12345678',
                regex: [/^(LU)[0-9]{8}$/]
            }
        ]
    },
    {
        name: 'Macao',
        code: 'MO',
        tax: [
            {
                vat_prefix: null,
                enum: 'mo_tin',
                tax_id_description: 'Macao Taxpayer Number (entities, industrial and profits tax)',
                tax_id_description_country: 'Macao (Macao Taxpayer Number)',
                example: '80123456',
                regex: [/^8[0-9]{7}$/]
            }
        ]
    },
    {
        name: 'Madagascar',
        code: 'MG',
        tax: [
            {
                vat_prefix: null,
                enum: 'mg_nif',
                tax_id_description: 'Madagascar Tax Identification Number (NIF)',
                tax_id_description_country: 'Madagascar (Madagascar Tax Identification Number (NIF))',
                example: '1234567890',
                regex: [/^[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'Malawi',
        code: 'MW',
        tax: [
            {
                vat_prefix: null,
                enum: 'mw_tpin',
                tax_id_description: 'Malawi Taxpayer Identification Number (TPIN)',
                tax_id_description_country: 'Malawi (Malawi Taxpayer Identification Number (TPIN))',
                example: '2012345678',
                regex: [/^[12][0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Malaysia',
        code: 'MY',
        tax: [
            {
                vat_prefix: null,
                enum: 'my_frp',
                tax_id_description: 'Malaysian FRP number',
                tax_id_description_country: 'Malaysia (Malaysian FRP number)',
                example: '12345678',
                regex: [/^[0-9]{8}$/]
            },
            {
                vat_prefix: null,
                enum: 'my_itn',
                tax_id_description: 'Malaysian ITN',
                tax_id_description_country: 'Malaysia (Malaysian ITN)',
                example: 'C 1234567890',
                regex: [/^(C)[\s][0-9]{10}$/]
            },
            {
                vat_prefix: null,
                enum: 'my_sst',
                tax_id_description: 'Malaysian SST number',
                tax_id_description_country: 'Malaysia (Malaysian SST number)',
                example: 'A12-3456-78912345',
                regex: [/^([A-Z])[0-9]{2}[\-][0-9]{4}[\-][0-9]{8}$/]
            }
        ]
    },
    {
        name: 'Maldives',
        code: 'MV',
        tax: [
            {
                vat_prefix: null,
                enum: 'mv_gst',
                tax_id_description: 'Maldives GST Taxpayer Identification Number',
                tax_id_description_country: 'Maldives (Maldives GST Taxpayer Identification Number)',
                example: '1000001GST501',
                regex: [/^[0-9]{7}GST[0-9]{3}$/]
            }
        ]
    },
    {
        name: 'Mali',
        code: 'ML',
        tax: null
    },
    {
        name: 'Malta',
        code: 'MT',
        tax: [
            {
                vat_prefix: 'MT',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Malta (European VAT number)',
                example: 'MT12345678',
                regex: [/^(MT)[0-9]{8}$/]
            }
        ]
    },
    {
        name: 'Marshall Islands',
        code: 'MH',
        tax: [
            {
                vat_prefix: null,
                enum: 'mh_ein',
                tax_id_description: 'Marshall Islands Employer Identification Number (EIN)',
                tax_id_description_country: 'Marshall Islands (Marshall Islands Employer Identification Number (EIN))',
                example: '08612-04',
                regex: [/^[0-9]{5}-04$/]
            }
        ]
    },
    {
        name: 'Martinique',
        code: 'MQ',
        tax: null
    },
    {
        name: 'Mauritania',
        code: 'MR',
        tax: [
            {
                vat_prefix: null,
                enum: 'mr_nif',
                tax_id_description: 'Mauritania Tax Identification Number (NIF)',
                tax_id_description_country: 'Mauritania (Mauritania Tax Identification Number (NIF))',
                example: '12345678',
                regex: [/^[0-9]{8}$/]
            }
        ]
    },
    {
        name: 'Mauritius',
        code: 'MU',
        tax: [
            {
                vat_prefix: null,
                enum: 'mu_tan',
                tax_id_description: 'Mauritius Tax Account Number (TAN, entities)',
                tax_id_description_country: 'Mauritius (Mauritius Tax Account Number (TAN))',
                example: '20123456',
                regex: [/^[23][0-9]{7}$/]
            }
        ]
    },
    {
        name: 'Mayotte',
        code: 'YT',
        tax: null
    },
    {
        name: 'Mexico',
        code: 'MX',
        tax: [
            {
                vat_prefix: null,
                enum: 'mx_rfc',
                tax_id_description: 'Mexican RFC number',
                tax_id_description_country: 'Mexico (Mexican RFC number)',
                example: 'ABC010203AB9',
                regex: [/^[A-ZÑ&]{3,4}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])(?:[A-Z\d]{3})$/]
            }
        ]
    },
    {
        name: 'Micronesia, Federated States of',
        code: 'FM',
        tax: null
    },
    {
        name: 'Moldova, Republic of',
        code: 'MD',
        tax: [
            {
                vat_prefix: null,
                enum: 'md_vat',
                tax_id_description: 'Moldova VAT Number',
                tax_id_description_country: 'Moldova (Moldova VAT Number)',
                example: '1234567',
                regex: [/^[0-9]{7}$/]
            }
        ]
    },
    {
        name: 'Monaco',
        code: 'MC',
        tax: [
            {
                vat_prefix: 'FR',
                enum: 'mc_vat',
                tax_id_description: 'Monaco Intra-Community VAT Number (French format)',
                tax_id_description_country: 'Monaco (Monaco Intra-Community VAT Number (French format))',
                example: 'FR12345678901',
                regex: [/^(FR)?[0-9A-Z]{2}[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Mongolia',
        code: 'MN',
        tax: [
            {
                vat_prefix: null,
                enum: 'mn_tin',
                tax_id_description: 'Mongolia Tax Identification Number (TIN)',
                tax_id_description_country: 'Mongolia (Mongolia Tax Identification Number (TIN))',
                example: '1234567',
                regex: [/^[0-9]{7}$/]
            }
        ]
    },
    {
        name: 'Montenegro',
        code: 'ME',
        tax: [
            {
                vat_prefix: null,
                enum: 'me_pib',
                tax_id_description: 'Montenegro PIB Number',
                tax_id_description_country: 'Montenegro (Montenegro PIB Number)',
                example: '12345678',
                regex: [/^[0-9]{8}$/]
            }
        ]
    },
    {
        name: 'Montserrat',
        code: 'MS',
        tax: null
    },
    {
        name: 'Morocco',
        code: 'MA',
        tax: [
            {
                vat_prefix: null,
                enum: 'ma_vat',
                tax_id_description: 'Morocco VAT Number (Identifiant Fiscal)',
                tax_id_description_country: 'Morocco (Morocco VAT Number (Identifiant Fiscal))',
                example: '12345678',
                regex: [/^[0-9]{8}$/]
            },
            {
                vat_prefix: null,
                enum: 'ma_ice',
                tax_id_description: 'Morocco Common Business Identifier (ICE)',
                tax_id_description_country: 'Morocco (Morocco Common Business Identifier (ICE))',
                example: '001234567000012',
                regex: [/^[0-9]{15}$/]
            }
        ]
    },
    {
        name: 'Mozambique',
        code: 'MZ',
        tax: [
            {
                vat_prefix: null,
                enum: 'mz_nuit',
                tax_id_description: 'Mozambique Unique Taxpayer Number (NUIT)',
                tax_id_description_country: 'Mozambique (Mozambique Unique Taxpayer Number (NUIT))',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Myanmar',
        code: 'MM',
        tax: [
            {
                vat_prefix: null,
                enum: 'mm_tin',
                tax_id_description: 'Myanmar Taxpayer Identification Number (TIN)',
                tax_id_description_country: 'Myanmar (Myanmar Taxpayer Identification Number (TIN))',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Namibia',
        code: 'NA',
        tax: null
    },
    {
        name: 'Nauru',
        code: 'NR',
        tax: [
            {
                vat_prefix: null,
                enum: 'nr_tin',
                tax_id_description: 'Nauru Taxpayer Identification Number (TIN)',
                tax_id_description_country: 'Nauru (Nauru Taxpayer Identification Number (TIN))',
                example: '123-456-789',
                regex: [/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/]
            }
        ]
    },
    {
        name: 'Nepal',
        code: 'NP',
        tax: [
            {
                vat_prefix: null,
                enum: 'np_pan',
                tax_id_description: 'Nepal PAN Number',
                tax_id_description_country: 'Nepal (Nepal PAN Number)',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Netherlands',
        code: 'NL',
        tax: [
            {
                vat_prefix: 'NL',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Netherlands (European VAT number)',
                example: 'NL123456789B12',
                regex: [/^(NL)[0-9]{9}B[0-9]{2}$/]
            }
        ]
    },
    {
        name: 'Netherlands Antilles',
        code: 'AN',
        tax: null
    },
    {
        name: 'New Caledonia',
        code: 'NC',
        tax: [
            {
                vat_prefix: null,
                enum: 'nc_ridet',
                tax_id_description: 'New Caledonia Business Register Number (RIDET)',
                tax_id_description_country: 'New Caledonia (New Caledonia Business Register Number (RIDET))',
                example: '0123456001',
                regex: [/^[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'New Zealand',
        code: 'NZ',
        tax: [
            {
                vat_prefix: null,
                enum: 'nz_gst',
                tax_id_description: 'New Zealand GST number',
                tax_id_description_country: 'New Zealand (New Zealand GST number)',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Nicaragua',
        code: 'NI',
        tax: [
            {
                vat_prefix: null,
                enum: 'ni_ruc',
                tax_id_description: 'Nicaragua RUC (Registro Único de Contribuyente)',
                tax_id_description_country: 'Nicaragua (RUC - Registro Único de Contribuyente)',
                example: 'J1310000252297',
                regex: [/^[A-Z][0-9]{13}$/]
            },
            {
                vat_prefix: null,
                enum: 'ni_cedula',
                tax_id_description: 'Nicaragua Cédula de Identidad (used as RUC for individuals)',
                tax_id_description_country: 'Nicaragua (Cédula de Identidad used as RUC)',
                example: '607-190468-0001F',
                regex: [/^[0-9]{3}-[0-9]{6}-[0-9]{4}[A-Z]$/]
            }
        ]
    },
    {
        name: 'Niger',
        code: 'NE',
        tax: null
    },
    {
        name: 'Nigeria',
        code: 'NG',
        tax: [
            {
                vat_prefix: null,
                enum: 'ng_tin',
                tax_id_description: 'Nigeria Tax Identification Number (TIN)',
                tax_id_description_country: 'Nigeria (Tax Identification Number)',
                example: '1234567890123',
                regex: [/^[0-9]{13}$/]
            }
        ]
    },
    {
        name: 'Niue',
        code: 'NU',
        tax: null
    },
    {
        name: 'Norfolk Island',
        code: 'NF',
        tax: null
    },
    {
        name: 'North Macedonia',
        code: 'MK',
        tax: [
            {
                vat_prefix: 'MK',
                enum: 'mk_vat',
                tax_id_description: 'North Macedonia VAT Number',
                tax_id_description_country: 'North Macedonia (VAT Number)',
                example: 'MK1234567890123',
                regex: [/^(MK)?[0-9]{13}$/]
            }
        ]
    },
    {
        name: 'Northern Ireland',
        code: 'XI',
        tax: [
            {
                vat_prefix: 'XI',
                enum: 'eu_vat',
                tax_id_description: 'Northern Ireland VAT number (Windsor Framework / EU protocol)',
                tax_id_description_country: 'Northern Ireland (Northern Ireland VAT number (Windsor Framework / EU protocol))',
                example: 'XI123456789',
                regex: [/^(XI)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})$/]
            }
        ]
    },
    {
        name: 'Northern Mariana Islands',
        code: 'MP',
        tax: null
    },
    {
        name: 'Norway',
        code: 'NO',
        tax: [
            {
                vat_prefix: null,
                enum: 'no_vat',
                tax_id_description: 'Norwegian VAT number',
                tax_id_description_country: 'Norway (Norwegian VAT number)',
                example: '123456789MVA',
                regex: [/^[0-9]{9}[A-Z]{3}$/]
            }
        ]
    },
    {
        name: 'Oman',
        code: 'OM',
        tax: [
            {
                vat_prefix: 'OM',
                enum: 'om_vat',
                tax_id_description: 'Oman VAT Registration Number',
                tax_id_description_country: 'Oman (VAT Registration Number)',
                example: 'OM1100000300',
                regex: [/^(OM)?[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'Pakistan',
        code: 'PK',
        tax: [
            {
                vat_prefix: null,
                enum: 'pk_ntn',
                tax_id_description: 'Pakistan National Tax Number (company/AOP)',
                tax_id_description_country: 'Pakistan (National Tax Number)',
                example: '1234567-8',
                regex: [/^[0-9]{7}-[0-9]$/]
            },
            {
                vat_prefix: null,
                enum: 'pk_cnic',
                tax_id_description: 'Pakistan CNIC (used as NTN for individuals)',
                tax_id_description_country: 'Pakistan (CNIC-based individual NTN)',
                example: '42101-1234567-1',
                regex: [/^[0-9]{5}-[0-9]{7}-[0-9]$/]
            }
        ]
    },
    {
        name: 'Palau',
        code: 'PW',
        tax: null
    },
    {
        name: 'Palestinian Territory, Occupied',
        code: 'PS',
        tax: null
    },
    {
        name: 'Panama',
        code: 'PA',
        tax: [
            {
                vat_prefix: null,
                enum: 'pa_ruc',
                tax_id_description: 'Panama RUC (Registro Único de Contribuyente)',
                tax_id_description_country: 'Panama (Panama RUC (Registro Único de Contribuyente))',
                example: '155646423-2-2015',
                regex: [/^[0-9]{1,9}-[0-9]{1,4}-[0-9]{4,6}$/]
            }
        ]
    },
    {
        name: 'Papua New Guinea',
        code: 'PG',
        tax: [
            {
                vat_prefix: null,
                enum: 'pg_tin',
                tax_id_description: 'Papua New Guinea Taxpayer Identification Number (TIN)',
                tax_id_description_country: 'Papua New Guinea (Taxpayer Identification Number)',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Paraguay',
        code: 'PY',
        tax: [
            {
                vat_prefix: null,
                enum: 'py_ruc',
                tax_id_description: 'Paraguay RUC (Registro Único de Contribuyentes)',
                tax_id_description_country: 'Paraguay (RUC - Registro Único de Contribuyentes)',
                example: '12345678-9',
                regex: [/^[0-9]{3,8}-[0-9]$/]
            }
        ]
    },
    {
        name: 'Peru',
        code: 'PE',
        tax: [
            {
                vat_prefix: null,
                enum: 'pe_ruc',
                tax_id_description: 'Peru RUC (Registro Único de Contribuyentes)',
                tax_id_description_country: 'Peru (RUC - Registro Único de Contribuyentes)',
                example: '20123456789',
                regex: [/^[0-9]{11}$/]
            }
        ]
    },
    {
        name: 'Philippines',
        code: 'PH',
        tax: [
            {
                vat_prefix: null,
                enum: 'ph_tin',
                tax_id_description: 'Philippines TIN',
                tax_id_description_country: 'Philippines (TIN)',
                example: '246801627387',
                regex: [/^\d{12}$/]
            }
        ]
    },
    {
        name: 'Pitcairn',
        code: 'PN',
        tax: null
    },
    {
        name: 'Poland',
        code: 'PL',
        tax: [
            {
                vat_prefix: 'PL',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Poland (European VAT number)',
                example: 'PL1234567890',
                regex: [/^(PL)[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'Portugal',
        code: 'PT',
        tax: [
            {
                vat_prefix: 'PT',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Portugal (European VAT number)',
                example: 'PT123456789',
                regex: [/^(PT)[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Puerto Rico',
        code: 'PR',
        tax: null
    },
    {
        name: 'Qatar',
        code: 'QA',
        tax: [
            {
                vat_prefix: null,
                enum: 'qa_tin',
                tax_id_description: 'Qatar Tax Identification Number (TIN)',
                tax_id_description_country: 'Qatar (Tax Identification Number)',
                example: '5123456789',
                regex: [/^5[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Reunion',
        code: 'RE',
        tax: null
    },
    {
        name: 'Romania',
        code: 'RO',
        tax: [
            {
                vat_prefix: 'RO',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Romania (European VAT number)',
                example: 'RO1234567891',
                regex: [/^(RO)[0-9]{2,10}$/]
            }
        ]
    },
    {
        name: 'Russian Federation',
        code: 'RU',
        tax: [
            {
                vat_prefix: null,
                enum: 'ru_inn',
                tax_id_description: 'Russian INN',
                tax_id_description_country: 'Russian Federation (Russian INN)',
                example: '1234567891',
                regex: [/^[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'Rwanda',
        code: 'RW',
        tax: [
            {
                vat_prefix: null,
                enum: 'rw_tin',
                tax_id_description: 'Rwanda Taxpayer Identification Number (TIN)',
                tax_id_description_country: 'Rwanda (Taxpayer Identification Number)',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Saint Helena',
        code: 'SH',
        tax: null
    },
    {
        name: 'Saint Kitts and Nevis',
        code: 'KN',
        tax: null
    },
    {
        name: 'Saint Lucia',
        code: 'LC',
        tax: [
            {
                vat_prefix: null,
                enum: 'lc_tin',
                tax_id_description: 'Saint Lucia Taxpayer Identification Number (TIN)',
                tax_id_description_country: 'Saint Lucia (Taxpayer Identification Number)',
                example: '001234',
                regex: [/^[0-9]{6}$/]
            }
        ]
    },
    {
        name: 'Saint Pierre and Miquelon',
        code: 'PM',
        tax: null
    },
    {
        name: 'Saint Vincent and the Grenadines',
        code: 'VC',
        tax: null
    },
    {
        name: 'Samoa',
        code: 'WS',
        tax: null
    },
    {
        name: 'San Marino',
        code: 'SM',
        tax: [
            {
                vat_prefix: null,
                enum: 'sm_coe',
                tax_id_description: 'San Marino COE (Codice Operatore Economico / Economic Operator Code)',
                tax_id_description_country: 'San Marino (San Marino COE (Codice Operatore Economico / Economic Operator Code))',
                example: '12345',
                regex: [/^[0-9]{1,5}$/]
            }
        ]
    },
    {
        name: 'Sao Tome and Principe',
        code: 'ST',
        tax: [
            {
                vat_prefix: null,
                enum: 'st_nif',
                tax_id_description: 'Sao Tome and Principe NIF (Numero de Identificacao Fiscal)',
                tax_id_description_country: 'Sao Tome and Principe (NIF - Numero de Identificacao Fiscal)',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Saudi Arabia',
        code: 'SA',
        tax: [
            {
                vat_prefix: null,
                enum: 'sa_vat',
                tax_id_description: 'Saudi Arabia VAT',
                tax_id_description_country: 'Saudi Arabia (Saudi Arabia VAT)',
                example: '123456789012345',
                regex: [/^[0-9]{15}$/]
            },
            {
                vat_prefix: null,
                enum: 'sa_vat_1',
                tax_id_description: 'Saudi Arabia VAT',
                tax_id_description_country: 'Saudi Arabia (Saudi Arabia VAT)',
                example: '398765432198765',
                regex: [/^3\d{8}\d{1}\d{3}\d{2}$/]
            }
        ]
    },
    {
        name: 'Senegal',
        code: 'SN',
        tax: [
            {
                vat_prefix: null,
                enum: 'sn_ninea',
                tax_id_description: 'Senegal NINEA/COFI (Numero d\'Identification Nationale des Entreprises et Associations with Code d\'Identification Fiscale suffix)',
                tax_id_description_country: 'Senegal (NINEA/COFI Business and Tax Identification Number)',
                example: '12345672A2',
                regex: [/^[0-9]{7}[A-Z0-9]{3}$/]
            }
        ]
    },
    {
        name: 'Serbia',
        code: 'RS',
        tax: [
            {
                vat_prefix: null,
                enum: 'rs_pib',
                tax_id_description: 'Serbian PIB (Poreski Identifikacioni Broj / Tax Identification Number)',
                tax_id_description_country: 'Serbia (Serbian PIB (Tax Identification Number))',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Seychelles',
        code: 'SC',
        tax: [
            {
                vat_prefix: null,
                enum: 'sc_tin',
                tax_id_description: 'Seychelles Tax Identification Number (TIN)',
                tax_id_description_country: 'Seychelles (Tax Identification Number)',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Sierra Leone',
        code: 'SL',
        tax: null
    },
    {
        name: 'Singapore',
        code: 'SG',
        tax: [
            {
                vat_prefix: null,
                enum: 'sg_gst',
                tax_id_description: 'Singaporean GST',
                tax_id_description_country: 'Singapore (Singaporean GST)',
                example: 'M12345678X',
                regex: [/^[A-Z]{1}[0-9]{8}[A-Z]{1}$/]
            },
            {
                vat_prefix: null,
                enum: 'sg_uen',
                tax_id_description: 'Singaporean UEN',
                tax_id_description_country: 'Singapore (Singaporean UEN)',
                example: '123456789F',
                regex: [/^[0-9]{9}[A-Z]{1}$/]
            }
        ]
    },
    {
        name: 'Slovakia',
        code: 'SK',
        tax: [
            {
                vat_prefix: 'SK',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Slovakia (European VAT number)',
                example: 'SK1234567891',
                regex: [/^(SK)[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'Slovenia',
        code: 'SI',
        tax: [
            {
                vat_prefix: 'SI',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Slovenia (European VAT number)',
                example: 'SI12345678',
                regex: [/^(SI)[0-9]{8}$/]
            }
        ]
    },
    {
        name: 'Solomon Islands',
        code: 'SB',
        tax: null
    },
    {
        name: 'Somalia',
        code: 'SO',
        tax: null
    },
    {
        name: 'South Africa',
        code: 'ZA',
        tax: [
            {
                vat_prefix: null,
                enum: 'za_vat',
                tax_id_description: 'South African VAT number',
                tax_id_description_country: 'South Africa (South African VAT number)',
                example: '4123456789',
                regex: [/^[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'South Georgia and the South Sandwich Islands',
        code: 'GS',
        tax: null
    },
    {
        name: 'Spain',
        code: 'ES',
        tax: [
            {
                vat_prefix: null,
                enum: 'es_cif',
                tax_id_description: 'Spanish CIF number',
                tax_id_description_country: 'Spain (Spanish CIF number)',
                example: 'A12345678',
                regex: [/^([A-Z])[0-9]{8}$/]
            },
            {
                vat_prefix: 'ES',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Spain (European VAT number)',
                example: 'ESA1234567Z',
                regex: [/^(ES)[0-9A-Z][0-9]{7}([0-9A-Z])$/]
            }
        ]
    },
    {
        name: 'Sri Lanka',
        code: 'LK',
        tax: [
            {
                vat_prefix: null,
                enum: 'lk_tin',
                tax_id_description: 'Sri Lanka Taxpayer Identification Number (TIN)',
                tax_id_description_country: 'Sri Lanka (Taxpayer Identification Number)',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Sudan',
        code: 'SD',
        tax: null
    },
    {
        name: 'Suriname',
        code: 'SR',
        tax: [
            {
                vat_prefix: null,
                enum: 'sr_fin',
                tax_id_description: 'Suriname FIN (Fiscal Identification Number)',
                tax_id_description_country: 'Suriname (Fiscal Identification Number)',
                example: '1234567890',
                regex: [/^[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'Svalbard and Jan Mayen',
        code: 'SJ',
        tax: null
    },
    {
        name: 'Swaziland',
        code: 'SZ',
        tax: [
            {
                vat_prefix: null,
                enum: 'sz_tin',
                tax_id_description: 'Eswatini (Swaziland) Taxpayer Identification Number (TIN)',
                tax_id_description_country: 'Swaziland (Taxpayer Identification Number)',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Sweden',
        code: 'SE',
        tax: [
            {
                vat_prefix: 'SE',
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'Sweden (European VAT number)',
                example: 'SE123456789123',
                regex: [/^(SE)[0-9]{12}$/]
            }
        ]
    },
    {
        name: 'Switzerland',
        code: 'CH',
        tax: [
            {
                vat_prefix: null,
                enum: 'ch_vat',
                tax_id_description: 'Switzerland VAT number',
                tax_id_description_country: 'Switzerland (Switzerland VAT number)',
                example: 'CHE-123.456.789 MWST',
                regex: [/^(CHE-\d{3}\.\d{3}\.\d{3}\ +(IVA|TVA|MWST))$/]
            }
        ]
    },
    {
        name: 'Syrian Arab Republic',
        code: 'SY',
        tax: null
    },
    {
        name: 'Taiwan, Province of China',
        code: 'TW',
        tax: [
            {
                vat_prefix: null,
                enum: 'tw_vat',
                tax_id_description: 'Taiwanese VAT',
                tax_id_description_country: 'Taiwan (Taiwanese VAT)',
                example: '12345678',
                regex: [/^[0-9]{8}$/]
            }
        ]
    },
    {
        name: 'Tajikistan',
        code: 'TJ',
        tax: [
            {
                vat_prefix: null,
                enum: 'tj_tin',
                tax_id_description: 'Tajikistan Tax Identification Number (TIN)',
                tax_id_description_country: 'Tajikistan (Tax Identification Number)',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'Tanzania, United Republic of',
        code: 'TZ',
        tax: [
            {
                vat_prefix: null,
                enum: 'tz_vat',
                tax_id_description: 'Tanzania VAT Registration Number',
                tax_id_description_country: 'Tanzania (VAT Registration Number)',
                example: '12345678A',
                regex: [/^[0-9]{8}[A-Z]{1}$/]
            }
        ]
    },
    {
        name: 'Thailand',
        code: 'TH',
        tax: [
            {
                vat_prefix: null,
                enum: 'th_vat',
                tax_id_description: 'Thai VAT',
                tax_id_description_country: 'Thailand (Thai VAT)',
                example: '1234567891234',
                regex: [/^[0-9]{13}$/]
            }
        ]
    },
    {
        name: 'Timor-Leste',
        code: 'TL',
        tax: null
    },
    {
        name: 'Togo',
        code: 'TG',
        tax: null
    },
    {
        name: 'Tokelau',
        code: 'TK',
        tax: null
    },
    {
        name: 'Tonga',
        code: 'TO',
        tax: null
    },
    {
        name: 'Trinidad and Tobago',
        code: 'TT',
        tax: [
            {
                vat_prefix: null,
                enum: 'tt_bir',
                tax_id_description: 'Trinidad and Tobago BIR Number (Board of Inland Revenue Number)',
                tax_id_description_country: 'Trinidad and Tobago (BIR Number)',
                example: '123456789-1',
                regex: [/^[0-9]{9}-[0-9]{1}$/]
            }
        ]
    },
    {
        name: 'Tunisia',
        code: 'TN',
        tax: [
            {
                vat_prefix: null,
                enum: 'tn_mf',
                tax_id_description: 'Tunisia Matricule Fiscal (Tax Identifier)',
                tax_id_description_country: 'Tunisia (Tunisia Matricule Fiscal (Tax Identifier))',
                example: '1234567/A/B/M/000',
                regex: [/^[0-9]{7}\/[A-Z]\/[A-Z]\/[A-Z]\/[0-9]{3}$/]
            }
        ]
    },
    {
        name: 'Turkey',
        code: 'TR',
        tax: [
            {
                vat_prefix: null,
                enum: 'tr_vkn_b',
                tax_id_description: 'Turkey Tax Identification Number - Vergi Kimlik Numarası [Business]',
                tax_id_description_country: 'Turkey (VKN)',
                example: '9123456789',
                regex: [/^(0|1|9)\d{9}$/]
            },
            {
                vat_prefix: null,
                enum: 'tr_vkn_i',
                tax_id_description: 'Turkey Tax Identification Number - Vergi Kimlik Numarası [Individual]',
                tax_id_description_country: 'Turkey (VKN)',
                example: '12345678901',
                regex: [/^\d{11}$/]
            }
        ]
    },
    {
        name: 'Turkmenistan',
        code: 'TM',
        tax: null
    },
    {
        name: 'Turks and Caicos Islands',
        code: 'TC',
        tax: null
    },
    {
        name: 'Tuvalu',
        code: 'TV',
        tax: null
    },
    {
        name: 'Uganda',
        code: 'UG',
        tax: [
            {
                vat_prefix: null,
                enum: 'ug_tin',
                tax_id_description: 'Uganda Tax Identification Number (TIN)',
                tax_id_description_country: 'Uganda (Uganda Tax Identification Number (TIN))',
                example: '1014751879',
                regex: [/^[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'Ukraine',
        code: 'UA',
        tax: [
            {
                vat_prefix: null,
                enum: 'ua_edrpou',
                tax_id_description: 'Ukraine EDRPOU (Business Registration Number)',
                tax_id_description_country: 'Ukraine (Ukraine EDRPOU (Business Registration Number))',
                example: '12345678',
                regex: [/^[0-9]{8}$/]
            },
            {
                vat_prefix: null,
                enum: 'ua_vat',
                tax_id_description: 'Ukrainian VAT Number',
                tax_id_description_country: 'Ukraine (Ukrainian VAT Number)',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            }
        ]
    },
    {
        name: 'United Arab Emirates',
        code: 'AE',
        tax: [
            {
                vat_prefix: null,
                enum: 'ae_trn',
                tax_id_description: 'United Arab Emirates TRN',
                tax_id_description_country: 'United Arab Emirates (United Arab Emirates TRN)',
                example: '123456789012345',
                regex: [/^[0-9]{15}$/]
            }
        ]
    },
    {
        name: 'United Kingdom',
        code: 'GB',
        tax: [
            {
                vat_prefix: 'GB',
                enum: 'gb_vat',
                tax_id_description: 'UK VAT number (no longer checkable via EU VIES since Brexit; format only)',
                tax_id_description_country: 'United Kingdom (UK VAT number (no longer checkable via EU VIES since Brexit; format only))',
                example: 'GB123456789',
                regex: [/^(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})$/]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        tax: [
            {
                vat_prefix: null,
                enum: 'us_ein',
                tax_id_description: 'United States EIN',
                tax_id_description_country: 'United States (United States EIN)',
                example: '12-3456789',
                regex: [/^\d{2}\-\d{7}$/]
            }
        ]
    },
    {
        name: 'United States Minor Outlying Islands',
        code: 'UM',
        tax: null
    },
    {
        name: 'Uruguay',
        code: 'UY',
        tax: [
            {
                vat_prefix: null,
                enum: 'uy_ruc',
                tax_id_description: 'Uruguay RUC (Registro Único Tributario)',
                tax_id_description_country: 'Uruguay (Uruguay RUC (Registro Único Tributario))',
                example: '123456789012',
                regex: [/^[0-9]{12}$/]
            }
        ]
    },
    {
        name: 'Uzbekistan',
        code: 'UZ',
        tax: [
            {
                vat_prefix: null,
                enum: 'uz_tin',
                tax_id_description: 'Uzbekistan Tax Identification Number (TIN)',
                tax_id_description_country: 'Uzbekistan (Uzbekistan Tax Identification Number (TIN))',
                example: '123456789',
                regex: [/^[0-9]{9}$/]
            },
            {
                vat_prefix: null,
                enum: 'uz_vat',
                tax_id_description: 'Uzbekistan VAT Number',
                tax_id_description_country: 'Uzbekistan (Uzbekistan VAT Number)',
                example: '123456789012',
                regex: [/^[0-9]{12}$/]
            }
        ]
    },
    {
        name: 'Vanuatu',
        code: 'VU',
        tax: null
    },
    {
        name: 'Venezuela',
        code: 'VE',
        tax: [
            {
                vat_prefix: null,
                enum: 've_rif',
                tax_id_description: 'Venezuela RIF (Registro de Información Fiscal)',
                tax_id_description_country: 'Venezuela (Venezuela RIF (Registro de Información Fiscal))',
                example: 'V-12345678-9',
                regex: [/^[VEJPG]-[0-9]{8}-[0-9]$/]
            }
        ]
    },
    {
        name: 'Vietnam',
        code: 'VN',
        tax: [
            {
                vat_prefix: null,
                enum: 'vn_ein',
                tax_id_description: 'Vietnam - Mã Sṍ Thuḗ (Personal Tax Code)',
                tax_id_description_country: 'Vietnam (PTC)',
                example: '1234567890',
                regex: [/^\d{10}$/]
            }
        ]
    },
    {
        name: 'Virgin Islands, British',
        code: 'VG',
        tax: null
    },
    {
        name: 'Virgin Islands, U.S.',
        code: 'VI',
        tax: [
            {
                vat_prefix: null,
                enum: 'vi_ein',
                tax_id_description: 'US Virgin Islands EIN (US Federal Employer Identification Number)',
                tax_id_description_country: 'Virgin Islands, U.S. (US Virgin Islands EIN (US Federal Employer Identification Number))',
                example: '12-3456789',
                regex: [/^[0-9]{2}-[0-9]{7}$/]
            }
        ]
    },
    {
        name: 'Wallis and Futuna',
        code: 'WF',
        tax: null
    },
    {
        name: 'Western Sahara',
        code: 'EH',
        tax: null
    },
    {
        name: 'Yemen',
        code: 'YE',
        tax: null
    },
    {
        name: 'Zambia',
        code: 'ZM',
        tax: [
            {
                vat_prefix: null,
                enum: 'zm_tin',
                tax_id_description: 'Zambia Tax Identification Number (TIN)',
                tax_id_description_country: 'Zambia (Zambia Tax Identification Number (TIN))',
                example: '1004751879',
                regex: [/^[0-9]{10}$/]
            }
        ]
    },
    {
        name: 'Zimbabwe',
        code: 'ZW',
        tax: [
            {
                vat_prefix: null,
                enum: 'zw_tin',
                tax_id_description: 'Zimbabwe Tax Identification Number (TIN)',
                tax_id_description_country: 'Zimbabwe (Zimbabwe Tax Identification Number (TIN))',
                example: '1234567890',
                regex: [/^[0-9]{10}$/]
            }
        ]
    }
];
