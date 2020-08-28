import React from "react";
import "./index.scss"
import AvatarComponent from "../../components/avatar";
import CreditComponent from "./components/credit";

function EndingComponent() {
    return (
        <div id={'ending'}>
            <CreditComponent/>
            <AvatarComponent/>
        </div>
    )
}

export default EndingComponent;