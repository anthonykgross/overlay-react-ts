import Joi from '@hapi/joi'

export interface SubscribeContestResponse {
    room: string
    message: string
}
export const SubscribeContestResponseSchema = Joi.object({
    room: Joi.string().required(),
    message: Joi.string().required(),
});