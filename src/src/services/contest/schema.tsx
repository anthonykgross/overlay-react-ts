import {Action} from "../../app/schema";
import {Contest} from "../../api/schema/contest";

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