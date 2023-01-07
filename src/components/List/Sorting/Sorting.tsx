import classes from './Sorting.module.css';


export const Sorting = () => {

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