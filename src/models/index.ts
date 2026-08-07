export interface Country {

    name: string;
    code: string;
    tax: {
        vat_prefix: string;
        enum: string;
        tax_id_description: string;
        tax_id_description_country: string;
        example: string;
        regex: RegExp[]
    }[];

}



export interface ValidationResponse {
    country_name: string;
    country_code: string;
    tax_prefix: string;
    tax_id: string;
    is_valid_format: boolean;
}



export interface VIESRequestBody {
    country_code: string;
    vat_prefix?: string;
    vat_number: string;
}



export interface VIESResponse {
    vatNumber: string;
    is_valid: boolean;
    countryCode: string;
    businessName: string;
    businessAddress: string;
    requestedAt?: Date;
}
