import React, {useEffect, useState} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import './index.scss'
import {selector} from "../../../services/emoji/selectors";
import {State} from "../../../services/emoji/schema";

const mapStateToProps = (state: any): State => {
    return selector.getState(state);
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {};
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

function EmojiComponent(props: State) {
    return (
        <div className={'emoji'}>
        </div>
    )
}

export default connector(EmojiComponent);