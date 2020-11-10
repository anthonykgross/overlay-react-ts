import {NewEmojiAction, NextEmojiAction} from "./schema";
import {v4 as uuidv4} from "uuid";
import {User} from "../../api/twitch/chat/schema";

export const channels = {
    EMOJI_NEW: 'services/emoji/new',
    EMOJI_NEXT: 'services/emoji/next',
};

export const actions = {
    newEmoji: (user: User, url: string): NewEmojiAction => {
        return {
            type: channels.EMOJI_NEW,
            response: {
                id: uuidv4(),
                user: user,
                url: url
            }
        };
    },
    nextEmoji: (): NextEmojiAction => {
        return {
            type: channels.EMOJI_NEXT,
            response: {}
        };
    },
}