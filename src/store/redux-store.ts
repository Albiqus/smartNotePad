import { legacy_createStore, combineReducers } from "redux";
import { listReducer } from "./list-reducer";
import { noteReducer } from "./note-reducer";
import { settingsReducer } from "./settings-reducer";





let reducers = combineReducers({
    list: listReducer,
    settings: settingsReducer,
    note: noteReducer
})

let store = legacy_createStore(reducers)

export { store }
export type RootState = ReturnType < typeof store.getState >