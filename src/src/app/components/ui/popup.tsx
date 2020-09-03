import React, {ReactElement, useEffect} from "react";
/** @jsx jsx */
import {css, jsx, keyframes} from '@emotion/core'

interface Props {
    duration?: number
    onFinished?: Function
    children: ReactElement
    timingFunction?: string
}

let defaultProps = {
    duration: 1000,
    timingFunction: 'easy-in-out'
}

function PopupFadeComponent(props: Props) {
    const kf = keyframes`
        0% {
            opacity: 0;
        }
        25% {
            opacity: 1;
        }
        75% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    `;

    const style = css`
        animation-duration: ${props.duration}ms;
        animation-iteration-count: 1;
        animation-timing-function: ${props.timingFunction};
        animation-fill-mode: both;
        animation-name: ${kf};
    `;

    useEffect(() => {
        let timeout = setTimeout(() => {
            if (props.onFinished) {
                props.onFinished();
            }
        }, props.duration);
        return function cleanUp() {
            clearTimeout(timeout);
        }
    }, [props])


    return (
        <div css={[style]}>
            {props.children}
        </div>
    )
}
PopupFadeComponent.defaultProps = defaultProps;

export {
    PopupFadeComponent,
};