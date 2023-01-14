import classesLight from './Notes-light.module.css';
import classesDark from './Notes-dark.module.css';
import favoriteIcon from '../../../images/icons/light/favorite-small.png'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../../store/redux-store';
import { useDispatch } from 'react-redux';

export const Notes = () => {
    const dispatch = useDispatch()

    const notes: { id: string, title: string, description: string, isFavorite: boolean }[] = useSelector((state: RootState) => state.list.notes)
    const currentNoteId: string = useSelector((state: RootState) => state.content.id)

    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark


    const onNoteClick = (e: any) => dispatch({ type: 'SET_CURRENT_NOTE', payload: e.currentTarget.id })


    const notesItems = notes.map(note => {
        return (
            <div onClick={onNoteClick} className={currentNoteId === note.id ? `${classes.noteItem} ${classes.currentNote}` : `${classes.noteItem}`} key={note.id} id={note.id}>
                <div className={classes.favoriteBox}>
                    {note.isFavorite && <img src={favoriteIcon} alt='избранное'></img>}
                </div>
                <p>{note.title}</p>
                <button></button>
            </div>
        )
    })
    
    return (
        <div className={classes.main}>
            {notesItems}
            {notesItems.length === 0 && <p className={classes.noFoundText}>не найдено</p>}
        </div>
    )
}