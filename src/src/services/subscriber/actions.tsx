import {EventSubscriberResponse} from "../../api/streamelements/websocket/schema/event";
import {InitSubscriberAction, NewSubscriberAction, Subscriber, TestSubscriberAction} from "./schema";

export const channels = {
    SUBSCRIBER_NEW: 'services/subscriber/new',
    SUBSCRIBER_TEST: 'services/subscriber/test',
    SUBSCRIBER_INIT: 'services/subscriber/init',
};

export const actions = {
    newSubscriber: (response: EventSubscriberResponse): NewSubscriberAction => {
        return {
            type: channels.SUBSCRIBER_NEW,
            response: response
        };
    },
    testSubscriber: (username: string, amount: number, tier: string): TestSubscriberAction => {
        return {
            type: channels.SUBSCRIBER_TEST,
            response: {
                username: username,
                amount: amount,
                tier: tier,
            }
        };
    },
    initSubscriber: (count: number, subscribers: Subscriber[]): InitSubscriberAction => {
        return {
            type: channels.SUBSCRIBER_INIT,
            response: {
                count: count,
                subscribers: subscribers,
            }
        };
    }
}