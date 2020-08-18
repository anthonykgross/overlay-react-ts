import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Websocket} from "../api/websocket";
import {websocketActions} from "../api/websocket/actions";
import './scss/index.scss'
import {
    AuthenticatedResponse,
    EventResponse,
    EventTestResponse,
    EventUpdateResponse, SubscribeContestResponse, SubscribeGiveawayResponse
} from "../api/websocket/schema";

function MainComponent(props: any) {
    const dispatch = useDispatch();

    useEffect(() => {
        let ws = new Websocket();
        ws.onAuthenticated = (d: AuthenticatedResponse) => {
            dispatch(websocketActions.authenticated(d))
        }
        ws.onConnect = () => {
            dispatch(websocketActions.connect())
        }
        ws.onDisconnect = (d) => {
            dispatch(websocketActions.disconnect(d))
        }
        ws.onEventTest = (d: EventTestResponse) => {
            dispatch(websocketActions.eventTest(d))
        }
        ws.onEvent = (d: EventResponse) => {
            dispatch(websocketActions.event(d))
        }
        ws.onEventUpdate = (d: EventUpdateResponse) => {
            dispatch(websocketActions.eventUpdate(d))
        }
        ws.onEventReset = (d) => {
            dispatch(websocketActions.eventReset(d))
        }
        ws.onContestRunning = (d) => {
            dispatch(websocketActions.contestRunning(d))
        }
        ws.onContestState = (d) => {
            dispatch(websocketActions.contestState(d))
        }
        ws.onContestUpdate = (d) => {
            dispatch(websocketActions.contestUpdate(d))
        }
        ws.onContestsRoomSubscribe = (d: SubscribeContestResponse) => {
            dispatch(websocketActions.subscribeContest(d))
        }
        ws.onGiveAwayRunning = (d) => {
            dispatch(websocketActions.giveawayRunning(d))
        }
        ws.onGiveAwayState = (d) => {
            dispatch(websocketActions.giveawayState(d))
        }
        ws.onGiveAwayUpdate = (d) => {
            dispatch(websocketActions.giveawayUpdate(d))
        }
        ws.onGiveAwayWinner = (d) => {
            dispatch(websocketActions.giveawayWinner(d))
        }
        ws.onGiveawaysRoomSubscribe = (d: SubscribeGiveawayResponse) => {
            dispatch(websocketActions.subscribeGiveaway(d))
        }
        return function cleanUp() {
            ws.disconnect();
        }
    })

    return (
        <div id="main">
            {props.children}
        </div>
    );
}

export default MainComponent;
