import {Action} from "../../app/schema";
import {EventCheerResponse} from "../../api/streamelements/websocket/schema/event";

export interface Cheer {
    username: string
    amount: number
    createdAt: string
}

export interface State {
    count: number,
    cheers: Cheer[]
}

export interface NewCheerAction extends Action {
    response: EventCheerResponse
}

export interface TestCheerAction extends Action {
    response: Cheer
}

export interface InitCheerAction extends Action {
    response: State
}