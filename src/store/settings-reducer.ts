const SET_SORTING = 'SET_SORTING'
const SET_SEARCH = 'SET_SEARCH'
const SET_CLOCK = 'SET_CLOCK'
const SET_THEME = 'SET_THEME'
const SET_SOUND = 'SET_SOUND'
const SET_VOLUME = 'SET_VOLUME'

const startState = {
    sorting: true,
    search: true,
    clock: true,
    theme: 'light',
    sound: '',
    volume: 100
}

export const settingsReducer = (state = startState, action: any) => {
    switch (action.type) {
        case SET_SORTING: {
            return {
                ...state,
                sorting: action.payload === 'вкл' ? true : false
            }
        }
        case SET_SEARCH: {
            return {
                ...state,
                search: action.payload === 'вкл' ? true : false
            }
        }
        case SET_CLOCK: {
            return {
                ...state,
                clock: action.payload === 'вкл' ? true : false
            }
        }
        case SET_THEME: {
            return {
                ...state,
                theme: action.payload === 'светлая' ? 'light' : 'dark'
            }
        }
        case SET_SOUND: {
            const sound = action.payload === 'нет' ? '' : action.payload
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
        default:
            return state;
    }
}
