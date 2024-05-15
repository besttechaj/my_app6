import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Read() {
  let navigate = useNavigate();

  let [details, setDetails] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/Employee/${id}`).then((r) => {
      setDetails(r.data);
    });
  }, [id]);

  let { name, email, phone } = details;
  return (
    <>
      <h1>Particular user data based on its id:</h1>
      <h2>Name:{name} </h2>
      <h2>Email:{email}</h2>
      <h2>phone:{phone}</h2>
      <br />
      <br />
      <button onClick={() => navigate(`/update/${id}`)}>Update</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}
