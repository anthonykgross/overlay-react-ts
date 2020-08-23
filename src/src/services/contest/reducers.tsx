import {Action} from "../../app/schema";
import {channels} from "./actions";
import {State, NewContestAction, Contest} from "./schema";

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
    return state;
};