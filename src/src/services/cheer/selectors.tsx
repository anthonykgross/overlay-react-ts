import { createSelector } from 'reselect'
import {State} from "./schema";

const state = (s: any): State => s.cheer;

export const selector = {
    getState: createSelector(
        [state],
        (state) => {
            return state
        }
    ),
};