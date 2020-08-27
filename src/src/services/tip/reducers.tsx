import {Action} from "../../app/schema";
import {channels} from "./actions";
import {InitTipAction, NewTipAction, State, TestTipAction} from "./schema";

let initialState: State = {
    count: 0,
    tips: []
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.TIP_NEW) {
        let a: NewTipAction = action as NewTipAction;

        return {
            ...state,
            count: state.count + 1,
            tips: [
                ...state.tips, {
                    username: a.response.data.username,
                    amount: a.response.data.amount,
                    createdAt: a.response.createdAt
                }
            ]
        };
    }
    if (action.type === channels.TIP_TEST) {
        let a: TestTipAction = action as TestTipAction;
        return {
            ...state,
            count: state.count + 1,
            tips: [
                ...state.tips, {
                    username: a.response.username,
                    amount: a.response.amount,
                    createdAt: a.response.createdAt
                }
            ]
        };
    }
    if (action.type === channels.TIP_INIT) {
        let a: InitTipAction = action as InitTipAction;
        return {
            ...state,
            count: a.response.count,
            tips: a.response.tips
        };
    }

    return state;
};