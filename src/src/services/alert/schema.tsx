import {Action} from "../../app/schema";

export interface Alert {
    id: string
    message: string
    image: string
    type: string
}

export interface State {
    current?: Alert,
    alerts: Alert[]
}

export interface NewAlertAction extends Action {
    response: Alert
}

export interface NextAlertAction extends Action {
    response: {}
}