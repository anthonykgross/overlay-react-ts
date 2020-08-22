import SocketIOClientStatic from "socket.io-client";
import {AuthenticatedResponse, AuthenticatedResponseSchema} from "./schema/authenticated";
import {SubscribeContestResponse, SubscribeContestResponseSchema} from "./schema/subscribeContest";
import {SubscribeGiveawayResponse, SubscribeGiveawayResponseSchema} from "./schema/subscribeGiveaway";
import {EventTestResponse, EventTestResponseSchema} from "./schema/eventTest";
import {EventUpdateResponse, EventUpdateResponseSchema} from "./schema/eventUpdate";
import {checkSchema} from "../../schema";
import {EventResponse, EventResponseSchema} from "./schema/event";
import {ContestStateResponse} from "./schema/contestState";
import {ContestUpdateResponse} from "./schema/contestUpdate";
import {ContestWinnerResponse} from "./schema/contestWinner";
import {GiveawayWinnerResponse} from "./schema/giveawayWinner";
import {GiveawayStateResponse} from "./schema/giveawayState";

export class Websocket {
    socket: SocketIOClient.Socket = SocketIOClientStatic(process.env.REACT_APP_STREAMELEMENT_ENDPOINT!, {
        transports: ['websocket']
    });

    constructor() {
        this.socket.on('connect', () => {
            this.socket.emit('authenticate', {
                method: 'jwt',
                token: process.env.REACT_APP_STREAMELEMENT_TOKEN
            });
            this.onConnect();
        });

        this.socket.on('disconnect', (response: string) => {
            this.onDisconnect(response);
        });

        this.socket.on('authenticated', (response: AuthenticatedResponse) => {
            checkSchema(AuthenticatedResponseSchema, response);

            this.socket.emit('subscribe', {"room": "contests::" + response.channelId}, (n: any, response: SubscribeContestResponse) => {
                checkSchema(SubscribeContestResponseSchema, response);
                this.onContestsRoomSubscribe(response);
            });
            this.socket.emit('subscribe', {"room": "giveaways::" + response.channelId}, (n: any, response: SubscribeGiveawayResponse) => {
                checkSchema(SubscribeGiveawayResponseSchema, response);
                this.onGiveawaysRoomSubscribe(response);
            });
            this.onAuthenticated(response);
        });

        this.socket.on('event:test', (response: EventTestResponse) => {
            checkSchema(EventTestResponseSchema, response);
            this.onEventTest(response);
        });

        this.socket.on('event', (response: EventResponse) => {
            checkSchema(EventResponseSchema, response);
            this.onEvent(response);
        });

        this.socket.on('event:update', (response: EventUpdateResponse) => {
            checkSchema(EventUpdateResponseSchema, response);
            this.onEventUpdate(response);
        });

        this.socket.on('event:reset', (response: any) => {
            this.onEventReset(response);
        });

        // CONTESTS
        this.socket.on("contest:running", (response: any) => {
            this.onContestRunning(response);
        });

        this.socket.on('contest:state', (response: any) => {
            this.onContestState(response);
        });

        this.socket.on('contest:update', (response: any) => {
            this.onContestUpdate(response);
        });

        this.socket.on('contest:winner', (response: any) => {
            this.onContestWinner(response);
        });

        // GIVEAWAYS
        this.socket.on("giveaway:running", (response: any) => {
            this.onGiveawayRunning(response);
        });

        this.socket.on('giveaway:state', (response: any) => {
            this.onGiveawayState(response);
        });

        this.socket.on('giveaway:update', (response: any) => {
            this.onGiveawayUpdate(response);
        });

        this.socket.on('giveaway:winner', (response: any) => {
            this.onGiveawayWinner(response);
        });
    }

    disconnect = () => {
        this.socket.disconnect();
    }

    onConnect = () => {
    };
    onDisconnect = (response: string) => {
    };
    onAuthenticated = (response: AuthenticatedResponse) => {
    };

    onEventTest = (response: EventTestResponse) => {
    };
    onEvent = (response: EventResponse) => {
    };
    onEventUpdate = (response: EventUpdateResponse) => {
    };
    onEventReset = (response: any) => {
    };
    // CONTESTS
    onContestRunning = (response: any) => {
    };
    onContestState = (response: ContestStateResponse) => {
    };
    onContestUpdate = (response: ContestUpdateResponse) => {
    };
    onContestWinner = (response: ContestWinnerResponse) => {
    };

    onContestsRoomSubscribe(response: SubscribeContestResponse) {
    }

    // GIVEAWAYS
    onGiveawayRunning = (response: any) => {
    };
    onGiveawayState = (response: GiveawayStateResponse) => {
    };
    onGiveawayUpdate = (response: any) => {
    };
    onGiveawayWinner = (response: GiveawayWinnerResponse) => {
    };

    onGiveawaysRoomSubscribe(response: SubscribeGiveawayResponse) {
    }
}