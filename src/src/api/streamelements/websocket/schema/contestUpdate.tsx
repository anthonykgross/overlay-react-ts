import Joi from "@hapi/joi";

export interface ContestUpdateResponse {
    optionId: string
    amount: number
    userId: string
}
export const ContestUpdateResponseSchema = Joi.object({
    optionId: Joi.string().required(),
    amount: Joi.number().required(),
    userId: Joi.string().required(),
});
