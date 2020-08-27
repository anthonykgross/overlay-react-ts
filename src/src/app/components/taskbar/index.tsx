import React from "react";
import './index.scss'
import TimeComponent from "../time";
import SocialComponent from "../social";
import LiveComponent from "../live";

function TaskBarComponent() {
    return (
        <div className={'taskbar'}>
            <SocialComponent />
            <LiveComponent />
            <TimeComponent />
        </div>
    )
}

export default TaskBarComponent;