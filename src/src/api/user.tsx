import {Api, endpoints} from "./api";

export default class ApiUser extends Api {
    getAvatar(username: string) {
        let url = endpoints.decapi.avatar.get;
        url = url.replace('${username}', username)
        return fetch(url)
    };

    getViewerCount(username: string) {
        let url = endpoints.decapi.viewercount.get;
        url = url.replace('${username}', username)
        return fetch(url)
    };
}