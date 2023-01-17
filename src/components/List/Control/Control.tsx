import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/redux-store';
import classesLight from './Control-light.module.css';
import classesDark from './Control-dark.module.css';

export const Control = () => {
    const dispatch = useDispatch()

    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark

    const onAddNoteButtonClick = () => dispatch({ type: 'SET_IS_NOTE_CREATION', payload: true })


    return (
        <div className={classes.main}>
            <button onClick={onAddNoteButtonClick}></button>
        </div>
    )
}