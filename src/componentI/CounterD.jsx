import React, { useState } from 'react';
import useTitleHook from '../Hooks/useTitleHook';

export default function CounterD() {
  let [count, setCount] = useState(0);

  const incrementCount = () => {
    return setCount((prev) => prev + 10);
  };

  const decrementCount = () => {
    return setCount((prev) => prev - 10);
  };

  useTitleHook(count);

  return (
    <>
      <h3>Counter component: D</h3>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <br />
      <br />
      <button onClick={decrementCount}>Decrement</button>
    </>
  );
}
