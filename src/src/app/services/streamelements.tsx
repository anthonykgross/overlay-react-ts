import {Dispatch} from "redux";
import {Websocket as WS} from "../../api/streamelements/websocket";
import {AuthenticatedResponse} from "../../api/streamelements/websocket/schema/authenticated";
import {actions} from "../../api/streamelements/websocket/actions";
import {EventTestResponse} from "../../api/streamelements/websocket/schema/eventTest";
import {EventResponse} from "../../api/streamelements/websocket/schema/event";
import {EventUpdateResponse} from "../../api/streamelements/websocket/schema/eventUpdate";
import {SubscribeContestResponse} from "../../api/streamelements/websocket/schema/subscribeContest";
import {SubscribeGiveawayResponse} from "../../api/streamelements/websocket/schema/subscribeGiveaway";
import {GiveawayStateResponse} from "../../api/streamelements/websocket/schema/giveawayState";
import {GiveawayWinnerResponse} from "../../api/streamelements/websocket/schema/giveawayWinner";
import {ContestWinnerResponse} from "../../api/streamelements/websocket/schema/contestWinner";
import {ContestStateResponse} from "../../api/streamelements/websocket/schema/contestState";
import {ContestUpdateResponse} from "../../api/streamelements/websocket/schema/contestUpdate";
import {GiveawayEntryResponse} from "../../api/streamelements/websocket/schema/giveawayEntry";

export class Websocket {
    dispatch: Dispatch;
    ws: WS;

    constructor(dispatch: Dispatch) {
        this.dispatch = dispatch;
        this.ws = new WS();

        this.ws.onAuthenticated = (d: AuthenticatedResponse) => {
            this.dispatch(actions.authenticated(d))
        }
        this.ws.onConnect = () => {
            this.dispatch(actions.connect())
        }
        this.ws.onDisconnect = (d: string) => {
            this.dispatch(actions.disconnect(d))
        }
        this.ws.onEventTest = (d: EventTestResponse) => {
            this.dispatch(actions.eventTest(d))
        }
        this.ws.onEvent = (d: EventResponse) => {
            this.dispatch(actions.event(d))
        }
        this.ws.onEventUpdate = (d: EventUpdateResponse) => {
            this.dispatch(actions.eventUpdate(d))
        }
        this.ws.onEventReset = (d: any) => {
            this.dispatch(actions.eventReset(d))
        }
        this.ws.onContestState = (d: ContestStateResponse) => {
            this.dispatch(actions.contestState(d))
        }
        this.ws.onContestUpdate = (d: ContestUpdateResponse) => {
            this.dispatch(actions.contestUpdate(d))
        }
        this.ws.onContestWinner = (d: ContestWinnerResponse) => {
            this.dispatch(actions.contestWinner(d))
        }
        this.ws.onContestsRoomSubscribe = (d: SubscribeContestResponse) => {
            this.dispatch(actions.subscribeContest(d))
        }
        this.ws.onGiveawayState = (d: GiveawayStateResponse) => {
            this.dispatch(actions.giveawayState(d))
        }
        this.ws.onGiveawayWinner = (d: GiveawayWinnerResponse) => {
            this.dispatch(actions.giveawayWinner(d))
        }
        this.ws.onGiveawayEntry = (d: GiveawayEntryResponse) => {
            this.dispatch(actions.giveawayEntry(d))
        }
        this.ws.onGiveawaysRoomSubscribe = (d: SubscribeGiveawayResponse) => {
            this.dispatch(actions.subscribeGiveaway(d))
        }
    }

    stop = () => {
        this.ws.disconnect();
    }
}