import React, {useEffect, useState} from "react";
import './index.scss'
import moment from "moment";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {selector as followerSelector} from "../../../services/follower/selectors";
import {selector as tipSelector} from "../../../services/tip/selectors";
import {selector as cheerSelector} from "../../../services/cheer/selectors";
import {selector as subscriberSelector} from "../../../services/subscriber/selectors";
import {selector as viewerSelector} from "../../../services/viewer/selectors";

import {State as followerState} from "../../../services/follower/schema";
import {State as tipState} from "../../../services/tip/schema";
import {State as cheerState} from "../../../services/cheer/schema";
import {State as subscriberState} from "../../../services/subscriber/schema";
import {State as viewerState} from "../../../services/viewer/schema";

interface Props {
    followerState: followerState
    tipState: tipState
    cheerState: cheerState
    subscriberState: subscriberState
    viewerState: viewerState
}

const mapStateToProps = (state: any): Props => {
    return {
        followerState: followerSelector.getState(state),
        tipState: tipSelector.getState(state),
        cheerState: cheerSelector.getState(state),
        subscriberState: subscriberSelector.getState(state),
        viewerState: viewerSelector.getState(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {};
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

function TaskBarComponent(props: Props) {
    const [time, setTime] = useState(moment());
    const [count, setCount] = useState(0);


    let lastFollower = props.followerState.followers[0]
    const [social, setSocial] = useState('Last follower : ' + lastFollower);

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(moment());
            setCount(count + 1);

            if (count > 10) {
                let lastSub = props.subscriberState.subscribers[0];
                setSocial(
                    'Last sub : ' + lastSub.username + ' (' + lastSub.amount + 'm)'
                )
            }

            if (count > 20) {
                let lastTip = props.tipState.tips[0];
                setSocial(
                    'Last tip : ' + lastTip.username + ' (' + lastTip.amount + 'E)'
                )
            }
            if (count > 30) {
                let lastCheer = props.cheerState.cheers[0];
                setSocial(
                    'Last cheer : ' + lastCheer.username + ' (' + lastCheer.amount + 'b)'
                )
            }

            if (count > 40) {
                setSocial('Twitter : @anthonykgross')
            }
            if (count > 45) {
                setSocial('Youtube : youtube.anthonykgross.fr')
            }
            if (count > 50) {
                setSocial('Discord : discord.anthonykgross.fr')
            }
            if (count > 55) {
                setSocial('SE Store : store.anthonykgross.fr')
            }
            if (count > 60) {
                setCount(0);
            }
        }, 1000);
        return function cleanUp() {
            clearInterval(interval);
        }
    });

    return (
        <div className={'taskbar'}>
            <div className={'socials'}>{social}</div>
            <div className={'date'}>{time.format('DD/MM/YYYY HH:mm')}</div>
        </div>
    )
}

export default connector(TaskBarComponent);