import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import {BrowserHistory} from "history";
import {reducer as avatarReducer} from "../services/avatar/reducers";
import {reducer as followerReducer} from "../services/follower/reducers";
import {reducer as cheerReducer} from "../services/cheer/reducers";
import {reducer as subscriberReducer} from "../services/subscriber/reducers";
import {reducer as tipReducer} from "../services/tip/reducers";
import {reducer as appReducer} from "../app/reducers";

export const rootReducer = (history: BrowserHistory) => combineReducers({
    app: appReducer,
    avatar: avatarReducer,
    follower: followerReducer,
    subscriber: subscriberReducer,
    cheer: cheerReducer,
    tip: tipReducer,
    router: connectRouter(history)
});