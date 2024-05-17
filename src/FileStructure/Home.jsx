import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export default function Home() {
  let [state, setData] = useState([]);

  let navigate = useNavigate();

  //! Displaying the data on the home page
  useEffect(() => {
    axios.get(`http://localhost:3000/Products`).then((d) => {
      setData([...d.data]);
    });
  }, []);

  return (
    <>
      <h1>Displaying all the fetched results below:</h1>
      <br />
      <button onClick={() => navigate('/create')}>Add new data</button>
      <br />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>price</th>
            <th>rating : count</th>
            <th>rating : rate</th>
          </tr>
        </thead>
        <tbody>
          {state.map((v) => {
            let { id, title, description, price, rating } = v;
            //console.log(id, rating);
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>{rating.count}</td>
                <td>{rating.rate}</td>

                <td>
                  <Link to={`/read/${id}`}>Read</Link>
                  <Link to={`/update/${id}`}>Update</Link>
                  <Link
                    onClick={() => {
                      axios.delete(`http://localhost:3000/Products/${id}`).then(
                        (d) => console.log(d),
                        (e) => console.log(e)
                      );
                      window.location.reload();
                    }}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
