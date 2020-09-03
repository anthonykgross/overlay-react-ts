import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import Container from 'react-bootstrap/Container';

import {selector as contestSelector} from "../../../services/contest/selectors";
import {Contest, Option} from "../../../services/contest/schema";
import './index.scss'
import moment from "moment";
import {Row} from "react-bootstrap";
import OptionComponent from "./components/option";
import {ProgressBarHorizontalComponent} from "../ui/progressbar";

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
    let from = 100;
    let nbSeconds = 0;

    if(props.active) {
        if (props.active.state === 'running') {
            let createdAt = moment(props.active.startedAt)
            let finishAt = moment(props.active.startedAt)
                .add(
                    props.active.duration, 'minutes'
                )
            let maxSeconds = finishAt.unix() - createdAt.unix();
            nbSeconds = finishAt.unix() - moment().unix();
            from = nbSeconds / maxSeconds * 100;
        }
    }

    return (
        <>
            {
                props.active &&
                <Container fluid={true} className={'contest '+props.active.state}>
                    <div className={'question'}>
                        {props.active.title}
                    </div>
                    <ProgressBarHorizontalComponent from={from} to={0} timingFunction={'linear'} duration={nbSeconds * 1000} />

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