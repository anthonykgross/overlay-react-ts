export const endpoints = {
    streamelements: {
        contests: {
            list: 'https://api.streamelements.com/kappa/v2/contests/{channelId}',
            get: 'https://api.streamelements.com/kappa/v2/contests/{channelId}/{contestId}',
        },
        giveaways: {
            list: 'https://api.streamelements.com/kappa/v3/giveaways/{channelId}',
            get: 'https://api.streamelements.com/kappa/v3/giveaways/{channelId}/{giveawayId}',
        },
        store: {
            list: 'https://api.streamelements.com/kappa/v2/store/{channelId}/items',
            get: 'https://api.streamelements.com/kappa/v2/store/{channelId}/items/{itemId}',
        },
        sessions: {
            get: 'https://api.streamelements.com/kappa/v2/sessions/{channelId}',
            put: 'https://api.streamelements.com/kappa/v2/sessions/{channelId}'
        },
    },
    decapi: {
        avatar: {
            get: 'https://decapi.me/twitch/avatar/{username}',
        },
        followcount: {
            get: 'https://decapi.me/twitch/followcount/{username}',
        },
        viewercount: {
            get: 'https://decapi.me/twitch/viewercount/{username}',
        },
    }
}

export class Api {
    getHeaders() {
        return {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + process.env.REACT_APP_STREAMELEMENT_TOKEN,
                'Content-Type': 'application/json'
            }
        }
    }
}