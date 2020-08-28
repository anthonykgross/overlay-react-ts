import {EmoteAction, MessageAction, User} from "./schema";
import {v4 as uuidv4} from "uuid";

export const channels = {
    CONNECT: 'api/twitch/chat/connect',
    MESSAGE: 'api/twitch/chat/message',
    EMOTE: 'api/twitch/chat/emote',
};

export const actions = {
    connect: () => {
        return {
            type: channels.CONNECT,
        };
    },
    message: (user: User, message: string) : MessageAction => {
        return {
            type: channels.MESSAGE,
            response: {
                user: user,
                id: uuidv4(),
                message: message
            }
        };
    },
    emote: (user: User, emote: string) : EmoteAction => {
        return {
            type: channels.EMOTE,
            response: {
                user: user,
                emote: emote
            }
        };
    }
}