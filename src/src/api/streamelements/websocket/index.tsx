import SocketIOClientStatic from "socket.io-client";
import {AuthenticatedResponse, AuthenticatedResponseSchema} from "./schema/authenticated";
import {SubscribeContestResponse, SubscribeContestResponseSchema} from "./schema/subscribeContest";
import {SubscribeGiveawayResponse, SubscribeGiveawayResponseSchema} from "./schema/subscribeGiveaway";
import {EventTestResponse, EventTestResponseSchema} from "./schema/eventTest";
import {EventUpdateResponse, EventUpdateResponseSchema} from "./schema/eventUpdate";
import {EventResponse, EventResponseSchema} from "./schema/event";
import {ContestStateResponse} from "./schema/contestState";
import {ContestUpdateResponse} from "./schema/contestUpdate";
import {ContestWinnerResponse} from "./schema/contestWinner";
import {GiveawayWinnerResponse} from "./schema/giveawayWinner";
import {GiveawayStateResponse} from "./schema/giveawayState";
import {GiveawayEntryResponse} from "./schema/giveawayEntry";
import {checkSchema} from "../../../app/schema";

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
        this.socket.on('contest:state', (response: ContestStateResponse) => {
            this.onContestState(response);
        });

        this.socket.on('contest:update', (response: ContestUpdateResponse) => {
            this.onContestUpdate(response);
        });

        this.socket.on('contest:winner', (response: ContestWinnerResponse) => {
            this.onContestWinner(response);
        });

        // GIVEAWAYS
        this.socket.on('giveaway:state', (response: GiveawayStateResponse) => {
            this.onGiveawayState(response);
        });

        this.socket.on('giveaway:winner', (response: GiveawayWinnerResponse) => {
            this.onGiveawayWinner(response);
        });
        this.socket.on('giveaway:entry', (response: GiveawayEntryResponse) => {
            this.onGiveawayEntry(response);
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
    onContestState = (response: ContestStateResponse) => {
    };
    onContestUpdate = (response: ContestUpdateResponse) => {
    };
    onContestWinner = (response: ContestWinnerResponse) => {
    };

    onContestsRoomSubscribe(response: SubscribeContestResponse) {
    }

    // GIVEAWAYS
    onGiveawayState = (response: GiveawayStateResponse) => {
    };
    onGiveawayWinner = (response: GiveawayWinnerResponse) => {
    };
    onGiveawayEntry = (response: GiveawayEntryResponse) => {
    };
    onGiveawaysRoomSubscribe(response: SubscribeGiveawayResponse) {
    }
}