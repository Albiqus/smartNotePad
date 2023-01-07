import classes from './Notes.module.css';
import deleteIcon from '../../../images/icons/delete.png'
import favoriteIcon from '../../../images/icons/favorite-small.png'

export const Notes = () => {

    let id = Symbol('id')
    const notes = [{
        [id]: 1,
        title: 'Уброка',
        description: 'Подмести в коридоре, помыть полы, пропылесосить в квартире.Протереть пыль в коридоре на полках.Вынести мусор',
        isFavorite: false
    },
    {
        [id]: 2,
        title: '12.04.2025',
        description: '12.04.2025 съездить в стоматологическую клинику по адресу ул.Пушкина, д.5',
        isFavorite: false
    },
    {
        [id]: 3,
        title: 'подарки НГ',
        description: 'Купить на новый год:\nсын - конструктор,\nжена - ирригатор,\nродители - новый диван',
        isFavorite: true
    },
    {
        [id]: 4,
        title: 'фильмы',
        description: 'Терминатор\nАгент Ева\nВсё могу\nДьявол среди нас\nКлаустрофобы: Квест В Москве\nСекрет\nУбийство по открыткам\nЧестный вор\nКалашников\nСуд над чикагской семьёй\nДовод',
        isFavorite: false
    }]

    const notesItems = notes.map(note => {
        return (
            <div className={classes.noteItem}>
                <div className={classes.favoriteBox}>
                    {note.isFavorite && <img src={favoriteIcon} alt='избранное'></img>}
                </div>
                <div className={classes.titleBox}>
                    <p>{note.title}</p>
                </div>
                <div className={classes.deleteBox}>
                    <img src={deleteIcon} alt="удалить заметку" />
                </div>
            </div>
        )
    })

    return (
        <div className={classes.main}>
            {notesItems}
        </div>
    )
}