const SET_SORTING = 'SET_SORTING'
const SET_SEARCH = 'SET_SEARCH'
const SET_CLOCK = 'SET_CLOCK'
const SET_THEME = 'SET_THEME'

const startState = {
    sorting: true,
    search: true,
    clock: true,
    theme: 'light',
    background: 'white',
    melody: false
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
        default:
            return state;
    }
}
