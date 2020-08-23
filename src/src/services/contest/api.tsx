import {Api as BaseApi, endpoints} from "../api";

export class Api extends BaseApi {
    getContests(channelId: string){
        let url = endpoints.streamelements.contests.list;
        url = url.replace('{channelId}', channelId)
        return fetch(url, this.getHeaders())
    };

    getContest(channelId: string, contestId: string) {
        let url = endpoints.streamelements.contests.get;
        url = url.replace('{channelId}', channelId)
            .replace('{contestId}', contestId)
        return fetch(url, this.getHeaders())
    };
}