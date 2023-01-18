import classesLight from './NoteEditor-light.module.css';
import classesDark from './NoteEditor-dark.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/redux-store';
import { useState } from 'react';
import { getErrors } from '../../../utils/getErrors';


export const EditorNote = () => {
    const dispatch = useDispatch()

    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark
    const errors: any = useSelector((state: RootState) => state.main.errors)
    const sortMode: string = useSelector((state: RootState) => state.main.sortMode)
    const isNoteEdit: boolean = useSelector((state: RootState) => state.main.isNoteEdit)
    const notes: any = useSelector((state: RootState) => state.main.notes)
    const currentNoteId: String = useSelector((state: RootState) => state.main.currentNoteId)

    const currentNote = notes.find(note => note.id === currentNoteId)
    const { title, description } = currentNote

    const titleClassName = errors?.title ? `${classes.title} ${classes.error}` : classes.title
    const descriptionClassName = errors?.description ? `${classes.description} ${classes.error}` : classes.description

    const [titleValue, setTitleValue] = useState(isNoteEdit ? title : '')
    const [descriptionValue, setDescriptionValue] = useState(isNoteEdit ? description : '')


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
        if (Object.keys(errors).length > 0) {
            dispatch({ type: 'SET_ERRORS', payload: errors })
            return
        }
        if (isNoteEdit) {
            dispatch({ type: 'UPDATE_NOTE', payload: { title: titleValue, description: descriptionValue, id: currentNoteId } })
            dispatch({ type: 'SET_EDITOR_STATUS', payload: { status: false } })
            dispatch({ type: 'SET_IS_NOTE_EDIT', payload: { status: false } })
            return
        }
        const isFavorite = sortMode === 'fav' ? true : false
        dispatch({ type: 'ADD_NEW_NOTE', payload: { titleValue, descriptionValue, isFavorite } })
        dispatch({ type: 'SET_EDITOR_STATUS', payload: { status: false } })


    }

    const onRejectButtonClick = () => {
        dispatch({ type: 'SET_IS_NOTE_EDIT', payload: { status: false } })
        dispatch({ type: 'SET_EDITOR_STATUS', payload: { status: false } })
        dispatch({ type: 'SET_ERRORS', payload: null })
        setTitleValue('')
        setDescriptionValue('')
        window.removeEventListener('keydown', handleKeyDown)
    }

    const handleKeyDown = (e) => e.code === 'Escape' && onRejectButtonClick()
    window.addEventListener('keydown', handleKeyDown)

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