import {createStore} from "redux"
import { counterReducer } from "../reducers/Counter.reducer"

let store = createStore(counterReducer)

export default store;


//  agr me @reduxjs/toolkit use krna chata hu  to es trha store krna hoga 


// import {createStore} from "redux"
// import {configureStore} from "@reduxjs/toolkit"
// import { counterReducer } from "../reducers/Counter.reducer"

// let store = createStore(counterReducer)

// configureStore({
//     reducer: counterReducer,
//     middlware:(getDefaultMiddleware) => getDefaultMiddleware(),
//     devTools:true
// })
// export default store;