import { createSelector } from 'reselect'
import {State} from "./reducers";

const state = (s: any): State => s.app;

export const selector = {
    getState: createSelector(
        [state],
        (state) => {
            return state
        }
    ),
};