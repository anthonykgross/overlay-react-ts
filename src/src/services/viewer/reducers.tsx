import {Action} from "../../app/schema";
import {channels} from "./actions";
import {State, UpdateNbViewerAction} from "./schema";

let initialState: State = {
    count: 0
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.VIEWER_UPDATE) {
        let a: UpdateNbViewerAction = action as UpdateNbViewerAction;

        return {
            ...state,
            count: a.response.count
        };
    }
    return state;
};