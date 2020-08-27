import React, {useEffect, useState} from "react";
import moment from "moment";

interface Props {
    message: string
}

function CountDownComponent(props: Props) {
    const [time, setTime] = useState(-1);

    useEffect(() => {
        let t = 10 * 60 * 1000;
        setTime(t);
        let interval = setInterval(() => {
            t -= 1000;
            setTime(t);

            if (t === 0) {
                clearInterval(interval);
            }
            return function cleanUp() {
                clearInterval(interval);
            }
        }, 1000);
    }, [])

    let t = moment.duration(time, 'milliseconds');
    let minutes = t.minutes().toString();
    let seconds = t.seconds().toString();

    if (t.minutes() < 10) {
        minutes = '0' + minutes;
    }
    if (t.seconds() < 10) {
        seconds = '0' + seconds;
    }

    return (
        <div className={'countdown'}>
            {
                time > 0 &&
                <>{minutes}m {seconds}s</>
            }
            {
                time === 0 &&
                <>{props.message}</>
            }
        </div>
    )
}

export default CountDownComponent;