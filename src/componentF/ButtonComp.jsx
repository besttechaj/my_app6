import React from 'react';

const ButtonComp = ({ children, handleClick }) => {
  console.log(`button component: ${children}`);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default React.memo(ButtonComp);
