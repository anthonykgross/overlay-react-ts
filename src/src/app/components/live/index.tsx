import React, {useEffect, useState} from "react";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {findIcon} from "../../../tools/fontawesome";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {selector as followerSelector} from "../../../services/follower/selectors";
import {selector as subscriberSelector} from "../../../services/subscriber/selectors";
import {selector as viewerSelector} from "../../../services/viewer/selectors";

import {State as followerState} from "../../../services/follower/schema";
import {State as subscriberState} from "../../../services/subscriber/schema";
import {State as viewerState} from "../../../services/viewer/schema";

interface Live {
    icon: IconDefinition
    count: number
}

interface State {
    followerState: followerState
    subscriberState: subscriberState
    viewerState: viewerState
}

const mapStateToProps = (state: any): State => {
    return {
        followerState: followerSelector.getState(state),
        subscriberState: subscriberSelector.getState(state),
        viewerState: viewerSelector.getState(state),
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {};
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

function LiveComponent(props: State) {
    const [live, setLive] = useState<Live>({
        icon: findIcon('fas', 'heart'),
        count: props.followerState.count
    });

    useEffect(() => {
        let count = 0;
        let interval = setInterval(() => {
            if (count === 0) {
                setLive({
                    icon: findIcon('fas', 'heart'),
                    count: props.followerState.count
                });
            }
            if (count === 1) {
                setLive({
                    icon: findIcon('fas', 'star'),
                    count: props.subscriberState.count
                });
            }

            if (count === 2) {
                setLive({
                    icon: findIcon('fas', 'eye'),
                    count: props.viewerState.count
                });
            }
            count++;
            if (count === 3) {
                count = 0
            }
        }, 3000);
        return function cleanUp() {
            clearInterval(interval);
        }
    }, [props]);

    return (
        <div className={'live'}>
            <FontAwesomeIcon icon={live.icon}/> {live.count}
        </div>
    )
}

export default connector(LiveComponent);