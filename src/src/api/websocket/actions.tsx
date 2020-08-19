import {
    AuthenticatedAction,
    AuthenticatedResponse,
    EventResponse,
    EventTestResponse,
    EventUpdateResponse
} from "./schema";

export const websocketChannels = {
    AUTHENTICATED: 'api/websocket/authenticated',
    CONNECT: 'api/websocket/connect',
    DISCONNECT: 'api/websocket/disconnect',
    EVENT_TEST: 'api/websocket/event/test',
    EVENT: 'api/websocket/event',
    EVENT_UPDATE: 'api/websocket/event/update',
    EVENT_RESET: 'api/websocket/event/reset',
    CONTEST_RUNNING: 'api/websocket/contest/running',
    CONTEST_STATE: 'api/websocket/contest/state',
    CONTEST_UPDATE: 'api/websocket/contest/update',
    CONTEST_WINNER: 'api/websocket/contest/winner',
    SUBSCRIBE_CONTEST: 'api/websocket/contest/subscribe',
    GIVEAWAY_RUNNING: 'api/websocket/giveaway/running',
    GIVEAWAY_STATE: 'api/websocket/giveaway/state',
    GIVEAWAY_UPDATE: 'api/websocket/giveaway/update',
    GIVEAWAY_WINNER: 'api/websocket/giveaway/winner',
    SUBSCRIBE_GIVEAWAY: 'api/websocket/giveaway/subscribe',
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