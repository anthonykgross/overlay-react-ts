import {Action} from "../../app/schema";

export interface State {
    count: number,
}

export interface UpdateNbViewerAction extends Action {
    response: State
}