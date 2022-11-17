export interface Country {

    name: string;
    code: string;
    tax: {
        vat_prefix: string[];
        enum: string;
        tax_id_description: string;
        tax_id_description_country: string;
        example: string;
        regex: RegExp[]
    }[]

}



export interface ValidationResponse {
    country_name: string;
    country_code: string;
    tax_id: string;
    valid: boolean;
}