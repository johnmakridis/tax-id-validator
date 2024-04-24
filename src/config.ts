import { Country } from './models';

export const countries: Country[] = [
    {
        name: 'Afghanistan',
        code: 'AF',
        tax: null
    },
    {
        name: 'Åland Islands',
        code: 'AX',
        tax: null
    },
    {
        name: 'Albania',
        code: 'AL',
        tax: null
    },
    {
        name: 'Algeria',
        code: 'DZ',
        tax: null
    },
    {
        name: 'American Samoa',
        code: 'AS',
        tax: null
    },
    {
        name: 'Andorra',
        code: 'AD',
        tax: null
    },
    {
        name: 'Angola',
        code: 'AO',
        tax: null
    },
    {
        name: 'Anguilla',
        code: 'AI',
        tax: null
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
        tax: null
    },
    {
        name: 'Aruba',
        code: 'AW',
        tax: null
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
        tax: null
    },
    {
        name: 'Bahamas',
        code: 'BS',
        tax: null
    },
    {
        name: 'Bahrain',
        code: 'BH',
        tax: null
    },
    {
        name: 'Bangladesh',
        code: 'BD',
        tax: null
    },
    {
        name: 'Barbados',
        code: 'BB',
        tax: null
    },
    {
        name: 'Belarus',
        code: 'BY',
        tax: null
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
        tax: null
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
        tax: null
    },
    {
        name: 'Bosnia and Herzegovina',
        code: 'BA',
        tax: null
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
        tax: null
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
        tax: null
    },
    {
        name: 'Burundi',
        code: 'BI',
        tax: null
    },
    {
        name: 'Cambodia',
        code: 'KH',
        tax: null
    },
    {
        name: 'Cameroon',
        code: 'CM',
        tax: null
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
        tax: null
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
        tax: null
    },
    {
        name: 'Cook Islands',
        code: 'CK',
        tax: null
    },
    {
        name: 'Costa Rica',
        code: 'CR',
        tax: null
    },
    {
        name: 'Cote D\'Ivoire',
        code: 'CI',
        tax: null
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
        tax: null
    },
    {
        name: 'Dominican Republic',
        code: 'DO',
        tax: null
    },
    {
        name: 'Ecuador',
        code: 'EC',
        tax: null
    },
    {
        name: 'Egypt',
        code: 'EG',
        tax: null
    },
    {
        name: 'El Salvador',
        code: 'SV',
        tax: null
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
        tax: null
    },
    {
        name: 'Falkland Islands (Malvinas)',
        code: 'FK',
        tax: null
    },
    {
        name: 'Faroe Islands',
        code: 'FO',
        tax: null
    },
    {
        name: 'Fiji',
        code: 'FJ',
        tax: null
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
        tax: null
    },
    {
        name: 'Gambia',
        code: 'GM',
        tax: null
    },
    {
        name: 'Georgia',
        code: 'GE',
        tax: null
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
        tax: null
    },
    {
        name: 'Gibraltar',
        code: 'GI',
        tax: null
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
        tax: null
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
        tax: null
    },
    {
        name: 'Guernsey',
        code: 'GG',
        tax: null
    },
    {
        name: 'Guinea',
        code: 'GN',
        tax: null
    },
    {
        name: 'Guinea-Bissau',
        code: 'GW',
        tax: null
    },
    {
        name: 'Guyana',
        code: 'GY',
        tax: null
    },
    {
        name: 'Haiti',
        code: 'HT',
        tax: null
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
        tax: null
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
        tax: null
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
        tax: null
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
        tax: null
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
        tax: null
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
        tax: null
    },
    {
        name: 'Kenya',
        code: 'KE',
        tax: null
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
        tax: null
    },
    {
        name: 'Kyrgyzstan',
        code: 'KG',
        tax: null
    },
    {
        name: 'Lao People\'S Democratic Republic',
        code: 'LA',
        tax: null
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
        tax: null
    },
    {
        name: 'Lesotho',
        code: 'LS',
        tax: null
    },
    {
        name: 'Liberia',
        code: 'LR',
        tax: null
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
        tax: null
    },
    {
        name: 'Madagascar',
        code: 'MG',
        tax: null
    },
    {
        name: 'Malawi',
        code: 'MW',
        tax: null
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
        tax: null
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
        tax: null
    },
    {
        name: 'Martinique',
        code: 'MQ',
        tax: null
    },
    {
        name: 'Mauritania',
        code: 'MR',
        tax: null
    },
    {
        name: 'Mauritius',
        code: 'MU',
        tax: null
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
        tax: null
    },
    {
        name: 'Monaco',
        code: 'MC',
        tax: null
    },
    {
        name: 'Mongolia',
        code: 'MN',
        tax: null
    },
    {
        name: 'Montenegro',
        code: 'ME',
        tax: null
    },
    {
        name: 'Montserrat',
        code: 'MS',
        tax: null
    },
    {
        name: 'Morocco',
        code: 'MA',
        tax: null
    },
    {
        name: 'Mozambique',
        code: 'MZ',
        tax: null
    },
    {
        name: 'Myanmar',
        code: 'MM',
        tax: null
    },
    {
        name: 'Namibia',
        code: 'NA',
        tax: null
    },
    {
        name: 'Nauru',
        code: 'NR',
        tax: null
    },
    {
        name: 'Nepal',
        code: 'NP',
        tax: null
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
        tax: null
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
        tax: null
    },
    {
        name: 'Niger',
        code: 'NE',
        tax: null
    },
    {
        name: 'Nigeria',
        code: 'NG',
        tax: null
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
        tax: null
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
        tax: null
    },
    {
        name: 'Pakistan',
        code: 'PK',
        tax: null
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
        tax: null
    },
    {
        name: 'Papua New Guinea',
        code: 'PG',
        tax: null
    },
    {
        name: 'Paraguay',
        code: 'PY',
        tax: null
    },
    {
        name: 'Peru',
        code: 'PE',
        tax: null
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
        tax: null
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
        tax: null
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
        tax: null
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
        tax: null
    },
    {
        name: 'Sao Tome and Principe',
        code: 'ST',
        tax: null
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
        tax: null
    },
    {
        name: 'Serbia',
        code: 'RS',
        tax: null
    },
    {
        name: 'Seychelles',
        code: 'SC',
        tax: null
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
                vat_prefix: 'ES',
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
        tax: null
    },
    {
        name: 'Sudan',
        code: 'SD',
        tax: null
    },
    {
        name: 'Suriname',
        code: 'SR',
        tax: null
    },
    {
        name: 'Svalbard and Jan Mayen',
        code: 'SJ',
        tax: null
    },
    {
        name: 'Swaziland',
        code: 'SZ',
        tax: null
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
        tax: null
    },
    {
        name: 'Tanzania, United Republic of',
        code: 'TZ',
        tax: null
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
        tax: null
    },
    {
        name: 'Tunisia',
        code: 'TN',
        tax: null
    },
    {
        name: 'Turkey',
        code: 'TR',
        tax: null
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
        tax: null
    },
    {
        name: 'Ukraine',
        code: 'UA',
        tax: null
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
                enum: 'eu_vat',
                tax_id_description: 'European VAT number',
                tax_id_description_country: 'United Kingdom (European VAT number)',
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
        tax: null
    },
    {
        name: 'Uzbekistan',
        code: 'UZ',
        tax: null
    },
    {
        name: 'Vanuatu',
        code: 'VU',
        tax: null
    },
    {
        name: 'Venezuela',
        code: 'VE',
        tax: null
    },
    {
        name: 'Viet Nam',
        code: 'VN',
        tax: null
    },
    {
        name: 'Virgin Islands, British',
        code: 'VG',
        tax: null
    },
    {
        name: 'Virgin Islands, U.S.',
        code: 'VI',
        tax: null
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
        tax: null
    },
    {
        name: 'Zimbabwe',
        code: 'ZW',
        tax: null
    }
];
