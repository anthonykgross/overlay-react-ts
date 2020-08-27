import {Action} from "../../app/schema";
import {EventFollowResponse} from "../../api/streamelements/websocket/schema/event";

export interface Follower {
    username: string
    createdAt: string
}

export interface State {
    count: number,
    followers: Follower[]
}

export interface NewFollowAction extends Action {
    response: EventFollowResponse
}

export interface TestFollowAction extends Action {
    response: Follower
}

export interface InitFollowAction extends Action {
    response: State
}