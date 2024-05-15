import React from 'react';

const Title = () => {
  console.log('title component');
  return (
    <div
      style={{
        color: 'red',
        backgroundColor: 'black',
        border: '2px solid grey',
      }}
    >
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta natus
        praesentium nihil fuga, unde accusamus tenetur fugiat. Tempore, corrupti
        quis?
      </p>
    </div>
  );
};

export default React.memo(Title);
