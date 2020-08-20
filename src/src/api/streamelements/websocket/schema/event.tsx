import Joi from '@hapi/joi'

export interface EventResponse {
    _id: string
    channel: string
    createdAt: string
    type: string
    updatedAt: string
    data: {
        amount: number
        avatar: string
        message: string
        redemption: string
        username: string
    },
}
export const EventResponseSchema = Joi.object({
    _id: Joi.string().required(),
    channel: Joi.string().required(),
    createdAt: Joi.string().required(),
    type: Joi.string().required(),
    updatedAt: Joi.string().required(),
    data: Joi.object({
        amount: Joi.number().required(),
        avatar: Joi.string().required(),
        message: Joi.string().empty(''),
        redemption: Joi.string().required(),
        username: Joi.string().required(),
    }).required(),
});