import {Action} from "../../app/schema";
import {channels} from "./actions";
import {NewAlertAction, State} from "./schema";

let initialState: State = {
    alerts: []
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.ALERT_NEW) {
        let a: NewAlertAction = action as NewAlertAction;

        return {
            ...state,
            alerts: [
                ...state.alerts,
                a.response
            ]
        };
    }
    if (action.type === channels.ALERT_NEXT) {
        if (state.alerts.length > 0) {
            return {
                ...state,
                current: state.alerts[0],
                alerts: state.alerts.slice(1)
            };
        } else {
            return initialState
        }
    }

    return state;
};