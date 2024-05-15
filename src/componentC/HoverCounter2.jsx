import React from 'react';
import Counter2 from './Counter2';
const HoverCounter2 = (props) => {
  return (
    <div>
      <h1>{props.count ? props.count : 'Unable to count Hover'}</h1>
      <button onMouseOver={props.handleClick}>{props.passingProp}</button>
    </div>
  );
};

export default Counter2(HoverCounter2,10);
