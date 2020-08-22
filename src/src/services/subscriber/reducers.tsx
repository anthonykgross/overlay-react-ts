import {Action} from "../../app/schema";
import {channels} from "./actions";
import {InitSubscriberAction, NewSubscriberAction, State, TestSubscriberAction} from "./schema";

let initialState: State = {
    count: 0,
    subscribers: []
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.SUBSCRIBER_NEW) {
        let a: NewSubscriberAction = action as NewSubscriberAction;

        return {
            ...state,
            count: state.count + 1,
            subscribers: [
                ...state.subscribers, {
                    username: a.response.data.username,
                    amount: a.response.data.amount,
                    tier: a.response.data.tier
                }
            ]
        };
    }
    if (action.type === channels.SUBSCRIBER_TEST) {
        let a: TestSubscriberAction = action as TestSubscriberAction;
        return {
            ...state,
            count: state.count + 1,
            subscribers: [
                ...state.subscribers, {
                    username: a.response.username,
                    amount: a.response.amount,
                    tier: a.response.tier,
                }
            ]
        };
    }
    if (action.type === channels.SUBSCRIBER_INIT) {
        let a: InitSubscriberAction = action as InitSubscriberAction;
        return {
            ...state,
            count: a.response.count,
            subscribers: a.response.subscribers
        };
    }

    return state;
};