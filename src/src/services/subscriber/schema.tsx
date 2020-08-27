import {Action} from "../../app/schema";
import {EventSubscriberResponse} from "../../api/streamelements/websocket/schema/event";

export interface Subscriber {
    username: string
    tier: string
    amount: number
    createdAt: string
}

export interface State {
    count: number,
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