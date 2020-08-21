import {AuthenticatedResponse} from "./authenticated";
import {EventTestResponse} from "./eventTest";
import {EventResponse} from "./event";
import {EventUpdateResponse} from "./eventUpdate";
import {SubscribeContestResponse} from "./subscribeContest";
import {SubscribeGiveawayResponse} from "./subscribeGiveaway";
import {Action} from "../../../../app/schema";
import {ContestStateResponse} from "./contestState";
import {ContestUpdateResponse} from "./contestUpdate";
import {ContestWinnerResponse} from "./contestWinner";
import {GiveawayStateResponse} from "./giveawayState";
import {GiveawayWinnerResponse} from "./giveawayWinner";

export interface AuthenticatedAction extends Action {
    type: string
    response: AuthenticatedResponse
}

export interface ConnectAction extends Action {
    type: string
}

export interface DisconnectAction extends Action {
    type: string
    response: string
}

export interface EventTestAction extends Action {
    type: string
    response: EventTestResponse
}

export interface EventAction extends Action {
    type: string
    response: EventResponse
}

export interface EventResetAction extends Action {
    type: string
    response: any
}

export interface EventUpdateAction extends Action {
    type: string
    response: EventUpdateResponse
}

export interface ContestRunningAction extends Action {
    type: string
    response: any
}

export interface ContestStateAction extends Action {
    type: string
    response: ContestStateResponse
}

export interface ContestUpdateAction extends Action {
    type: string
    response: ContestUpdateResponse
}

export interface ContestWinnerAction extends Action {
    type: string
    response: ContestWinnerResponse
}

export interface SubscribeContestAction extends Action {
    type: string
    response: SubscribeContestResponse
}

export interface GiveawayRunningAction extends Action {
    type: string
    response: any
}

export interface GiveawayStateAction extends Action {
    type: string
    response: GiveawayStateResponse
}

export interface GiveawayUpdateAction extends Action {
    type: string
    response: any
}

export interface GiveawayWinnerAction extends Action {
    type: string
    response: GiveawayWinnerResponse
}

export interface SubscribeGiveawayAction extends Action {
    type: string
    response: SubscribeGiveawayResponse
}