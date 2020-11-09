import {Action} from "../../app/schema";
import {channels} from "./actions";
import {InitTipAction, NewTipAction, State, TestTipAction} from "./schema";
import moment from "moment";

let initialState: State = {
    total: 0,
    count: 0,
    tips: []
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.TIP_NEW) {
        let a: NewTipAction = action as NewTipAction;

        return {
            ...state,
            count: state.count + a.response.data.amount,
            total: state.total + a.response.data.amount,
            tips: [
                ...state.tips, {
                    username: a.response.data.username,
                    amount: a.response.data.amount,
                    createdAt: moment(a.response.createdAt)
                }
            ]
        };
    }
    if (action.type === channels.TIP_TEST) {
        let a: TestTipAction = action as TestTipAction;
        return {
            ...state,
            count: state.count + a.response.amount,
            total: state.total + a.response.amount,
            tips: [
                ...state.tips, {
                    username: a.response.username,
                    amount: a.response.amount,
                    createdAt: moment(a.response.createdAt)
                }
            ]
        };
    }
    if (action.type === channels.TIP_INIT) {
        let a: InitTipAction = action as InitTipAction;
        return {
            ...state,
            total: a.response.total,
            count: a.response.count,
            tips: a.response.tips
        };
    }

    return state;
};