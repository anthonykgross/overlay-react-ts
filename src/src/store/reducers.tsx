import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import {BrowserHistory} from "history";
import {reducer as appReducer} from "../app/reducers";

import {reducer as alertReducer} from "../services/alert/reducers";
import {reducer as avatarReducer} from "../services/avatar/reducers";
import {reducer as chatReducer} from "../services/chat/reducers";
import {reducer as cheerReducer} from "../services/cheer/reducers";
import {reducer as contestReducer} from "../services/contest/reducers";
import {reducer as emojiReducer} from "../services/emoji/reducers";
import {reducer as followerReducer} from "../services/follower/reducers";
import {reducer as giveawayReducer} from "../services/giveaway/reducers";
import {reducer as redemptionReducer} from "../services/redemption/reducers";
import {reducer as subscriberReducer} from "../services/subscriber/reducers";
import {reducer as tipReducer} from "../services/tip/reducers";
import {reducer as viewerReducer} from "../services/viewer/reducers";

export const rootReducer = (history: BrowserHistory) => combineReducers({
    app: appReducer,
    // services
    alert: alertReducer,
    avatar: avatarReducer,
    chat: chatReducer,
    cheer: cheerReducer,
    contest: contestReducer,
    emoji: emojiReducer,
    follower: followerReducer,
    giveaway: giveawayReducer,
    redemption: redemptionReducer,
    subscriber: subscriberReducer,
    tip: tipReducer,
    viewer: viewerReducer,
    router: connectRouter(history)
});