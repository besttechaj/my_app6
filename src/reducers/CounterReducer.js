//! reducer function: all logics
export default function reducerFun(state, action) {
  console.log(state);
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    case 'DECREMENT':
      return { counter: state.counter - 1 };

    default:
      return state;
  }
}
