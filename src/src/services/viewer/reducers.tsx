import {Action} from "../../app/schema";
import {channels} from "./actions";
import {State, UpdateNbViewerAction} from "./schema";

let initialState: State = {
    count: 0,
    max: 0,
    min: 0
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.VIEWER_UPDATE) {
        let a: UpdateNbViewerAction = action as UpdateNbViewerAction;

        if (a.response.count > state.max) {
            state.max = a.response.count
        }
        if (a.response.count < state.min) {
            state.min = a.response.count
        }

        return {
            ...state,
            count: a.response.count
        };
    }
    return state;
};