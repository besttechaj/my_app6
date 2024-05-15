import React, { useState } from 'react';

export default function useCounterHook(updaterValue) {
  let [count, setCount] = useState(0);

  const incrementCount = () => {
    return setCount((prev) => prev + updaterValue);
  };

  const decrementCount = () => {
    return setCount((prev) => prev - updaterValue);
  };

  return [count, incrementCount, decrementCount];
}
