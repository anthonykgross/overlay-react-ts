import Joi from '@hapi/joi'

export interface AuthenticatedResponse {
    channelId: string
    clientId: string
    message: string
    project: string
}
export const AuthenticatedResponseSchema = Joi.object({
    channelId: Joi.string().required(),
    clientId: Joi.string().required(),
    message: Joi.string().required(),
    project: Joi.string().required(),
});