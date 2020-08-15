import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {Websocket} from "../components/websocket/models";
import {websocketActions} from "../components/websocket/actions";

const mapStateToProps = (state: any) => {
    return {
        ...state
    };
};

function MainLayer(props: any) {
    const dispatch = useDispatch();
    let ws = new Websocket();

    useEffect(() => {
        ws.onAuthenticated = (d) => {
            dispatch(websocketActions.authenticated(d))
        }
        ws.onConnect = () => {
            dispatch(websocketActions.connect())
        }
        ws.onDisconnect = (d) => {
            dispatch(websocketActions.disconnect(d))
        }
        ws.onEventTest = (d) => {
            dispatch(websocketActions.eventTest(d))
        }
        ws.onEvent = (d) => {
            dispatch(websocketActions.event(d))
        }
        ws.onEventUpdate = (d) => {
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
        ws.onContestsRoomSubscribe = (d) => {
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
        ws.onGiveawaysRoomSubscribe = (d) => {
            dispatch(websocketActions.subscribeGiveaway(d))
        }
        return function cleanUp() {
            ws.disconnect();
        }
    })

    return (
        <div className="main-layer">
            {props.children}
        </div>
    );
}
export default connect(mapStateToProps)(MainLayer);
