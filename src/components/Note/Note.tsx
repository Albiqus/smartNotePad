import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux-store';
import classesLight from './Note-light.module.css';
import classesDark from './Note-dark.module.css';

export const Note = () => {
    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const title: string = useSelector((state: RootState) => state.note.currentTitle)
    const description: string = useSelector((state: RootState) => state.note.currentDescription)

    const classes = theme === 'light' ? classesLight : classesDark

    return (
        <div className={classes.main}>
            <h1>{title}</h1>
            <button className={classes.favoriteButton}></button>
            <button className={classes.editButton}></button>
            <p>{description}</p>
            <button className={classes.deleteButton}></button>
        </div>
    )
}