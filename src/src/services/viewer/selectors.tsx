import { createSelector } from 'reselect'
import {State} from "./schema";

const state = (s: any): State => s.viewer;

export const selector = {
    getState: createSelector(
        [state],
        (state) => {
            return state
        }
    ),
};