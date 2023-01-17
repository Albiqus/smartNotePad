import { legacy_createStore, combineReducers } from "redux";
import { mainReducer } from "./main-reducer";
import { settingsReducer } from "./settings-reducer";



let reducers = combineReducers({
    main: mainReducer,
    settings: settingsReducer,
})

let store = legacy_createStore(reducers)

export { store }
export type RootState = ReturnType < typeof store.getState >