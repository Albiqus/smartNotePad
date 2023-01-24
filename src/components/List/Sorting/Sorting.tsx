import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/redux-store';
import { Main, Paragraph, Radio, Selected, WrapperAll, WrapperFav } from './Sorting-styles';


export const Sorting = () => {
    const dispatch = useDispatch()
    const sortMode: string = useSelector((state: RootState) => state.main.sortMode)


    const onAllNotesClick = () => {
        dispatch({ type: 'SET_SORT_MODE', payload: { sortMode: 'all' } })
    }
    const onFavoriteNotesClick = () => {
        dispatch({ type: 'SET_SORT_MODE', payload: { sortMode: 'fav' } })
    }

    return (
        <Main>
            <WrapperAll onClick={onAllNotesClick}>
                <Radio>
                    {sortMode === 'all' && <Selected></Selected>}
                </Radio>
                <Paragraph>все</Paragraph>
            </WrapperAll>
            <WrapperFav onClick={onFavoriteNotesClick}>
                <Radio>
                    {sortMode === 'fav' && <Selected></Selected>}
                </Radio>
                <Paragraph>избранные</Paragraph>
            </WrapperFav>
        </Main>
    )
}