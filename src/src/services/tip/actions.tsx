import {EventTipResponse} from "../../api/streamelements/websocket/schema/event";
import {InitTipAction, NewTipAction, TestTipAction, Tip} from "./schema";
import moment from "moment";

export const channels = {
    TIP_NEW: 'services/tip/new',
    TIP_TEST: 'services/tip/test',
    TIP_INIT: 'services/tip/init',
};

export const actions = {
    newTip: (response: EventTipResponse): NewTipAction => {
        return {
            type: channels.TIP_NEW,
            response: response
        };
    },
    testTip: (username: string, amount: number): TestTipAction => {
        return {
            type: channels.TIP_TEST,
            response: {
                username: username,
                amount: amount,
                createdAt: moment()
            }
        };
    },
    initTip: (count: number, tips: Tip[]): InitTipAction => {
        return {
            type: channels.TIP_INIT,
            response: {
                count: count,
                tips: tips,
            }
        };
    }
}