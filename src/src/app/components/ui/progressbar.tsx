import React from "react";
/** @jsx jsx */
import {css, jsx, keyframes} from '@emotion/core'

interface Props {
    from: number
    to: number
    duration: number
}

function ProgressBarComponent(props: Props){
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
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
            animation-name: ${kf};
        }
    `;



    return (
        <div className={'progress'} css={[style]}>
            <div className={'bar'}></div>
        </div>
    )
}

export default ProgressBarComponent;