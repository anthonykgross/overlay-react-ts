import {Schema} from "@hapi/joi";

export interface Response {}

export interface Action {
    type: string
    response: Response
}

export function checkSchema(schema: Schema, value: any) {
    let {error} = schema.validate(value);
    if (error) {
        console.error(error.message, value);
    }
}