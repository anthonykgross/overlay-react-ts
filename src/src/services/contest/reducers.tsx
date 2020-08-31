import {Action} from "../../app/schema";
import {channels} from "./actions";
import {State, NewContestAction, Contest, WinnerContestAction, Option} from "./schema";

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
                active: contest
            };
        }
    }
    return state;
};