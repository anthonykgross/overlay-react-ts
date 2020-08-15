import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import {BrowserHistory} from "history";

export const rootReducer = (history: BrowserHistory) => combineReducers({
    router: connectRouter(history)
});