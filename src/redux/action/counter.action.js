import { DECREMENT, INCREMENT } from "../constants/counter.constant"

 export const incrementAction =()=>({
    type: INCREMENT,
    payload: 1
})
export const decrementAction =()=>({
    type: DECREMENT,
    payload: 1
})

