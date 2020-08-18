import {takeLatest, put} from 'redux-saga/effects';
import {websocketChannels} from "../api/websocket/actions";
import {actions} from "./actions";

function* onAll(d: any) {
    console.log(d);
    yield;
}
function* onEventUpdate(d: any) {
    if (d.response.name === "redemption-latest") {
        yield put(actions.redemption_latest(d.response.data))
    }
}

export const MainEffects = [
    takeLatest('*', onAll),
    takeLatest(websocketChannels.EVENT_UPDATE, onEventUpdate),
];