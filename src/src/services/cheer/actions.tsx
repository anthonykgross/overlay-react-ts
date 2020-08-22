import {EventCheerResponse} from "../../api/streamelements/websocket/schema/event";
import {Cheer, InitCheerAction, NewCheerAction, TestCheerAction} from "./schema";

export const channels = {
    CHEER_NEW: 'services/cheer/new',
    CHEER_TEST: 'services/cheer/test',
    CHEER_INIT: 'services/cheer/init',
};

export const actions = {
    newCheer: (response: EventCheerResponse): NewCheerAction => {
        return {
            type: channels.CHEER_NEW,
            response: response
        };
    },
    testCheer: (username: string, amount: number): TestCheerAction => {
        return {
            type: channels.CHEER_TEST,
            response: {
                username: username,
                amount: amount,
            }
        };
    },
    initCheer: (count: number, cheers: Cheer[]): InitCheerAction => {
        return {
            type: channels.CHEER_INIT,
            response: {
                count: count,
                cheers: cheers,
            }
        };
    }
}