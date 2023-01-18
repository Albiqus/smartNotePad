import classesLight from './CurrentNote-light.module.css';
import classesDark from './CurrentNote-dark.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/redux-store';


export const CurrentNote = () => {
    const dispatch = useDispatch()

    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark
    
    const notes: any = useSelector((state: RootState) => state.main.notes)
    const currentNoteId: String = useSelector((state: RootState) => state.main.currentNoteId)

    const currentNote = notes.find(note => note.id === currentNoteId)
    const { title, description, isFavorite, id } = currentNote

    const onDeleteNoteClick = (e: any) => dispatch({ type: 'DELETE_NOTE', payload: { id } })
    const onSetFavoriteClick = () => dispatch({ type: 'SET_IS_FAVORITE_NOTE', payload: { id } })
    const onEditNoteClick = () => {
        dispatch({ type: 'SET_IS_NOTE_EDIT', payload: { status: true } })
        dispatch({ type: 'SET_EDITOR_STATUS', payload: { status: true } })
    } 

    return (
        <div className={classes.main}>
            <h1>{title}</h1>
            {isFavorite && <button onClick={onSetFavoriteClick} className={classes.unfavoriteButton}></button>}
            {!isFavorite && <button onClick={onSetFavoriteClick} className={classes.favoriteButton}></button>}
            <button onClick={onEditNoteClick} className={classes.editButton}></button>
            <p>{description}</p>
            <button onClick={onDeleteNoteClick} className={classes.deleteButton}></button>
        </div>
    )
}