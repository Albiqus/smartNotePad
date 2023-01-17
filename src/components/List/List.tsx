import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux-store';
import { Control } from './Control/Control';
import classesLight from './List-light.module.css';
import classesDark from './List-dark.module.css';
import { Notes } from './Notes/Notes';
import { Search } from './Search/Search';
import { Sorting } from './Sorting/Sorting';


export const List = () => {
    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const sortingMode = useSelector((state: RootState) => state.settings.sorting)
    const searchMode = useSelector((state: RootState) => state.settings.search)

    const classes = theme === 'light' ? classesLight : classesDark
    
    return (
        <div className={classes.main}>
            {searchMode && <Search />}
            {sortingMode && <Sorting />}
            <Notes/>
            <Control />
        </div>
    )
}