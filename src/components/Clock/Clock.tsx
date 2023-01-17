import { useState } from 'react';
import { getCurrentTime } from '../../utils/getCurrentTime';
import classesLight from './Clock-light.module.css';
import classesDark from './Clock-dark.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux-store';

export const Clock = () => {

    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark

    const [time, setTime] = useState<any>(null)

    const timer = setInterval(cb, 1000)
    function cb() {
        clearInterval(timer)
        const currentTime = getCurrentTime()
        setTime(currentTime)
    }


    return (
        <div className={classes.wrapper}>
            <div className={classes.main}>
                <h1>{time?.hh} : {time?.mm}</h1>
                <p>{time?.dd} {time?.month}, {time?.day}</p>
            </div>
        </div>
    )
}