import favoriteIcon from '../../../images/icons/light/favorite-small.png'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../../store/redux-store';
import { useDispatch } from 'react-redux';
import { getActualNotes } from '../../../utils/getActualNotes';
import { Button, Img, Main, NoteItem, Paragraph, Title, Wrapper } from './Notes-styles';
interface notes {
    id: string,
    title: string,
    description: string,
    isFavorite: boolean
}


export const Notes = () => {
    const dispatch = useDispatch()

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
            <NoteItem onClick={onNoteClick} isCurrent={currentNoteId === note.id} key={note.id} id={note.id}>
                <Wrapper >
                    {note.isFavorite && <Img src={favoriteIcon} alt='избранное'></Img>}
                </Wrapper>
                <Title>{note.title}</Title>
                <Button name='button' id={note.id} onClick={onDeleteNoteClick}></Button>
            </NoteItem>
        )
    })

    return (
        <Main>
            {notesItems}
            {notesItems.length === 0 && <Paragraph>не найдено</Paragraph>}
        </Main>
    )
}