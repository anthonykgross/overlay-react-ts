import {NewAlertAction, NextAlertAction} from "./schema";

export const channels = {
    ALERT_NEW: 'services/alert/new',
    ALERT_NEXT: 'services/alert/next',
};

export const actions = {
    newAlertFollow: (username: string, image: string): NewAlertAction => {
        return {
            type: channels.ALERT_NEW,
            response: {
                message: username,
                image: image,
                type: 'follow'
            }
        };
    },
    newAlertTip: (username: string, image: string): NewAlertAction => {
        return {
            type: channels.ALERT_NEW,
            response: {
                message: username,
                image: image,
                type: 'tip'
            }
        };
    },
    newAlertCheer: (username: string, image: string): NewAlertAction => {
        return {
            type: channels.ALERT_NEW,
            response: {
                message: username,
                image: image,
                type: 'cheer'
            }
        };
    },
    newAlertSubscriber: (username: string, image: string): NewAlertAction => {
        return {
            type: channels.ALERT_NEW,
            response: {
                message: username,
                image: image,
                type: 'subscriber'
            }
        };
    },
    newAlertRedemption: (username: string, image: string): NewAlertAction => {
        return {
            type: channels.ALERT_NEW,
            response: {
                message: username,
                image: image,
                type: 'redemption'
            }
        };
    },
    nextAlert: (): NextAlertAction => {
        return {
            type: channels.ALERT_NEW,
            response: {}
        };
    },
}