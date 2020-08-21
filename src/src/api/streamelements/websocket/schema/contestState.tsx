import Joi from "@hapi/joi";

export interface ContestStateResponse {
    state: string
    contestId?: string
}
export const ContestStateResponseSchema = Joi.object({
    state: Joi.string().required(),
    contestId: Joi.string(),
});