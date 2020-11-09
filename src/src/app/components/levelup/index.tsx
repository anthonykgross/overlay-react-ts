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

import {Giveaway} from "../../../services/giveaway/schema";

import {ProgressBarVerticalComponent} from "../ui/progressbar";

import './index.scss'

interface Props {
    nbFollowers: number
    nbSubscribers: number
    nbCheers: number
    nbTips: number
    nbMessages: number
    nbViewers: number
    giveawayActive?: Giveaway
}

interface Dispatcher {
}

interface State extends Props, Dispatcher {
}

const mapStateToProps = (state: any): Props => {
    return {
        nbFollowers: followerSelector.getState(state).count,
        nbSubscribers: subscriberSelector.getState(state).count,
        nbCheers: cheerSelector.getState(state).count,
        nbTips: tipSelector.getState(state).count,
        nbMessages: chatSelector.getState(state).messages.length,
        nbViewers: viewerSelector.getState(state).max,
        giveawayActive: giveawaySelector.getState(state).active,
    }
};

const mapDispatchToProps = (dispatch: Dispatch): Dispatcher => {
    return {};
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

function LevelUpComponent(props: State) {
    const X = 5000;
    const Y = 11;
    const Z = 1.07;

    const expToLevel = (exp: number) => {
        return Math.floor(
            Math.log(exp / (X / Y) + 1) / Math.log(Z) + 1
        );
    }

    const levelToExp = (lvl: number) => {
        return (X / Y) * (Math.pow(Z, lvl - 1) - 1);
    }

    const tipMultiplier = 20;
    const cheerMultiplier = 15;
    const subscriberMultiplier = 25;
    const followerMultiplier = 20;
    const viewMultiplier = 10;
    const messageMultiplier = 1;

    const getExp = () => {
        return (
            props.nbFollowers * followerMultiplier +
            props.nbSubscribers * subscriberMultiplier +
            props.nbCheers * cheerMultiplier +
            props.nbTips * tipMultiplier +
            props.nbMessages * messageMultiplier +
            props.nbViewers * viewMultiplier
        );
    }

    const [exp, setExp] = useState(1)
    const [nextLevel, setNextLevel] = useState(2)

    useEffect(() => {
        let expNextLevel = levelToExp(nextLevel);
        if (exp >= expNextLevel) {
            setNextLevel(nextLevel + 1);
        }
    }, [props, exp, nextLevel]);

    console.log('---------')
    let level = expToLevel(exp);
    let expLevel = levelToExp(level);
    let expNextLevel = levelToExp(nextLevel);
    console.log(expToLevel(exp), '>', nextLevel);
    let nbExp = expNextLevel - expLevel;
    console.log('Exp', expLevel, exp, getExp(), expNextLevel, nbExp);

    let toExp = getExp();
    if (toExp > expNextLevel) {
        toExp = expNextLevel;
    }

    if (nbExp === 0) {
        nbExp = 1;
    }

    let from = (exp - expLevel) / nbExp * 100;
    let to = (toExp - expLevel) / nbExp * 100;

    // console.log(exp, expLevel, exp - expLevel, nbExp)
    //
    console.log(from);
    console.log(to);

    return (
        <div className={'levelup ' + (from > 90 ? 'shining' : '')}>
            <ProgressBarVerticalComponent
                from={from}
                to={to}
                duration={1000}
                onFinished={() => {
                    setExp(toExp);
                }}
            />
            <span>{expToLevel(exp)}</span>
        </div>
    )
}

export default connector(LevelUpComponent);