import { createSelector } from 'reselect'
import {State} from "./reducers";

const state = (s: any): State => s.avatar;

export const selector = {
    getState: createSelector(
        [state],
        (state) => {
            return state
        }
    ),
};