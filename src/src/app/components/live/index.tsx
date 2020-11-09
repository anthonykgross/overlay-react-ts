import React, {useEffect, useState} from "react";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {findIcon} from "../../../tools/fontawesome";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {selector as followerSelector} from "../../../services/follower/selectors";
import {selector as subscriberSelector} from "../../../services/subscriber/selectors";
import {selector as viewerSelector} from "../../../services/viewer/selectors";

interface Live {
    icon: IconDefinition
    count: number
}

interface State {
    nbFollowers: number
    nbSubscribers: number
    nbViewers: number
}

const mapStateToProps = (state: any): State => {
    return {
        nbFollowers: followerSelector.getState(state).total,
        nbSubscribers: subscriberSelector.getState(state).total,
        nbViewers: viewerSelector.getState(state).count,
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
        count: props.nbFollowers
    });

    useEffect(() => {
        let count = 0;
        let interval = setInterval(() => {
            if (count === 0) {
                setLive({
                    icon: findIcon('fas', 'heart'),
                    count: props.nbFollowers
                });
            }
            if (count === 1) {
                setLive({
                    icon: findIcon('fas', 'star'),
                    count: props.nbSubscribers
                });
            }

            if (count === 2) {
                setLive({
                    icon: findIcon('fas', 'eye'),
                    count: props.nbViewers
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