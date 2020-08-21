import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import {BrowserHistory} from "history";
import {reducer as avatarReducer} from "../services/avatar/reducers";
import {reducer as appReducer} from "../app/reducers";

export const rootReducer = (history: BrowserHistory) => combineReducers({
    app: appReducer,
    avatar: avatarReducer,
    router: connectRouter(history)
});