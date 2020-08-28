import React, {useEffect, useState} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {selector as followerSelector} from "../../../../../services/follower/selectors";
import {selector as subscriberSelector} from "../../../../../services/subscriber/selectors";
import {selector as viewerSelector} from "../../../../../services/viewer/selectors";
import {selector as cheerSelector} from "../../../../../services/cheer/selectors";
import {selector as tipSelector} from "../../../../../services/tip/selectors";
import {selector as redemptionSelector} from "../../../../../services/redemption/selectors";

import {Follower, State as followerState} from "../../../../../services/follower/schema";
import {State as subscriberState, Subscriber} from "../../../../../services/subscriber/schema";
import {State as viewerState} from "../../../../../services/viewer/schema";
import {Cheer, State as cheerState} from "../../../../../services/cheer/schema";
import {State as tipState, Tip} from "../../../../../services/tip/schema";
import {State as redemptionState, Redemption} from "../../../../../services/redemption/schema";

interface State {
    followerState: followerState
    subscriberState: subscriberState
    viewerState: viewerState
    cheerState: cheerState
    tipState: tipState
    redemptionState: redemptionState
}

const mapStateToProps = (state: any): State => {
    return {
        followerState: followerSelector.getState(state),
        subscriberState: subscriberSelector.getState(state),
        viewerState: viewerSelector.getState(state),
        cheerState: cheerSelector.getState(state),
        tipState: tipSelector.getState(state),
        redemptionState: redemptionSelector.getState(state),
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {};
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

function CreditComponent(props: State) {
    const [time, setTime] = useState(-1);

    useEffect(() => {

    }, [])

    return (
        <div className={'credit'}>
            <h3>Followers</h3>
            <div className={'follower'}>
            {
                props.followerState.followers.map((follower: Follower, index: number) => {
                    return (
                        <div key={index}>
                            {follower.username}
                        </div>
                    )
                })
            }
            </div>
            <h3>Subs</h3>
            <div className={'subscriber'}>
                {
                    props.subscriberState.subscribers.map((subscriber: Subscriber, index: number) => {
                        return (
                            <div key={index}>
                                <b>{subscriber.username}</b> {subscriber.amount} mois
                            </div>
                        )
                    })
                }
            </div>
            <h3>Dons</h3>
            <div className={'cheers'}>
                {
                    props.cheerState.cheers.map((cheer: Cheer, index: number) => {
                        return (
                            <div key={index}>
                                <b>{cheer.username}</b> {cheer.amount} bits
                            </div>
                        )
                    })
                }
                {
                    props.tipState.tips.map((tip: Tip, index: number) => {
                        return (
                            <div key={index}>
                                <b>{tip.username}</b> {tip.amount} E
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default connector(CreditComponent);