import {Action} from "../../app/schema";
import {channels} from "./actions";
import {InitFollowAction, NewFollowAction, State, TestFollowAction} from "./schema";
import moment from "moment";

let initialState: State = {
    count: 0,
    total: 0,
    followers: []
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.FOLLOW_NEW) {
        let a: NewFollowAction = action as NewFollowAction;

        return {
            ...state,
            count: state.count + 1,
            total: state.total + 1,
            followers: [
                ...state.followers, {
                    username: a.response.data.username,
                    createdAt: moment(a.response.createdAt)
                }
            ]
        };
    }
    if (action.type === channels.FOLLOW_TEST) {
        let a: TestFollowAction = action as TestFollowAction;
        return {
            ...state,
            count: state.count + 1,
            total: state.total + 1,
            followers: [
                ...state.followers, {
                    username: a.response.username,
                    createdAt: moment(a.response.createdAt)
                }
            ]
        };
    }
    if (action.type === channels.FOLLOW_INIT) {
        let a: InitFollowAction = action as InitFollowAction;
        return {
            ...state,
            total: a.response.total,
            count: a.response.count,
            followers: a.response.followers
        };
    }

    return state;
};