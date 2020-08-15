import {all} from 'redux-saga/effects';
import {MainEffects} from "../components/effects";

export function* rootSaga() {
    yield all([
        ...MainEffects
    ]);
}