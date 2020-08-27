import {NakedAction} from "./schema";

export const channels = {
    AVATAR_NAKED: 'services/avatar/naked'
};

export const actions = {
    nakedAvatar: (): NakedAction => {
        return {
            type: channels.AVATAR_NAKED,
            response: {}
        };
    }
}