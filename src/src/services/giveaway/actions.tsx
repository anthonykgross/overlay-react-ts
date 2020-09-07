import {
    CloseGiveawayAction,
    CompleteGiveawayAction, EnterGiveawayAction, Giveaway,
    NewGiveawayAction,
    RefundGiveawayAction,
    SwitchGiveawayAction, Participant,
    WinnerGiveawayAction
} from "./schema";

export const channels = {
    GIVEAWAY_NEW: 'services/giveaway/new',
    GIVEAWAY_CLOSE: 'services/giveaway/close',
    GIVEAWAY_REFUND: 'services/giveaway/refund',
    GIVEAWAY_COMPLETE: 'services/giveaway/complete',
    GIVEAWAY_WINNER: 'services/giveaway/winner',
    GIVEAWAY_ENTER: 'services/giveaway/enter',
    GIVEAWAY_SWITCH: 'services/giveaway/switch',
};

export const actions = {
    newGiveaway: (giveaway: Giveaway): NewGiveawayAction => {
        return {
            type: channels.GIVEAWAY_NEW,
            response: giveaway
        };
    },
    closeGiveaway: (): CloseGiveawayAction => {
        return {
            type: channels.GIVEAWAY_CLOSE,
            response: {}
        };
    },
    refundGiveaway: (): RefundGiveawayAction => {
        return {
            type: channels.GIVEAWAY_REFUND,
            response: {}
        };
    },
    completeGiveaway: (): CompleteGiveawayAction => {
        return {
            type: channels.GIVEAWAY_COMPLETE,
            response: {}
        };
    },
    winnerGiveaway: (winner: Participant): WinnerGiveawayAction => {
        return {
            type: channels.GIVEAWAY_WINNER,
            response: winner
        };
    },
    enterGiveaway: (participant: Participant): EnterGiveawayAction => {
        return {
            type: channels.GIVEAWAY_ENTER,
            response: participant
        };
    },
    switchGiveaway: () : SwitchGiveawayAction => {
        return {
            type: channels.GIVEAWAY_SWITCH,
            response: {}
        }
    }

}