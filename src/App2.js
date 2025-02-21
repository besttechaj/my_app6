//# REVISION

//! cbc
// import React from 'react';
// console.log(React.Component);
// class App2 extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>This is Ajay Mishra</h1>
//       </>
//     );
//   }
// }

// export default App2;

//*-----------------------------------------------------------------------------------
// //! cbc -> setting state property ( way - 01 )

// import React, { Component } from 'react';
// class App2 extends Component {
//   state = {
//     fName: 'Game',
//     lName: 'Changer',
//     message: 'hello world',
//   };

//   componentDidMount() {
//     console.log(this.state);
//   }
//   render() {
//     console.log(this.state.message);
//     return (
//       <>
//         <h1>{`My full name is ${this.state.fName} ${this.state.lName}`}</h1>
//       </>
//     );
//   }
// }

// export default App2;

//*-----------------------------------------------------------------------------------
//! fbc -> setting state property using constructor ( way - 02 )

// import React, { Component } from 'react';

// class App2 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       fName: 'Game',
//       lName: 'Changer',
//       message: 'hello world',
//     };
//   }

//   componentDidMount() {
//     console.log(this.state);
//   }

//   render() {
//     return (
//       <>
//         <h1>{`My full name is ${this.state.fName} ${this.state.lName}`}</h1>
//       </>
//     );
//   }
// }

// export default App2;

//*-----------------------------------------------------------------------------------
//! cbc --> based example

// import React, { Component } from 'react';

// class App2 extends Component {
//   constructor() {
//     super();

//     this.state = {
//       employee: [
//         {
//           name: 'rohit',
//           id: 123,
//           skills: ['js', 'react', 'node', 'express'],
//           designation: 'junior developer',
//         },
//         {
//           name: 'sagar',
//           id: 124,
//           skills: ['js', 'java'],
//           designation: 'manager',
//         },
//       ],
//     };
//   }

//   componentDidMount() {
//     console.log(this.state);
//   }
//   render() {
//     return (
//       <>
//         <h1>List of employees</h1>
//         <div>
//           {this.state.employee.map((ele, i) => {
//             return (
//               <React.Fragment key={i}>
//                 <h2>{ele.name}</h2>
//                 <h2>{ele.id}</h2>
//                 <h3>
//                   <ul>
//                     {ele.skills.map((v, i) => (
//                       <li key={i}>{v}</li>
//                     ))}
//                   </ul>
//                 </h3>
//                 <h2>{ele.designation}</h2>
//               </React.Fragment>
//             );
//           })}
//         </div>
//       </>
//     );
//   }
// }

// export default App2;

//*-----------------------------------------------------------------------------------
//! cbc --> based example
// import React, { Component } from 'react';
// import data from './data.json';
// class App2 extends Component {
//   constructor() {
//     super();

//     this.state = { data };
//   }

//   componentDidMount() {
//     console.log(this.state);
//   }
//   render() {
//     return (
//       <>
//         <h1>List of Cards</h1>
//         <div className='outer_box'>
//           {this.state.data.map((ele) => {
//             let { id, title, price, description, category, image, rating } =
//               ele;
//             return (
//               <div key={id} className='inner_card'>
//                 <h3>title: {title}</h3>
//                 <h3>price: {price}</h3>
//                 <h3>description: {description}</h3>
//                 <h3>category: {category}</h3>
//                 <img src={image} alt='dummy_img' />
//                 <h4>rating: {rating.rate}⭐</h4>
//                 <h4>reviews: {rating.count}</h4>
//               </div>
//             );
//           })}
//         </div>
//       </>
//     );
//   }
// }

// export default App2;
//*-----------------------------------------------------------------------------------
//! cbc --> based counter example

// import React, { Component } from 'react';

// class App2 extends Component {
//   constructor() {
//     super();
//     this.state = { count: 0 };

//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   decrementCount = () => {
//     this.setState({ count: this.state.count - 1 });
//   };
//   resetCount = () => {
//     this.setState({ count: 0 });
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.incrementCount}>Increment</button>
//         <button onClick={this.decrementCount}>Decrement</button>
//         <button onClick={this.resetCount}>Reset</button>
//       </div>
//     );
//   }
// }

// export default App2;

//*-----------------------------------------------------------------------------------
//! fbc
// import React from 'react';

// let App = () => {
//   return <div>App component</div>;
// };

// export default App;
//*-----------------------------------------------------------------------------------
//! useState hook using fbc
// import React, { useState } from 'react';

// export default function App2() {
//   let x = useState('sachin');
//   let y = useState(121);

//   console.log(x, y);
//   return (
//     <div>
//       <h1>Name: {x[0]}</h1>
//       <h1>id: {y[0]}</h1>
//     </div>
//   );
// }

//*-----------------------------------------------------------------------------------
// //! useState hook using fbc
// import React, { useEffect, useState } from 'react';

// export default function App2() {
//   let [user, setUser] = useState({
//     name: 'virat',
//     id: 140,
//   });

//   useEffect(() => {
//     setTimeout(() => {
//       setUser({ name: 'veneeta sharma', id: 300 });
//     }, 3000);
//   }, []);

//   console.log(user);
//   return (
//     <div>
//       <h1>Employee Name: {user.name}</h1>
//       <h1>Employee id: {user.id}</h1>
//     </div>
//   );
// }

//*-----------------------------------------------------------------------------------
//! useState hook using fbc -> example
// import React, { useState } from 'react';

// export default function App2() {
//   let [counter, setCounter] = useState(0);

//   const incrementCount = () => setCounter(counter + 1);

//   const decrementCount = () => setCounter(counter - 1);

//   const resetCount = () => setCounter(0);

//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={incrementCount}>Increment</button>
//       <button onClick={decrementCount}>Decrement</button>
//       <button onClick={resetCount}>Reset</button>
//     </div>
//   );
// }
//*-----------------------------------------------------------------------------------
//! faker package -> using fbc
// import React, { useState } from 'react';
// import { faker } from '@faker-js/faker';
// export default function App2() {
//   const [currentImage, setCurrentImage] = useState(faker.image.url());

//   const previousClick = () => setCurrentImage(faker.image.url());
//   const nextClick = () => setCurrentImage(faker.image.url());
//   return (
//     <>
//       <div className='outer' style={{ border: '2px solid red' }}>
//         <div className='inner'>
//           <button className='btn01' onClick={previousClick}>
//             previous
//           </button>
//           <img
//             src={currentImage}
//             alt='img'
//             style={{ height: '20rem', width: '20rem' }}
//           />
//           <button className='btn02' onClick={nextClick}>
//             next
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

//*-----------------------------------------------------------------------------------
//! fbc --> displaying multiple components on same page
// import React from 'react';
// import Navbar from './component/Navbar';
// import Banner from './component/Banner';
// import Footer from './component/Footer';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Banner />
//       <Footer />
//     </>
//   );
// }

// export default App;
//*-----------------------------------------------------------------------------------
//! fbc --> passing props
// import React from 'react';
// import Child from './Child';

// export default function App2() {
//   return (
//     <div>
//       <Child username='pankaj' id={100} skills={['java', 'sql']} />
//       <Child username='suman' id={200} skills={['react', 'mongodb']} />
//     </div>
//   );
// }

//*-----------------------------------------------------------------------------------
// //! fbc --> passing children prop
// import React from 'react';
// import Child from './Child';

// export default function App2() {
//   return (
//     <div>
//       <Child>
//         <h1>user: shashi</h1>
//         <h2>id: 144</h2>
//         <h1>skills: python, django</h1>
//       </Child>
//       <Child>
//         <h1>user: sachin</h1>
//         <h2>id: 155</h2>
//         <h1>skills: python, django</h1>
//       </Child>
//     </div>
//   );
// }
//*-----------------------------------------------------------------------------------
//! fbc -> passing prop which includes array, function
// import React, { useState } from 'react';
// import Child from './Child';
// import products from './data.json';
// const App2 = () => {
//   let [details, setDetails] = useState([
//     {
//       name: 'xyz',
//       id: 100,
//     },
//     {
//       name: 'pqz',
//       id: 200,
//     },
//   ]);
//   return (
//     <>
//       <Child info={details} data={products} pro={() => 100} />
//     </>
//   );
// };

// export default App2;

//*-----------------------------------------------------------------------------------
//! how to set the default props? check the result in child.js file
// import React from 'react';
// import Child from './Child';
// export default function App() {
//   return (
//     <div>
//       <Child username='sashi' id={120} company='xyz' />
//       <Child username='sashi' id={121} />
//       <Child company='xyz' />
//     </div>
//   );
// }
//*-----------------------------------------------------------------------------------
//! How to transfer the data from the child to parent components using parameterized callback function
// import React, { useState } from 'react';
// import Child from './Child';

// export default function App2() {
//   const [data, setData] = useState('unknown');
//   const getReply = (ele) => setData(ele);
//   return (
//     <div>
//       <h1>Parent component</h1>
//       <h2>fetching data from Child component: {data}</h2>
//       <hr />
//       <Child generateReply={getReply} />
//     </div>
//   );
// }

//*-----------------------------------------------------------------------------------
//! fbc -> props drilling
// import React from 'react';
// import Child from './component/Child';

// function App() {
//   return (
//     <div>
//       <Child username='XYZ' id={123} />
//     </div>
//   );
// }

// export default App;
//*-----------------------------------------------------------------------------------
//! fbc -> PropTypes:

// import React from 'react';
// import Child from './Child';

// const App = () => {
//   return (
//     <>
//       <Child username='ZZZZ' id={'str'} />
//       <Child username='YYY' id={200} />
//       <Child username={22} id={100} />
//     </>
//   );
// };

// export default App;
//*-----------------------------------------------------------------------------------
// //! fbc -> handling events
// import React from 'react';

// export default function App2() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target[0].value);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type='text' name='username' id='username' />
//       <button type='submit'>click to submit</button>
//     </form>
//   );
// }

//*-----------------------------------------------------------------------------------
//! fbc -> how to pass the argument in event handler function -> onClick event handler
// import React from 'react';

// export default function App() {
//   let handleSubmit = (username, password) => {
//     console.log(username);
//     console.log(password);
//   };
//   return (
//     <div>
//       {/* <button
//         onClick={handleSubmit(12, 21)} //! unable to pass the parameter because it will execute at the same time.
//       >
//         Submit
//       </button> */}
//       {/* //! below is the right way to pass the parameter for event handler function, first you have to define anonymous function and use one callback function to trigger the event whenever the button is clicked */}
//       <button
//         // onClick is expecting one function as an value
//         onClick={(e) => {
//           handleSubmit('xyz', 12345);
//         }}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }
//*-----------------------------------------------------------------------------------
//! conditional rendering

// import React, { useState } from 'react';
// import Child from './Child';

// const App = () => {
//   let [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <div>
//       <Child loggedIn={isLoggedIn} />
//     </div>
//   );
// };

// export default App;
//*-----------------------------------------------------------------------------------

//! uncontrolled form -> fbc (onSubmit, onClick)
// We use useRef to get the values of email and password fields.
//handleSubmit prevents default form submission and logs the values.
//This is uncontrolled because we don't store the values in state (useState is not used).

// import React from 'react';
// import { useRef } from 'react';

// export default function App2() {
//   let user_name = useRef();
//   let user_password = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`name: `, user_name.current.value);
//     console.log(`password: `, user_password.current.value);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Name</label>
//       <input type='text' ref={user_name} />
//       <input type='password' ref={user_password} />
//       <button type='submit'>Submit</button>
//     </form>
//   );
// }

//*-----------------------------------------------------------------------------------
//! uncontrolled: onClick event -> fbc

// destructuring useRef hook
// import React, { useRef } from 'react';

// export default function App() {
//   let divRef = useRef();
//   return (
//     <div
//       className='container'
//       ref={divRef}
//       onClick={(e) => {
//         divRef.current.style.background = 'red';
//         divRef.current.style.color = 'white';
//       }}
//     >
//       click Me
//     </div>
//   );
// }

//*-----------------------------------------------------------------------------------
//! fbc -> controlled form using ( onSubmit and onChange event handler )

// import React, { useState } from 'react';

// export default function App2() {
//   let [details, setDetails] = useState({
//     username: '',
//     password: '',
//     email: '',
//   });
//   const handleChange = (e) => {
//     setDetails({ ...details, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`final results are: `, details);
//     setDetails({ username: '', password: '', email: '' });
//   };
//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{ border: '2px solid red', padding: '2rem' }}
//     >
//       <label>Username</label>
//       <input
//         type='text'
//         onChange={handleChange}
//         value={details.username}
//         name='username'
//       />
//       <label>Password</label>
//       <input
//         type='password'
//         onChange={handleChange}
//         value={details.password}
//         name='password'
//       />
//       <label>Email</label>
//       <input
//         type='email'
//         onChange={handleChange}
//         value={details.email}
//         name='email'
//       />
//       <button type='submit'>Submit</button>
//     </form>
//   );
// }
//*-----------------------------------------------------------------------------------
//! fbc -> controlled form using ( onSubmit and onChange event handler )

// import React, { useState } from 'react';

// export default function App2() {
//   let [data, setData] = useState({
//     username: '',
//     password: '',
//     email: '',
//     DOB: '',
//     gender: '',
//     skills: [],
//   });

//   const Country = [
//     { code: 'IN', name: 'India' },
//     { code: 'US', name: 'United States' },
//     { code: 'UK', name: 'United Kingdom' },
//   ];

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleChangeSkills = (e) => {
//     const { value, checked } = e.target;

//     setData((prevData) => ({
//       ...prevData,
//       skills: checked
//         ? [...prevData.skills, value] // Add skill if checked
//         : prevData.skills.filter((skill) => skill !== value), // Remove skill if unchecked
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`final data is `, data);
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h1>Sign Up</h1>
//         <input
//           type='text'
//           name='username'
//           id='username'
//           placeholder='enter name'
//           onChange={handleChange}
//           value={data.username}
//         />
//         <br />
//         <input
//           type='password'
//           name='password'
//           id='password'
//           placeholder='enter password'
//           onChange={handleChange}
//           value={data.password}
//         />
//         <br />
//         <input
//           type='email'
//           name='email'
//           id='email'
//           onChange={handleChange}
//           placeholder='enter your email'
//           value={data.email}
//         />
//         <br />
//         <input
//           type='date'
//           name='DOB'
//           id='DOB'
//           onChange={handleChange}
//           value={data.DOB}
//         />
//         <br />
//         {/* we have to use one parent div whenever we are using multiple radio button  hence we can pass the onChange event inside the parent div */}
//         <div className='gender' onChange={handleChange}>
//           <input type='radio' name='gender' id='male' value={'male'} />
//           male <input type='radio' name='gender' id='female' value={'female'} />
//           Female
//           <input type='radio' name='gender' id='others' value={'others'} />
//           Others
//         </div>
//         <br />
//         {/* we have to use one parent div whenever we are using multiple checkbox button  hence we can pass the onChange event inside the parent div */}
//         <div className='skills' onChange={handleChangeSkills}>
//           <input type='checkbox' name='skills' id='react' value={'react'} />
//           React
//           <input type='checkbox' name='skills' id='java' value={'java'} />
//           Java
//           <input type='checkbox' name='skills' id='nodeJs' value={'nodeJs'} />
//           NodeJs
//           <input type='checkbox' name='skills' id='sdlc' value={'sdlc'} />
//           SDLC
//           <input type='checkbox' name='skills' id='sql' value={'sql'} />
//           Sql
//         </div>
//         <br />
//         <select name='country' id='country' onChange={handleChange}>
//           {Country.map((v, i) => {
//             let { code, name } = v;
//             return (
//               <option value={name} key={code}>
//                 {name}
//               </option>
//             );
//           })}
//         </select>
//         <button type='submit'>Submit</button>
//       </form>
//     </>
//   );
// }

//*-----------------------------------------------------------------------------------
//! functional based component: useEffect ( involves all 3 stages of component lifecycle) : Example based on fetching Api
// import React, { useState, useEffect } from 'react';

// export default function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Define an async function inside useEffect
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products'); // Fetch data
//         const jsonData = await response.json(); // Convert response to JSON
//         setData(jsonData); // Update state with fetched data
//         console.log(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData(); // Call the async function
//   }, []); // Empty dependency array -> Runs only on mount

//   return (
//     <div>
//       {data.map((v, i) => (
//         <h3 key={v.id}>{v.title}</h3> // Using v.id as a unique key
//       ))}
//     </div>
//   );
// }

//*-----------------------------------------------------------------------------------

//! useReducer() Hook:

import React, { useReducer } from 'react';

export default function App2() {
  let [state, dispatch] = useReducer(reducer_function, { count: 0 });
  return (
    <div>
      <button onClick={() => dispatch({ type: 'INCREMENT', data: 100 })}>
        increment the count
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        decrement the count
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset to 0</button>
      <br />
      <h1>{state.count}</h1>
    </div>
  );
}

let reducer_function = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.data };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
};

//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------

//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------
//*-----------------------------------------------------------------------------------
