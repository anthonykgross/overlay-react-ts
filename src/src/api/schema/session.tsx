import Joi from '@hapi/joi'

export const SessionSchema = Joi.object({
    data: Joi.object().keys({
        "follower-latest": Joi.object().keys({
            name: Joi.string().required()
        }).required(),
        "follower-session": Joi.object().keys({
            count: Joi.number().required()
        }).required(),
        "follower-week": Joi.object().keys({
            count: Joi.number().required()
        }).required(),
        "follower-month": Joi.object().keys({
            count: Joi.number().required()
        }).required(),
        "follower-goal": Joi.object().keys({
            count: Joi.number().required()
        }).required(),
        "follower-total": Joi.object().keys({
            count: Joi.number().required()
        }).required(),
        "subscriber-latest": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
            tier: Joi.string().required(),
            message: Joi.string().required(),
            sender: Joi.string().required(),
            gifted: Joi.boolean().required(),
        }).required(),
        "subscriber-new-latest": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
            message: Joi.string().required(),
        }).required(),
        "subscriber-resub-latest": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
            message: Joi.string().required(),
        }).required(),
        "subscriber-gifted-latest": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
            tier: Joi.string().required(),
            message: Joi.string().required(),
            sender: Joi.string().required(),
        }).required(),
        "subscriber-session": Joi.object().keys({
            count: Joi.number().required(),
        }).required(),
        "subscriber-new-session": Joi.object().keys({
            count: Joi.number().required(),
        }).required(),
        "subscriber-resub-session": Joi.object().keys({
            count: Joi.number().required(),
        }).required(),
        "subscriber-gifted-session": Joi.object().keys({
            count: Joi.number().required(),
        }).required(),
        "subscriber-week": Joi.object().keys({
            count: Joi.number().required(),
        }).required(),
        "subscriber-month": Joi.object().keys({
            count: Joi.number().required(),
        }).required(),
        "subscriber-total": Joi.object().keys({
            count: Joi.number().required(),
        }).required(),
        "subscriber-goal": Joi.object().keys({
            amount: Joi.number().required(),
        }).required(),
        "subscriber-points": Joi.object().keys({
            amount: Joi.number().required(),
        }).required(),
        "subscriber-alltime-gifter": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
        }).required(),
        "host-latest": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
        }).required(),
        "raid-latest": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
        }).required(),
        "cheer-session": Joi.object().keys({
            amount: Joi.number().required(),
        }).required(),
        "cheer-week": Joi.object().keys({
            amount: Joi.number().required(),
        }).required(),
        "cheer-month": Joi.object().keys({
            amount: Joi.number().required(),
        }).required(),
        "cheer-total": Joi.object().keys({
            amount: Joi.number().required(),
        }).required(),
        "cheer-goal": Joi.object().keys({
            amount: Joi.number().required(),
        }).required(),
        "cheer-count": Joi.object().keys({
            count: Joi.number().required(),
        }).required(),
        "cheer-latest": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
            message: Joi.string().required(),
        }).required(),
        "cheer-session-top-donation": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
        }).required(),
        "cheer-weekly-top-donation": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
        }).required(),
        "cheer-monthly-top-donation": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
        }).required(),
        "cheer-alltime-top-donation": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
        }).required(),
        "cheer-session-top-donator": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
        }).required(),
        "cheer-weekly-top-donator": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
        }).required(),
        "cheer-monthly-top-donator": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
        }).required(),
        "cheer-alltime-top-donator": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
        }).required(),
    }).required(),
    settings: Joi.object().keys({
        autoReset: Joi.boolean(),
        calendar: Joi.boolean(),
    }).required(),
    provider: Joi.string(),
    lastReset: Joi.string(),
    _id: Joi.string(),
    channel: Joi.string().required(),
    createdAt: Joi.string().required(),
    updatedAt: Joi.string().required(),
    __v: Joi.number().required(),
});
