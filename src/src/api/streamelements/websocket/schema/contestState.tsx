import Joi from "@hapi/joi";

export interface ContestStateResponse {
    state: string
}
export const ContestStateResponseSchema = Joi.object({
    state: Joi.string().required(),
});

export interface ContestStateRunningResponse {
    state: string
    contestId: string
}
export const ContestStateRunningResponseSchema = Joi.object({
    state: Joi.string().required(),
    contestId: Joi.string().required(),
});