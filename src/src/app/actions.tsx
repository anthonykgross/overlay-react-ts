export const channels = {
    REDEMPTION_NEW: 'redemption/new',
    VIEWER_UPDATE: 'viewer/update',
    SESSION_UPDATE: 'session/update',
    CONTEST_UPDATE: 'contest/update',
    GIVEAWAY_UPDATE: 'giveaway/update',
};

export const actions = {
    newRedemption: (redemption: any) => {
        return {
            type: channels.REDEMPTION_NEW,
            redemption: redemption
        };
    },
    updateNbViewers: (total: number) => {
        return {
            type: channels.VIEWER_UPDATE,
            total: total
        };
    },
    updateSession: (session: any) => {
        return {
            type: channels.SESSION_UPDATE,
            session: session
        };
    },
    updateContest: (contest: any) => {
        return {
            type: channels.CONTEST_UPDATE,
            contest: contest
        };
    },
    updateGiveaway: (giveaway: any) => {
        return {
            type: channels.GIVEAWAY_UPDATE,
            giveaway: giveaway
        };
    },
}