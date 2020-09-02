import {Col, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";

import {Contest, Option} from "../../../../../services/contest/schema";
import './index.scss'
import ProgressBarComponent from "../../../ui/progressbar";
import moment from "moment";

interface Props {
    option: Option
    contest: Contest
}


function OptionComponent(props: Props) {
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setFrom(to);
            setTo(Math.random() * 100);
        }, 1000);
        return function cleanUp() {
            clearInterval(interval);
        }
    }, [props]);

    return (
        <Col>
            <Row noGutters={true} className={'option align-items-center '+(props.option.winner ? 'winner': '')}>
                <Col md={3}>
                    <Row noGutters={true} className={'align-items-center'}>
                        <Col md={2}>
                            <ProgressBarComponent from={from} to={to} duration={1000} />
                        </Col>
                        <Col className={'amount'}>
                            {props.option.totalAmount}
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
