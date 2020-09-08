import {StreamElementApi as BaseApi, endpoints} from "../api";

export class Api extends BaseApi {
    getGiveaways(channelId: string) {
        let url = endpoints.streamelements.giveaways.list;
        url = url.replace('{channelId}', channelId)
        return fetch(url, this.getHeaders())
    };

    getGiveaway(channelId: string, giveawayId: string) {
        let url = endpoints.streamelements.giveaways.get;
        url = url.replace('{channelId}', channelId)
            .replace('{giveawayId}', giveawayId)
        return fetch(url, this.getHeaders())
    };

    getParticipants(channelId: string, giveawayId: string) {
        let url = endpoints.streamelements.giveaways.participants.get;
        url = url.replace('{channelId}', channelId)
            .replace('{giveawayId}', giveawayId)
        return fetch(url, this.getHeaders())
    };

    newGiveaway(channelId: string) {
        let url = endpoints.streamelements.giveaways.list;
        url = url.replace('{channelId}', channelId)
        return fetch(url, {
            ...this.getHeaders(),
            method: 'POST',
            body: JSON.stringify({
                "preview": "",
                "title": "200pts à gagner !",
                "cost": 20,
                "maxTickets": 10,
                "subscriberLuck": 1,
                "freeTicket": true
            })
        });
    };

    startGiveaway(channelId: string, giveawayId: string) {
        let url = endpoints.streamelements.giveaways.start;
        url = url.replace('{channelId}', channelId)
            .replace('{giveawayId}', giveawayId)
        return fetch(url, {
            ...this.getHeaders(),
            method: 'PUT',
            body: JSON.stringify({
                "action":"start"
            })
        });
    };
}