import {Api as BaseApi, endpoints} from "../api";

export class Api extends BaseApi {
    getItems(channelId: string) {
        let url = endpoints.streamelements.store.list;
        url = url.replace('{channelId}', channelId)
        return fetch(url, this.getHeaders())
    };

    getItem(channelId: string, itemId: string) {
        let url = endpoints.streamelements.store.get;
        url = url.replace('{channelId}', channelId)
            .replace('{itemId}', itemId)
        return fetch(url, this.getHeaders())
    };
}