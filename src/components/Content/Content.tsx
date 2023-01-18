import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux-store';
import classesLight from './Content-light.module.css';
import classesDark from './Content-dark.module.css';
import { CurrentNote } from './CurrentNote/CurrentNote';
import { EditorNote } from './NoteEditor/NoteEditor';


export const Content = () => {
    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark
    
    const notes: any = useSelector((state: RootState) => state.main.notes)
    const noteEditorStatus: boolean = useSelector((state: RootState) => state.main.noteEditorStatus)


    return (
        <div className={classes.main}>
            {!noteEditorStatus && notes.length !== 0 && <CurrentNote />}
            {noteEditorStatus && <EditorNote/>}
        </div>
    )

}