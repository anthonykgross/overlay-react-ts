import {channels as streamElementsChannels} from "../api/streamelements/websocket/actions";
import {Action} from "./schema";
import {AuthenticatedResponse} from "../api/streamelements/websocket/schema/authenticated";

export interface State {
    channelId: string
}

let initialState: State = {
    channelId: '',
}

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === streamElementsChannels.AUTHENTICATED) {
        let response: AuthenticatedResponse = action.response as AuthenticatedResponse;
        return {
            ...state,
            channelId: response.channelId
        }
    }
    return state;
};