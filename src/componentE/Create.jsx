import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  let navigate = useNavigate();

  let [register, setRegister] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
  });

  const handleChange = (e) => {
    setRegister((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3000/Employee`, {
        name: register.user_name,
        email: register.user_email,
        phone: register.user_phone,
      })
      .then(
        (d) => console.log(d),
        (e) => console.log(e)
      );

    setRegister({
      user_name: '',
      user_email: '',
      user_phone: '',
    });

    navigate('/');
  };
  return (
    <div>
      <h1>Create a new User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter your name'
          id='user_name'
          name='user_name'
          value={register.user_name}
          onChange={handleChange}
        />

        <input
          type='text'
          placeholder='Enter your mobile'
          id='user_phone'
          name='user_phone'
          value={register.user_phone}
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Enter your email'
          id='user_email'
          name='user_email'
          value={register.user_email}
          onChange={handleChange}
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}
