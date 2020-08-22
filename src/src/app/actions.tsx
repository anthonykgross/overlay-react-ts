import {Giveaway} from "../api/schema/giveaway";
import {Action} from "./schema";

export const channels = {
    GIVEAWAY_UPDATE: 'giveaway/update',
};

export const actions = {
    updateGiveaway: (giveaway: Giveaway): Action => {
        return {
            type: channels.GIVEAWAY_UPDATE,
            response: giveaway
        };
    }
}