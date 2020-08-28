import Joi from "@hapi/joi";
import {Action} from "../../../app/schema";

export interface User {
    "badge-info": {
        "broadcaster"?: number
        "subscriber"?: number
        "moderator"?: number
        "partner"?: number
        "bits"?: number
        "bits-leader"?: number
    },
    "badges": {
        "broadcaster"?: number
        "subscriber"?: number
        "moderator"?: number
        "partner"?: number
        "bits"?: number
        "bits-leader"?: number
    },
    "client-nonce"?: string
    "color": string
    "display-name": string
    "emotes": any
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
    "emote-only"?: string
}

export const UserSchema = Joi.object({
    "badge-info": Joi.object().keys({
        "broadcaster": Joi.number(),
        "subscriber": Joi.number(),
        "moderator": Joi.number(),
        "partner": Joi.number(),
        "bits": Joi.number(),
        "founder": Joi.number(),
        "bits-leader": Joi.number(),
    }).allow(null).required(),
    "badges": Joi.object().keys({
        "broadcaster": Joi.number(),
        "subscriber": Joi.number(),
        "moderator": Joi.number(),
        "partner": Joi.number(),
        "bits": Joi.number(),
        "founder": Joi.number(),
        "bits-leader": Joi.number(),
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
    "emote-only": Joi.boolean(),
});

export interface Message {
    user: User,
    id: string,
    message: string
}

export interface MessageAction extends Action {
    type: string
    response: Message
}

export interface Emote {
    user: User
    emote: string
}
export interface EmoteAction extends Action {
    type: string
    response: Emote
}