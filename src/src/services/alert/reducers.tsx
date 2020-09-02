import {Action} from "../../app/schema";
import {channels} from "./actions";
import {NewAlertAction, State} from "./schema";

let initialState: State = {
    alerts: []
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.ALERT_NEW) {
        let a: NewAlertAction = action as NewAlertAction;
        let current = state.current;
        let alerts = state.alerts;

        if (!current) {
            current = a.response
        } else {
            alerts.push(a.response);
        }

        return {
            ...state,
            alerts: alerts,
            current: current
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
            return {
                ...state,
                current: undefined,
                alerts: []
            };
        }
    }

    return state;
};