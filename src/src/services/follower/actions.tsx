import {EventFollowResponse} from "../../api/streamelements/websocket/schema/event";
import {Follower, InitFollowAction, NewFollowAction, TestFollowAction} from "./schema";
import moment from "moment";

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
                username: username,
                createdAt: moment().toDate().toUTCString()
            }
        };
    },
    initFollow: (count: number, followers: Follower[]): InitFollowAction => {
        return {
            type: channels.FOLLOW_INIT,
            response: {
                count: count,
                followers: followers,
            }
        };
    }
}