import { Control } from './Control/Control';
import classes from './List.module.css';
import { Notes } from './Notes/Notes';
import { Search } from './Search/Search';
import { Sorting } from './Sorting/Sorting';

export const List = () => {



    return (
        <div className={classes.main}>
            <Search/>
            <Sorting/>
            <Notes/>
            <Control />
        </div>
    )
}