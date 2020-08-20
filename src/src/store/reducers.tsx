import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import {BrowserHistory} from "history";
import avatarReducer from "../services/avatar/reducers";
import reducer from "../app/reducers";

export const rootReducer = (history: BrowserHistory) => combineReducers({
    app: reducer,
    avatar: avatarReducer,
    router: connectRouter(history)
});