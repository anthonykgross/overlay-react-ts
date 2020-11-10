import {Action} from "../../app/schema";
import {channels} from "./actions";
import {NewEmojiAction, State} from "./schema";

let initialState: State = {
    emojis: []
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.EMOJI_NEW) {
        let a: NewEmojiAction = action as NewEmojiAction;

        if (!state.current) {
            state.current = a.response
        } else {
            state.emojis = [
                ...state.emojis,
                a.response
            ]
        }

        return {
            ...state
        };
    }
    if (action.type === channels.EMOJI_NEXT) {
        if (state.emojis.length > 0) {
            return {
                ...state,
                current: {
                    ...state.emojis[0]
                },
                emojis: [
                    ...state.emojis.slice(1)
                ]
            };
        } else {
            return {
                ...state,
                current: undefined,
                emojis: []
            };
        }
    }

    return state;
};