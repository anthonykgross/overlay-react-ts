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
    message: (user: any, message: any) => {
        return {
            type: channels.MESSAGE,
            response: {
                user: user,
                message: message
            }
        };
    }
}