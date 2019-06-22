import React, { useReducer } from 'react';
const COUNTER_ACTIONS = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
  RESET: 'RESET',
  UPDATE: 'UPDATE',
};
const initialState = {
  counter: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case COUNTER_ACTIONS.ADD:
      return {
        counter: state.counter + 1,
      };
    case COUNTER_ACTIONS.SUBTRACT:
      return {
        counter: state.counter - 1,
      };
    case COUNTER_ACTIONS.RESET:
      return {
        counter: initialState.counter,
      };
    case COUNTER_ACTIONS.UPDATE:
      return {
        counter: action.value || initialState.counter,
      };
    default:
      throw new Error();
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>{state.counter}</h3>
      <button onClick={() => dispatch({type: COUNTER_ACTIONS.ADD})}>+</button>
      <button onClick={() => dispatch({type: COUNTER_ACTIONS.SUBTRACT})}>-</button>
      <button onClick={() => dispatch({type: COUNTER_ACTIONS.RESET})}>Reset</button>
      <button onClick={() => dispatch({
        type: COUNTER_ACTIONS.UPDATE,
        value: 17,
      })}>Set to 17</button>
    </div>
  );
};
