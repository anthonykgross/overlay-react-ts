import React from "react";
import './index.scss'
import TimeComponent from "../time";
import SocialComponent from "../social";
import LiveComponent from "../live";

function TaskBarComponent() {
    return (
        <div className={'taskbar'}>
            <TimeComponent />
            <LiveComponent />
            <SocialComponent />
        </div>
    )
}

export default TaskBarComponent;