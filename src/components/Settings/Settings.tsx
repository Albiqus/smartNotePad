import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import animationLight from './animation-light.module.css';
import animationDark from './animation-dark.module.css';
import { RootState } from '../../store/redux-store';
import { DefaultButton, Input, Label, Option, Select, SelectWrapper, SettingsButton, Switch, TumblerInput, TumblerWrapper, Wrapper, WrapperButton } from './Settings-styles';


export const Settings = () => {
    
    const dispatch = useDispatch()

    const volume: number = useSelector((state: RootState) => state.settings.volume)
    const sorting: boolean = useSelector((state: RootState) => state.settings.sorting)
    const search: boolean = useSelector((state: RootState) => state.settings.search)
    const clock: boolean = useSelector((state: RootState) => state.settings.clock)
    const sound: string = useSelector((state: RootState) => state.settings.sound)
    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? animationLight : animationDark

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

    const onSortingChange = (e: any) => dispatch({ type: 'SET_SORTING' })
    const onSearchChange = (e: any) => dispatch({ type: 'SET_SEARCH' })
    const onClockChange = (e: any) => dispatch({ type: 'SET_CLOCK' })
    const onThemeSelectChange = (e: any) => dispatch({ type: 'SET_THEME', payload: e.target.value })
    const onMelodySelectChange = (e: any) => dispatch({ type: 'SET_SOUND', payload: e.target.value })
    const onVolumeChange = (e: any) => dispatch({ type: 'SET_VOLUME', payload: e.target.value })
    const onDefaultButtonClick = () => dispatch({ type: 'SET_DEFAULT_SETTINGS' })

    return (
        <Wrapper>
            {!settingsStatus &&
                <WrapperButton settingsStatus={settingsStatus} onMouseEnter={onSettingsMouseEnter}>
                    <SettingsButton></SettingsButton>
                </WrapperButton>}
            <div onMouseLeave={onSettingsMouseLeave} className={`${classes.main} ${settingsStatus ? classes.openAnimation : classes.closeAnimation}`}>
                <WrapperButton settingsStatus={settingsStatus}>
                    <SettingsButton></SettingsButton>
                </WrapperButton>
                <div className={`${classes.wrapper} ${settingsStatus ? classes.visible : classes.hidden}`}>

                    <Label htmlFor="search">поиск</Label>
                    <TumblerWrapper>
                        <TumblerInput checked={search} onChange={onSearchChange} type="checkbox" />
                        <Switch />
                    </TumblerWrapper>

                    <Label htmlFor="sorting">сортировка</Label>
                    <TumblerWrapper>
                        <TumblerInput checked={sorting} onChange={onSortingChange} type="checkbox" />
                        <Switch />
                    </TumblerWrapper>

                    <Label htmlFor="timer">часы</Label>
                    <TumblerWrapper>
                        <TumblerInput checked={clock} onChange={onClockChange} type="checkbox" />
                        <Switch />
                    </TumblerWrapper>

                    <Label htmlFor="theme">тема</Label>
                    <SelectWrapper>
                        <Select value={theme} onChange={onThemeSelectChange} id="theme">
                            <Option value={'light'}>светлая</Option>
                            <Option value={'dark'}>тёмная</Option>
                        </Select>
                    </SelectWrapper>

                    <Label htmlFor="background">мелодия</Label>
                    <SelectWrapper>
                        <Select value={sound} onChange={onMelodySelectChange} id="background">
                            <Option value={'нет'}>нет</Option>
                            <Option value={'лето в лесу'}>лето в лесу</Option>
                            <Option value={'ручей'}>ручей</Option>
                            <Option value={'костёр'}>костёр</Option>
                            <Option value={'дождь'}>дождь</Option>
                            <Option value={'ночное море'}>ночное море</Option>
                        </Select>
                    </SelectWrapper>

                    <Label htmlFor="volume">громкость</Label>
                    <Input onChange={onVolumeChange} type="range" id='volume' value={volume} />

                    <DefaultButton onClick={onDefaultButtonClick}>по умолчанию</DefaultButton>
                </div>
            </div>
        </Wrapper>
    )
}

