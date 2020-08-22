import Joi from '@hapi/joi'

export interface EventResponse {
    type: string
}
export const EventResponseSchema = Joi.any();

/*****************************************************
 * REDEMPTION
 */
export interface EventRedemptionResponse {
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
    }
}
export const EventRedemptionResponseSchema = Joi.object({
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
/*****************************************************
 * FOLLOW
 */
export interface EventFollowResponse {
    _id: string
    channel: string
    createdAt: string
    type: string
    provider: string
    flagged: boolean
    updatedAt: string
    data: {
        username: string
        providerId: string
        displayName: string
        avatar: string
        quantity: number
    }
}

export const EventFollowResponseSchema = Joi.object({
    _id: Joi.string().required(),
    channel: Joi.string().required(),
    createdAt: Joi.string().required(),
    type: Joi.string().required(),
    provider: Joi.string().required(),
    flagged: Joi.boolean().required(),
    updatedAt: Joi.string().required(),
    data: Joi.object({
        username: Joi.string().required(),
        providerId: Joi.string().required(),
        displayName: Joi.string().required(),
        avatar: Joi.string().required(),
        quantity: Joi.number().required(),
    }).required(),
});
/*****************************************************
 * SUBSCRIBER
 */
export interface EventSubscriberResponse {
    _id: string
    channel: string
    createdAt: string
    type: string
    provider: string
    flagged: boolean
    updatedAt: string
    data: {
        username: string
        providerId: string
        displayName: string
        avatar: string
        amount: number
        tier: string
        quantity: number
    }
}
export const EventSubscriberResponseSchema = Joi.object({
    _id: Joi.string().required(),
    channel: Joi.string().required(),
    createdAt: Joi.string().required(),
    type: Joi.string().required(),
    provider: Joi.string().required(),
    flagged: Joi.boolean().required(),
    updatedAt: Joi.string().required(),
    data: Joi.object({
        username: Joi.string().required(),
        providerId: Joi.string().required(),
        displayName: Joi.string().required(),
        avatar: Joi.string().required(),
        amount: Joi.number().required(),
        tier: Joi.string().required(),
        quantity: Joi.number().required(),
    }).required(),
});
/*****************************************************
 * CHEER
 */
export interface EventCheerResponse {
    _id: string
    channel: string
    createdAt: string
    type: string
    provider: string
    flagged: boolean
    updatedAt: string
    data: {
        username: string
        providerId: string
        displayName: string
        amount:  number
        message:  string
        quantity:  string
        avatar: string
    }
}

export const EventCheerResponseSchema = Joi.object({
    _id: Joi.string().required(),
    channel: Joi.string().required(),
    createdAt: Joi.string().required(),
    type: Joi.string().required(),
    provider: Joi.string().required(),
    flagged: Joi.boolean().required(),
    updatedAt: Joi.string().required(),
    data: Joi.object({
        username: Joi.string().required(),
        providerId: Joi.string().required(),
        displayName: Joi.string().required(),
        amount: Joi.number().required(),
        message: Joi.string().required(),
        quantity: Joi.number().required(),
        avatar: Joi.string().required(),
    }).required(),
});
/*****************************************************
 * TIP
 */
export interface EventTipResponse {
    _id: string
    channel: string
    createdAt: string
    type: string
    provider: string
    updatedAt: string
    data: {
        username: string
        amount:  number
        currency:  string
        message:  string
        avatar: string
    }
}

export const EventTipResponseSchema = Joi.object({
    _id: Joi.string().required(),
    channel: Joi.string().required(),
    createdAt: Joi.string().required(),
    type: Joi.string().required(),
    provider: Joi.string().required(),
    updatedAt: Joi.string().required(),
    data: Joi.object({
        username: Joi.string().required(),
        amount: Joi.number().required(),
        currency: Joi.string().required(),
        message: Joi.string().required(),
        avatar: Joi.string().required(),
    }).required(),
});