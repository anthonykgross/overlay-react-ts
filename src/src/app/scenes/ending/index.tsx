import React from "react";
import "./index.scss"
import AvatarComponent from "../../components/avatar";
import CreditComponent from "../../components/credit";

function EndingComponent() {
    return (
        <div id={'ending'}>
            <div className={'thank-you'}>
                Remerciements
            </div>
            <CreditComponent/>
            <AvatarComponent/>
        </div>
    )
}

export default EndingComponent;