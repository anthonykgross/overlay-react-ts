import {AuthenticatedAction} from "../api/streamelements/websocket/schema/actions";
import {channels} from "../api/streamelements/websocket/actions";

export interface State {
    channelId: string
}

let initialState: State = {
    channelId: ''
}

const reducer = (state: State = initialState, action: AuthenticatedAction) => {
    if (action.type === channels.AUTHENTICATED) {
        return {
            ...state,
            channelId: action.response.channelId
        }
    }
    return state;
};

export default reducer;