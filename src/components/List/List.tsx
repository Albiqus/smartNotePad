import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux-store';
import { Control } from './Control/Control';
import { Notes } from './Notes/Notes';
import { Search } from './Search/Search';
import { Sorting } from './Sorting/Sorting';
import { Main } from './List-styles';


export const List = () => {
    const sortingMode = useSelector((state: RootState) => state.settings.sorting)
    const searchMode = useSelector((state: RootState) => state.settings.search)
    
    return (
        <Main>
            {searchMode && <Search />}
            {sortingMode && <Sorting />}
            <Notes/>
            <Control />
        </Main>
    )
}