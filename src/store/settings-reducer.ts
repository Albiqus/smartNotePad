const SET_CLOCK_SETTING = 'SET_CLOCK_SETTING'

const startState = {
    sortingMode: true,
    searchMode: true,
    clockVisible: true,
    theme: 'light',
    background: 'white',
    melody: false
}

export const settingsReducer = (state = startState, action: any) => {
    switch (action.type) {
        case SET_CLOCK_SETTING: {
            return {
                ...state,
                clockVisible: action.payload === 'вкл' ? true : false
            }
        }
        default:
            return state;
    }
}

// export const setClockSetting = (value : string) => ({
//     type: SET_CLOCK_SETTING,
//     value
// })