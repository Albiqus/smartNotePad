import classesLight from './NewNote-light.module.css';
import classesDark from './NewNote-dark.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/redux-store';
import { useState } from 'react';
import { getErrors } from '../../../utils/getErrors';


export const NewNote = () => {
    const dispatch = useDispatch()

    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark
    const errors: any = useSelector((state: RootState) => state.main.errors)

    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')


    const onTitleChange = (e: any) => {
        dispatch({ type: 'SET_ERRORS', payload: null })
        setTitleValue(e.target.value)
    }

    const onDescriptionChange = (e: any) => {
        dispatch({ type: 'SET_ERRORS', payload: null })
        setDescriptionValue(e.target.value)
    }

    const onAcceptButtonClick = () => {
        const errors = getErrors(titleValue, descriptionValue)

        if (Object.keys(errors).length === 0) {
            dispatch({ type: 'ADD_NEW_NOTE', payload: { titleValue, descriptionValue } })
            dispatch({ type: 'SET_IS_NOTE_CREATION', payload: false })
        }
        else dispatch({ type: 'SET_ERRORS', payload: errors })

    }

    const onRejectButtonClick = () => {
        dispatch({ type: 'SET_IS_NOTE_CREATION', payload: false })
        dispatch({ type: 'SET_ERRORS', payload: null })
    }

    const titleClassName = errors?.title ? `${classes.title} ${classes.error}` : classes.title
    const descriptionClassName = errors?.description ? `${classes.description} ${classes.error}` : classes.description


    return (
        <div className={classes.modal}>
            <div className={classes.main}>
                <input className={titleClassName} onChange={onTitleChange} placeholder='Название..' value={titleValue} />
                <textarea className={descriptionClassName} onChange={onDescriptionChange} placeholder='Описание..' value={descriptionValue}></textarea>
                <div className={classes.buttonsBox}>
                    <button onClick={onAcceptButtonClick}></button>
                    <button onClick={onRejectButtonClick}></button>
                </div>
                {errors && <p className={classes.errorText}>все поля должны быть заполнены</p>}
            </div>
        </div>
    )
}