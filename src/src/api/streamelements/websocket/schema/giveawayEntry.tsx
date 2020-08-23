import Joi from "@hapi/joi";

export interface Entry {
    providerId: string
    username: string
    subscriber: boolean
    tickets: number
    new: boolean
}

export interface Data {
    totalTickets: string
    totalUsers: string
    entry: Entry
}

export interface GiveawayEntryResponse {
    channelId: string
    giveawayId: string
    data: Data
    event: string
    state: string
}

export const GiveawayEntryResponseSchema = Joi.object({
    channelId: Joi.string().required(),
    giveawayId: Joi.string().required(),
    data: Joi.object().keys({
        totalTickets: Joi.number().required(),
        totalUsers: Joi.number().required(),
        entry: Joi.object().keys({
            providerId: Joi.string().required(),
            username: Joi.string().required(),
            subscriber: Joi.boolean().required(),
            tickets: Joi.number().required(),
            new: Joi.boolean().required()
        }).required()
    }).required(),
    event: Joi.string().required(),
    state: Joi.string().required(),
});