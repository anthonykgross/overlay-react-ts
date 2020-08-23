import Joi from "@hapi/joi";

export interface GiveawayStateResponse {
    channelId: string
    giveawayId: string
    event: string
    state: string
}
export const GiveawayStateResponseSchema = Joi.object({
    channelId: Joi.string().required(),
    giveawayId: Joi.string().required(),
    event: Joi.string().required(),
    state: Joi.string().required(),
});

export interface Data {
    totalTickets?: string
    totalUsers?: string
}

export interface GiveawayStateCompletedResponse {
    channelId: string
    giveawayId: string
    data: Data
    event: string
    state: string
}
export const GiveawayStateCompletedResponseSchema = Joi.object({
    channelId: Joi.string().required(),
    giveawayId: Joi.string().required(),
    data: Joi.object().keys({
        totalTickets: Joi.number(),
        totalUsers: Joi.number()
    }).required(),
    event: Joi.string().required(),
    state: Joi.string().required(),
});