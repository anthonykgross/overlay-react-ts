import Joi from '@hapi/joi'

interface Follower {
    name: string
    createdAt: string
}

interface Subscriber {
    name: string
    tier: string
    amount: number
    createdAt: string
}

interface Cheerer {
    name: string
    amount: number
    createdAt: string
}

interface Tipper {
    name: string
    amount: number
    createdAt: string
}

export interface Session {
    data: {
        "follower-latest": {
            "name": string
        },
        "follower-session": {
            "count": number
        },
        "follower-week": {
            "count": number
        },
        "follower-month": {
            "count": number
        },
        "follower-goal": {
            "amount": number
        },
        "follower-total": {
            "count": number
        },
        "subscriber-latest": {
            "name": string
            "amount": number
            "tier": string
            "message": string
            "sender": string
            "gifted": null
        },
        "subscriber-new-latest": {
            "name": string
            "amount": number
            "message": string
        },
        "subscriber-resub-latest": {
            "name": string,
            "amount": number,
            "message": string
        },
        "subscriber-gifted-latest": {
            "name": string
            "amount": number
            "message": string
            "tier": string
            "sender": string
        },
        "subscriber-session": {
            "count": number
        },
        "subscriber-new-session": {
            "count": number
        },
        "subscriber-resub-session": {
            "count": number
        },
        "subscriber-gifted-session": {
            "count": number
        },
        "subscriber-week": {
            "count": number
        },
        "subscriber-month": {
            "count": number
        },
        "subscriber-goal": {
            "amount": number
        },
        "subscriber-total": {
            "count": number
        },
        "subscriber-points": {
            "amount": number
        },
        "subscriber-alltime-gifter": {
            "name": string
            "amount": number
        },
        "host-latest": {
            "name": string,
            "amount": number
        },
        "raid-latest": {
            "name": string,
            "amount": number
        },
        "cheer-session": {
            "amount": number
        },
        "cheer-week": {
            "amount": number
        },
        "cheer-month": {
            "amount": number
        },
        "cheer-total": {
            "amount": number
        },
        "cheer-count": {
            "count": number
        },
        "cheer-goal": {
            "amount": number
        },
        "cheer-latest": {
            "name": string
            "amount": number
            "message": string
        },
        "cheer-session-top-donation": {
            "name": string
            "message": string
            "amount": number
        },
        "cheer-weekly-top-donation": {
            "name": string
            "message": string
            "amount": number
        },
        "cheer-monthly-top-donation": {
            "name": string
            "message": string
            "amount": number
        },
        "cheer-alltime-top-donation": {
            "name": string
            "message": string
            "amount": number
        },
        "cheer-session-top-donator": {
            "name": string
            "message": string
            "amount": number
        },
        "cheer-weekly-top-donator": {
            "name": string
            "message": string
            "amount": number
        },
        "cheer-monthly-top-donator": {
            "name": string
            "message": string
            "amount": number
        },
        "cheer-alltime-top-donator": {
            "name": string
            "message": string
            "amount": number
        },
        "tip-latest": {
            "name": string
            "amount": number
            "message": string
        },
        "tip-session-top-donation": {
            "name": string
            "amount": number
        },
        "tip-weekly-top-donation": {
            "name": string
            "amount": number
        },
        "tip-monthly-top-donation": {
            "name": string
            "amount": number
        },
        "tip-alltime-top-donation": {
            "name": string
            "amount": number
        },
        "tip-session-top-donator": {
            "name": string
            "amount": number
        },
        "tip-weekly-top-donator": {
            "name": string
            "amount": number
        },
        "tip-monthly-top-donator": {
            "name": string
            "amount": number
        },
        "tip-alltime-top-donator": {
            "name": string
            "amount": number
        },
        "tip-session": {
            "amount": number
        },
        "tip-week": {
            "amount": number
        },
        "tip-month": {
            "amount": number
        },
        "tip-total": {
            "amount": number
        },
        "tip-count": {
            "count": number
        },
        "tip-goal": {
            "amount": number
        },
        "merch-goal-orders": {
            "amount": number
        },
        "merch-goal-items": {
            "amount": number
        },
        "merch-goal-total": {
            "amount": number
        },
        "follower-recent": Follower[]
        "subscriber-recent": Subscriber[]
        "host-recent": []
        "raid-recent": []
        "cheer-recent": Cheerer[]
        "tip-recent": Tipper[]
        "merch-recent": []
        "merch-latest": {
            "amount": number
            "items": []
            "name": string
        }
    }
    settings: {
        "autoReset": boolean
        "calendar": boolean
    }
    provider: string
    lastReset: string
    _id: string
    channel: string
    createdAt: string
    updatedAt: string
    __v: number
}

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
            amount: Joi.number().required()
        }).required(),
        "follower-total": Joi.object().keys({
            count: Joi.number().required()
        }).required(),
        "subscriber-latest": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
            tier: Joi.string().required(),
            message: Joi.string().allow(null).required(),
            sender: Joi.string().allow(null).required(),
            gifted: Joi.boolean().allow(null).required(),
        }).required(),
        "subscriber-new-latest": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
            message: Joi.string().allow(null).required(),
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
            name: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "raid-latest": Joi.object().keys({
            name: Joi.string().empty(''),
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
            name: Joi.string().empty(''),
            message: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "cheer-weekly-top-donation": Joi.object().keys({
            name: Joi.string().empty(''),
            message: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "cheer-monthly-top-donation": Joi.object().keys({
            name: Joi.string().empty(''),
            message: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "cheer-alltime-top-donation": Joi.object().keys({
            name: Joi.string().empty(''),
            message: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "cheer-session-top-donator": Joi.object().keys({
            name: Joi.string().empty(''),
            message: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "cheer-weekly-top-donator": Joi.object().keys({
            name: Joi.string().empty(''),
            message: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "cheer-monthly-top-donator": Joi.object().keys({
            name: Joi.string().empty(''),
            message: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "cheer-alltime-top-donator": Joi.object().keys({
            name: Joi.string().empty(''),
            message: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "tip-latest": Joi.object().keys({
            name: Joi.string().required(),
            amount: Joi.number().required(),
            message: Joi.string().required(),
        }).required(),
        "tip-session-top-donation": Joi.object().keys({
            name: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "tip-weekly-top-donation": Joi.object().keys({
            name: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "tip-monthly-top-donation": Joi.object().keys({
            name: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "tip-alltime-top-donation": Joi.object().keys({
            name: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "tip-session-top-donator": Joi.object().keys({
            name: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "tip-weekly-top-donator": Joi.object().keys({
            name: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "tip-monthly-top-donator": Joi.object().keys({
            name: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "tip-alltime-top-donator": Joi.object().keys({
            name: Joi.string().empty(''),
            amount: Joi.number().required(),
        }).required(),
        "tip-session": Joi.object().keys({
            amount: Joi.number().required(),
        }).required(),
        "tip-week": Joi.object().keys({
            amount: Joi.number().required(),
        }).required(),
        "tip-month": Joi.object().keys({
            amount: Joi.number().required(),
        }).required(),
        "tip-total": Joi.object().keys({
            amount: Joi.number().required(),
        }).required(),
        "tip-goal": Joi.object().keys({
            amount: Joi.number().required(),
        }).required(),
        "merch-goal-orders": Joi.object().keys({
            amount: Joi.number().required(),
        }).required(),
        "merch-goal-items": Joi.object().keys({
            amount: Joi.number().required(),
        }).required(),
        "merch-goal-total": Joi.object().keys({
            amount: Joi.number().required(),
        }).required(),
        "merch-latest": Joi.object().keys({
            name: Joi.string().empty(''),
            amount: Joi.number().required(),
            items: Joi.array().items().required(),
        }).required(),
        "tip-count": Joi.object().keys({
            count: Joi.number().required(),
        }).required(),
        "follower-recent": Joi.array().items(
            Joi.object().keys({
                name: Joi.string().required(),
                createdAt: Joi.string().required(),
            })
        ).required(),
        "subscriber-recent": Joi.array().items(
            Joi.object().keys({
                name: Joi.string().required(),
                amount: Joi.number().required(),
                tier: Joi.string().required(),
                createdAt: Joi.string().required(),
            })
        ).required(),
        "cheer-recent": Joi.array().items(
            Joi.object().keys({
                name: Joi.string().required(),
                amount: Joi.number().required(),
                createdAt: Joi.string().required(),
            })
        ).required(),
        "tip-recent": Joi.array().items(
            Joi.object().keys({
                name: Joi.string().required(),
                amount: Joi.number().required(),
                createdAt: Joi.string().required(),
            })
        ).required(),
        "host-recent": Joi.array().items().required(),
        "raid-recent": Joi.array().items().required(),
        "merch-recent": Joi.array().items().required(),
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
