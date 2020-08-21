import Joi from '@hapi/joi'

export interface EventUpdateResponse {
    name: string
    data: {}
}
export const EventUpdateResponseSchema = Joi.object({
    name: Joi.string().required(),
    data: Joi.object().required(),
});
/*****************************************************
 * RedemptionLatest
 */
export interface EventUpdateRedemptionLatestResponse extends EventUpdateResponse{
    data: {
        itemId: string,
        type: string
        name: string
        message: string
        item: string
    }
}
export const EventUpdateRedemptionLatestResponseSchema = Joi.object({
    name: Joi.string().required(),
    data: Joi.object().keys({
        itemId: Joi.string().required(),
        type: Joi.string().required(),
        name: Joi.string().required(),
        message: Joi.string().empty(''),
        item: Joi.string().required(),
    }).required(),
});
