import {Api, endpoints} from "./api";

export default class ApiContest extends Api {
    getContests(channelId: string){
        let url = endpoints.streamelements.contests.list;
        url = url.replace('${channelId}', channelId)
        return fetch(url, this.getHeaders())
    };

    getContest(channelId: string, contestId: string) {
        let url = endpoints.streamelements.contests.get;
        url = url.replace('${channelId}', channelId)
            .replace('${contestId}', contestId)
        return fetch(url, this.getHeaders())
    };
}