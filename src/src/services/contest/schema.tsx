import {Action} from "../../app/schema";
import Joi from "@hapi/joi";

interface Option {
    totalAmount: number
    totalUsers: number
    _id: string
    title: string
    command: string
    winner?: boolean
}

export interface Contest {
    botResponses: boolean
    totalAmount: number
    totalUsers: number
    _id: string
    title: string
    minBet: number
    maxBet: number
    duration: number
    options: Option[]
    channel: string
    state: string
    createdAt: string
    updatedAt: string
    startedAt: string
    endedAt?: string
}

export const ContestSchema = Joi.object({
    botResponses: Joi.boolean().required(),
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
    createdAt: Joi.string().required(),
    updatedAt: Joi.string().required(),
    startedAt: Joi.string().required(),
    endedAt: Joi.string(),
});

export interface State {
    active?: Contest
    contests: Contest[]
}

export interface NewContestAction extends Action {
    response: Contest
}

export interface CloseContestAction extends Action {
    response: {}
}

export interface RefundContestAction extends Action {
    response: {}
}

export interface CompleteContestAction extends Action {
    response: {}
}

export interface WinnerContestAction extends Action {
    response: string
}
export interface BetContestAction extends Action {
    response: {
        username: string
        amount: number
        optionId: string
    }
}