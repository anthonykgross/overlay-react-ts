import Joi from '@hapi/joi'

export interface SubscribeGiveawayResponse {
    room: string
    message: string
}
export const SubscribeGiveawayResponseSchema = Joi.object({
    room: Joi.string().required(),
    message: Joi.string().required(),
});