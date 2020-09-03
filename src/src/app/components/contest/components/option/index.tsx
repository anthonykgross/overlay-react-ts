import {Col, Row} from "react-bootstrap";
import React, {useState} from "react";

import {Contest, Option} from "../../../../../services/contest/schema";
import './index.scss'
import {ProgressBarVerticalComponent} from "../../../ui/progressbar";

interface Props {
    option: Option
    contest: Contest
}


function OptionComponent(props: Props) {
    const [from, setFrom] = useState(0);
    let to = props.option.totalUsers / props.contest.totalUsers * 100;

    let points = props.option.totalAmount;
    let totalAmount: string = points.toString();

    if (points >= 1000) {
        totalAmount = parseFloat((points/1000).toPrecision(4))+'k';
    }
    if (points >= 999950) {
        totalAmount = parseFloat((points/1000000).toPrecision(4))+'M';
    }

    return (
        <Col>
            <Row noGutters={true} className={'option align-items-center ' + (props.option.winner ? 'winner' : '')}>
                <Col md={2}>
                    <Row noGutters={true} className={'align-items-center'}>
                        <Col md={3}>
                            <ProgressBarVerticalComponent from={from} to={to} onFinished={() => {
                                setFrom(to);
                            }}/>
                        </Col>
                        <Col className={'amount'}>
                            {totalAmount}
                            <div>pts</div>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row noGutters={true} className={'align-items-center title'}>
                        <Col>
                            {props.option.title}
                        </Col>
                        <Col md={2} className={'align-self-end command'}>!bet {props.option.command}</Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default OptionComponent;
