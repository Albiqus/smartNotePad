import { legacy_createStore, combineReducers } from "redux";
import { mainReducer } from "./main-reducer";





let reducers = combineReducers({
    main: mainReducer,
})

let store = legacy_createStore(reducers)

export { store }
export type RootState = ReturnType < typeof store.getState >