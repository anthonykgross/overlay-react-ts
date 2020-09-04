import React from "react";
import './index.scss'
import TimeComponent from "../time";
import LiveComponent from "../live";

function TaskBarComponent() {
    return (
        <div className={'taskbar'}>
            <TimeComponent />
            <LiveComponent />
        </div>
    )
}

export default TaskBarComponent;