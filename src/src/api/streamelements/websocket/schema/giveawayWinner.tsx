import Joi from "@hapi/joi";

export interface Winner {
    new: boolean
    providerId: string
    subscriber: boolean
    tickets: number
    username: string
}

export interface Data {
    totalTickets: number
    totalUsers: number
    winner: Winner
}

export interface GiveawayWinnerResponse {
    channelId: string
    giveawayId: string
    data: Data
    event: string
    state: string
}
export const GiveawayWinnerResponseSchema = Joi.object({
    channelId: Joi.string().required(),
    giveawayId: Joi.string().required(),
    data: Joi.object().keys({
        totalTickets: Joi.number().required(),
        totalUsers: Joi.number().required(),
        winner: Joi.object().keys({
            new: Joi.boolean().required(),
            providerId: Joi.string().required(),
            subscriber: Joi.boolean().required(),
            tickets: Joi.number().required(),
            username: Joi.string().required()
        }).required(),
    }).required(),
    event: Joi.string().required(),
    state: Joi.string().required(),
});