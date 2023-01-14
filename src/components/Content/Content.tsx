import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux-store';
import classesLight from './Content-light.module.css';
import classesDark from './Content-dark.module.css';

export const Content = () => {
    const theme: string = useSelector((state: RootState) => state.settings.theme)
    const classes = theme === 'light' ? classesLight : classesDark


    const title: string = useSelector((state: RootState) => state.content.title)
    const description: string = useSelector((state: RootState) => state.content.description)
    const isFavorite: boolean = useSelector((state: RootState) => state.content.isFavorite)
   

    return (
        <div className={classes.main}>
            <h1>{title}</h1>
            {isFavorite && <button className={classes.unfavoriteButton}></button>}
            {!isFavorite && <button className={classes.favoriteButton}></button>}
            <button className={classes.editButton}></button>
            <p>{description}</p>
            <button className={classes.deleteButton}></button>
        </div>
    )
}