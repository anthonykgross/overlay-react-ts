import Joi from '@hapi/joi'

export const ContestSchema = Joi.object({
    botResponses: Joi.boolean(),
    totalAmount: Joi.number().required(),
    totalUsers: Joi.number().required(),
    _id: Joi.string().required(),
    title: Joi.string().required(),
    minBet: Joi.number().required(),
    maxBet: Joi.number().required(),
    duration: Joi.number().required(),
    options: Joi.array().items(
        Joi.object().keys({
            totalAmount: Joi.number().required(),
            totalUsers: Joi.number().required(),
            _id: Joi.string().required(),
            title: Joi.string().required(),
            command: Joi.string().required(),
            winner: Joi.boolean(),
        })
    ).required(),
    channel: Joi.string().required(),
    state: Joi.string().required(),
    createdAt: Joi.string(),
    updatedAt: Joi.string(),
    startedAt: Joi.string(),
    endedAt: Joi.string(),
});