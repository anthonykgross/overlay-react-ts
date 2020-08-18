import {takeLatest, put, call} from 'redux-saga/effects';
import {websocketChannels} from "../api/websocket/actions";
import {actions} from "./actions";
import {AuthenticatedAction, EventAction, EventTestAction, EventUpdateAction} from "../api/websocket/schema";
import ApiUser from "../api/user";
import ApiSession from "../api/session";
import ApiContest from "../api/contest";
import ApiGiveaway from "../api/giveaway";
import giveaway from "../api/giveaway";

function* onAll(d: any) {
    console.log(d);
    yield;
}

function* onAuthenticated(d: AuthenticatedAction) {

    let apiUser = new ApiUser();
    let responseUser = yield apiUser.getViewerCount('anthonykgross');
    if (responseUser.ok) {
        let text = yield responseUser.text();

        let nbViewers = parseInt(text);
        if (isNaN(nbViewers)) {
            nbViewers = 1;
        }
        yield put(actions.updateNbViewers(nbViewers));
    }

    let apiSession = new ApiSession();
    let responseSession = yield apiSession.getSession(d.response.channelId)
    if (responseSession.ok) {
        let json = yield responseSession.json();
        yield put(actions.updateSession(json));
    }

    let apiContest = new ApiContest();
    let responseContests = yield apiContest.getContests(d.response.channelId);
    if (responseContests.ok) {
        let json = yield responseContests.json();

        let contest: any;
        for (contest of json.contests) {
            if (contest.state === 'running') {
                yield put(actions.updateContest(contest));
            }
        }

    }

    let apiGiveaway = new ApiGiveaway();
    let responseGiveaways = yield apiGiveaway.getGiveaways(d.response.channelId);
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

function* onEventUpdate(d: EventUpdateAction) {
    if (d.response.name === "redemption-latest") {
        yield put(actions.newRedemption(d.response.data))
    }
    yield;
}

function* onEvent(d: EventAction) {
    if (d.response.type === 'cheer') {
        //onEventCheer(d.data.username, d.data.amount);
    }
    if (d.response.type === 'follow') {
        //onEventFollow(d.data.username);
    }
    if (d.response.type === 'subscriber') {
        //onEventSubscriber(d.data.username, d.data.amount);
    }
    if (d.response.type === 'tip') {
        //onEventTip(d.data.username, d.data.amount);
    }
    yield;
}

function* onEventTest(d: EventTestAction) {
    if (d.response.listener === 'follower-latest') {
        //onEventFollow(d.event.name);
    }
    if (d.response.listener === 'tip-latest') {
        //onEventTip(d.event.name, d.event.amount);
    }
    if (d.response.listener === 'cheer-latest') {
        //onEventCheer(d.event.name, d.event.amount);
    }
    if (d.response.listener === 'subscriber-latest') {
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