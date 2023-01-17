import classesLight from './Search-light.module.css';
import classesDark from './Search-dark.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/redux-store';


export const Search = () => {
    const dispatch = useDispatch()


    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const searchValue: string = useSelector((state: RootState) => state.main.searchValue)
    const classes = theme === 'light' ? classesLight : classesDark


    const onSearchInputChange = (e: any) => dispatch({ type: 'SET_SEARCH_VALUE', payload: e.target.value })
    


    return (
        <form className={classes.main}>
            <input onChange={onSearchInputChange} type="text" placeholder='поиск..' value={searchValue} />
        </form>
    )
}