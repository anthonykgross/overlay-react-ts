import {takeLatest, put, select} from 'redux-saga/effects';
import {channels as websocketChannels} from "../api/streamelements/websocket/actions";
import {actions} from "./actions";
import {actions as followActions} from "../services/follower/actions";
import {actions as cheerActions} from "../services/cheer/actions";
import {actions as subscriberActions} from "../services/subscriber/actions";
import {actions as tipActions} from "../services/tip/actions";
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
import {Redemption, RedemptionSchema} from "../api/schema/redemption";
import {
    EventCheerResponse,
    EventCheerResponseSchema,
    EventFollowResponse,
    EventFollowResponseSchema,
    EventSubscriberResponse,
    EventSubscriberResponseSchema,
    EventTipResponse, EventTipResponseSchema
} from "../api/streamelements/websocket/schema/event";
import {Cheer} from "../services/cheer/schema";
import {Subscriber} from "../services/subscriber/schema";
import {Tip} from "../services/tip/schema";

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

        /**
         * FOLLOWER
         */
        let followers: string[] = [];
        for(let o of session.data["follower-recent"]) {
            followers.push(o.name)
        }
        let countFollowers: number = session.data["follower-total"].count;
        yield put(followActions.initFollow(countFollowers, followers));

        /**
         * CHEER
         */
        let cheers: Cheer[] = [];
        for(let o of session.data["cheer-recent"]) {
            cheers.push({
                username: o.name,
                amount: o.amount,
            })
        }
        let countCheers: number = session.data["cheer-total"].amount;
        yield put(cheerActions.initCheer(countCheers, cheers));

        /**
         * Subscriber
         */
        let subscribers: Subscriber[] = [];
        for(let o of session.data["subscriber-recent"]) {
            subscribers.push({
                username: o.name,
                amount: o.amount,
                tier: o.tier,
            })
        }
        let countSubscribers: number = session.data["subscriber-total"].count
        yield put(subscriberActions.initSubscriber(countSubscribers, subscribers));

        /**
         * TIP
         */
        let tips: Tip[] = [];
        for(let o of session.data["tip-recent"]) {
            tips.push({
                username: o.name,
                amount: o.amount,
            })
        }
        let countTips: number = session.data["tip-total"].amount
        yield put(tipActions.initTip(countTips, tips));
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
            let redemption: Redemption = yield responseGiveaways.json();
            checkSchema(RedemptionSchema, redemption);
            yield put(actions.newRedemption(redemption));
        }
    }
    yield;
}

function* onEvent(action: EventAction) {
    if (action.response.type === 'cheer') {
        let response: EventCheerResponse = action.response as EventCheerResponse;
        checkSchema(EventCheerResponseSchema, response);
        yield put(cheerActions.newCheer(response));
    }
    if (action.response.type === 'follow') {
        let response: EventFollowResponse = action.response as EventFollowResponse;
        checkSchema(EventFollowResponseSchema, response);
        yield put(followActions.newFollow(response));
    }
    if (action.response.type === 'subscriber') {
        let response: EventSubscriberResponse = action.response as EventSubscriberResponse;
        checkSchema(EventSubscriberResponseSchema, response);
        yield put(subscriberActions.newSubscriber(response));
    }
    if (action.response.type === 'tip') {
        let response: EventTipResponse = action.response as EventTipResponse;
        checkSchema(EventTipResponseSchema, response);
        yield put(tipActions.newTip(response));
    }
    yield;
}

function* onEventTest(action: EventTestAction) {
    if (action.response.listener === 'follower-latest') {
        let response: any = action.response;
        yield put(followActions.testFollow(response.event.name));
    }
    if (action.response.listener === 'tip-latest') {
        let response: any = action.response;
        yield put(tipActions.testTip(response.event.name, response.event.amount));
    }
    if (action.response.listener === 'cheer-latest') {
        let response: any = action.response;
        yield put(cheerActions.testCheer(response.event.name, response.event.amount));
    }
    if (action.response.listener === 'subscriber-latest') {
        let response: any = action.response;
        yield put(subscriberActions.testSubscriber(response.event.name, response.event.amount, response.event.tier));
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