import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OrderSummary() {
  let navigate = useNavigate();
  return (
    <div>
      Order Summary component
      <h1>Order Placed Successfully!!</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
