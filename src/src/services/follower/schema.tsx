import {Action} from "../../app/schema";
import {EventFollowResponse} from "../../api/streamelements/websocket/schema/event";
import {Moment} from "moment";

export interface Follower {
    username: string
    createdAt: Moment
}

export interface State {
    count: number
    total: number
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