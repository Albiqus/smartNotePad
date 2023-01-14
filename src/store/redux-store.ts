import { legacy_createStore, combineReducers } from "redux";
import { contentReducer } from "./content-reducer";
import { listReducer } from "./list-reducer";
import { settingsReducer } from "./settings-reducer";



let reducers = combineReducers({
    list: listReducer,
    settings: settingsReducer,
    content: contentReducer
})

let store = legacy_createStore(reducers)

export { store }
export type RootState = ReturnType < typeof store.getState >