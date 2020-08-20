import Joi from "@hapi/joi";

export interface User {
    "badge-info": {
        "subscriber"?: number
    },
    "badges": {
        "broadcaster"?: number
        "subscriber"?: number
        "moderator"?: number
        "partner"?: number
    },
    "client-nonce"?: string
    "color": string
    "display-name": string
    "emotes": {}
    "flags": string
    "id": string
    "mod": boolean
    "room-id": number
    "subscriber": boolean
    "tmi-sent-ts": number
    "turbo": boolean
    "user-id": number
    "user-type": string
    "emotes-raw": string
    "badge-info-raw": string
    "badges-raw": string
    "username": string
    "message-type": string
}

export const UserSchema = Joi.object({
    "badge-info": Joi.object().keys({
        "subscriber": Joi.number().required(),
    }).allow(null).required(),
    "badges": Joi.object().keys({
        "broadcaster": Joi.number(),
        "subscriber": Joi.number(),
        "moderator": Joi.number(),
        "partner": Joi.number(),
    }).required(),
    "client-nonce": Joi.string(),
    "color": Joi.string().allow(null).required(),
    "display-name": Joi.string().required(),
    "emotes": Joi.object().allow(null).required(),
    "flags": Joi.string().allow(null).required(),
    "id": Joi.string().required(),
    "mod": Joi.boolean().required(),
    "room-id": Joi.number().required(),
    "subscriber": Joi.boolean().required(),
    "tmi-sent-ts": Joi.number().required(),
    "turbo": Joi.boolean().required(),
    "user-id": Joi.number().required(),
    "user-type": Joi.string().allow(null).required(),
    "emotes-raw": Joi.string().allow(null).required(),
    "badge-info-raw": Joi.string().allow(null).required(),
    "badges-raw": Joi.string().required(),
    "username": Joi.string().required(),
    "message-type": Joi.string().required(),
});