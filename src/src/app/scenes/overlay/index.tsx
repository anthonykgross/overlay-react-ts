import React from "react";
import DisplayComponent from "./components/display";
import ChatBoxComponent from "../../components/chatbox";
import "./index.scss"
import AvatarComponent from "../../components/avatar";
import TaskBarComponent from "../../components/taskbar";

function OverlayComponent() {
    return (
        <div id={'overlay'}>
            <ChatBoxComponent/>
            <AvatarComponent/>
            <DisplayComponent/>
            <TaskBarComponent/>
        </div>
    )
}

export default OverlayComponent;