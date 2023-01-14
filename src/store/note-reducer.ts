const SET_FOUND_NOTES = 'SET_FOUND_NOTES'

const startState = {
    currentTitle: 'Уброка',
    currentDescription: 'Подмести в коридоре, помыть полы, пропылесосить в квартире. Протереть пыль в коридоре на полках. Вынести мусор',
    currentFavoriteStatus: false,
}

export const noteReducer = (state = startState, action: any) => {
    switch (action.type) {
        case SET_FOUND_NOTES: {
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}
