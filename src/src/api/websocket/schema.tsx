import Joi from '@hapi/joi'

/*******************************************
 * Authenticated
 */
export interface AuthenticatedResponse {
    channelId: string,
    clientId: string,
    message: string,
    project: string
}
export const AuthenticatedResponseSchema = Joi.object({
    channelId: Joi.string().required(),
    clientId: Joi.string().required(),
    message: Joi.string().required(),
    project: Joi.string().required(),
});
export interface AuthenticatedAction {
    type: string,
    response: AuthenticatedResponse
}
/*******************************************
 * Connect
 */
/*******************************************
 * Disconnect
 */
/*******************************************
 * EventTest
 */
export interface EventTestResponse {
    event: {}
    listener: string
}
export const EventTestSchema = Joi.object({
    event: Joi.any().required(),
    listener: Joi.string().required(),
});
export interface EventTestAction {
    type: string,
    response: EventTestResponse
}
/*******************************************
 * Event
 */
export interface EventResponse {
    _id: string,
    channel: string,
    createdAt: string,
    type: string,
    updatedAt: string,
    data: {
        amount: number,
        avatar: string,
        message: string,
        redemption: string,
        username: string,
    },
}
export const EventSchema = Joi.object({
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
export interface EventAction {
    type: string,
    response: EventResponse
}
/*******************************************
 * EventUpdate
 */
export interface EventUpdateResponse {
    name: string,
    data: {}
}
export const EventUpdateSchema = Joi.object({
    name: Joi.string().required(),
    data: Joi.object().required(),
});
export interface EventUpdateAction {
    type: string,
    response: EventUpdateResponse
}
/*******************************************
 * SubscribeContest
 */
export interface SubscribeContestResponse {
    room: string,
    message: string
}
export const SubscribeContestResponseSchema = Joi.object({
    room: Joi.string().required(),
    message: Joi.string().required(),
});
export interface SubscribeContestAction {
    type: string,
    response: SubscribeContestResponse
}
/*******************************************
 * SubscribeGiveaway
 */
export interface SubscribeGiveawayResponse {
    room: string,
    message: string
}
export const SubscribeGiveawayResponseSchema = Joi.object({
    room: Joi.string().required(),
    message: Joi.string().required(),
});
export interface SubscribeGiveawayAction {
    type: string,
    response: SubscribeGiveawayResponse
}