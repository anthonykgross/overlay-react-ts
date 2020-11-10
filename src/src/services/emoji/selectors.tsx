import {createSelector} from 'reselect'
import {State} from "./schema";

const state = (s: any): State => s.emoji;

export const selector = {
    getState: createSelector(
        [state],
        (state) => {
            return state
        }
    ),
};