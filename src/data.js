import sound1 from './sounds/summer-forest.mp3' // протещено
import sound2 from './sounds/stream.mp3' // протещено
import sound3 from './sounds/bonfire.mp3'
import sound4 from './sounds/rain.mp3'
import sound5 from './sounds/night-sea.mp3'


export const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
export const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

export const sounds = {
    'лето в лесу': sound1,
    'ручей': sound2,
    'костёр': sound3,
    'дождь': sound4,
    'ночное море': sound5
}
export const notes = [{
        id: '1',
        title: 'Уборка',
        description: 'Подмести в коридоре, помыть полы, пропылесосить в квартире.Протереть пыль в коридоре на полках.Вынести мусор',
        isFavorite: false
    },
    {
        id: '2',
        title: '12.04.2025',
        description: '12.04.2025 съездить в стоматологическую клинику по адресу ул.Пушкина, д.5',
        isFavorite: false
    },
    {
        id: '3',
        title: 'подарки НГ',
        description: 'Купить на новый год:\nсын - конструктор,\nжена - ирригатор,\nродители - новый диван',
        isFavorite: true
    },
    {
        id: '4',
        title: 'фильмы',
        description: 'Терминатор\nАгент Ева\nВсё могу\nДьявол среди нас\nКлаустрофобы: Квест В Москве\nСекрет\nУбийство по открыткам\nЧестный вор\nКалашников\nСуд над чикагской семьёй\nДовод',
        isFavorite: false
    },
    {
        id: '5',
        title: 'подарокче',
        description: 'Терминатор\nАгент Ева\nВсё могу\nДьявол среди нас\nКлаустрофобы: Квест В Москве\nСекрет\nУбийство по открыткам\nЧестный вор\nКалашников\nСуд над чикагской семьёй\nДовод',
        isFavorite: false
    }
]