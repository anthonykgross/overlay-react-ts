import {Api, endpoints} from "./api";

export default class ApiSession extends Api {
    getSession(channelId: string) {
        let url = endpoints.streamelements.sessions.get;
        url = url.replace('${channelId}', channelId);
        return fetch(url, this.getHeaders());
    };

    update(channelId: string, goal: string) {
        let url = endpoints.streamelements.sessions.put;
        url = url.replace('${channelId}', channelId);
        return fetch(url, {
            ...this.getHeaders(),
            method: 'PUT',
            body: JSON.stringify({
                'follower-goal': {
                    amount: goal
                }
            })
        });
    };
}