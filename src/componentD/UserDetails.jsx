import React from 'react';
import { useParams } from 'react-router-dom';
export default function UserDetails() {
  let x = useParams();
  console.log(x);
  return (
    <>
      <div>
        <hr />
        <h1 style={{ fontSize: '4rem', color: 'pink' }}>
          User Details : Component
        </h1>
        <h1>User details: {x.userId}</h1>
      </div>
    </>
  );
}
