import React, { useState } from 'react';

const Counter2 = (WrappedComponent, value) => {
  console.log(WrappedComponent);
  function NewCounter(props) {
    let [state, setState] = useState(0);

    function handleClickFn() {
      setState((prev) => prev + value);
    }
    return (
      <WrappedComponent
        count={state}
        handleClick={handleClickFn}
        passingProp={props.passingProp}
      />
    );
  }

  return NewCounter;
};

export default Counter2;
