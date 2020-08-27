import {Action} from "../../app/schema";
import {channels} from "./actions";
import {InitCheerAction, NewCheerAction, State, TestCheerAction} from "./schema";

let initialState: State = {
    count: 0,
    cheers: []
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.CHEER_NEW) {
        let a: NewCheerAction = action as NewCheerAction;

        return {
            ...state,
            count: state.count + 1,
            cheers: [
                ...state.cheers, {
                    username: a.response.data.username,
                    amount: a.response.data.amount,
                    createdAt: a.response.createdAt
                }
            ]
        };
    }
    if (action.type === channels.CHEER_TEST) {
        let a: TestCheerAction = action as TestCheerAction;
        return {
            ...state,
            count: state.count + 1,
            cheers: [
                ...state.cheers, {
                    username: a.response.username,
                    amount: a.response.amount,
                    createdAt: a.response.createdAt
                }
            ]
        };
    }
    if (action.type === channels.CHEER_INIT) {
        let a: InitCheerAction = action as InitCheerAction;
        return {
            ...state,
            count: a.response.count,
            cheers: a.response.cheers
        };
    }

    return state;
};