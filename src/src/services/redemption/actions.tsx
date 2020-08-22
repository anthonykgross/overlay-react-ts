import {Redemption} from "../../api/schema/redemption";
import {NewRedemptionAction} from "./schema";

export const channels = {
    REDEMPTION_NEW: 'services/redemption/new',
};

export const actions = {
    newRedemption: (redemption: Redemption): NewRedemptionAction => {
        return {
            type: channels.REDEMPTION_NEW,
            response: {
                redemption: redemption
            }
        };
    }
}