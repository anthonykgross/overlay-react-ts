import {Action} from "../../app/schema";
import {EventTipResponse} from "../../api/streamelements/websocket/schema/event";

export interface Tip {
    username: string
    amount: number
}

export interface State {
    count: number,
    tips: Tip[]
}

export interface NewTipAction extends Action{
    response: EventTipResponse
}

export interface TestTipAction extends Action{
    response: {
        username: string
        amount: number
    }
}

export interface InitTipAction extends Action{
    response: State
}