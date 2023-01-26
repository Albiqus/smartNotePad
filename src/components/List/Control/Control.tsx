import { useDispatch } from 'react-redux';
import { Button, Main } from './Control-styles';


export const Control = () => {

    const dispatch = useDispatch()

    const onAddNoteButtonClick = () => { dispatch({ type: 'SET_EDITOR_STATUS', payload: { status: true } }) } 
    
    return (
        <Main>
            <Button onClick={onAddNoteButtonClick}></Button>
        </Main>
    )
}