import { createSelector } from 'reselect'
import {State} from "./reducers";

const state = (s: any): State => s.app;

export const selectors = {
    getState: createSelector(
        [state],
        (state) => {
            return state
        }
    ),
};