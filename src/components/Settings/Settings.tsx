import { useState } from 'react';
import classes from './Settings.module.css';

export const Settings = () => {

    const [settingsStatus, setSettingsStatus] = useState(false)
    const [isAnimation, setIsAnimation] = useState(false)

    const onSettingsMouseEnter = () => {
        setSettingsStatus(true)
        setIsAnimation(true)
        setTimeout(() => {
            setIsAnimation(false)
        }, 600);
    }

    const onSettingsMouseLeave = () => {
        if (!isAnimation) setSettingsStatus(false)
    }

    return (
        <div>
            {!settingsStatus &&
                <div onMouseEnter={onSettingsMouseEnter} className={classes.settingsButton}>
                    <button></button>
                </div>}

            <div onMouseLeave={onSettingsMouseLeave} className={`${classes.main} ${settingsStatus ? classes.openAnimation : classes.closeAnimation}`}>
                <div className={`${classes.settingsButton} ${classes.noborder}`}>
                    <button></button>
                </div>
                <div className={`${classes.wrapper} ${settingsStatus ? classes.visible : classes.hidden}`}>
                    <label htmlFor="sorting">сортировка</label>
                    <select id="sorting">
                        <option>вкл</option>
                        <option>выкл</option>
                    </select>
                    <label htmlFor="search">поиск</label>
                    <select id="search">
                        <option>вкл</option>
                        <option>выкл</option>
                    </select>
                    <label htmlFor="timer">часы</label>
                    <select id="timer">
                        <option>вкл</option>
                        <option>выкл</option>
                    </select>
                    <label htmlFor="theme">тема</label>
                    <select id="theme">
                        <option>светлая</option>
                        <option>тёмная</option>
                    </select>
                    <label htmlFor="background">фон</label>
                    <select id="background">
                        <option>белый</option>
                        <option>чёрный</option>
                    </select>
                    <label htmlFor="background">мелодия</label>
                    <select id="background">
                        <option>нет</option>
                        <option>лес</option>
                        <option>ручей</option>
                        <option>костёр</option>
                        <option>дождь</option>
                        <option>ночь</option>
                    </select>
                    <button className={classes.defaultButton}>по умолчанию</button>
                </div>
            </div>
        </div>

    )
}

