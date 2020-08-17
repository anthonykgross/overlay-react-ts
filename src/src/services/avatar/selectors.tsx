import { createSelector } from 'reselect'

const selector = (state: any) => state.avatar;

export const avatarSelector = {
    getState: createSelector(
        [selector],
        (stateAvatar) => {
            return stateAvatar
        }
    ),
};