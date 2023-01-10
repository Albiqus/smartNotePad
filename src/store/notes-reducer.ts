const SET_CURRENT_TITLE = 'SET_CURRENT_TITLE'

const startState = {
    notes: [{
            id: '1',
            title: 'Уброка',
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
        }
    ],
    currentTitle: 'Уброка',
    currentDescription: 'Подмести в коридоре, помыть полы, пропылесосить в квартире. Протереть пыль в коридоре на полках. Вынести мусор',
    currentFavoriteStatus: false,
}

export const notesReducer = (state = startState, action: any) => {
    switch (action.type) {
        case SET_CURRENT_TITLE: {
            const newCurrentTitle = [...state.notes].filter(note => note.id === action.id)[0].title
            return {
                ...state,
                currentTitle: newCurrentTitle
            }
        }
        default:
            return state;
    }
}

export const setCurrentTitle = (id: string) => ({
    type: SET_CURRENT_TITLE,
    id
})