import React from 'react';
import useCounterHook from '../Hooks/useCounterHook';
export default function CounterA() {
  let value = 10;

  //! Initially custom hook will take one parameter and later destructuring useCounterHook
  let [count, incrementCount, decrementCount] = useCounterHook(value);

  return (
    <>
      <h3>Counter component: A</h3>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment by {value}</button>
      <br />
      <br />
      <button onClick={decrementCount}>Decrement by {value}</button>
    </>
  );
}
