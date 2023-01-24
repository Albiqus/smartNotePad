const SET_SORTING = 'SET_SORTING'
const SET_SEARCH = 'SET_SEARCH'
const SET_CLOCK = 'SET_CLOCK'
const SET_THEME = 'SET_THEME'
const SET_SOUND = 'SET_SOUND'
const SET_VOLUME = 'SET_VOLUME'
const SET_DEFAULT_SETTINGS = 'SET_DEFAULT_SETTINGS'

const startState = {
    sorting: true,
    search: true,
    clock: true,
    theme: 'light',
    sound: '',
    volume: 50
}

export const settingsReducer = (state = startState, action: any) => {
    switch (action.type) {
        case SET_SORTING: {
            return {
                ...state,
                sorting: !state.sorting
            }
        }
        case SET_SEARCH: {
            return {
                ...state,
                search: !state.search
            }
        }
        case SET_CLOCK: {
            return {
                ...state,
                clock: !state.clock
            }
        }
        case SET_THEME: {
            return {
                ...state,
                theme: action.payload === 'светлая' ? 'light' : 'dark'
            }
        }
        case SET_SOUND: {
            const sound = action.payload === 'нет' ? false : action.payload
            return {
                ...state,
                sound: sound
            }
        }
        case SET_VOLUME: {
            return {
                ...state,
                volume: action.payload
            }
        }
        case SET_DEFAULT_SETTINGS: {
            return {
                ...state,
                sorting: true,
                search: true,
                clock: true,
                theme: 'light',
                sound: '',
                volume: 50
            }
        }
        default:
            return state;
    }
}
