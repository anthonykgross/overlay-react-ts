import React, {useEffect, useState} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {selector as contestSelector} from "../../../services/contest/selectors";
import {Option, State as contestState} from "../../../services/contest/schema";
import './index.scss'
import moment from "moment";

interface State {
    contestState: contestState
}

const mapStateToProps = (state: any): State => {
    return {
        contestState: contestSelector.getState(state),
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {};
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

function ContestComponent(props: State) {
    const [progressBarWidth, setProgressBarWidth] = useState(0);
    const [view, setView] = useState('label');

    useEffect(() => {
        let i = 0;

        let interval = setInterval(() => {
            if(props.contestState.active) {
                if(props.contestState.active.state === 'running') {
                    let createdAt = moment(props.contestState.active.startedAt)
                    let finishAt = moment(props.contestState.active.startedAt)
                        .add(
                            props.contestState.active.duration, 'minutes'
                        )
                    let nbSeconds = finishAt.unix() - moment().unix();
                    let maxSeconds = finishAt.unix() - createdAt.unix();
                    let width = nbSeconds / maxSeconds * 100;
                    setProgressBarWidth(width);

                    if (width <= 0) {
                        clearInterval(interval);
                    }
                } else {
                    setView('label');
                    clearInterval(interval);
                }

                i++;
                if (i > 5) {
                    setView('stats');

                    if (i > 7) {
                        i = 0;
                        setView('label');
                    }
                }
            }
        }, 1000);
        return function cleanUp() {
            clearInterval(interval);
        }
    }, [props]);

    return (
        <div className={'contest'}>
            <div className={'progress'}>
                <div style={{'width': progressBarWidth+'%'}} className={'bar'} />
            </div>
            <div className={'question'}>{props.contestState.active?.title}</div>
            <div className={'options'}>
            {
                props.contestState.active?.options.map((option: Option) => {
                    return (
                        <div key={option._id} className={option.winner ? 'winner': ''}>
                            {
                                view === 'label' &&
                                <>!bet {option.command} : {option.title}</>
                            }
                            {
                                view !== 'label' &&
                                <>{option.totalAmount} pts pour {option.totalUsers}</>
                            }
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default connector(ContestComponent);