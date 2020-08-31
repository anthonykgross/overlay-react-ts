import React, {useEffect, useState} from "react";
import moment from "moment";

function TimeComponent() {
    const [time, setTime] = useState(moment());

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(moment());
        }, 1000);
        return function cleanUp() {
            clearInterval(interval);
        }
    }, [])

    return (
        <div className={'date'}>{time.format('DD/MM/YYYY HH:mm:ss')}</div>
    )
}

export default TimeComponent;