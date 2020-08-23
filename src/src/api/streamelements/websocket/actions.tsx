import {AuthenticatedResponse} from "./schema/authenticated";
import {
    AuthenticatedAction,
    ConnectAction,
    ContestStateAction,
    ContestUpdateAction,
    ContestWinnerAction,
    DisconnectAction,
    EventAction,
    EventResetAction,
    EventTestAction,
    EventUpdateAction,
    GiveawayStateAction,
    GiveawayWinnerAction,
    GiveawayEntryAction,
    SubscribeContestAction,
    SubscribeGiveawayAction
} from "./schema/actions";
import {EventTestResponse} from "./schema/eventTest";
import {EventResponse} from "./schema/event";
import {EventUpdateResponse} from "./schema/eventUpdate";
import {SubscribeContestResponse} from "./schema/subscribeContest";
import {SubscribeGiveawayResponse} from "./schema/subscribeGiveaway";
import {GiveawayEntryResponse} from "./schema/giveawayEntry";
import {GiveawayWinnerResponse} from "./schema/giveawayWinner";
import {GiveawayStateResponse} from "./schema/giveawayState";
import {ContestWinnerResponse} from "./schema/contestWinner";
import {ContestUpdateResponse} from "./schema/contestUpdate";
import {ContestStateResponse} from "./schema/contestState";

export const channels = {
    AUTHENTICATED: 'api/streamelements/websocket/authenticated',
    CONNECT: 'api/streamelements/websocket/connect',
    DISCONNECT: 'api/streamelements/websocket/disconnect',
    EVENT_TEST: 'api/streamelements/websocket/event/test',
    EVENT: 'api/streamelements/websocket/event',
    EVENT_UPDATE: 'api/streamelements/websocket/event/update',
    EVENT_RESET: 'api/streamelements/websocket/event/reset',
    CONTEST_STATE: 'api/streamelements/websocket/contest/state',
    CONTEST_UPDATE: 'api/streamelements/websocket/contest/update',
    CONTEST_WINNER: 'api/streamelements/websocket/contest/winner',
    SUBSCRIBE_CONTEST: 'api/streamelements/websocket/contest/subscribe',
    GIVEAWAY_STATE: 'api/streamelements/websocket/giveaway/state',
    GIVEAWAY_WINNER: 'api/streamelements/websocket/giveaway/winner',
    GIVEAWAY_ENTRY: 'api/streamelements/websocket/giveaway/entry',
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
    contestState: (response: ContestStateResponse): ContestStateAction => {
        return {
            type: channels.CONTEST_STATE,
            response: response
        };
    },
    contestUpdate: (response: ContestUpdateResponse): ContestUpdateAction => {
        return {
            type: channels.CONTEST_UPDATE,
            response: response
        };
    },
    contestWinner: (response: ContestWinnerResponse): ContestWinnerAction => {
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
    giveawayState: (response: GiveawayStateResponse): GiveawayStateAction => {
        return {
            type: channels.GIVEAWAY_STATE,
            response: response
        };
    },
    giveawayWinner: (response: GiveawayWinnerResponse): GiveawayWinnerAction => {
        return {
            type: channels.GIVEAWAY_WINNER,
            response: response
        };
    },
    giveawayEntry: (response: GiveawayEntryResponse): GiveawayEntryAction => {
        return {
            type: channels.GIVEAWAY_ENTRY,
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