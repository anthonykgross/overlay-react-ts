import {channels} from "../../api/twitch/chat/actions";
import {State} from "./schema";
import {MessageAction} from "../../api/twitch/chat/schema";

let initialState: State = {
    messages: []
};

export const reducer = (state: State = initialState, action: MessageAction): State => {
    if (action.type === channels.MESSAGE) {
        return {
            ...state,
            messages: [
                ...state.messages,
                action.response
            ]
        };
    }
    return state;
};