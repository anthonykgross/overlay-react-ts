import {Action} from "../../app/schema";
import {EventTipResponse} from "../../api/streamelements/websocket/schema/event";
import {Moment} from "moment";

export interface Tip {
    username: string
    amount: number
    createdAt: Moment
}

export interface State {
    count: number,
    tips: Tip[]
}

export interface NewTipAction extends Action {
    response: EventTipResponse
}

export interface TestTipAction extends Action {
    response: Tip
}

export interface InitTipAction extends Action {
    response: State
}