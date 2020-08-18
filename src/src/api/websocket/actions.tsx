import {
    AuthenticatedAction,
    AuthenticatedResponse,
    EventResponse,
    EventTestResponse,
    EventUpdateResponse
} from "./schema";

export const websocketChannels = {
    AUTHENTICATED: '@websocket/authenticated',
    CONNECT: '@websocket/connect',
    DISCONNECT: '@websocket/disconnect',
    EVENT_TEST: '@websocket/event_test',
    EVENT: '@websocket/event',
    EVENT_UPDATE: '@websocket/event_update',
    EVENT_RESET: '@websocket/event_reset',
    CONTEST_RUNNING: '@websocket/contest_running',
    CONTEST_STATE: '@websocket/contest_state',
    CONTEST_UPDATE: '@websocket/contest_update',
    CONTEST_WINNER: '@websocket/contest_winner',
    SUBSCRIBE_CONTEST: '@websocket/subscribe_contest',
    GIVEAWAY_RUNNING: '@websocket/giveaway_running',
    GIVEAWAY_STATE: '@websocket/giveaway_state',
    GIVEAWAY_UPDATE: '@websocket/giveaway_update',
    GIVEAWAY_WINNER: '@websocket/giveaway_winner',
    SUBSCRIBE_GIVEAWAY: '@websocket/subscribe_giveaway',
};

export const websocketActions = {
    authenticated: (response: AuthenticatedResponse): AuthenticatedAction => {
        return {
            type: websocketChannels.AUTHENTICATED,
            response: response
        };
    },

    connect: () => {
        return {
            type: websocketChannels.CONNECT,
        };
    },
    disconnect: (response: string) => {
        return {
            type: websocketChannels.DISCONNECT,
            response: response
        };
    },
    eventTest: (response: EventTestResponse) => {
        return {
            type: websocketChannels.EVENT_TEST,
            response: response
        };
    },
    event: (response: EventResponse) => {
        return {
            type: websocketChannels.EVENT,
            response: response
        };
    },
    eventUpdate: (response: EventUpdateResponse) => {
        return {
            type: websocketChannels.EVENT_UPDATE,
            response: response
        };
    },
    eventReset: (response: any) => {
        return {
            type: websocketChannels.EVENT_RESET,
            response: response
        };
    },
    contestRunning: (response: any) => {
        return {
            type: websocketChannels.CONTEST_RUNNING,
            response: response
        };
    },
    contestState: (response: any) => {
        return {
            type: websocketChannels.CONTEST_STATE,
            response: response
        };
    },
    contestUpdate: (response: any) => {
        return {
            type: websocketChannels.CONTEST_UPDATE,
            response: response
        };
    },
    contestWinner: (response: any) => {
        return {
            type: websocketChannels.CONTEST_WINNER,
            response: response
        };
    },
    subscribeContest: (response: any) => {
        return {
            type: websocketChannels.SUBSCRIBE_CONTEST,
            response: response
        };
    },
    giveawayRunning: (response: any) => {
        return {
            type: websocketChannels.GIVEAWAY_RUNNING,
            response: response
        };
    },
    giveawayState: (response: any) => {
        return {
            type: websocketChannels.GIVEAWAY_STATE,
            response: response
        };
    },
    giveawayUpdate: (response: any) => {
        return {
            type: websocketChannels.GIVEAWAY_UPDATE,
            response: response
        };
    },
    giveawayWinner: (response: any) => {
        return {
            type: websocketChannels.GIVEAWAY_WINNER,
            response: response
        };
    },
    subscribeGiveaway: (response: any) => {
        return {
            type: websocketChannels.SUBSCRIBE_GIVEAWAY,
            response: response
        };
    }
}