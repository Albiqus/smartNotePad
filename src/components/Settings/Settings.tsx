import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './Settings.module.css';

export const Settings = () => {
    const dispatch = useDispatch()

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
        if (!isAnimation) {
            setSettingsStatus(false)
        }
    }


    const onSortingSelectChange = (e: any) => {
        dispatch({ type: 'SET_SORTING_SETTING', payload: e.target.value })
    }

    const onSearchSelectChange = (e: any) => {
        dispatch({ type: 'SET_SEARCH_SETTING', payload: e.target.value })
    }

    const onClockSelectChange = (e: any) => {
        dispatch({ type: 'SET_CLOCK_SETTING', payload: e.target.value })
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
                    <select onChange={onSortingSelectChange} id="sorting">
                        <option>вкл</option>
                        <option>выкл</option>
                    </select>
                    <label htmlFor="search">поиск</label>
                    <select onChange={onSearchSelectChange} id="search">
                        <option>вкл</option>
                        <option>выкл</option>
                    </select>
                    <label htmlFor="timer">часы</label>
                    <select onChange={onClockSelectChange} id="timer">
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

