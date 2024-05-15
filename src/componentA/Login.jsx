import React, { useContext, useState } from 'react';
import { dummyContext } from '../Context/UserContext';

export default function Login() {
  //! step3: fetch the data from context
  let { setUserData } = useContext(dummyContext);

  let [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  function handleChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(details);
    setUserData({
      fname: details.firstName,
      lname: details.lastName,
      email: details.email,
    });

    //! empty the fields again
    setDetails({
      firstName: '',
      lastName: '',
      email: '',
    });
  }
  return (
    <div>
      LOgin component
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={details.firstName}
          onChange={handleChange}
          placeholder='enter first name'
        />
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={details.lastName}
          onChange={handleChange}
          placeholder='enter last name'
        />
        <input
          type='email'
          id='email'
          name='email'
          value={details.email}
          onChange={handleChange}
          placeholder='enter email'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
