import React from 'react';

const Counter = ({ text, count }) => {
  console.log(`counter component: ${text}`);
  return <h1>{count}</h1>;
};

export default React.memo(Counter);
