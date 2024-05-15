import React, { useContext } from 'react';
import { dummyContext } from '../Context/UserContext';

export default function Profile() {
  let { userData } = useContext(dummyContext);
  return (
    <>
      <div>profile component: User Details</div>
      <h1>Employee details:</h1>
      <h2>First name : {userData.fname}</h2>
      <h2>last name : {userData.lname}</h2>
      <h2>email address : {userData.email}</h2>
    </>
  );
}
