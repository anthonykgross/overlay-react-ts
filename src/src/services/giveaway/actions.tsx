import {
    CloseGiveawayAction,
    CompleteGiveawayAction, EnterGiveawayAction, Giveaway,
    NewGiveawayAction,
    RefundGiveawayAction,
    WinnerGiveawayAction
} from "./schema";

export const channels = {
    GIVEAWAY_NEW: 'services/giveaway/new',
    GIVEAWAY_CLOSE: 'services/giveaway/close',
    GIVEAWAY_REFUND: 'services/giveaway/refund',
    GIVEAWAY_COMPLETE: 'services/giveaway/complete',
    GIVEAWAY_WINNER: 'services/giveaway/winner',
    GIVEAWAY_ENTER: 'services/contest/enter',
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
    winnerGiveaway: (username: string): WinnerGiveawayAction => {
        return {
            type: channels.GIVEAWAY_WINNER,
            response: username
        };
    },
    enterGiveaway: (amount: number, username: string): EnterGiveawayAction => {
        return {
            type: channels.GIVEAWAY_ENTER,
            response: {
                amount: amount,
                username: username
            }
        };
    }

}