import {Action} from "../../app/schema";
import {channels} from "./actions";
import {InitFollowAction, NewFollowAction, State, TestFollowAction} from "./schema";

let initialState: State = {
    count: 0,
    followers: []
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.FOLLOW_NEW) {
        let a: NewFollowAction = action as NewFollowAction;

        return {
            ...state,
            count: state.count + 1,
            followers: [...state.followers, a.response.data.username]
        };
    }
    if (action.type === channels.FOLLOW_TEST) {
        let a: TestFollowAction = action as TestFollowAction;
        return {
            ...state,
            count: state.count + 1,
            followers: [...state.followers, a.response.username]
        };
    }
    if (action.type === channels.FOLLOW_INIT) {
        let a: InitFollowAction = action as InitFollowAction;
        return {
            ...state,
            count: a.response.count,
            followers: a.response.followers
        };
    }

    return state;
};