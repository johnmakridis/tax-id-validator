# Supported Countries

This is the full list of tax ID / VAT / GST rules currently registered in the library. 167 of 245 ISO countries/territories are covered (78 have no independently documented tax ID format and are intentionally left unsupported rather than guessed).

All validation is **format only** (regex on character set/length/prefix) — no checksum verification, and no live registry lookup except for EU VAT numbers via [`getVIESData()`](./README.md#getviesdatacountry_code-vat_number).

| Country | Code | Tax ID type | Example |
|---|---|---|---|
| Afghanistan | `AF` | Afghanistan Taxpayer Identification Number | `1234567890` |
| Albania | `AL` | Albania Tax Identification Number (NIPT) | `J12345678N` |
| Algeria | `DZ` | Algeria NIF (Numero d'Identification Fiscale) | `123456789012345` |
| Andorra | `AD` | Andorra NRT (Numero de Registre Tributari) | `A-123456-Z` |
| Angola | `AO` | Angola Tax Identification Number | `5123456789` |
| Anguilla | `AI` | Anguilla Tax Identification Number | `2123456789` |
| Argentina | `AR` | Argentina Unique Tax Identification Code (AR CUIT) | `23234567892` |
| Armenia | `AM` | Armenia Tax Identification Number | `02538904` |
| Aruba | `AW` | Aruba Tax Identification Number | `12345678` |
| Australia | `AU` | Australian Business Number (AU ABN) | `12345678912` |
| Austria | `AT` | European VAT number (prefix `AT`) | `ATU12345678` |
| Azerbaijan | `AZ` | Azerbaijan Tax Identification Number (VOEN) | `0123456789` |
| Bahamas | `BS` | Bahamas Tax Identification Number | `123456789` |
| Bahrain | `BH` | Bahrain VAT Number | `123456789012345` |
| Bangladesh | `BD` | Bangladesh Business Identification Number (e-BIN) | `1234567890123` |
| Barbados | `BB` | Barbados Taxpayer Identification Number | `1123456789012` |
| Belarus | `BY` | Belarus Tax Identification Number (UNP) | `123456789` |
| Belgium | `BE` | European VAT number (prefix `BE`) | `BE0123456789` |
| Benin | `BJ` | Benin IFU (Identifiant Fiscal Unique) | `1234567890123` |
| Bolivia | `BO` | Bolivia NIT (Numero de Identificacion Tributaria) | `123456789` |
| Bosnia and Herzegovina | `BA` | Bosnia and Herzegovina JIB (Unique Identification Number) | `1234567890123` |
| Brazil | `BR` | Brazilian CNPJ number | `01.234.456/5432-10` |
| Brazil | `BR` | Brazilian CPF number | `123.456.789-87` |
| Brunei Darussalam | `BN` | Brunei Company Registration Number | `RC12345678` |
| Brunei Darussalam | `BN` | Brunei Business Names Registration Number | `P12345678` |
| Bulgaria | `BG` | European VAT number (prefix `BG`) | `BG0123456789` |
| Burkina Faso | `BF` | Burkina Faso Identifiant Financier Unique | `12345678A` |
| Burundi | `BI` | Burundi Numéro d'Identification Fiscale | `6217884709` |
| Cambodia | `KH` | Cambodia Tax Identification Number | `1001-123456789` |
| Cameroon | `CM` | Cameroon Numéro d'Identifiant fiscal Unique | `M123456789000L` |
| Canada | `CA` | Canadian BN | `123456789` |
| Canada | `CA` | Canadian QST number | `1234567890TQ1234` |
| Cape Verde | `CV` | Cape Verde Número de Identificação Fiscal | `213456789` |
| Chile | `CL` | Chilean TIN | `12.345.678-K` |
| China | `CN` | Chinese Uniform Social Credit Code (USSC) [Business] | `12345678901234567X` |
| China | `CN` | Chinese National ID number [Individuals] | `123456789012345678` |
| Colombia | `CO` | Colombian TIN Business | `123456789-0` |
| Colombia | `CO` | Colombian TIN Individual | `12345678-9` |
| Congo, The Democratic Republic of the | `CD` | DR Congo Número de Identificação Fiscal | `A0123456M` |
| Cook Islands | `CK` | Cook Islands Tax Identification Number | `12345` |
| Costa Rica | `CR` | Costa Rica Tax Identification Number (Cédula Jurídica/Física) | `1-234-567890` |
| Cote D'Ivoire | `CI` | Cote D'Ivoire Numéro de Compte Contribuable | `9500015F` |
| Croatia | `HR` | European VAT number (prefix `HR`) | `HR12345678912` |
| Cyprus | `CY` | European VAT number (prefix `CY`) | `CY12345678Z` |
| Czech Republic | `CZ` | European VAT number (prefix `CZ`) | `CZ1234567890` |
| Denmark | `DK` | European VAT number (prefix `DK`) | `DK12345678` |
| Dominica | `DM` | Dominica Tax Identification Number | `1234567` |
| Dominican Republic | `DO` | Dominican Republic RNC/RCN number | `123-4567890-1` |
| Ecuador | `EC` | Ecuadorian RUC number | `1234567890001` |
| Egypt | `EG` | Egyptian Tax Identification Number | `123456789` |
| El Salvador | `SV` | Salvadoran NIT number | `1234-567890-123-4` |
| Estonia | `EE` | European VAT number (prefix `EE`) | `EE123456789` |
| Ethiopia | `ET` | Ethiopia Tax Identification Number | `1234567890` |
| Faroe Islands | `FO` | Faroe Islands VAT number (V-tal) (prefix `FO`) | `FO123456` |
| Fiji | `FJ` | Fiji Taxpayer Identification Number | `2912345678` |
| Finland | `FI` | European VAT number (prefix `FI`) | `FI12345678` |
| France | `FR` | European VAT number (prefix `FR`) | `FRAB123456789` |
| Gabon | `GA` | Gabon Numéro d'Identification Fiscale | `1234567890123` |
| Gambia | `GM` | Gambia Taxpayer Identification Number | `1234567890` |
| Georgia | `GE` | Georgian VAT/Tax Identification Number (legal entities) | `123456789` |
| Georgia | `GE` | Georgian personal number (used as individual TIN) | `12345678901` |
| Germany | `DE` | European VAT number (prefix `DE`) | `DE123456789` |
| Ghana | `GH` | Ghana Card Personal Identification Number (individual TIN) | `GHA-123456789-1` |
| Ghana | `GH` | Ghana Revenue Authority business Taxpayer Identification Number | `C0012345678` |
| Gibraltar | `GI` | Gibraltar Tax Identification Number | `12345` |
| Greece | `GR` | European VAT number (prefix `EL`) | `EL123456789` |
| Grenada | `GD` | Grenada Taxpayer Identification Number | `1200000001` |
| Guatemala | `GT` | Guatemala Número de Identificación Tributaria (NIT) | `12345678-9` |
| Guernsey | `GG` | Guernsey Company Registration Number | `123456` |
| Guernsey | `GG` | Guernsey Tax Reference Number (non-locally-incorporated companies) | `1C123456/O` |
| Guinea | `GN` | Guinea Numéro d'Identification Fiscale | `123456789` |
| Guinea-Bissau | `GW` | Guinea-Bissau Número de Identificação Fiscal (NIF) | `510025439` |
| Haiti | `HT` | Haitian Numéro d'Identification Fiscale (NIF / matricule fiscale) | `1234567890` |
| Honduras | `HN` | Honduran Registro Tributario Nacional (RTN) | `12345678901234` |
| Hong Kong | `HK` | Hong Kong BR number | `12345678` |
| Hungary | `HU` | European VAT number (prefix `HU`) | `HU12345678912` |
| Iceland | `IS` | Icelandic VAT number (VSK number) | `123456` |
| India | `IN` | Indian GST number | `12ABCDE3456FGZH` |
| Indonesia | `ID` | Indonesian NPWP number | `12.345.678.9-012.345` |
| Iran, Islamic Republic Of | `IR` | Iranian national ID number (Kod-e Melli), used as tax ID for individuals | `001-234567-8` |
| Iran, Islamic Republic Of | `IR` | Iranian legal entity national ID / economic code (Shenase Melli) | `10861234561` |
| Ireland | `IE` | European VAT number (prefix `IE`) | `IE1234567AB` |
| Isle of Man | `IM` | Isle of Man VAT registration number (prefix `GB`) | `GB001234567` |
| Israel | `IL` | Israel VAT number | `246801357` |
| Italy | `IT` | European VAT number (prefix `IT`) | `IT12345678912` |
| Jamaica | `JM` | Jamaica Taxpayer Registration Number (TRN) | `123-456-789` |
| Japan | `JP` | Japanese Corporate Number (Hōjin Bangō) | `1234567891234` |
| Kazakhstan | `KZ` | Kazakhstan Business Identification Number (BIN) | `123456789012` |
| Kenya | `KE` | Kenya Revenue Authority Personal Identification Number (PIN) | `P000111111A` |
| Korea, Republic of | `KR` | Korean BRN | `123-45-67890` |
| Kuwait | `KW` | Kuwait Tax Identification Number (entity TIN) | `123456` |
| Kyrgyzstan | `KG` | Kyrgyzstan Taxpayer Identification Number (INN) | `12345678901234` |
| Lao People'S Democratic Republic | `LA` | Laos Tax Identification Number (TIN) | `123456789-000` |
| Latvia | `LV` | European VAT number (prefix `LV`) | `LV12345678912` |
| Lebanon | `LB` | Lebanon Tax Identification Number / VAT number | `22-987654321-601` |
| Lesotho | `LS` | Lesotho Tax Identification Number (TIN) | `12345678` |
| Liberia | `LR` | Liberia Taxpayer Identification Number (TIN) | `123456789` |
| Liechtenstein | `LI` | Liechtensteinian UID number | `CHE123456789` |
| Lithuania | `LT` | European VAT number (prefix `LT`) | `LT123456789123` |
| Luxembourg | `LU` | European VAT number (prefix `LU`) | `LU12345678` |
| Macao | `MO` | Macao Taxpayer Number (entities, industrial and profits tax) | `80123456` |
| Madagascar | `MG` | Madagascar Tax Identification Number (NIF) | `1234567890` |
| Malawi | `MW` | Malawi Taxpayer Identification Number (TPIN) | `2012345678` |
| Malaysia | `MY` | Malaysian FRP number | `12345678` |
| Malaysia | `MY` | Malaysian ITN | `C 1234567890` |
| Malaysia | `MY` | Malaysian SST number | `A12-3456-78912345` |
| Maldives | `MV` | Maldives GST Taxpayer Identification Number | `1000001GST501` |
| Malta | `MT` | European VAT number (prefix `MT`) | `MT12345678` |
| Marshall Islands | `MH` | Marshall Islands Employer Identification Number (EIN) | `08612-04` |
| Mauritania | `MR` | Mauritania Tax Identification Number (NIF) | `12345678` |
| Mauritius | `MU` | Mauritius Tax Account Number (TAN, entities) | `20123456` |
| Mexico | `MX` | Mexican RFC number | `ABC010203AB9` |
| Moldova, Republic of | `MD` | Moldova VAT Number | `1234567` |
| Monaco | `MC` | Monaco Intra-Community VAT Number (French format) (prefix `FR`) | `FR12345678901` |
| Mongolia | `MN` | Mongolia Tax Identification Number (TIN) | `1234567` |
| Montenegro | `ME` | Montenegro PIB Number | `12345678` |
| Morocco | `MA` | Morocco VAT Number (Identifiant Fiscal) | `12345678` |
| Morocco | `MA` | Morocco Common Business Identifier (ICE) | `001234567000012` |
| Mozambique | `MZ` | Mozambique Unique Taxpayer Number (NUIT) | `123456789` |
| Myanmar | `MM` | Myanmar Taxpayer Identification Number (TIN) | `123456789` |
| Nauru | `NR` | Nauru Taxpayer Identification Number (TIN) | `123-456-789` |
| Nepal | `NP` | Nepal PAN Number | `123456789` |
| Netherlands | `NL` | European VAT number (prefix `NL`) | `NL123456789B12` |
| New Caledonia | `NC` | New Caledonia Business Register Number (RIDET) | `0123456001` |
| New Zealand | `NZ` | New Zealand GST number | `123456789` |
| Nicaragua | `NI` | Nicaragua RUC (Registro Único de Contribuyente) | `J1310000252297` |
| Nicaragua | `NI` | Nicaragua Cédula de Identidad (used as RUC for individuals) | `607-190468-0001F` |
| Nigeria | `NG` | Nigeria Tax Identification Number (TIN) | `1234567890123` |
| North Macedonia | `MK` | North Macedonia VAT Number (prefix `MK`) | `MK1234567890123` |
| Northern Ireland | `XI` | Northern Ireland VAT number (Windsor Framework / EU protocol) (prefix `XI`) | `XI123456789` |
| Norway | `NO` | Norwegian VAT number | `123456789MVA` |
| Oman | `OM` | Oman VAT Registration Number (prefix `OM`) | `OM1100000300` |
| Pakistan | `PK` | Pakistan National Tax Number (company/AOP) | `1234567-8` |
| Pakistan | `PK` | Pakistan CNIC (used as NTN for individuals) | `42101-1234567-1` |
| Panama | `PA` | Panama RUC (Registro Único de Contribuyente) | `155646423-2-2015` |
| Papua New Guinea | `PG` | Papua New Guinea Taxpayer Identification Number (TIN) | `123456789` |
| Paraguay | `PY` | Paraguay RUC (Registro Único de Contribuyentes) | `12345678-9` |
| Peru | `PE` | Peru RUC (Registro Único de Contribuyentes) | `20123456789` |
| Philippines | `PH` | Philippines TIN | `246801627387` |
| Poland | `PL` | European VAT number (prefix `PL`) | `PL1234567890` |
| Portugal | `PT` | European VAT number (prefix `PT`) | `PT123456789` |
| Qatar | `QA` | Qatar Tax Identification Number (TIN) | `5123456789` |
| Romania | `RO` | European VAT number (prefix `RO`) | `RO1234567891` |
| Russian Federation | `RU` | Russian INN | `1234567891` |
| Rwanda | `RW` | Rwanda Taxpayer Identification Number (TIN) | `123456789` |
| Saint Lucia | `LC` | Saint Lucia Taxpayer Identification Number (TIN) | `001234` |
| San Marino | `SM` | San Marino COE (Codice Operatore Economico / Economic Operator Code) | `12345` |
| Sao Tome and Principe | `ST` | Sao Tome and Principe NIF (Numero de Identificacao Fiscal) | `123456789` |
| Saudi Arabia | `SA` | Saudi Arabia VAT | `123456789012345` |
| Saudi Arabia | `SA` | Saudi Arabia VAT | `398765432198765` |
| Senegal | `SN` | Senegal NINEA/COFI (Numero d'Identification Nationale des Entreprises et Associations with Code d'Identification Fiscale suffix) | `12345672A2` |
| Serbia | `RS` | Serbian PIB (Poreski Identifikacioni Broj / Tax Identification Number) | `123456789` |
| Seychelles | `SC` | Seychelles Tax Identification Number (TIN) | `123456789` |
| Singapore | `SG` | Singaporean GST | `M12345678X` |
| Singapore | `SG` | Singaporean UEN | `123456789F` |
| Slovakia | `SK` | European VAT number (prefix `SK`) | `SK1234567891` |
| Slovenia | `SI` | European VAT number (prefix `SI`) | `SI12345678` |
| South Africa | `ZA` | South African VAT number | `4123456789` |
| Spain | `ES` | Spanish CIF number | `A12345678` |
| Spain | `ES` | European VAT number (prefix `ES`) | `ESA1234567Z` |
| Sri Lanka | `LK` | Sri Lanka Taxpayer Identification Number (TIN) | `123456789` |
| Suriname | `SR` | Suriname FIN (Fiscal Identification Number) | `1234567890` |
| Swaziland | `SZ` | Eswatini (Swaziland) Taxpayer Identification Number (TIN) | `123456789` |
| Sweden | `SE` | European VAT number (prefix `SE`) | `SE123456789123` |
| Switzerland | `CH` | Switzerland VAT number | `CHE-123.456.789 MWST` |
| Taiwan, Province of China | `TW` | Taiwanese VAT | `12345678` |
| Tajikistan | `TJ` | Tajikistan Tax Identification Number (TIN) | `123456789` |
| Tanzania, United Republic of | `TZ` | Tanzania VAT Registration Number | `12345678A` |
| Thailand | `TH` | Thai VAT | `1234567891234` |
| Trinidad and Tobago | `TT` | Trinidad and Tobago BIR Number (Board of Inland Revenue Number) | `123456789-1` |
| Tunisia | `TN` | Tunisia Matricule Fiscal (Tax Identifier) | `1234567/A/B/M/000` |
| Turkey | `TR` | Turkey Tax Identification Number - Vergi Kimlik Numarası [Business] | `9123456789` |
| Turkey | `TR` | Turkey Tax Identification Number - Vergi Kimlik Numarası [Individual] | `12345678901` |
| Uganda | `UG` | Uganda Tax Identification Number (TIN) | `1014751879` |
| Ukraine | `UA` | Ukraine EDRPOU (Business Registration Number) | `12345678` |
| Ukraine | `UA` | Ukrainian VAT Number | `123456789` |
| United Arab Emirates | `AE` | United Arab Emirates TRN | `123456789012345` |
| United Kingdom | `GB` | UK VAT number (no longer checkable via EU VIES since Brexit; format only) (prefix `GB`) | `GB123456789` |
| United States | `US` | United States EIN | `12-3456789` |
| Uruguay | `UY` | Uruguay RUC (Registro Único Tributario) | `123456789012` |
| Uzbekistan | `UZ` | Uzbekistan Tax Identification Number (TIN) | `123456789` |
| Uzbekistan | `UZ` | Uzbekistan VAT Number | `123456789012` |
| Venezuela | `VE` | Venezuela RIF (Registro de Información Fiscal) | `V-12345678-9` |
| Vietnam | `VN` | Vietnam - Mã Sṍ Thuḗ (Personal Tax Code) | `1234567890` |
| Virgin Islands, U.S. | `VI` | US Virgin Islands EIN (US Federal Employer Identification Number) | `12-3456789` |
| Zambia | `ZM` | Zambia Tax Identification Number (TIN) | `1004751879` |
| Zimbabwe | `ZW` | Zimbabwe Tax Identification Number (TIN) | `1234567890` |

## Not yet supported

These ISO countries/territories have no registered tax ID rule yet — usually because they have no independent tax administration (e.g. uninhabited territories, dependencies using their parent country's system) or because no authoritative source could confirm the exact structural format:

`AX` Åland Islands, `AS` American Samoa, `AQ` Antarctica, `AG` Antigua and Barbuda, `BZ` Belize, `BM` Bermuda, `BT` Bhutan, `BW` Botswana, `BV` Bouvet Island, `IO` British Indian Ocean Territory, `KY` Cayman Islands, `CF` Central African Republic, `TD` Chad, `CX` Christmas Island, `CC` Cocos (Keeling) Islands, `KM` Comoros, `CG` Congo, `CU` Cuba, `DJ` Djibouti, `GQ` Equatorial Guinea, `ER` Eritrea, `FK` Falkland Islands (Malvinas), `GF` French Guiana, `PF` French Polynesia, `TF` French Southern Territories, `GL` Greenland, `GP` Guadeloupe, `GU` Guam, `GY` Guyana, `HM` Heard Island and Mcdonald Islands, `VA` Holy See (Vatican City State), `IQ` Iraq, `JE` Jersey, `JO` Jordan, `KI` Kiribati, `KP` Korea, Democratic People'S Republic of, `LY` Libyan Arab Jamahiriya, `ML` Mali, `MQ` Martinique, `YT` Mayotte, `FM` Micronesia, Federated States of, `MS` Montserrat, `NA` Namibia, `AN` Netherlands Antilles, `NE` Niger, `NU` Niue, `NF` Norfolk Island, `MP` Northern Mariana Islands, `PW` Palau, `PS` Palestinian Territory, Occupied, `PN` Pitcairn, `PR` Puerto Rico, `RE` Reunion, `SH` Saint Helena, `KN` Saint Kitts and Nevis, `PM` Saint Pierre and Miquelon, `VC` Saint Vincent and the Grenadines, `WS` Samoa, `SL` Sierra Leone, `SB` Solomon Islands, `SO` Somalia, `GS` South Georgia and the South Sandwich Islands, `SD` Sudan, `SJ` Svalbard and Jan Mayen, `SY` Syrian Arab Republic, `TL` Timor-Leste, `TG` Togo, `TK` Tokelau, `TO` Tonga, `TM` Turkmenistan, `TC` Turks and Caicos Islands, `TV` Tuvalu, `UM` United States Minor Outlying Islands, `VU` Vanuatu, `VG` Virgin Islands, British, `WF` Wallis and Futuna, `EH` Western Sahara, `YE` Yemen.

