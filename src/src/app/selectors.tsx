import { createSelector } from 'reselect'

const s = (state: any) => state.app;

export const selectors = {
    getState: createSelector(
        [s],
        (state) => {
            return state
        }
    ),
};