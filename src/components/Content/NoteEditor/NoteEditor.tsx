import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/redux-store';
import { useState } from 'react';
import { getErrors } from '../../../utils/getErrors';
import { AcceptButton, Input, Main, Modal, Paragraph, RejectButton, Textarea, Wrapper } from './NoteEditor-styles';


export const EditorNote = (props) => {

    const dispatch = useDispatch()

    const errors: any = useSelector((state: RootState) => state.main.errors)
    const sortMode: string = useSelector((state: RootState) => state.main.sortMode)
    const isNoteEdit: boolean = useSelector((state: RootState) => state.main.isNoteEdit)
    const notes: any = useSelector((state: RootState) => state.main.notes)
    const currentNoteId: String = useSelector((state: RootState) => state.main.currentNoteId)

    const currentNote = notes.find(note => note.id === currentNoteId) || {}
    const { title, description} = currentNote

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
        <Modal>
            <Main>
                <Input error={errors?.title} onChange={onTitleChange} placeholder='Название..' value={titleValue}></Input>
                <Textarea error={errors?.description} onChange={onDescriptionChange} placeholder='Описание..' value={descriptionValue}></Textarea>
                <Wrapper>
                    <AcceptButton onClick={onAcceptButtonClick}></AcceptButton>
                    <RejectButton onClick={onRejectButtonClick}></RejectButton>
                </Wrapper>
                {errors && <Paragraph>все поля должны быть заполнены</Paragraph>}
            </Main>
        </Modal>
    )
}