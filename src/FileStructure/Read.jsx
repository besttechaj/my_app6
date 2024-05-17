// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// export default function Read() {
//   //! way to tackle the error: solution1
//   // let [item, setItems] = useState({
//   //   title: '',
//   //   description: '',
//   //   price: '',
//   //   rating: {
//   //     count: '',
//   //     rate: '',
//   //   },
//   // });

//   let [item, setItems] = useState({});

//   let { id } = useParams();

//   let navigate = useNavigate();

//   useEffect(() => {
//     console.log('running useEffect');
//     axios.get(`http://localhost:3000/Products/${id}`).then(
//       (d) => {
//         return setItems(d.data);
//       },
//       (e) => console.log(e)
//     );
//   }, []);
//   return (
//     console.log('Rendering '),
//     console.log(item),
//     (
//       <>
//         <h1>Product Details</h1>
//         <h2>{item.id}</h2>
//         <h2>{item.title}</h2>
//         <h2>{item.description}</h2>
//         <h2>{item.price}</h2>
//         <h1>{item.rating.count}</h1>
//         <h1>{item.rating.rate}</h1>

//         <br />
//         <button onClick={() => navigate(-1)}>Go back</button>
//       </>
//     )
//   );
// }

//* Rutik vaskar
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// const Read = () => {
//   let [data, setData] = useState({});

//   let { id } = useParams();
//   console.log(id);

//   useEffect(() => {
//     axios.get(`http://localhost:3000/Products/${id}`).then(
//       (d) => {
//         setData(d.data);
//       },
//       (e) => {
//         console.log(e);
//       }
//     );
//   }, []);

//   let { title, description, price, rating } = data;
//   return (
//     <div className='ReadBox'>
//       <h2>Product Information</h2>
//       <h3>productId: {id} </h3>
//       <h3>productName: {title} </h3>
//       <h3>Description: {description} </h3>
//       <h3>price: {price} </h3>
//       <h3>rating: {rating.rate} </h3>
//       <Link to={'/'}>back</Link>
//     </div>
//   );
// };

// export default Read;

//! solution:2
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Read() {
  let [item, setItems] = useState([]);

  let { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    console.log('running useEffect');
    axios.get(`http://localhost:3000/Products/${id}`).then(
      (d) => {
        console.log(d.data);
        return setItems([{ ...d.data }]);
      },
      (e) => console.log(e)
    );
  }, [id]);
  return (
    console.log('Rendering '),
    console.log(item),
    (
      <>
        {item.map((v) => {
          let { id, title, description, price, rating } = v;
          let { count, rate } = rating;

          return (
            <React.Fragment key={id + 1}>
              <h1>Product Details</h1>
              <h2>{id}</h2>
              <h2>{title}</h2>
              <h2>{description}</h2>
              <h2>{price}</h2>
              <h1>{count}</h1>
              <h1>{rate}</h1>
            </React.Fragment>
          );
        })}

        <br />
        <button onClick={() => navigate(-1)}>Go back</button>
      </>
    )
  );
}
