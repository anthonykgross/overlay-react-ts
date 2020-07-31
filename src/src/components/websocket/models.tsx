import SocketIOClientStatic from "socket.io-client";

export interface AuthenticatedResponse {
    channelId: string,
    clientId: string,
    message: string,
    project: string,
}

export interface SubscribeContestResponse {
    room: string,
    message: string
}
export interface SubscribeGiveawayResponse {
    room: string,
    message: string
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

        this.socket.on('disconnect', (response: any) => {
            this.onDisconnect(response);
        });

        this.socket.on('authenticated', (response: AuthenticatedResponse) => {
            this.socket.emit('subscribe', {"room": "contests::" + response.channelId}, (n: any, response: SubscribeContestResponse) => {
                this.onContestsRoomSubscribe(response)
            });
            this.socket.emit('subscribe', {"room": "giveaways::" + response.channelId}, (n: any, response: SubscribeGiveawayResponse) => {
                this.onGiveawaysRoomSubscribe(response)
            });
            this.onAuthenticated(response);
        });

        this.socket.on('event:test', (response: any) => {
            this.onEventTest(response);
        });

        this.socket.on('event', (response: any) => {
            this.onEvent(response);
        });

        this.socket.on('event:update', (response: any) => {
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
    onDisconnect = (response: any) => {
    };
    onAuthenticated = (response: AuthenticatedResponse) => {
    };

    onEventTest = (response: any) => {
    };
    onEvent = (response: any) => {
    };
    onEventUpdate = (response: any) => {
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