import React from 'react';
import useCounterHook from '../Hooks/useCounterHook';
export default function CounterB() {
  let value = 5;
  let [count, incrementCount, decrementCount] = useCounterHook(value);
  return (
    <>
      <h3>Counter component: B</h3>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment by {value}</button>
      <br />
      <br />
      <button onClick={decrementCount}>Decrement by {value}</button>
    </>
  );
}
