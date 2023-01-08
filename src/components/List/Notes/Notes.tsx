import classes from './Notes.module.css';
import deleteIcon from '../../../images/icons/delete.png'
import favoriteIcon from '../../../images/icons/favorite-small.png'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../../store/redux-store';
import { useDispatch } from 'react-redux';

export const Notes = () => {

    const notes: { id: string, title: string, description: string, isFavorite: boolean }[] = useSelector((state: RootState) => state.main['notes'])

    const dispatch = useDispatch()


    const onNoteClick = (e: any) => {
        const noteId = e.currentTarget.id
        // dispatch({type:})
    }

    const notesItems = notes.map(note => {
        return (
            <div onClick={onNoteClick} className={classes.noteItem} key={note.id} id={note.id}>
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
        </div>
    )
}