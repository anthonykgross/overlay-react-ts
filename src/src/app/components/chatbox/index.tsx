import React from "react";
import {connect} from "react-redux";
import MessageComponent from "./components/message";
import {Dispatch} from "redux";
import {selector} from "../../../services/chat/selectors";
import {Message} from "../../../api/twitch/chat/schema";

interface Props {
    messages: Message[]
}

const mapStateToProps = (state: any) : Props => {
    return selector.getState(state);
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {};
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

function ChatBoxComponent(props: Props) {
    return (
        <div className={'chatbox'}>
            {
                props.messages.map((message: Message, index: number) => {
                    return (
                        <MessageComponent key={index} message={message} />
                    )
                })
            }
        </div>
    )
}

export default connector(ChatBoxComponent);