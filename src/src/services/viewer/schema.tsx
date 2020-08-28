import {Action} from "../../app/schema";

export interface State {
    count: number,
    min: number,
    max: number,
}

export interface UpdateNbViewerAction extends Action {
    response: {
        count: number
    }
}