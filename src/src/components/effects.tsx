import {takeEvery} from 'redux-saga/effects';

function* onAll(d: any) {
    yield;
}

export const MainEffects = [
    takeEvery('*', onAll),
];