import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classesLight from './Settings-light.module.css';
import classesDark from './Settings-dark.module.css';
import { RootState } from '../../store/redux-store';

export const Settings = () => {
    const dispatch = useDispatch()


    const volume: number = useSelector((state: RootState) => state.settings.volume)
    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark


    const [settingsStatus, setSettingsStatus] = useState(false)
    const [isAnimation, setIsAnimation] = useState(false)


    const onSettingsMouseEnter = () => {
        setSettingsStatus(true)
        setIsAnimation(true)
        setTimeout(() => setIsAnimation(false), 600);
    }

    const onSettingsMouseLeave = () => {
        if (!isAnimation) setSettingsStatus(false)
    }

    const onSortingSelectChange = (e: any) => dispatch({ type: 'SET_SORTING', payload: e.target.value })
    const onSearchSelectChange = (e: any) => dispatch({ type: 'SET_SEARCH', payload: e.target.value })
    const onClockSelectChange = (e: any) => dispatch({ type: 'SET_CLOCK', payload: e.target.value })
    const onThemeSelectChange = (e: any) => dispatch({ type: 'SET_THEME', payload: e.target.value })
    const onMelodySelectChange = (e: any) => dispatch({ type: 'SET_SOUND', payload: e.target.value })
    const onVolumeChange = (e: any) => dispatch({ type: 'SET_VOLUME', payload: e.target.value })

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
                    <select onChange={onThemeSelectChange} id="theme">
                        <option>светлая</option>
                        <option>тёмная</option>
                    </select>
                    <label htmlFor="background">мелодия</label>
                    <select onChange={onMelodySelectChange} id="background">
                        <option>нет</option>
                        <option>лето в лесу</option>
                        <option>ручей</option>
                        <option>костёр</option>
                        <option>дождь</option>
                        <option>ночное море</option>
                    </select>
                    <label htmlFor="volume">громкость</label>
                    <input onChange={onVolumeChange} type="range" id='volume' value={volume}/>
                    <button className={classes.defaultButton}>по умолчанию</button>
                </div>
            </div>
        </div>

    )
}

