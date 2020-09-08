import React, {useEffect, useState} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {selector as followerSelector} from "../../../services/follower/selectors";
import {selector as subscriberSelector} from "../../../services/subscriber/selectors";
import {selector as cheerSelector} from "../../../services/cheer/selectors";
import {selector as tipSelector} from "../../../services/tip/selectors";
import {selector as chatSelector} from "../../../services/chat/selectors";
import {selector as viewerSelector} from "../../../services/viewer/selectors";
import {selector as giveawaySelector} from "../../../services/giveaway/selectors";

import {State as followerState} from "../../../services/follower/schema";
import {State as subscriberState} from "../../../services/subscriber/schema";
import {State as cheerState} from "../../../services/cheer/schema";
import {State as tipState} from "../../../services/tip/schema";
import {State as chatState} from "../../../services/chat/schema";
import {State as viewerState} from "../../../services/viewer/schema";
import {State as giveawayState} from "../../../services/giveaway/schema";

import {ProgressBarVerticalComponent} from "../ui/progressbar";

import './index.scss'
import {actions} from "../../../services/alert/actions";

interface Props {
    followerState: followerState
    subscriberState: subscriberState
    cheerState: cheerState
    giveawayState: giveawayState
    tipState: tipState
    chatState: chatState
    viewerState: viewerState
}

interface Dispatcher {
    levelup: Function
}

interface State extends Props, Dispatcher {
}

const mapStateToProps = (state: any): Props => {
    return {
        followerState: followerSelector.getState(state),
        subscriberState: subscriberSelector.getState(state),
        cheerState: cheerSelector.getState(state),
        giveawayState: giveawaySelector.getState(state),
        tipState: tipSelector.getState(state),
        chatState: chatSelector.getState(state),
        viewerState: viewerSelector.getState(state),
    }
};

const mapDispatchToProps = (dispatch: Dispatch): Dispatcher => {
    return {
        levelup: () => {
            dispatch(actions.nextAlertLevelUp());
        }
    };
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

function LevelUpComponent(props: State) {
    const getExp = () => {
        return props.chatState.messages.length;
    }
    const expByLevel = 50;

    const [exp, setExp] = useState(0)
    const [nextLevel, setNextLevel] = useState(expByLevel)

    useEffect(() => {
        if (exp >= nextLevel) {
            setNextLevel(nextLevel => nextLevel + expByLevel);
            props.levelup();
        }
    }, [props, exp, expByLevel, nextLevel]);

    let from = (1 - (nextLevel - exp) / expByLevel) * 100;
    let to = (1 - (nextLevel - getExp()) / expByLevel) * 100;

    return (
        <div className={'levelup ' + (from > 90 ? 'shining' : '')}>
            <ProgressBarVerticalComponent
                from={from}
                to={to}
                duration={1000}
                onFinished={() => {
                    if (exp !== getExp()) {
                        setExp(getExp());
                    }
                }}
            />
        </div>
    )
}

export default connector(LevelUpComponent);