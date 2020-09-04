import React from "react";
import "./index.scss"
import CreditComponent from "../../components/credit";

function EndingComponent() {
    return (
        <div id={'ending'}>
            <div className={'thank-you'}>
                Remerciements
            </div>
            <div className={'block block-credit'}>
                <CreditComponent/>
            </div>
        </div>
    )
}

export default EndingComponent;