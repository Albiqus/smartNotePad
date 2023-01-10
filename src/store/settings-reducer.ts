const SET_SORTING_SETTING = 'SET_SORTING_SETTING'
const SET_SEARCH_SETTING = 'SET_SEARCH_SETTING'
const SET_CLOCK_SETTING = 'SET_CLOCK_SETTING'

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
        case SET_SORTING_SETTING: {
            return {
                ...state,
                sorting: action.payload === 'вкл' ? true : false
            }
        }
        case SET_SEARCH_SETTING: {
            return {
                ...state,
                search: action.payload === 'вкл' ? true : false
            }
        }
        case SET_CLOCK_SETTING: {
            return {
                ...state,
                clock: action.payload === 'вкл' ? true : false
            }
        }
        default:
            return state;
    }
}
