import { notes } from "../data"
const SET_FOUND_NOTES = 'SET_FOUND_NOTES'
const SET_SORTED_NOTES = 'SET_SORTED_NOTES'


const startState = {
    notes: notes,
    searchValue: '',
    sortMode: 'all',
}

export const listReducer = (state = startState, action: any) => {
    switch (action.type) {
        case SET_FOUND_NOTES: {
            let foundNotes = notes.filter(note => note.title.toLowerCase().startsWith(action.payload.toLowerCase()))
            if (state.sortMode === 'fav') {
                foundNotes = foundNotes.filter(note => note.isFavorite)
            }
            return {
                ...state,
                searchValue: action.payload,
                notes: foundNotes
            }
        }
        case SET_SORTED_NOTES: {
            let sortedNotes = action.payload === 'fav'
                ? notes.filter(note => note.isFavorite)
                : notes
            if (state.searchValue !== '') {
                sortedNotes = sortedNotes.filter(note => note.title.toLowerCase().startsWith(state.searchValue.toLowerCase()))
            }
            return {
                ...state,
                sortMode: action.payload,
                notes: sortedNotes
            }
        }
        default:
            return state;
    }
}