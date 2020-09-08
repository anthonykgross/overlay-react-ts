import {Action} from "../../app/schema";
import Joi from "@hapi/joi";

export interface Participant {
    _id: string
    username: string
    avatar?: string
    giveaway?: string
    subscriber?: boolean
    providerId?: number
    tickets: number
    createdAt: string
}

export interface Giveaway {
    _id: string
    channel: string
    title: string
    description: string
    preview: string
    cost: number
    subscriberLuck: number
    subscriberOnly: boolean
    freeTicket: boolean
    totalAmount: number
    totalUsers: number
    maxTickets: number
    botResponses: boolean
    state: string
    startedAt?: string
    endedAt?: string
    createdAt: string
    updatedAt: string
    winners: Participant[]
    participants: Participant[]
}

export const ParticipantSchema = Joi.object().keys({
    "_id": Joi.string().required(),
    "username": Joi.string().required(),
    "avatar": Joi.string(),
    "giveaway": Joi.string(),
    "subscriber": Joi.boolean(),
    "providerId": Joi.number(),
    "tickets": Joi.number().required(),
    "createdAt": Joi.string().required()
});

export const GiveawaySchema = Joi.object({
    "_id": Joi.string().required(),
    "channel": Joi.string().required(),
    "title": Joi.string().required(),
    "description": Joi.string().empty(''),
    "preview": Joi.string().empty(''),
    "cost": Joi.number().required(),
    "subscriberLuck": Joi.number().required(),
    "subscriberOnly": Joi.boolean().required(),
    "freeTicket": Joi.boolean().required(),
    "totalAmount": Joi.number().required(),
    "totalUsers": Joi.number().required(),
    "maxTickets": Joi.number().required(),
    "botResponses": Joi.boolean().required(),
    "state": Joi.string().required(),
    "startedAt": Joi.string(),
    "endedAt": Joi.string(),
    "createdAt": Joi.string().required(),
    "updatedAt": Joi.string().required(),
    "winners": Joi.array().items(ParticipantSchema).required()
});


export interface ListParticipants {
    total: number
    limit: number
    offset: number
    entries: Participant[]
}
export const ListParticipantsSchema = Joi.object({
    "total": Joi.number().required(),
    "limit": Joi.number().required(),
    "offset": Joi.number().required(),
    "entries": Joi.array().items(ParticipantSchema).required()
});

export interface State {
    active?: Giveaway
    giveaways: Giveaway[]
}

export interface NewGiveawayAction extends Action {
    response: Giveaway
}

export interface CloseGiveawayAction extends Action {
    response: {}
}

export interface RefundGiveawayAction extends Action {
    response: {}
}

export interface CompleteGiveawayAction extends Action {
    response: {}
}

export interface WinnerGiveawayAction extends Action {
    response: Participant
}

export interface EnterGiveawayAction extends Action {
    response: Participant
}

export interface SwitchGiveawayAction extends Action {
    response: {}
}