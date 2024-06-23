import React, { Component } from "react";
import { connect } from "react-redux";
import { decrementAction, incrementAction } from "../redux/action/counter.action";


class App extends Component {
  render() {
    return (
      <div>
        <p>counter: {this.props.counter}</p>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}

const stateMapToProps = (store) => {
  return {
    counter: store.counter
  };
};

const dispatchMapToProps = (dispatch) => {
  return {
    // increment: () => dispatch({ type: "INCREMENT", payload: 1 }),
    // decrement: () => dispatch({ type: "DECREMENT", payload: 1 }),
    
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction()),
  };
};

export default connect(stateMapToProps, dispatchMapToProps)(App);
