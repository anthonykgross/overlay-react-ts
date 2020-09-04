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
                message: `<h3>Follow !</h3><b>+20pts</b> pour <b>${username}</b>!<br/>Merci !`,
                image: image,
                type: 'follow'
            }
        };
    },
    newAlertTip: (username: string, amount: number, image: string): NewAlertAction => {
        let points = Math.floor(amount) * 100;
        return {
            type: channels.ALERT_NEW,
            response: {
                id: uuidv4(),
                message: `<h3>Tips !</h3><b>+${points}pts</b> pour <b>${username}</b>!<br/>Merci !`,
                image: image,
                type: 'tip'
            }
        };
    },
    newAlertCheer: (username: string, amount: number , image: string): NewAlertAction => {
        let points = Math.floor(amount / 100) * 50;
        if (points === 0) {
            points = 1;
        }
        return {
            type: channels.ALERT_NEW,
            response: {
                id: uuidv4(),
                message: `<h3>Cheers !</h3><b>+${points}pts</b> pour <b>${username}</b>!<br/>Merci !`,
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
                message: `<h3>Sub !</h3><b>+250pts</b> pour <b>${username}</b>!<br/>Merci !`,
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
                message: `<h3>Achat !</h3><b>${username}</b> achete <b>${item}</b>`,
                image: image,
                type: 'redemption'
            }
        };
    },
    nextAlertLevelUp: (): NewAlertAction => {
        return {
            type: channels.ALERT_NEW,
            response: {
                id: uuidv4(),
                message: `<h3>Level UP !</h3>C'est parti pour un Giveaway :D`,
                image: 'images/levelup.png',
                type: 'levelup'
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