import {
    BetContestAction,
    CloseContestAction,
    CompleteContestAction,
    NewContestAction,
    RefundContestAction,
    WinnerContestAction
} from "./schema";
import {Contest} from "../../api/schema/contest";

export const channels = {
    CONTEST_NEW: 'services/contest/new',
    CONTEST_CLOSE: 'services/contest/close',
    CONTEST_REFUND: 'services/contest/refund',
    CONTEST_COMPLETE: 'services/contest/complete',
    CONTEST_WINNER: 'services/contest/winner',
    CONTEST_BET: 'services/contest/bet',
};

export const actions = {
    newContest: (contest: Contest): NewContestAction => {
        return {
            type: channels.CONTEST_NEW,
            response: contest
        };
    },
    closeContest: (): CloseContestAction => {
        return {
            type: channels.CONTEST_CLOSE,
            response: {}
        };
    },
    refundContest: (): RefundContestAction => {
        return {
            type: channels.CONTEST_REFUND,
            response: {}
        };
    },
    completeContest: (): CompleteContestAction => {
        return {
            type: channels.CONTEST_COMPLETE,
            response: {}
        };
    },
    winnerContest: (winnerId: string): WinnerContestAction => {
        return {
            type: channels.CONTEST_WINNER,
            response: winnerId
        };
    },
    betContest: (optionId: string, amount: number, username: string): BetContestAction => {
        return {
            type: channels.CONTEST_BET,
            response: {
                optionId: optionId,
                amount: amount,
                username: username
            }
        };
    }

}