import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
export default function ProductList() {
  console.log(Outlet);
  return (
    <div>
      <h1>New ProductList Component</h1>
      <ul>
        <li>Electronics</li>
        <li>Clothes</li>
        <li>Cosmetics</li>
      </ul>
      <br />
      <NavLink to='featured'>Featured</NavLink>
      <NavLink to='new'>New</NavLink>
      <br />
      <hr />
      <Outlet />
    </div>
  );
}
