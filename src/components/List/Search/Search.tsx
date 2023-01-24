import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/redux-store';
import { Form, Input } from './Search-styles';


export const Search = () => {
    const dispatch = useDispatch()
    const searchValue: string = useSelector((state: RootState) => state.main.searchValue)

    const onSearchInputChange = (e: any) => {
        dispatch({ type: 'SET_SEARCH_VALUE', payload: e.target.value })
    }


    return (
        <Form>
            <Input onChange={onSearchInputChange} type="text" placeholder='поиск..' value={searchValue}></Input>
        </Form>
    )
}