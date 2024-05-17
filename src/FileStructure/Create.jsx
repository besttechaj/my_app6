import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  let [data, setData] = useState({
    title: '',
    description: '',
    price: '',
    rating: {
      count: '',
      rate: '',
    },
  });

  let navigate = useNavigate();

  function handleChange(e) {
    let { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleNestedChange(e) {
    let { name, value } = e.target;
    console.log(name, value);

    //! WAY 1 : TO UPDATE NESTED STATE OBJECT
    // let newData = { ...data.rating, [name]: value };
    // let nextObj = { ...data, rating: newData };

    // console.log(nextObj);

    // setData(nextObj);

    //! WAY 2 : TO UPDATE NESTED STATE OBJECT
    setData({
      ...data,
      rating: {
        ...data.rating,
        [name]: value,
      },
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log('before submitting data: ', { ...data });

    axios.post(`http://localhost:3000/Products`, data).then(
      (d) => console.log(d),
      (e) => console.log(e)
    );

    navigate('/');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='title'
          name='title'
          onChange={handleChange}
          value={data.title}
          placeholder='enter title'
        />
        <input
          type='description'
          id='description'
          name='description'
          onChange={handleChange}
          value={data.description}
          placeholder='enter description'
        />
        <input
          type='price'
          id='price'
          name='price'
          onChange={handleChange}
          value={data.price}
          placeholder='enter price'
        />
        <input
          type='count'
          id='count'
          name='count'
          onChange={handleNestedChange}
          value={data.rating.count}
          placeholder='enter count'
        />
        <input
          type='rate'
          id='rate'
          name='rate'
          onChange={handleNestedChange}
          value={data.rating.rate}
          placeholder='enter rate'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

//! Rutik vaskar

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import './Create.css'

// const Create = () => {
//     let [product, setProduct] = useState([])
//     let [data, setData] = useState({
//         id:'',
//         title:'',
//         description:'',
//         price:'',
//         rating:{
//             rate:3.5
//         }
//     })

//     let navigate = useNavigate()
//     console.log(product.length)

//     useEffect(()=>{
//         axios.get('http://localhost:3000/products').then(
//             (d)=>{setProduct(d.data)},
//             (e)=>{console.log(e)}
//         )
//     },[])

//     let handleSubmit =(e)=>{
//         let proId =  (product.length + 1).toString()
//         data.id = proId
//         axios.post('http://localhost:3000/products',data).then(
//             (d)=>console.log(d),
//             (e)=>{console.log(e)}
//         )
//         navigate('/')
//     }
//     let handleChange =(e)=>{
//         let {value,name} = e.target;
//         setData({...data,[name]:value})
//     }

//   return (
//     <div className='formContainer'>
//         <h1>Add product</h1>
//       <form onSubmit={handleSubmit}>
//         {/* <div>
//             <label htmlFor="id">Enter Title</label>
//             <input type="number" name="id" id="id" onChange={handleChange} placeholder='Enter id' />
//         </div> */}
//         <div>
//             <label htmlFor="title">Enter Title : </label>
//             <input type="text" name="title" id="title" onChange={handleChange} placeholder='Enter title' />
//         </div>
//         <div>
//             <label htmlFor="description">Enter description : </label>
//             <input type="text" name="description" id="description" onChange={handleChange} placeholder='Enter description' />
//         </div>
//         <div>
//             <label htmlFor="price">Enter price : </label>
//             <input type="number" name="price" id="price" onChange={handleChange} placeholder='Enter price' />
//         </div>

//         <button type="submit">Submit</button>
//         <Link to={'/'}>back</Link>
//       </form>
//     </div>
//   )
// }

// export default Create
