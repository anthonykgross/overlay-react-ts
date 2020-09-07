import {Action} from "../../app/schema";
import {channels} from "./actions";
import {State, NewGiveawayAction, Giveaway, WinnerGiveawayAction, EnterGiveawayAction, Participant} from "./schema";

let initialState: State = {
    giveaways: []
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.GIVEAWAY_NEW) {
        let a: NewGiveawayAction = action as NewGiveawayAction;
        let giveaway: Giveaway = a.response;

        if (!giveaway.participants) {
            giveaway.participants = [];
        }

        return {
            ...state,
            active: giveaway
        };
    }
    if (action.type === channels.GIVEAWAY_WINNER) {
        let a: WinnerGiveawayAction = action as WinnerGiveawayAction;
        let winner = a.response;

        if (state.active) {
            let giveaway: Giveaway = state.active;
            giveaway.winners.push(winner);

            return {
                ...state,
                active: {
                    ...giveaway
                }
            };
        }
    }
    if (action.type === channels.GIVEAWAY_COMPLETE) {
        if (state.active) {
            return {
                ...state,
                active: {
                    ...state.active,
                    state: 'completed'
                }
            };
        }
    }
    if (action.type === channels.GIVEAWAY_CLOSE) {
        if (state.active) {
            return {
                ...state,
                active: {
                    ...state.active,
                    state: 'closed'
                }
            };
        }
    }
    if (action.type === channels.GIVEAWAY_REFUND) {
        if (state.active) {
            return {
                ...state,
                active: {
                    ...state.active,
                    state: 'refunded'
                }
            };
        }
    }
    if (action.type === channels.GIVEAWAY_SWITCH) {
        if (state.active) {
            return {
                ...state,
                giveaways: [
                    ...state.giveaways,
                    state.active
                ],
                active: undefined
            };
        }
    }
    if (action.type === channels.GIVEAWAY_ENTER) {
        let a: EnterGiveawayAction = action as EnterGiveawayAction;
        let participant: Participant = a.response;

        if (state.active) {
            let giveaway: Giveaway = state.active;

            giveaway.totalUsers = 0;
            giveaway.totalAmount = 0;

            let copyListParticipants = [...giveaway.participants];
            for (let i = 0; i < giveaway.participants.length; i++) {
                let p: Participant = giveaway.participants[i];
                if(p.username === participant.username) {
                    copyListParticipants.splice(i, 1);
                }
            }
            giveaway.participants = copyListParticipants;
            giveaway.participants.push(participant);

            giveaway.totalUsers = 0;
            giveaway.totalAmount = 0;

            let p: Participant;
            for(p of copyListParticipants) {
                giveaway.totalUsers += 1;
                giveaway.totalAmount += p.tickets;
            }

            return {
                ...state,
                active: {
                    ...giveaway
                }
            };
        }
    }
    return state;
};