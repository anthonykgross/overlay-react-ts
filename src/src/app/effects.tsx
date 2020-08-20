import {takeLatest, put, select} from 'redux-saga/effects';
import {channels as websocketChannels} from "../api/streamelements/websocket/actions";
import {actions} from "./actions";
import ApiSession from "../api/session";
import ApiContest from "../api/contest";
import ApiGiveaway from "../api/giveaway";
import {
    AuthenticatedAction,
    EventAction,
    EventTestAction,
    EventUpdateAction
} from "../api/streamelements/websocket/schema/actions";

import {checkSchema} from "../api/schema";
import {Contest, ContestSchema} from "../api/schema/contest";
import {Session, SessionSchema} from "../api/schema/session";
import {Giveaway, GiveawaySchema} from "../api/schema/giveaway";
import {
    EventUpdateRedemptionLatestResponse,
    EventUpdateRedemptionLatestResponseSchema
} from "../api/streamelements/websocket/schema/eventUpdate";

import {selectors} from "./selectors";
import {State} from "./reducers";
import ApiStore from "../api/store";

function* onAll(action: any) {
    console.log(action);
    yield;
}

function* onAuthenticated(action: AuthenticatedAction) {
    let apiSession = new ApiSession();
    let responseSession = yield apiSession.getSession(action.response.channelId)
    if (responseSession.ok) {
        let session: Session = yield responseSession.json();
        checkSchema(SessionSchema, session);
        yield put(actions.updateSession(session));
    }

    let apiContest = new ApiContest();
    let responseContests = yield apiContest.getContests(action.response.channelId);
    if (responseContests.ok) {
        let json = yield responseContests.json();

        let contest: Contest;
        for (contest of json.contests) {
            checkSchema(ContestSchema, contest);
            if (contest.state === 'running') {
                yield put(actions.updateContest(contest));
            }
        }

    }

    let apiGiveaway = new ApiGiveaway();
    let responseGiveaways = yield apiGiveaway.getGiveaways(action.response.channelId);
    if (responseGiveaways.ok) {
        let json = yield responseGiveaways.json();

        let giveaway: Giveaway;
        for (giveaway of json.giveaways) {
            checkSchema(GiveawaySchema, giveaway);
            if (giveaway.state === 'running') {
                yield put(actions.updateGiveaway(giveaway));
            }
        }
    }
    yield;
}

function* onEventUpdate(action: EventUpdateAction) {
    let s: any = yield select();
    let state = selectors.getState(s) as State;

    if (action.response.name === "redemption-latest") {
        checkSchema(EventUpdateRedemptionLatestResponseSchema, action.response);
        let response: EventUpdateRedemptionLatestResponse = action.response as EventUpdateRedemptionLatestResponse;

        let apiStore = new ApiStore();
        let responseGiveaways = yield apiStore.getItem(state.channelId, response.data.itemId);
        if (responseGiveaways.ok) {
            let json = yield responseGiveaways.json();
            //yield put(actions.newRedemption(action.response.data))
        }
    }
    yield;
}

function* onEvent(action: EventAction) {
    if (action.response.type === 'cheer') {
        //onEventCheer(d.data.username, d.data.amount);
    }
    if (action.response.type === 'follow') {
        //onEventFollow(d.data.username);
    }
    if (action.response.type === 'subscriber') {
        //onEventSubscriber(d.data.username, d.data.amount);
    }
    if (action.response.type === 'tip') {
        //onEventTip(d.data.username, d.data.amount);
    }
    yield;
}

function* onEventTest(action: EventTestAction) {
    if (action.response.listener === 'follower-latest') {
        //onEventFollow(d.event.name);
    }
    if (action.response.listener === 'tip-latest') {
        //onEventTip(d.event.name, d.event.amount);
    }
    if (action.response.listener === 'cheer-latest') {
        //onEventCheer(d.event.name, d.event.amount);
    }
    if (action.response.listener === 'subscriber-latest') {
        //onEventSubscriber(d.event.name, d.event.amount);
    }
    yield;
}

export const MainEffects = [
    takeLatest('*', onAll),
    takeLatest(websocketChannels.AUTHENTICATED, onAuthenticated),
    takeLatest(websocketChannels.EVENT_UPDATE, onEventUpdate),
    takeLatest(websocketChannels.EVENT_TEST, onEventTest),
    takeLatest(websocketChannels.EVENT, onEvent),
];