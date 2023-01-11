import classesLight from './Sorting-light.module.css';
import classesDark from './Sorting-dark.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/redux-store';

export const Sorting = () => {
    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark

    return (
        <div className={classes.main}>
            <div>
                <div className={classes.radio}></div>
                <p>все</p>
            </div>
            <div>
                <div className={classes.radio}></div>
                <p>избранные</p>
            </div>
        </div>
    )
}