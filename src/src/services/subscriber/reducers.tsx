import {Action} from "../../app/schema";
import {channels} from "./actions";
import {InitSubscriberAction, NewSubscriberAction, State, TestSubscriberAction} from "./schema";
import moment from "moment";

let initialState: State = {
    total: 0,
    count: 0,
    subscribers: []
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.SUBSCRIBER_NEW) {
        let a: NewSubscriberAction = action as NewSubscriberAction;

        return {
            ...state,
            total: state.total + 1,
            count: state.count + 1,
            subscribers: [
                ...state.subscribers, {
                    username: a.response.data.username,
                    amount: a.response.data.amount,
                    tier: a.response.data.tier,
                    createdAt: moment(a.response.createdAt)
                }
            ]
        };
    }
    if (action.type === channels.SUBSCRIBER_TEST) {
        let a: TestSubscriberAction = action as TestSubscriberAction;
        return {
            ...state,
            total: state.total + 1,
            count: state.count + 1,
            subscribers: [
                ...state.subscribers, {
                    username: a.response.username,
                    amount: a.response.amount,
                    tier: a.response.tier,
                    createdAt: moment(a.response.createdAt)
                }
            ]
        };
    }
    if (action.type === channels.SUBSCRIBER_INIT) {
        let a: InitSubscriberAction = action as InitSubscriberAction;
        return {
            ...state,
            total: a.response.total,
            count: a.response.count,
            subscribers: a.response.subscribers
        };
    }

    return state;
};