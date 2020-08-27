import React, {useEffect, useState} from "react";
import moment from "moment";

function CountDownComponent() {
    const [time, setTime] = useState(10 * 60 * 1000);

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(time => time - 1000);

            return function cleanUp() {
                clearInterval(interval);
            }
        }, 1000);
    }, [])

    let t = moment.duration(time, 'milliseconds');
    let minutes = t.minutes().toString();
    let seconds = t.seconds().toString();

    if (t.minutes() < 10) {
        minutes = '0'+minutes;
    }
    if (t.seconds() < 10) {
        seconds = '0'+seconds;
    }

    return (
        <div className={'countdown'}>
            {minutes}m {seconds}s
        </div>
    )
}

export default CountDownComponent;