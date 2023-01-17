import classesLight from './Sorting-light.module.css';
import classesDark from './Sorting-dark.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/redux-store';


export const Sorting = () => {
    const dispatch = useDispatch()

    const sortMode: string = useSelector((state: RootState) => state.main.sortMode)
    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark


    const onAllNotesClick = () => dispatch({ type: 'SET_SORT_MODE', payload: { sortMode: 'all' }  })
    const onFavoriteNotesClick = () => dispatch({ type: 'SET_SORT_MODE', payload: { sortMode: 'fav' }  })
    
    return (
        <div className={classes.main}>
            <div className={classes.allButton} onClick={onAllNotesClick}>
                <div className={classes.radio}>
                    {sortMode === 'all' && <div className={classes.selected}></div>}
                </div>
                <p>все</p>
            </div>
            <div className={classes.favButton} onClick={onFavoriteNotesClick}>
                <div className={classes.radio}>
                    {sortMode === 'fav' && <div className={classes.selected}></div>}
                </div>
                <p>избранные</p>
            </div>
        </div>
    )
}