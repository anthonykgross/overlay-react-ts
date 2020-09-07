import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import Container from 'react-bootstrap/Container';

import {selector as giveawaySelector} from "../../../services/giveaway/selectors";
import {Giveaway, Participant} from "../../../services/giveaway/schema";
import './index.scss'
import moment from "moment";
import {Col, Row} from "react-bootstrap";
import {ProgressBarHorizontalComponent} from "../ui/progressbar";

interface State {
    active?: Giveaway
}

const mapStateToProps = (state: any): State => {
    return {
        active: giveawaySelector.getState(state).active,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {};
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

function GiveawayComponent(props: State) {
    let from = 100;
    let nbSeconds = 0;

    if(props.active) {
        if (props.active.state === 'running') {
            let createdAt = moment(props.active.startedAt)
            let finishAt = moment(props.active.startedAt)
                .add(
                    10, 'minutes'
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
                <Container fluid={true} className={'giveaway '+props.active.state}>
                    <div className={'question'}>
                        {props.active.title}
                    </div>
                    <ProgressBarHorizontalComponent from={from} to={0} timingFunction={'linear'} duration={nbSeconds * 1000} />
                    {
                        props.active.winners.length === 0 &&
                        <Row noGutters={true} className={'stats'}>
                            <Col>
                                <div>{props.active.totalAmount}</div>
                                tickets
                            </Col>
                            <Col>
                                <div>{props.active.totalUsers}</div>
                                participants
                            </Col>
                        </Row>
                    }
                    {
                        props.active.winners.length > 0 &&
                        <>
                            <h3>Gagnant(s)</h3>
                            <Row noGutters={true} className={'winners'}>
                                {
                                    props.active.winners.map((winner: Participant) => {
                                        return (
                                            <Col key={winner.username}>{winner.username}</Col>
                                        )
                                    })
                                }
                            </Row>
                        </>
                    }
                </Container>
            }
        </>
    )
}

export default connector(GiveawayComponent);