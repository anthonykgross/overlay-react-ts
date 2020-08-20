import {Session} from "../api/schema/session";
import {Contest} from "../api/schema/contest";
import {Giveaway} from "../api/schema/giveaway";

export const channels = {
    REDEMPTION_NEW: 'redemption/new',
    VIEWER_UPDATE: 'viewer/update',
    SESSION_UPDATE: 'session/update',
    CONTEST_UPDATE: 'contest/update',
    GIVEAWAY_UPDATE: 'giveaway/update',
};

export const actions = {
    newRedemption: (redemption: any) => {
        return {
            type: channels.REDEMPTION_NEW,
            redemption: redemption
        };
    },
    updateNbViewers: (total: number) => {
        return {
            type: channels.VIEWER_UPDATE,
            total: total
        };
    },
    updateSession: (session: Session) => {
        return {
            type: channels.SESSION_UPDATE,
            session: session
        };
    },
    updateContest: (contest: Contest) => {
        return {
            type: channels.CONTEST_UPDATE,
            contest: contest
        };
    },
    updateGiveaway: (giveaway: Giveaway) => {
        return {
            type: channels.GIVEAWAY_UPDATE,
            giveaway: giveaway
        };
    },
}