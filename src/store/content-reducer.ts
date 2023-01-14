import { notes } from "../data"

const SET_CURRENT_NOTE = 'SET_CURRENT_NOTE'

const startState = {
    id: '1',
    title: 'Уброка',
    description: 'Подмести в коридоре, помыть полы, пропылесосить в квартире. Протереть пыль в коридоре на полках. Вынести мусор',
    isFavorite: false,
}

export const contentReducer = (state = startState, action: any) => {
    switch (action.type) {
        case SET_CURRENT_NOTE: {
            const currentNote : any = notes.find(note => note.id === action.payload)
            return {
                ...state,
                id: currentNote.id,
                title: currentNote.title,
                description: currentNote.description,
                isFavorite: currentNote.isFavorite,
            }
        }
        default:
            return state;
    }
}
