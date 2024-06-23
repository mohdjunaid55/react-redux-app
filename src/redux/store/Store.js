import {createStore} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import { counterReducer } from "../reducers/Counter.reducer"

let store = createStore(counterReducer)

configureStore({
    reducer: counterReducer,
    middlware:(getDefaultMiddleware) => getDefaultMiddleware(),
    devTools:true
})
export default store;