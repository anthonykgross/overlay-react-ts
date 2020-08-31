import React, {useEffect, useState} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {selector as followerSelector} from "../../../services/follower/selectors";
import {selector as subscriberSelector} from "../../../services/subscriber/selectors";
import {selector as viewerSelector} from "../../../services/viewer/selectors";
import {selector as cheerSelector} from "../../../services/cheer/selectors";
import {selector as tipSelector} from "../../../services/tip/selectors";
import {selector as redemptionSelector} from "../../../services/redemption/selectors";

import {Follower, State as followerState} from "../../../services/follower/schema";
import {State as subscriberState, Subscriber} from "../../../services/subscriber/schema";
import {State as viewerState} from "../../../services/viewer/schema";
import {Cheer, State as cheerState} from "../../../services/cheer/schema";
import {State as tipState, Tip} from "../../../services/tip/schema";
import {State as redemptionState} from "../../../services/redemption/schema";

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
    const [part, setPart] = useState('follower');

    useEffect(() => {
        let count = 0;
        let interval = setInterval(() => {
            if (count === 0) {
                setPart('follower');
            }
            if (count === 1) {
                setPart('subscriber');
            }
            if (count === 2) {
                setPart('cheers');
            }

            count++;
            if (count === 3) {
                count = 0;
            }
        }, 5000);
        return function cleanUp() {
            clearInterval(interval);
        }
    }, [props])

    return (
        <div className={'credit'}>
            <div className={'follower'}>
                <h3>Followers</h3>
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
            <div className={'subscriber'}>
                <h3>Subs</h3>
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
            <div className={'cheers'}>
                <h3>Dons</h3>
                {
                    props.cheerState.cheers.map((cheer: Cheer, index: number) => {
                        return (
                            <div key={index}>
                                <b>{cheer.username}</b> {cheer.amount}Bits
                            </div>
                        )
                    })
                }
                {
                    props.tipState.tips.map((tip: Tip, index: number) => {
                        return (
                            <div key={index}>
                                <b>{tip.username}</b> {tip.amount}€
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default connector(CreditComponent);