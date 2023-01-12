import { notes } from "../data"
const SET_FOUND_NOTES = 'SET_FOUND_NOTES'

const startState = {
    notes: notes,
    actualNotes: notes,
    currentTitle: 'Уброка',
    currentDescription: 'Подмести в коридоре, помыть полы, пропылесосить в квартире. Протереть пыль в коридоре на полках. Вынести мусор',
    currentFavoriteStatus: false,
}

export const notesReducer = (state = startState, action: any) => {
    switch (action.type) {
        case SET_FOUND_NOTES: {
            return {
                ...state,
                actualNotes: [...state.notes].filter(note => note.title.toLowerCase().startsWith(action.payload.toLowerCase()))
            }
        }
        default:
            return state;
    }
}
