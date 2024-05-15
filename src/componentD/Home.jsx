import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  let navigate = useNavigate();
  return (
    <div>
      Home component
      <h1>Place your Order</h1>
      <button onClick={() => navigate('/order-summary')}>Add To Cart</button>
    </div>
  );
}
