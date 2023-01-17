import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux-store';
import classesLight from './Content-light.module.css';
import classesDark from './Content-dark.module.css';
import { CurrentNote } from './CurrentNote/CurrentNote';
import { NewNote } from './NewNote/NewNote';

export const Content = () => {
    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark
    
    const notes: any = useSelector((state: RootState) => state.main.notes)
    const isNoteCreation: boolean = useSelector((state: RootState) => state.main.isNoteCreation)


    return (
        <div className={classes.main}>
            {!isNoteCreation && notes.length !== 0 && <CurrentNote />}
            {isNoteCreation && <NewNote/>}
        </div>
    )

}