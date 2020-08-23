import {Action} from "../../app/schema";
import {channels} from "./actions";
import {State, NewGiveawayAction, Giveaway} from "./schema";

let initialState: State = {
    giveaways: []
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.GIVEAWAY_NEW) {
        let a: NewGiveawayAction = action as NewGiveawayAction;
        let giveaway: Giveaway = a.response;

        return {
            ...state,
            active: giveaway
        };
    }
    return state;
};