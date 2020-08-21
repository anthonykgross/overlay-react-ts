import {AuthenticatedResponse} from "./schema/authenticated";
import {
    AuthenticatedAction,
    ConnectAction,
    ContestRunningAction,
    ContestStateAction,
    ContestUpdateAction,
    ContestWinnerAction,
    DisconnectAction,
    EventAction,
    EventResetAction,
    EventTestAction,
    EventUpdateAction,
    GiveawayRunningAction,
    GiveawayStateAction,
    GiveawayUpdateAction,
    GiveawayWinnerAction,
    SubscribeContestAction,
    SubscribeGiveawayAction
} from "./schema/actions";
import {EventTestResponse} from "./schema/eventTest";
import {EventResponse} from "./schema/event";
import {EventUpdateResponse} from "./schema/eventUpdate";
import {SubscribeContestResponse} from "./schema/subscribeContest";
import {SubscribeGiveawayResponse} from "./schema/subscribeGiveaway";

export const channels = {
    AUTHENTICATED: 'api/streamelements/websocket/authenticated',
    CONNECT: 'api/streamelements/websocket/connect',
    DISCONNECT: 'api/streamelements/websocket/disconnect',
    EVENT_TEST: 'api/streamelements/websocket/event/test',
    EVENT: 'api/streamelements/websocket/event',
    EVENT_UPDATE: 'api/streamelements/websocket/event/update',
    EVENT_RESET: 'api/streamelements/websocket/event/reset',
    CONTEST_RUNNING: 'api/streamelements/websocket/contest/running',
    CONTEST_STATE: 'api/streamelements/websocket/contest/state',
    CONTEST_UPDATE: 'api/streamelements/websocket/contest/update',
    CONTEST_WINNER: 'api/streamelements/websocket/contest/winner',
    SUBSCRIBE_CONTEST: 'api/streamelements/websocket/contest/subscribe',
    GIVEAWAY_RUNNING: 'api/streamelements/websocket/giveaway/running',
    GIVEAWAY_STATE: 'api/streamelements/websocket/giveaway/state',
    GIVEAWAY_UPDATE: 'api/streamelements/websocket/giveaway/update',
    GIVEAWAY_WINNER: 'api/streamelements/websocket/giveaway/winner',
    SUBSCRIBE_GIVEAWAY: 'api/streamelements/websocket/giveaway/subscribe',
};

export const actions = {
    authenticated: (response: AuthenticatedResponse): AuthenticatedAction => {
        return {
            type: channels.AUTHENTICATED,
            response: response
        };
    },
    connect: (): ConnectAction => {
        return {
            type: channels.CONNECT,
            response: {}
        };
    },
    disconnect: (response: string): DisconnectAction => {
        return {
            type: channels.DISCONNECT,
            response: response
        };
    },
    eventTest: (response: EventTestResponse): EventTestAction => {
        return {
            type: channels.EVENT_TEST,
            response: response
        };
    },
    event: (response: EventResponse): EventAction => {
        return {
            type: channels.EVENT,
            response: response
        };
    },
    eventUpdate: (response: EventUpdateResponse): EventUpdateAction => {
        return {
            type: channels.EVENT_UPDATE,
            response: response
        };
    },
    eventReset: (response: any): EventResetAction => {
        return {
            type: channels.EVENT_RESET,
            response: response
        };
    },
    contestRunning: (response: any): ContestRunningAction => {
        return {
            type: channels.CONTEST_RUNNING,
            response: response
        };
    },
    contestState: (response: any): ContestStateAction => {
        return {
            type: channels.CONTEST_STATE,
            response: response
        };
    },
    contestUpdate: (response: any): ContestUpdateAction => {
        return {
            type: channels.CONTEST_UPDATE,
            response: response
        };
    },
    contestWinner: (response: any): ContestWinnerAction => {
        return {
            type: channels.CONTEST_WINNER,
            response: response
        };
    },
    subscribeContest: (response: SubscribeContestResponse): SubscribeContestAction => {
        return {
            type: channels.SUBSCRIBE_CONTEST,
            response: response
        };
    },
    giveawayRunning: (response: any): GiveawayRunningAction => {
        return {
            type: channels.GIVEAWAY_RUNNING,
            response: response
        };
    },
    giveawayState: (response: any): GiveawayStateAction => {
        return {
            type: channels.GIVEAWAY_STATE,
            response: response
        };
    },
    giveawayUpdate: (response: any): GiveawayUpdateAction => {
        return {
            type: channels.GIVEAWAY_UPDATE,
            response: response
        };
    },
    giveawayWinner: (response: any): GiveawayWinnerAction => {
        return {
            type: channels.GIVEAWAY_WINNER,
            response: response
        };
    },
    subscribeGiveaway: (response: SubscribeGiveawayResponse): SubscribeGiveawayAction => {
        return {
            type: channels.SUBSCRIBE_GIVEAWAY,
            response: response
        };
    }
}