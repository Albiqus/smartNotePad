import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux-store';
import { CurrentNote } from './CurrentNote/CurrentNote';
import { EditorNote } from './NoteEditor/NoteEditor';
import { Main } from './Content-styles';


export const Content = () => {
    
    const notes: any = useSelector((state: RootState) => state.main.notes)
    const noteEditorStatus: boolean = useSelector((state: RootState) => state.main.noteEditorStatus)

    return (
        <Main>
            {!noteEditorStatus && notes.length !== 0 && <CurrentNote />}
            {noteEditorStatus && <EditorNote/>}
        </Main>
    )
}