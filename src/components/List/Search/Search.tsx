import classes from './Search.module.css';

export const Search = () => {

    return (
        <form className={classes.main}>
            <input type="text" placeholder='поиск..' />
        </form>
    )
}