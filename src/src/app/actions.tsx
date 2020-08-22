import {Contest} from "../api/schema/contest";
import {Giveaway} from "../api/schema/giveaway";
import {Action} from "./schema";

export const channels = {
    CONTEST_UPDATE: 'contest/update',
    GIVEAWAY_UPDATE: 'giveaway/update',
};

export const actions = {
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
    }
}