import Joi from "@hapi/joi";

export interface ContestWinnerResponse {
    winnerId: string
}
export const ContestWinnerResponseSchema = Joi.object({
    winnerId: Joi.string().required(),
});