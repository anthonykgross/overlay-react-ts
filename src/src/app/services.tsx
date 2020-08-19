import {Websocket} from "../api/websocket";
import {
    AuthenticatedResponse,
    EventResponse,
    EventTestResponse,
    EventUpdateResponse,
    SubscribeContestResponse, SubscribeGiveawayResponse
} from "../api/websocket/schema";
import {websocketActions} from "../api/websocket/actions";
import {Dispatch} from "redux";
import {TwitchChat} from "../api/twitch/chat";
import {actions} from "../api/twitch/chat/actions";

export class Clock {
    timeout: number;
    interval: any = null;
    callbacks: Function[] = [];

    constructor(timeout: number) {
        this.timeout = timeout;
    }

    start = () => {
        this.interval = setInterval(() => this.run(), this.timeout);
    }

    stop = () => {
        clearInterval(this.interval);
    }

    add = (callback: Function) => {
        this.callbacks.push(callback);
    }

    run() {
        let callback: Function;

        for (callback of this.callbacks) {
            callback();
        }
    }
}

export class ServiceWebsocket {
    dispatch: Dispatch;
    ws: Websocket;

    constructor(dispatch: Dispatch) {
        this.dispatch = dispatch;
        this.ws = new Websocket();

        this.ws.onAuthenticated = (d: AuthenticatedResponse) => {
            this.dispatch(websocketActions.authenticated(d))
        }
        this.ws.onConnect = () => {
            this.dispatch(websocketActions.connect())
        }
        this.ws.onDisconnect = (d) => {
            this.dispatch(websocketActions.disconnect(d))
        }
        this.ws.onEventTest = (d: EventTestResponse) => {
            this.dispatch(websocketActions.eventTest(d))
        }
        this.ws.onEvent = (d: EventResponse) => {
            this.dispatch(websocketActions.event(d))
        }
        this.ws.onEventUpdate = (d: EventUpdateResponse) => {
            this.dispatch(websocketActions.eventUpdate(d))
        }
        this.ws.onEventReset = (d) => {
            this.dispatch(websocketActions.eventReset(d))
        }
        this.ws.onContestRunning = (d) => {
            this.dispatch(websocketActions.contestRunning(d))
        }
        this.ws.onContestState = (d) => {
            this.dispatch(websocketActions.contestState(d))
        }
        this.ws.onContestUpdate = (d) => {
            this.dispatch(websocketActions.contestUpdate(d))
        }
        this.ws.onContestsRoomSubscribe = (d: SubscribeContestResponse) => {
            this.dispatch(websocketActions.subscribeContest(d))
        }
        this.ws.onGiveAwayRunning = (d) => {
            this.dispatch(websocketActions.giveawayRunning(d))
        }
        this.ws.onGiveAwayState = (d) => {
            this.dispatch(websocketActions.giveawayState(d))
        }
        this.ws.onGiveAwayUpdate = (d) => {
            this.dispatch(websocketActions.giveawayUpdate(d))
        }
        this.ws.onGiveAwayWinner = (d) => {
            this.dispatch(websocketActions.giveawayWinner(d))
        }
        this.ws.onGiveawaysRoomSubscribe = (d: SubscribeGiveawayResponse) => {
            this.dispatch(websocketActions.subscribeGiveaway(d))
        }
    }

    stop = () => {
        this.ws.disconnect();
    }
}

export class ServiceTwitchChat {
    dispatch: Dispatch;
    chat: TwitchChat;

    constructor(dispatch: Dispatch) {
        this.dispatch = dispatch;
        this.chat = new TwitchChat();

        this.chat.onConnect = () => {
            this.dispatch(actions.connect())
        }
        this.chat.onMessage = (channel: string, user: any, message: string, isSelf: boolean) => {
            this.dispatch(actions.message(user, message))
        }

        this.chat.start();
    }

    stop = () => {
        this.chat.stop();
    }
}