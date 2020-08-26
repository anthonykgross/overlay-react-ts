import React from "react";
import {connect} from "react-redux";
import MessageComponent from "./components/message";
import {Dispatch} from "redux";
import {selector} from "../../../services/chat/selectors";
import {Message} from "../../../api/twitch/chat/schema";
import {State} from "../../../services/chat/schema";
import './index.scss'

const mapStateToProps = (state: any) : State => {
    return selector.getState(state);
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {};
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

function ChatBoxComponent(props: State) {
    return (
        <div className={'chatbox'}>
            {
                props.messages.slice(-20).reverse().map((message: Message, index: number) => {
                    return (
                        <MessageComponent key={index} message={message} />
                    )
                })
            }
        </div>
    )
}

export default connector(ChatBoxComponent);