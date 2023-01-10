import { useState } from 'react';
import { getCurrentTime } from '../../utils/getCurrentTime';
import classes from './Clock.module.css';

export const Clock = () => {

    const [time, setTime] = useState<any>(null)

    setInterval(foo, 1000)

    function foo() {
        const currentTime = getCurrentTime()
        setTime(currentTime)
    }


    return (
        <div className={classes.main}>
            <h1>{time?.hh} : {time?.mm}</h1>
            <p>{time?.dd} {time?.month}, {time?.day}</p>
        </div>
    )
}