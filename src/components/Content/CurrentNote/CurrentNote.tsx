import classesLight from './CurrentNote-light.module.css';
import classesDark from './CurrentNote-dark.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/redux-store';


export const CurrentNote = () => {
    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark
    
    const notes: any = useSelector((state: RootState) => state.main.notes)
    const currentNoteId: String = useSelector((state: RootState) => state.main.currentNoteId)

    const currentNote = notes.find(note => note.id === currentNoteId)
    const { title, description, isFavorite } = currentNote

    return (
        <div className={classes.main}>
            <h1>{title}</h1>
            {isFavorite && <button className={classes.unfavoriteButton}></button>}
            {!isFavorite && <button className={classes.favoriteButton}></button>}
            <button className={classes.editButton}></button>
            <p>{description}</p>
            <button className={classes.deleteButton}></button>
        </div>
    )
}