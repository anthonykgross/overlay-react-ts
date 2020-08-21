import Joi from '@hapi/joi'

export interface EventTestResponse {
    event: {}
    listener: string
}

export const EventTestResponseSchema = Joi.object({
    event: Joi.any(),
    listener: Joi.string().required(),
});