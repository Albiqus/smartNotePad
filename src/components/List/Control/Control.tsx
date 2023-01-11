import { useSelector } from 'react-redux';
import { RootState } from '../../../store/redux-store';
import classesLight from './Control-light.module.css';
import classesDark from './Control-dark.module.css';

export const Control = () => {

    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark
    return (
        <div className={classes.main}>
            <button></button>
        </div>
    )
}