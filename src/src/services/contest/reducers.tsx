import {Action} from "../../app/schema";
import {channels} from "./actions";
import {State, NewContestAction} from "./schema";
import {Contest} from "../../api/schema/contest";

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