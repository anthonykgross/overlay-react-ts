import {takeLatest, put, call} from 'redux-saga/effects';
import {websocketChannels} from "../api/websocket/actions";
import {actions} from "./actions";
import {AuthenticatedAction, EventAction, EventTestAction, EventUpdateAction} from "../api/websocket/schema";
import ApiUser from "../api/user";
import ApiSession from "../api/session";
import ApiContest from "../api/contest";
import ApiGiveaway from "../api/giveaway";
import giveaway from "../api/giveaway";
import {ContestSchema} from "../api/schema/contest";
import {checkSchema} from "../api/websocket";
import {SessionSchema} from "../api/schema/session";

function* onAll(action: any) {
    console.log(action);
    yield;
}

function* onAuthenticated(action: AuthenticatedAction) {
    let apiSession = new ApiSession();
    let responseSession = yield apiSession.getSession(action.response.channelId)
    if (responseSession.ok) {
        let json = yield responseSession.json();
        // checkSchema(SessionSchema, json);
        yield put(actions.updateSession(json));
    }

    let apiContest = new ApiContest();
    let responseContests = yield apiContest.getContests(action.response.channelId);
    if (responseContests.ok) {
        let json = yield responseContests.json();

        let contest: any;
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

        let giveaway: any;
        for (giveaway of json.giveaways) {
            if (giveaway.state === 'running') {
                yield put(actions.updateGiveaway(giveaway));
            }
        }
    }
    yield;
}

function* onEventUpdate(action: EventUpdateAction) {
    if (action.response.name === "redemption-latest") {
        yield put(actions.newRedemption(action.response.data))
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