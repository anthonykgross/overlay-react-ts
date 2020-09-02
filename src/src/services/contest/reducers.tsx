import {Action} from "../../app/schema";
import {channels} from "./actions";
import {
    State,
    NewContestAction,
    Contest,
    WinnerContestAction,
    Option,
    BetContestAction,
    Bet
} from "./schema";

let initialState: State = {
    contests: []
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.CONTEST_NEW) {
        let a: NewContestAction = action as NewContestAction;
        let contest: Contest = a.response;

        return {
            ...state,
            active: contest
        };
    }
    if (action.type === channels.CONTEST_WINNER) {
        let a: WinnerContestAction = action as WinnerContestAction;
        let winnerId = a.response;

        if (state.active) {
            let contest: Contest = state.active;

            for (let i = 0; i < contest.options.length; i++) {
                let option: Option = contest.options[i];
                if (option._id === winnerId) {
                    contest.options[i].winner = true;
                }
            }
            return {
                ...state,
                active: {
                    ...contest
                }
            };
        }
    }
    if (action.type === channels.CONTEST_COMPLETE) {
        if (state.active) {
            return {
                ...state,
                active: {
                    ...state.active,
                    state: 'completed'
                }
            };
        }
    }
    if (action.type === channels.CONTEST_CLOSE) {
        if (state.active) {
            return {
                ...state,
                active: {
                    ...state.active,
                    state: 'closed'
                }
            };
        }
    }
    if (action.type === channels.CONTEST_REFUND) {
        if (state.active) {
            return {
                ...state,
                active: {
                    ...state.active,
                    state: 'refunded'
                }
            };
        }
    }
    if (action.type === channels.CONTEST_SWITCH) {
        if (state.active) {
            return {
                ...state,
                contests: [
                    ...state.contests,
                    state.active
                ],
                active: undefined
            };
        }
    }
    if (action.type === channels.CONTEST_BET) {
        let a: BetContestAction = action as BetContestAction;
        let bet: Bet = a.response;

        if (state.active) {
            let contest: Contest = state.active;
            contest.totalAmount += bet.amount;
            contest.totalUsers += 1;

            for (let i = 0; i < contest.options.length; i++) {
                let option: Option = contest.options[i];
                if (option._id === bet.optionId) {
                    contest.options[i].totalAmount += bet.amount;
                    contest.options[i].totalUsers += 1;
                }
            }
            return {
                ...state,
                active: contest
            };
        }
    }
    return state;
};