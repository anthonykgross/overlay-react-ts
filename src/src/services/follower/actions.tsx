import {EventFollowResponse} from "../../api/streamelements/websocket/schema/event";
import {InitFollowAction, NewFollowAction, TestFollowAction} from "./schema";

export const channels = {
    FOLLOW_NEW: 'services/follow/new',
    FOLLOW_TEST: 'services/follow/test',
    FOLLOW_INIT: 'services/follow/init',
};

export const actions = {
    newFollow: (response: EventFollowResponse): NewFollowAction => {
        return {
            type: channels.FOLLOW_NEW,
            response: response
        };
    },
    testFollow: (username: string): TestFollowAction => {
        return {
            type: channels.FOLLOW_TEST,
            response: {
                username: username
            }
        };
    },
    initFollow: (count: number, followers: string[]): InitFollowAction => {
        return {
            type: channels.FOLLOW_INIT,
            response: {
                count: count,
                followers: followers,
            }
        };
    }
}