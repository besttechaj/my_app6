import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Update() {
  let navigate = useNavigate();
  let { id } = useParams();

  let [register, setRegister] = useState({
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/Employee/${id}`).then((r) => {
      console.log(r.data);
      setRegister(r.data);
    });
  }, []);

  const handleChange = (e) => {
    setRegister((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    console.log(register);
    e.preventDefault();

    axios.put(`http://localhost:3000/Employee/${id}`, register).then(
      (d) => console.log(d),
      (e) => console.log(e)
    );

    setRegister({
      name: '',
      email: '',
      phone: '',
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
          id='name'
          name='name'
          value={register.name}
          onChange={handleChange}
        />

        <input
          type='text'
          placeholder='Enter your mobile'
          id='phone'
          name='phone'
          value={register.phone}
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Enter your email'
          id='email'
          name='email'
          value={register.email}
          onChange={handleChange}
        />
        <button type='submit'>Update Details</button>
      </form>
    </div>
  );
}
