import {Action} from "../../app/schema";
import {Redemption} from "../../api/schema/redemption";

export interface State {
    count: number,
    redemptions: Redemption[],
}

export interface NewRedemptionAction extends Action {
    response: {
        redemption: Redemption
    }
}
