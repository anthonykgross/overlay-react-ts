export const channels = {
    REDEMPTION_LATEST: 'redemption-latest',
};

export const actions = {
    redemption_latest: (data: any) => {
        return {
            type: channels.REDEMPTION_LATEST,
            data: data
        };
    },
}