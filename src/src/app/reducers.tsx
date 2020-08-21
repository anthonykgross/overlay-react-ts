import {channels as streamElementsChannels} from "../api/streamelements/websocket/actions";
import {channels as appChannels} from "./actions";
import {Action} from "./schema";
import {AuthenticatedResponse} from "../api/streamelements/websocket/schema/authenticated";
import {Session} from "../api/schema/session";

export interface State {
    channelId: string,
    session?: Session
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
    if (action.type === appChannels.SESSION_UPDATE) {
        let response: Session = action.response as Session;
        return {
            ...state,
            session: response
        }
    }
    return state;
};