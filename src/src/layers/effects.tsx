import {takeEvery} from 'redux-saga/effects';
import {AuthenticatedAction, websocketChannels} from "../components/websocket/actions";

function* onAll(d: any) {
    console.log(d);
    yield;
}

export const MainEffects = [
    takeEvery('*', onAll),
];