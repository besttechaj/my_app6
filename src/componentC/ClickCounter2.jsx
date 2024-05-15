import React from 'react';
import Counter2 from './Counter2';

const ClickCounter2 = (props) => {
  return (
    <div>
      <h1>{props.count ? props.count : 'Unable to fetch count'}</h1>
      <button onClick={props.handleClick}>{props.passingProp}</button>
    </div>
  );
};

export default Counter2(ClickCounter2,5);
