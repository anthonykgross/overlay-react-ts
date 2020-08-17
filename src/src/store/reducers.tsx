import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import {BrowserHistory} from "history";
import avatarReducer from "../services/avatar/reducers";

export const rootReducer = (history: BrowserHistory) => combineReducers({
    avatar: avatarReducer,
    router: connectRouter(history)
});