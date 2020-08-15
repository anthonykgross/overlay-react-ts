import {all} from 'redux-saga/effects';
import {MainEffects} from "../layers/effects";

export function* rootSaga() {
    yield all([
        ...MainEffects
    ]);
}