import {Action} from "../../app/schema";
import {EventFollowResponse} from "../../api/streamelements/websocket/schema/event";

export interface State {
    count: number,
    followers: string[]
}

export interface NewFollowAction extends Action{
    response: EventFollowResponse
}

export interface TestFollowAction extends Action{
    response: {
        username: string
    }
}

export interface InitFollowAction extends Action{
    response: State
}