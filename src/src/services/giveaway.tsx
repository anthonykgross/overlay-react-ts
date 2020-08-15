import {Api, endpoints} from "./api";

export default class ApiGiveaway extends Api {
    getGiveaways(channelId: string) {
        let url = endpoints.streamelements.giveaways.list;
        url = url.replace('${channelId}', channelId)
        return fetch(url, this.getHeaders())
    };

    getGiveaway(channelId: string, giveawayId: string) {
        let url = endpoints.streamelements.giveaways.get;
        url = url.replace('${channelId}', channelId)
            .replace('${giveawayId}', giveawayId)
        return fetch(url, this.getHeaders())
    };
}