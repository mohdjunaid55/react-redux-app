const initialState = {
  counter: 0,
};
// yh state ko mange krta h 
export const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - action.payload,
    };
  }
  return state;
};
