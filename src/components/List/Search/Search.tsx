import classesLight from './Search-light.module.css';
import classesDark from './Search-dark.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/redux-store';

export const Search = () => {
    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark

    return (
        <form className={classes.main}>
            <input type="text" placeholder='поиск..' />
        </form>
    )
}