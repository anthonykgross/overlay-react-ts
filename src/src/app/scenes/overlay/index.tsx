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
import LevelUpComponent from "../../components/levelup";
import AdComponent from "../../components/ad";
import GiveawayComponent from "../../components/giveaway";

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
            <div className={'block block-chatbox'}>
                <ChatBoxComponent/>
            </div>
            <div className={'block block-display'}>
                <DisplayComponent/>
            </div>

            {
                !props.contestState.active && !props.giveawayState.active &&
                <>
                    <div className={'block block-taskbar'}>
                        <TaskBarComponent/>
                    </div>
                    <div className={'block block-alert'}>
                        <AlertComponent/>
                    </div>
                    <div className={'block block-ad'}>
                        <AdComponent/>
                    </div>
                </>
            }
            {
                props.contestState.active &&
                <div className={'block block-contest'}>
                    <ContestComponent/>
                </div>
            }
            {
                props.giveawayState.active &&
                <div className={'block block-giveaway'}>
                    <GiveawayComponent/>
                </div>
            }
            <div className={'block block-avatar'}>
                <AvatarComponent/>
            </div>
            <div className={'block block-levelup'}>
                <LevelUpComponent/>
            </div>
        </div>
    )
}

export default connector(OverlayComponent);