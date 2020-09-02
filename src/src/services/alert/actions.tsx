import {NewAlertAction, NextAlertAction} from "./schema";
import {v4 as uuidv4} from "uuid";

export const channels = {
    ALERT_NEW: 'services/alert/new',
    ALERT_NEXT: 'services/alert/next',
};

export const actions = {
    newAlertFollow: (username: string, image: string): NewAlertAction => {
        return {
            type: channels.ALERT_NEW,
            response: {
                id: uuidv4(),
                message: `<b>${username}</b>`,
                image: image,
                type: 'follow'
            }
        };
    },
    newAlertTip: (username: string, amount: number, image: string): NewAlertAction => {
        return {
            type: channels.ALERT_NEW,
            response: {
                id: uuidv4(),
                message: `${username} ${amount}€`,
                image: image,
                type: 'tip'
            }
        };
    },
    newAlertCheer: (username: string, amount: number , image: string): NewAlertAction => {
        return {
            type: channels.ALERT_NEW,
            response: {
                id: uuidv4(),
                message: `${username} ${amount}bits`,
                image: image,
                type: 'cheer'
            }
        };
    },
    newAlertSubscriber: (username: string, amount: number, image: string): NewAlertAction => {
        return {
            type: channels.ALERT_NEW,
            response: {
                id: uuidv4(),
                message: `${username} ${amount}mois`,
                image: image,
                type: 'subscriber'
            }
        };
    },
    newAlertRedemption: (username: string, item: string, image: string): NewAlertAction => {
        return {
            type: channels.ALERT_NEW,
            response: {
                id: uuidv4(),
                message: `${username} ${item}`,
                image: image,
                type: 'redemption'
            }
        };
    },
    nextAlert: (): NextAlertAction => {
        return {
            type: channels.ALERT_NEXT,
            response: {}
        };
    },
}