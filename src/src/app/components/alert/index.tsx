import React, {useEffect, useState} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {selector as alertSelector} from "../../../services/alert/selectors";
import {Alert} from "../../../services/alert/schema";
import {actions} from "../../../services/alert/actions";
import AlertPopupComponent from "./components/popup";

interface State {
    current?: Alert
}

interface Dispatcher {
    next: Function
}

interface Props extends State, Dispatcher {
}

const mapStateToProps = (state: any): State => {
    return {
        current: alertSelector.getState(state).current
    }
};

const mapDispatchToProps = (dispatch: Dispatch): Dispatcher => {
    return {
        next: () => {
            dispatch(actions.nextAlert());
        }
    };
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

function AlertComponent(props: Props) {
    const [animation, setAnimation] = useState('slideRight');

    useEffect(() => {
        let count = 0;
        let interval = setInterval(() => {
            if (props.current) {
                if (count === 3) {
                    setAnimation('slideLeft');
                }
                if (count === 6) {
                    props.next();
                    count = 0;
                    setAnimation('slideRight');
                }
                count++;
            } else {
                clearInterval(interval);
            }
        }, 1000);
        return function cleanUp() {
            clearInterval(interval);
        }
    }, [props])

    return (
        <div className={'alert'}>
            <AlertPopupComponent animation={animation} current={props.current}/>
        </div>

    )
}

export default connector(AlertComponent);