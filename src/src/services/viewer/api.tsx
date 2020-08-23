import {Api as BaseApi, endpoints} from "../api";

export class Api extends BaseApi {
    getAvatar(username: string) {
        let url = endpoints.decapi.avatar.get;
        url = url.replace('{username}', username)
        return fetch(url)
    };

    getViewerCount(username: string) {
        let url = endpoints.decapi.viewercount.get;
        url = url.replace('{username}', username)
        return fetch(url)
    };
}