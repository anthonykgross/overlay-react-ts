import {Action} from "../../app/schema";
import {channels} from "./actions";
import {NewRedemptionAction, State} from "./schema";

let initialState: State = {
    count: 0,
    redemptions: []
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.REDEMPTION_NEW) {
        let a: NewRedemptionAction = action as NewRedemptionAction;

        return {
            ...state,
            count: state.count + 1,
            redemptions: [
                ...state.redemptions,
                a.response
            ]
        };
    }
    return state;
};