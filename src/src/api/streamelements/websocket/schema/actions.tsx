import {AuthenticatedResponse} from "./authenticated";
import {EventTestResponse} from "./eventTest";
import {EventResponse} from "./event";
import {EventUpdateResponse} from "./eventUpdate";
import {SubscribeContestResponse} from "./subscribeContest";
import {SubscribeGiveawayResponse} from "./subscribeGiveaway";

export interface AuthenticatedAction {
    type: string
    response: AuthenticatedResponse
}
export interface ConnectAction {
    type: string
}
export interface DisconnectAction {
    type: string
    response: string
}
export interface EventTestAction {
    type: string
    response: EventTestResponse
}
export interface EventAction {
    type: string
    response: EventResponse
}
export interface EventResetAction {
    type: string
    response: any
}
export interface EventUpdateAction {
    type: string
    response: EventUpdateResponse
}
export interface ContestRunningAction {
    type: string
    response: any
}
export interface ContestStateAction {
    type: string
    response: any
}
export interface ContestUpdateAction {
    type: string
    response: any
}
export interface ContestWinnerAction {
    type: string
    response: any
}
export interface SubscribeContestAction {
    type: string
    response: SubscribeContestResponse
}
export interface GiveawayRunningAction {
    type: string
    response: any
}
export interface GiveawayStateAction {
    type: string
    response: any
}
export interface GiveawayUpdateAction {
    type: string
    response: any
}
export interface GiveawayWinnerAction {
    type: string
    response: any
}
export interface SubscribeGiveawayAction {
    type: string
    response: SubscribeGiveawayResponse
}