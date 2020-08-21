import {Contest} from "../api/schema/contest";
import {Giveaway} from "../api/schema/giveaway";
import {Redemption} from "../api/schema/redemption";
import {
    EventCheerResponse,
    EventSubscriberResponse,
    EventTipResponse
} from "../api/streamelements/websocket/schema/event";
import {Action} from "./schema";

export const channels = {
    REDEMPTION_NEW: 'redemption/new',
    SUBSCRIBER_NEW: 'subscriber/new',
    CHEER_NEW: 'cheer/new',
    TIP_NEW: 'tip/new',
    VIEWER_UPDATE: 'viewer/update',
    CONTEST_UPDATE: 'contest/update',
    GIVEAWAY_UPDATE: 'giveaway/update',
};

export const actions = {
    updateNbViewers: (total: number): Action => {
        return {
            type: channels.VIEWER_UPDATE,
            response: total
        };
    },
    updateContest: (contest: Contest): Action => {
        return {
            type: channels.CONTEST_UPDATE,
            response: contest
        };
    },
    updateGiveaway: (giveaway: Giveaway): Action => {
        return {
            type: channels.GIVEAWAY_UPDATE,
            response: giveaway
        };
    },
    newRedemption: (redemption: Redemption): Action => {
        return {
            type: channels.REDEMPTION_NEW,
            response: redemption
        };
    },
    newTip: (response: EventTipResponse): Action => {
        return {
            type: channels.TIP_NEW,
            response: response
        };
    },
    newCheer: (response: EventCheerResponse): Action => {
        return {
            type: channels.CHEER_NEW,
            response: response
        };
    },
    newSubscriber: (response: EventSubscriberResponse): Action => {
        return {
            type: channels.SUBSCRIBER_NEW,
            response: response
        };
    }
}