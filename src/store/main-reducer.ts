import { NOTES } from "../data"

const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
const SET_SORT_MODE = 'SET_SORT_MODE'
const ADD_NEW_NOTE = 'ADD_NEW_NOTE'
const DELETE_NOTE = 'DELETE_NOTE'
const SET_CURRENT_NOTE_ID = 'SET_CURRENT_NOTE_ID'
const SET_IS_NOTE_CREATION = 'SET_IS_NOTE_CREATION'
const SET_ERRORS = 'SET_ERRORS'

const startState = {
    notes: NOTES,
    currentNoteId: '1',
    searchValue: '',
    sortMode: 'all',
    isNoteCreation: false,
    errors: null,
}

export const mainReducer = (state = startState, action: any) => {
    switch (action.type) {
        case SET_SEARCH_VALUE: {
            return {
                ...state,
                searchValue: action.payload,
            }
        }
        case SET_SORT_MODE: {
            return {
                ...state,
                sortMode: action.payload.sortMode,
            }
        }
        case ADD_NEW_NOTE: {
            let newNoteId = state.notes.length > 0
                ? String(+state.notes.at(-1).id + 1)
                : '1'
            let newNote = {
                id: newNoteId,
                title: action.payload.titleValue,
                description: action.payload.descriptionValue,
                isFavorite: false
            }
            return {
                ...state,
                notes: [...state.notes, newNote],
                currentNoteId: newNoteId
            }
        }
        case DELETE_NOTE: {
            return {
                ...state,
                notes: [...state.notes].filter(note => note.id !== action.payload.id),
                currentNoteId: [...state.notes].find(note => note.id !== action.payload.id)?.id
            }
        }
        case SET_CURRENT_NOTE_ID: {
            return {
                ...state,
                currentNoteId: action.payload.id
            }
        }
        case SET_IS_NOTE_CREATION: {
            return {
                ...state,
                isNoteCreation: action.payload
            }
        }
        case SET_ERRORS: {
            return {
                ...state,
                errors: action.payload
            }
        }
        default:
            return state;
    }
}