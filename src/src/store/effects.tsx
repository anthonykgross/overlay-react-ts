import {all} from 'redux-saga/effects';
import {MainEffects} from "../app/effects";

export function* rootSaga() {
    yield all([
        ...MainEffects
    ]);
}