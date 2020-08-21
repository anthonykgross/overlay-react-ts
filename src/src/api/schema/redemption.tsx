import Joi from "@hapi/joi";

export interface Redemption {
    bot: {
        identifier: string
    }
    cooldown: {
        user: number
        global: number
        category: number
    }
    quantity: {
        total: number
    }
    accessCodes: {
        keys: [],
        mode: string
        random: boolean
    }
    alert: {
        graphics: {
            duration: number
            type: string
            src: string
        }
        audio: {
            volume: number
            src: string
        }
        enabled: boolean
    },
    subscriberOnly: boolean
    sources: [],
    userInput: [],
    order: number
    _id: string
    enabled: boolean
    featured: boolean
    name: string
    description: string
    type: string
    cost: number
    allowMessages: boolean
    categoryName: string,
    public: boolean
    channel: string
    createdAt: string
    updatedAt: string
}

export const RedemptionSchema = Joi.object({
    bot: Joi.object().keys({
        identifier: Joi.string().required(),
    }).required(),
    cooldown: Joi.object().keys({
        user: Joi.number().required(),
        global: Joi.number().required(),
        category: Joi.number().required(),
    }).required(),
    quantity: Joi.object().keys({
        total: Joi.number().required(),
    }).required(),
    accessCodes: Joi.object().keys({
        keys: Joi.array(),
        mode: Joi.string().required(),
        random: Joi.boolean().required(),
    }).required(),
    alert: Joi.object().keys({
        graphics: Joi.object().keys({
            duration: Joi.number().required(),
            type: Joi.string().required(),
            src: Joi.string().required(),
        }).required(),
        audio: Joi.object().keys({
            volume: Joi.number().required(),
            src: Joi.string().allow(null).required(),
        }).required(),
        enabled: Joi.boolean().required(),
    }).required(),
    subscriberOnly: Joi.boolean().required(),
    sources: Joi.array().items(
        Joi.string().valid('bot', 'website', 'extension')
    ).required(),
    userInput: Joi.array(),
    order: Joi.number().required(),
    _id: Joi.string().required(),
    enabled: Joi.boolean().required(),
    featured: Joi.boolean().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    type: Joi.string().required(),
    cost: Joi.number().required(),
    allowMessages: Joi.boolean().required(),
    categoryName: Joi.string().empty(''),
    public: Joi.boolean().required(),
    channel: Joi.string().required(),
    createdAt: Joi.string().required(),
    updatedAt: Joi.string().required(),
});