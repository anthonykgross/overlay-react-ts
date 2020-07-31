import {all} from 'redux-saga/effects';
import {MainEffects} from "../layers/main/effects";

export function* rootSaga() {
    yield all([
        ...MainEffects
    ]);
}