import React, {useEffect, useState} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import Container from 'react-bootstrap/Container';

import {selector as contestSelector} from "../../../services/contest/selectors";
import {Contest, Option} from "../../../services/contest/schema";
import './index.scss'
import moment from "moment";
import {Row} from "react-bootstrap";
import OptionComponent from "./components/option";

interface State {
    active?: Contest
}

const mapStateToProps = (state: any): State => {
    return {
        active: contestSelector.getState(state).active,
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

    useEffect(() => {
        let interval = setInterval(() => {
            if(props.active) {
                if(props.active.state === 'running') {
                    let createdAt = moment(props.active.startedAt)
                    let finishAt = moment(props.active.startedAt)
                        .add(
                            props.active.duration, 'minutes'
                        )
                    let nbSeconds = finishAt.unix() - moment().unix();
                    let maxSeconds = finishAt.unix() - createdAt.unix();
                    let width = nbSeconds / maxSeconds * 100;
                    setProgressBarWidth(width);

                    if (width <= 0) {
                        clearInterval(interval);
                    }
                } else {
                    clearInterval(interval);
                }
            }
        }, 1000);
        return function cleanUp() {
            clearInterval(interval);
        }
    });

    return (
        <>
            {
                props.active &&
                <Container fluid={true} className={'contest '+props.active.state}>
                    <div className={'question'}>
                        {props.active.title}
                    </div>
                    <div className={'progress'}>
                        <div style={{'width': progressBarWidth+'%'}} className={'bar'} />
                    </div>
                    <Row noGutters={true} className={'options'}>
                        {
                            props.active.options.map((option: Option) => {
                                return (
                                    <OptionComponent key={option._id} contest={props.active!} option={option} />
                                )
                            })
                        }
                    </Row>
                </Container>
            }
        </>
    )
}

export default connector(ContestComponent);