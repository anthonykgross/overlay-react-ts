export const endpoints = {
    streamelements: {
        contests: {
            list: 'https://api.streamelements.com/kappa/v2/contests/{channelId}',
            get: 'https://api.streamelements.com/kappa/v2/contests/{channelId}/{contestId}',
        },
        giveaways: {
            list: 'https://api.streamelements.com/kappa/v3/giveaways/{channelId}',
            get: 'https://api.streamelements.com/kappa/v3/giveaways/{channelId}/{giveawayId}',
            start: 'https://api.streamelements.com/kappa/v3/giveaways/{channelId}/{giveawayId}/action',
            participants: {
                get: 'https://api.streamelements.com/kappa/v3/giveaways/{channelId}/{giveawayId}/entries'
            }
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

export class StreamElementApi {
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

export class TwitchOAuthApi {
    authorizeUrl = 'https://id.twitch.tv/oauth2/authorize' +
        '?client_id=' + process.env.REACT_APP_TWITCH_CLIENT_ID +
        '&redirect_uri=http://localhost' +
        '&response_type=code' +
        '&scope=' + process.env.REACT_APP_TWITCH_SCOPE;

    accessTokenUrl = 'https://id.twitch.tv/oauth2/token' +
        '?client_id=' + process.env.REACT_APP_TWITCH_CLIENT_ID +
        '&client_secret=' + process.env.REACT_APP_TWITCH_SECRET_ID +
        '&code={code}' +
        '&grant_type=authorization_code' +
        '&redirect_uri=http://localhost'

    refreshTokenUrl = 'https://id.twitch.tv/oauth2/token--data-urlencode' +
        '?grant_type=refresh_token' +
        '&refresh_token={refreshToken}' +
        '&client_id=' + process.env.REACT_APP_TWITCH_CLIENT_ID +
        '&client_secret=' + process.env.REACT_APP_TWITCH_SECRET_ID

    getAuthorizeUrl = () => {
        return this.authorizeUrl;
    }

    getAccessToken = (code: string) => {
        let url = this.accessTokenUrl.replace('{code}', code);
        return fetch(url, {method: 'POST'})
    }

    getRefreshToken = (refreshToken: string) => {
        let url = this.refreshTokenUrl.replace('{refreshToken}', refreshToken);
        return fetch(url, {method: 'POST'})
    }
}