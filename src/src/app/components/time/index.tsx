import React, {useEffect, useState} from "react";
import moment from "moment";

function TimeComponent() {
    const [time, setTime] = useState(moment());

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(moment());
            return function cleanUp() {
                clearInterval(interval);
            }
        }, 1000);
    }, [])

    return (
        <div className={'date'}>{time.format('DD/MM/YYYY HH:mm:ss')}</div>
    )
}

export default TimeComponent;