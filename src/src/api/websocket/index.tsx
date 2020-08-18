import SocketIOClientStatic from "socket.io-client";
import {
    AuthenticatedResponse,
    AuthenticatedResponseSchema,
    EventResponse, EventSchema,
    EventTestResponse, EventTestSchema,
    EventUpdateResponse, EventUpdateSchema,
    SubscribeContestResponse, SubscribeContestResponseSchema,
    SubscribeGiveawayResponse, SubscribeGiveawayResponseSchema
} from "./schema";
import {Schema} from "@hapi/joi";

function checkSchema(schema: Schema, value: any) {
    let {error} = schema.validate(value);
    if (error) {
        console.error(error.message, value);
    }
}

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
            checkSchema(EventTestSchema, response);
            this.onEventTest(response);
        });

        this.socket.on('event', (response: EventResponse) => {
            checkSchema(EventSchema, response);
            this.onEvent(response);
        });

        this.socket.on('event:update', (response: EventUpdateResponse) => {
            checkSchema(EventUpdateSchema, response);
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
            this.onGiveAwayRunning(response);
        });

        this.socket.on('giveaway:state', (response: any) => {
            this.onGiveAwayState(response);
        });

        this.socket.on('giveaway:update', (response: any) => {
            this.onGiveAwayUpdate(response);
        });

        this.socket.on('giveaway:winner', (response: any) => {
            this.onGiveAwayWinner(response);
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
    onContestState = (response: any) => {
    };
    onContestUpdate = (response: any) => {
    };
    onContestWinner = (response: any) => {
    };

    onContestsRoomSubscribe(response: SubscribeContestResponse) {
    }

    // GIVEAWAYS
    onGiveAwayRunning = (response: any) => {
    };
    onGiveAwayState = (response: any) => {
    };
    onGiveAwayUpdate = (response: any) => {
    };
    onGiveAwayWinner = (response: any) => {
    };

    onGiveawaysRoomSubscribe(response: SubscribeGiveawayResponse) {
    }
}