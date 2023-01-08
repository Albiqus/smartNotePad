import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux-store';
import classes from './Note.module.css';

export const Note = () => {

    const title: string = useSelector((state: RootState) => state.main.currentTitle)
    const description: string = useSelector((state: RootState) => state.main.currentDescription)

    return (
        <div className={classes.noteBox}>
            <h1>{title}</h1>
            <button className={classes.favoriteButton}></button>
            <button className={classes.editButton}></button>
            <p>{description}</p>
            <button className={classes.deleteButton}></button>
        </div>
    )
}