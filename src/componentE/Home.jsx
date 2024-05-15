import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
export default function Home() {
  let navigate = useNavigate();

  let [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    //* axios.get()
    axios.get(`http://localhost:3000/Employee`).then(
      (r) => {
        setEmployeeData([...r.data]);
      },
      (e) => console.log(e)
    );
  }, []);
  return (
    <>
      <br />
      <button onClick={() => navigate('create')} style={{ cursor: 'pointer' }}>
        Add data
      </button>
      <br />
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Employee Name</th>
            <th>phone No.</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((v) => {
            let { id, email, name, phone } = v;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>
                  <div>
                    <NavLink to={`/read/${id}`}>READ</NavLink>
                    <NavLink to={`/update/${id}`}>UPDATE</NavLink>
                    <NavLink
                      onClick={() => {
                        axios
                          .delete(`http://localhost:3000/Employee/${id}`)
                          .then(
                            (r) => {
                              console.log(r);
                              window.location.reload();
                            },
                            (e) => console.log(e)
                          );
                      }}
                    >
                      DELETE
                    </NavLink>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
