import {Action} from "../../app/schema";
import {EventSubscriberResponse} from "../../api/streamelements/websocket/schema/event";
import {Moment} from "moment";

export interface Subscriber {
    username: string
    tier: string
    amount: number
    createdAt: Moment
}

export interface State {
    total: number
    count: number
    subscribers: Subscriber[]
}

export interface NewSubscriberAction extends Action{
    response: EventSubscriberResponse
}

export interface TestSubscriberAction extends Action{
    response: Subscriber
}

export interface InitSubscriberAction extends Action{
    response: State
}