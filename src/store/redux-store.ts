import { legacy_createStore, combineReducers } from "redux";
import { notesReducer } from "./notes-reducer";
import { settingsReducer } from "./settings-reducer";





let reducers = combineReducers({
    notes: notesReducer,
    settings: settingsReducer
})

let store = legacy_createStore(reducers)

export { store }
export type RootState = ReturnType < typeof store.getState >