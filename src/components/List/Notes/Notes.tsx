import classesLight from './Notes-light.module.css';
import classesDark from './Notes-dark.module.css';
import favoriteIcon from '../../../images/icons/light/favorite-small.png'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../../store/redux-store';
import { useDispatch } from 'react-redux';
import { getActualNotes } from '../../../utils/getActualNotes';

interface notes {
    id: string,
    title: string,
    description: string,
    isFavorite: boolean
}

export const Notes = () => {
    const dispatch = useDispatch()

    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark

    const notes: notes[] = useSelector((state: RootState) => state.main.notes)
    const currentNoteId: string = useSelector((state: RootState) => state.main.currentNoteId)
    const sortMode: string = useSelector((state: RootState) => state.main.sortMode)
    const searchValue: string = useSelector((state: RootState) => state.main.searchValue)

    const onNoteClick = (e: any) => {
        if (e.target.name === 'button') return
        dispatch({ type: 'SET_CURRENT_NOTE_ID', payload: { id: e.currentTarget.id } })
    }
    const onDeleteNoteClick = (e: any) => {
        dispatch({ type: 'DELETE_NOTE', payload: { id: e.currentTarget.id } })
    }

    const actualNotes = getActualNotes(notes, sortMode, searchValue)
    const notesItems = actualNotes.map(note => {
        return (
            <div onClick={onNoteClick} className={currentNoteId === note.id ? `${classes.noteItem} ${classes.currentNote}` : `${classes.noteItem}`} key={note.id} id={note.id}>
                <div className={classes.favoriteBox}>
                    {note.isFavorite && <img src={favoriteIcon} alt='избранное'></img>}
                </div>
                <p>{note.title}</p>
                <button name='button' id={note.id} onClick={onDeleteNoteClick}></button>
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