import React, { useState } from 'react';
import useTitleHook from '../Hooks/useTitleHook';
export default function CounterC() {
  let [count, setCount] = useState(0);

  const incrementCount = () => {
    return setCount((prev) => prev + 200);
  };

  const decrementCount = () => {
    return setCount((prev) => prev - 200);
  };

  useTitleHook(count);

  return (
    <>
      <h3>Counter component: C</h3>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <br />
      <br />
      <button onClick={decrementCount}>Decrement</button>
    </>
  );
}
