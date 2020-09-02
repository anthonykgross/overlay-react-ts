import React from "react";
import ChatBoxComponent from "../../components/chatbox";
import "./index.scss"
import AvatarComponent from "../../components/avatar";
import TaskBarComponent from "../../components/taskbar";
import {selector as giveawaySelector} from "../../../services/giveaway/selectors";
import {selector as contestSelector} from "../../../services/contest/selectors";
import {State as contestState} from "../../../services/contest/schema";
import {State as giveawayState} from "../../../services/giveaway/schema";

import {Dispatch} from "redux";
import {connect} from "react-redux";
import DisplayComponent from "../../components/display";
import ContestComponent from "../../components/contest";
import AlertComponent from "../../components/alert";

interface State {
    contestState: contestState
    giveawayState: giveawayState
}

const mapStateToProps = (state: any): State => {
    return {
        contestState: contestSelector.getState(state),
        giveawayState: giveawaySelector.getState(state),
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {};
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

function OverlayComponent(props: State) {
    return (
        <div id={'overlay'}>
            <ChatBoxComponent/>
            <DisplayComponent/>
            {
                !props.contestState.active && !props.giveawayState.active &&
                <TaskBarComponent/>
            }
            {
                props.contestState.active &&
                <ContestComponent/>
            }
            <AvatarComponent/>
            <AlertComponent/>

            {/*{*/}
            {/*    props.giveawayState.active &&*/}
            {/*    <TaskBarComponent/>*/}
            {/*}*/}
        </div>
    )
}

export default connector(OverlayComponent);