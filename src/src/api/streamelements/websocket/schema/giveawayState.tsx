import Joi from "@hapi/joi";

export interface Data {
    totalTickets: string
    totalUsers: string
}
export interface GiveawayStateResponse {
    channelId: string
    giveawayId?: string
    data?: Data[]
    event: string
    state: string
}
export const GiveawayStateResponseSchema = Joi.object({
    channelId: Joi.string().required(),
    giveawayId: Joi.string(),
    data: Joi.array().items(
        Joi.object().keys({
            totalTickets: Joi.string().required(),
            totalUsers: Joi.string().required()
        })
    ),
    event: Joi.string().required(),
    state: Joi.string().required(),
});