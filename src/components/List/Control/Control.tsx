import classes from './Control.module.css';
import addIcon from '../../../images/icons/add.png'
export const Control = () => {

    return (
        <div className={classes.main}>
            <div className={classes.addNewNote}>
                <img src={addIcon} alt="" />
            </div>
        </div>
    )
}