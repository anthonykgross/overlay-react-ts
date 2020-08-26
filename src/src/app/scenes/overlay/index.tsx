import React from "react";
import DisplayComponent from "./components/display";
import ChatBoxComponent from "../../components/chatbox";
import "./index.scss"

function OverlayComponent() {
    return (
        <div id={'overlay'}>
            <ChatBoxComponent/>
            <DisplayComponent/>
        </div>
    )
}

export default OverlayComponent;