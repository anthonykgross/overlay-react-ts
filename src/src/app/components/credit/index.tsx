import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {selector as followerSelector} from "../../../services/follower/selectors";
import {selector as subscriberSelector} from "../../../services/subscriber/selectors";
import {selector as cheerSelector} from "../../../services/cheer/selectors";
import {selector as tipSelector} from "../../../services/tip/selectors";

import {Follower} from "../../../services/follower/schema";
import {Subscriber} from "../../../services/subscriber/schema";
import {Cheer} from "../../../services/cheer/schema";
import {Tip} from "../../../services/tip/schema";

interface State {
    followers: Follower[]
    subscribers: Subscriber[]
    cheers: Cheer[]
    tips: Tip[]
}

const mapStateToProps = (state: any): State => {
    return {
        followers: followerSelector.getState(state).followers,
        subscribers: subscriberSelector.getState(state).subscribers,
        cheers: cheerSelector.getState(state).cheers,
        tips: tipSelector.getState(state).tips,
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
    return (
        <div className={'credit'}>
            <div className={'follower'}>
                <h3>Followers</h3>
                {
                    props.followers.map((follower: Follower, index: number) => {
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
                    props.subscribers.map((subscriber: Subscriber, index: number) => {
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
                    props.cheers.map((cheer: Cheer, index: number) => {
                        return (
                            <div key={index}>
                                <b>{cheer.username}</b> {cheer.amount}Bits
                            </div>
                        )
                    })
                }
                {
                    props.tips.map((tip: Tip, index: number) => {
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