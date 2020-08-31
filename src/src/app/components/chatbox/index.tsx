import React from "react";
import {connect} from "react-redux";
import MessageComponent from "./components/message";
import {Dispatch} from "redux";
import {selector} from "../../../services/chat/selectors";
import {Message} from "../../../api/twitch/chat/schema";
import {State} from "../../../services/chat/schema";
import './index.scss'
import {Slide} from "react-awesome-reveal";

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
    let messages = props.messages.slice(-20).reverse();

    return (
        <div className={'chatbox'}>
            {
                messages.map((message: Message) => {
                    return (
                        <Slide direction={'left'} duration={300} key={message.id} >
                            <MessageComponent message={message} />
                        </Slide>
                    )
                })
            }
        </div>
    )
}

export default connector(ChatBoxComponent);