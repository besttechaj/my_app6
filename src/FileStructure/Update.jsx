import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Update() {
  let navigate = useNavigate();
  let { id } = useParams();

  let [register, setRegister] = useState({
    title: '',
    description: '',
    price: '',
    rating: {
      count: '',
      rate: '',
    },
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/Products/${id}`).then((r) => {
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

    axios.put(`http://localhost:3000/Products/${id}`, register).then(
      (d) => console.log(d),
      (e) => console.log(e)
    );

    setRegister({
      title: '',
      description: '',
    });

    navigate('/');
  };
  return (
    <div>
      <h1>Create a new User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter title'
          id='title'
          name='title'
          value={register.title}
          onChange={handleChange}
        />

        <input
          type='text'
          placeholder='Enter you'
          id='description'
          name='description'
          value={register.description}
          onChange={handleChange}
        />

        <button type='submit'>Update Details</button>
      </form>
    </div>
  );
}
