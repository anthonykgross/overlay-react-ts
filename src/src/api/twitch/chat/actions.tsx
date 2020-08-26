import {MessageAction, User} from "./schema";

export const channels = {
    CONNECT: 'api/twitch/chat/connect',
    MESSAGE: 'api/twitch/chat/message',
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
                message: message
            }
        };
    }
}