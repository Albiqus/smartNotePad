import classesLight from './Search-light.module.css';
import classesDark from './Search-dark.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/redux-store';
import { useState } from 'react';

export const Search = () => {
    const dispatch = useDispatch()


    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark

    const [searchValue, setSearchValue] = useState('')


    const onSearchInputChange = (e: any) => {
        setSearchValue(e.target.value)
        dispatch({ type: 'SET_FOUND_NOTES', payload: e.target.value })
    } 

    return (
        <form className={classes.main}>
            <input onChange={onSearchInputChange} type="text" placeholder='поиск..' value={searchValue} />
        </form>
    )
}