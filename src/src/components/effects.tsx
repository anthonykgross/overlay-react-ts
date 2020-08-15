import {takeEvery} from 'redux-saga/effects';
import {AuthenticatedAction, websocketChannels} from "../api/websocket/actions";

function* onAll(d: any) {
    console.log(d);
    yield;
}

export const MainEffects = [
    takeEvery('*', onAll),
];