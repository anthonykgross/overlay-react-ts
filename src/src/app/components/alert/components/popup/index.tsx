import React from "react";
import './index.scss'
import {Alert} from "../../../../../services/alert/schema";

interface Props {
    current?: Alert
    animation: string
}

function AlertPopupComponent(props: Props) {
    return (
        <>
            {
                props.current &&
                <div className={'popup ' + props.animation}>
                    <img alt={props.current.image} src={props.current.image}/>
                    <span dangerouslySetInnerHTML={{__html: props.current.message}}/>
                </div>
            }
        </>
    )
}

export default AlertPopupComponent;