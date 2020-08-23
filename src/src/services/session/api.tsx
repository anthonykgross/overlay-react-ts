import {Api as BaseApi, endpoints} from "../api";

export class Api extends BaseApi {
    getSession(channelId: string) {
        let url = endpoints.streamelements.sessions.get;
        url = url.replace('{channelId}', channelId);
        return fetch(url, this.getHeaders());
    };
}