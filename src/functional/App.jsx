import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction } from "../redux/action/counter.action";

export default function App() {
  let counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementAction());
  };

const decrement =()=>{
  dispatch(decrementAction())
}

  return (
    <div>
      <p>Counter : {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
