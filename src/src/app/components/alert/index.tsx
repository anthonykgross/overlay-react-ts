import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {selector as alertSelector} from "../../../services/alert/selectors";
import {Alert} from "../../../services/alert/schema";
import {actions} from "../../../services/alert/actions";
import {PopupFadeComponent} from "../ui/popup";
import './index.scss'

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
    return (
        <div className={'alert'}>
            {
                props.current &&
                <PopupFadeComponent key={Math.random()} duration={10000} onFinished={() => {
                    props.next();
                }}>
                    <div className={'popup'}>
                        <div className={'message'}>
                            <span dangerouslySetInnerHTML={{__html: props.current.message}}/>
                        </div>
                        <div className={'thumbnail'}>
                            <img alt={props.current.image} src={props.current.image}/>
                        </div>
                    </div>
                </PopupFadeComponent>
            }
        </div>
    )
}

export default connector(AlertComponent);