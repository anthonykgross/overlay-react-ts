import React, {useEffect} from "react";
/** @jsx jsx */
import {css, jsx, keyframes} from '@emotion/core'

interface Props {
    from?: number
    to?: number
    duration?: number
    onFinished?: Function
    timingFunction?: string
}

let defaultProps = {
    from: 0,
    to: 100,
    duration: 1000,
    timingFunction: 'easy-in-out'
}

function ProgressBarVerticalComponent(props: Props) {
    const kf = keyframes`
        0% {
            height: ${props.from}%;
        }
        100% {
            height: ${props.to}%;
        }
    `;

    const style = css`
        .bar {
            height: ${props.from}px;
            animation-duration: ${props.duration}ms;
            animation-iteration-count: 1;
            animation-timing-function: ${props.timingFunction};
            animation-fill-mode: both;
            animation-name: ${kf};
        }
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
        <div className={'progress'} css={[style]}>
            <div className={'bar'}></div>
        </div>
    )
}
ProgressBarVerticalComponent.defaultProps = defaultProps;


function ProgressBarHorizontalComponent(props: Props) {
    const kf = keyframes`
        0% {
            width: ${props.from}%;
        }
        100% {
            width: ${props.to}%;
        }
    `;

    const style = css`
        .bar {
            width: ${props.from}px;
            animation-duration: ${props.duration}ms;
            animation-iteration-count: 1;
            animation-timing-function: ${props.timingFunction};
            animation-fill-mode: both;
            animation-name: ${kf};
        }
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
        <div className={'progress'} css={[style]}>
            <div className={'bar'}></div>
        </div>
    )
}
ProgressBarHorizontalComponent.defaultProps = defaultProps;

export {
    ProgressBarVerticalComponent,
    ProgressBarHorizontalComponent,
};