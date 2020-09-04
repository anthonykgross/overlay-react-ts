import React, {useEffect} from "react";
/** @jsx jsx */
import {css, jsx, keyframes} from '@emotion/core'

interface Props {
    fadeInDuration?: number
    fadeOutDuration?: number
    duration?: number
    delay?: number
    iterationCount?: string
    onFinished?: Function
    children: JSX.Element[] | JSX.Element |  undefined
    timingFunction?: string
    className?: string
}

let defaultProps = {
    delay: 0,
    duration: 1000,
    fadeInDuration: 250,
    fadeOutDuration: 250,
    iterationCount: 1,
    timingFunction: 'easy-in-out'
}

function PopupFadeComponent(props: Props) {
    let fadeInStep = Math.floor(props.fadeInDuration! / props.duration! * 100);
    let fadeOutStep = Math.floor(
        100 - (props.fadeOutDuration! / props.duration! * 100)
    );

    const kf = keyframes`
        0% {
            opacity: 0;
        }
        ${fadeInStep}% {
            opacity: 1;
        }
        ${fadeOutStep}% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    `;

    const style = css`
        animation-delay: ${props.delay}ms;
        animation-duration: ${props.duration}ms;
        animation-iteration-count: ${props.iterationCount};
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
        <div className={props.className} css={[style]}>
            {props.children}
        </div>
    )
}
PopupFadeComponent.defaultProps = defaultProps;

export {
    PopupFadeComponent,
};