//* React code based Revision

//! Uncontrolled form: onSubmit event || functional based component
// import React, { useRef } from 'react';

// export default function App() {
//   let ref1 = useRef();
//   let ref2 = useRef();
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(ref1.current.value, ref2.current.value);
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type='text'
//           placeholder='enter you name'
//           id='username'
//           name='username'
//           ref={ref1}
//         />
//         <input
//           type='password'
//           placeholder='enter your password'
//           id='password'
//           name='password'
//           ref={ref2}
//         />

//         <button type='submit'>submit form</button>
//       </form>
//     </div>
//   );
// }

//! Uncontrolled form: onSubmit event || classBasedComponent
// import React, { Component, createRef } from 'react';

// export default class App extends Component {
//   constructor() {
//     super();

//     //! creating reference
//     this.ref1 = createRef();
//     this.ref2 = createRef();
//   }

//   //! always use arrow function
//   handleSubmit = (e) => {
//     console.log(this);
//     e.preventDefault();
//     let username = this.ref1.current.value;
//     let password = this.ref2.current.value;

//     console.log(username, password);
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type='text'
//             placeholder='enter you name'
//             id='username'
//             name='username'
//             ref={this.ref1}
//           />
//           <input
//             type='password'
//             placeholder='enter your password'
//             id='password'
//             name='password'
//             ref={this.ref2}
//           />

//           <button type='submit'>submit form</button>
//         </form>
//       </div>
//     );
//   }
// }

//! Controlled form: onChange event && onSubmit event || functional based component
//! Controlled form: onChange event && onSubmit event || classBasedComponent
// import React, { Component } from 'react';

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: '',
//       password: '',
//       gender: '',
//       DOB: '',
//       skills: [],
//     };
//   }

//   handleChange = (e) => {
//     this.setState({ ...this.state, [e.target.name]: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//   };

//   handleChangeSkills = (e) => {
//     console.log(e.target.value);
//     let { name, value } = e.target;

//     let temp = this.state.skills;
//     console.log('initially', temp);

//     let index = temp.indexOf(value);

//     temp.includes(value) ? temp.splice(index, 1) : temp.push(value);

//     this.setState({ ...this.state, [name]: temp });
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           {/* username  */}
//           <input
//             type='text'
//             id='username'
//             name='username'
//             value={this.state.username}
//             placeholder='enter username'
//             onChange={this.handleChange}
//           />

//           {/* password  */}
//           <input
//             type='password'
//             id='password'
//             name='password'
//             value={this.state.password}
//             placeholder='enter password'
//             onChange={this.handleChange}
//           />

//           {/* Gender  */}
//           <div onChange={this.handleChange}>
//             <input type='radio' name='gender' id='male' value='male' />
//             Male
//             <input type='radio' name='gender' id='female' value='female' />
//             Female
//           </div>

//           {/* date of birth  */}
//           <input type='date' name='DOB' id='DOB' onChange={this.handleChange} />

//           {/* skills  */}
//           <div onChange={this.handleChangeSkills}>
//             <input type='checkbox' name='skills' id='ReactJs' value='ReactJs' />
//             ReactJs
//             <input type='checkbox' name='skills' id='MongoDB' value='MongoDB' />
//             MongoDB
//             <input type='checkbox' name='skills' id='NodeJs' value='NodeJs' />
//             NodeJs
//             <input
//               type='checkbox'
//               name='skills'
//               id='CoreJava'
//               value='CoreJava'
//             />
//             CoreJava
//             <input type='checkbox' name='skills' id='Html5' value='Html5' />
//             Html5
//             <input type='checkbox' name='skills' id='CSS3' value='CSS3' />
//             CSS3
//           </div>
//           <button type='submit'>Submit</button>
//         </form>
//       </>
//     );
//   }
// }

//! Context Api : revision

// import React, { useState } from 'react';
// import { DummyContextProvider } from './Context/UserContext';
// import Profile from './componentA/Profile';
// import Login from './componentA/Login';

// export default function App() {
//   let [userData, setUserData] = useState({
//     fname: '',
//     lname: '',
//     email: '',
//     password: '',
//   });
//   return (
//     <div>
//       <h1>Context Api</h1>
//       <DummyContextProvider value={{ userData, setUserData }}>
//         <Login />
//         <Profile />
//       </DummyContextProvider>
//     </div>
//   );
// }

//! useReducer : revision
// import React, { useReducer } from 'react';
// import reducerFun from './reducers/CounterReducer';
// export default function App() {
//   //! defining useReducer
//   let [state, dispatch] = useReducer(reducerFun, { counter: 0 });

//   function handleClick1() {
//     dispatch({ type: 'INCREMENT' });
//   }
//   function handleClick2() {
//     dispatch({ type: 'DECREMENT' });
//   }

//   return (
//     <>
//       <div style={{ border: '2px solid black', textAlign: 'center' }}>
//         <h1>useReducer Hook</h1>
//         <button onClick={handleClick1}>Increment</button>
//         <br />
//         <br />
//         <button onClick={handleClick2}>Decrement</button>
//         <h2>{state.counter}</h2>
//       </div>
//     </>
//   );
// }

//! lifecycle stages for class based components
//* Mounting phase: constructor > static getDerivedStateFromProps() > render() > componentDidMount() [ works like a useEffect ]
//* Updating phase: static getDerivedStateFromProps() > shouldComponentUpdate() > render() > getSnapShotBeforeUpdate() > componentDidUpdate()
//* unmounting phase: componentWillUnMount(): refresh the vs code
// import React, { Component } from 'react';
// export default class App extends Component {
//   constructor() {
//     console.log('running constructor');
//     super();
//     this.state = {
//       fname: 'prashant',
//       lname: 'mishra',
//       display: true,
//     };
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps()');
//     console.log(props, state);
//     return null;
//   }

//   componentDidMount() {
//     console.log('componentDidMount()');
//   }

//   shouldComponentUpdate() {
//     console.log('shouldComponentUpdate()');
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProp, prevState) {
//     console.log('getSnapShotBeforeUpdate');
//     console.log(prevProp, prevState);
//     return prevState;
//   }

//   componentDidUpdate() {
//     console.log('componentDidUpdate()');
//   }

//   componentWillUnmount() {
//     alert('The component is going to be unmounted');
//   }

//   render() {
//     console.log('render(): ui');
//     return (
//       <div>
//         <h1>Class based components lifecycle</h1>
//         <h2>
//           {this.state.fname} : {this.state.lname}
//         </h2>
//         <br />
//         {/* //* updating the state */}
//         <button
//           onClick={() => {
//             this.setState({ fname: 'saurav', lname: 'mishra' });
//           }}
//         >
//           update ui
//         </button>
//       </div>
//     );
//   }
// }

//! componentDidMount() [ like use state ] : class based component
// import React, { Component } from 'react';
// import axios from 'axios';
// export default class App extends Component {
//   constructor() {
//     super();
//     // initial state
//     this.state = { data: [] };
//   }

//   componentDidMount() {
//     console.log('mounting');
//     axios.get(`https://fakestoreapi.com/products`).then(
//       (result) => {
//         this.setState({ data: [...result.data] });
//       },
//       (e) => console.log(e)
//     );
//   }
//   render() {
//     return (
//       <>
//         <h1>component Did Mount</h1>
//         <div>
//           {this.state.data.map((v) => {
//             return <li key={v.id}>{v.title}</li>;
//           })}
//         </div>
//       </>
//     );
//   }
// }

//! useState: function based component
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// export default function App() {
//   let [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`https://fakestoreapi.com/products`)
//       .then((d) => setData((prev) => [...prev, ...d.data]));
//   }, []);
//   return (
//     <div>
//       <>
//         <h1>component Did Mount</h1>
//         <div>
//           {data.map((v) => {
//             return <li key={v.id}>{v.title}</li>;
//           })}
//         </div>
//       </>
//     </div>
//   );
// }

//! HIGHER ORDER COMPONENT : class based component
// import React, { Component } from 'react';
// import ClickCounter from './componentB/ClickCounter';
// import HoverCounter from './componentB/HoverCounter';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>This is app</h1>
//         <hr />
//         <br />
//         {/* //* step: 1  */}
//         <ClickCounter name='clicking' />
//         <hr />
//         <br />
//         {/* //* step: 1  */}
//         <HoverCounter name='hovering' />
//       </div>
//     );
//   }
// }

//! HIGHER ORDER COMPONENT: functional based components
// import React from 'react';
// import ClickCounter2 from './componentC/ClickCounter2';
// import HoverCounter2 from './componentC/HoverCounter2';

// const App = () => {
//   return (
//     <>
//       <ClickCounter2 passingProp='x times clicked' />
//       <HoverCounter2 passingProp='x times hovered' />
//     </>
//   );
// };

// export default App;

//? way1: React router dom
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './componentD/Home';
// import OrderSummary from './componentD/OrderSummary';
// import AboutUs from './componentD/AboutUs';
// import ProductList from './componentD/ProductList';
// import PageNotFound from './componentD/PageNotFound';
// import Featured from './componentD/Featured';
// import NewProducts from './componentD/NewProducts';
// import Users from './componentD/Users';
// import UserDetails from './componentD/UserDetails';
// import Admin from './componentD/Admin';
// export default function App() {
//   return (
//     <BrowserRouter>
//       {/* //! normal routing  */}
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<AboutUs />} />
//         <Route path='/order-summary' element={<OrderSummary />} />
//         {/* //! nested routing  */}
//         <Route path='products' element={<ProductList />}>
//           {/* //!default index route */}
//           <Route index element={<Featured />} />
//           {/* //! normal route  */}
//           <Route path='featured' element={<Featured />} />
//           <Route path='new' element={<NewProducts />} />
//         </Route>
//         {/* //! dynamic routing  */}
//         <Route path='users' element={<Users />}>
//           <Route path=':userId' element={<UserDetails />} />
//           <Route path='admin' element={<Admin />} />
//         </Route>
//         {/* //! No match : display error  */}
//         <Route path='*' element={<PageNotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

//? way 2: react-router-dom using useRoute hook
// import React from 'react';
// import { BrowserRouter, Routes } from 'react-router-dom';
// import RouteApp from './RouteApp';
// export default function App() {
//   return (
//     <BrowserRouter>
//       <RouteApp />
//     </BrowserRouter>
//   );
// }

//* CRUD OPERATION using json-server package
// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import CrudRoute from './componentE/CrudRoute';
// export default function App() {
//   return (
//     <BrowserRouter>
//       <CrudRoute />
//     </BrowserRouter>
//   );
// }

//? useMemo Hook
// import React, { useState, useMemo } from 'react';

// export default function App() {
//   console.log('Loading: App component');
//   let [count, setCount] = useState(0);
//   let [theme, setTheme] = useState(false);

//   const target = {
//     backgroundColor: theme ? 'Black' : 'white',
//     color: theme ? 'white' : 'black',
//   };

//   let slowFunction = (num) => {
//     // for (let i = 0; i < 100000000; i++) {
//     //   console.log('i');
//     // }
//     return num * 2;
//   };

//   let doubleNumber = useMemo(() => {
//     return slowFunction(count);
//   }, [count]);

//   return (
//     <>
//       <div style={target}>
//         <h1>
//           Count value is {count}: {doubleNumber}
//         </h1>
//         <input type='number' onChange={(e) => setCount(e.target.value)} />

//         <button onClick={() => setTheme((prev) => !prev)}>Change Theme</button>
//       </div>
//     </>
//   );
// }

//? useCallback Hook
// import React, { useCallback, useState } from 'react';
// import ButtonComp from './componentF/ButtonComp';
// import Title from './componentF/Title';
// import Counter from './componentF/Counter';
// export default function App() {
//   let [age, setAge] = useState(20);
//   let [salary, setSalary] = useState(30000);

//   const incrementSalary = useCallback(() => {
//     return setSalary(salary + 100);
//   }, [salary]);

//   const incrementAge = useCallback(() => {
//     return setAge((prev) => prev + 1);
//   }, [age]);

//   return (
//     <>
//       <h1>useCallBack Hook</h1>
//       <hr />
//       <div>
//         <Title />
//         <br />
//         <hr />
//         <br />
//         <div style={{ border: '2px solid black' }}>
//           <Counter text='MY_AGE' count={age} />
//           <ButtonComp handleClick={incrementAge}>
//             Increment age value
//           </ButtonComp>
//         </div>
//         <br />
//         <hr />
//         <br />
//         <div style={{ border: '2px solid black' }}>
//           <Counter text='MY_SALARY' count={salary} />
//           <ButtonComp handleClick={incrementSalary}>
//             Increment salary value
//           </ButtonComp>
//         </div>
//       </div>
//     </>
//   );
// }

//?  Portals in react || createPortal :creating Modal

// import React, { useState } from 'react';
// import Modal from './componentG/Modal';
// export default function App() {
//   let [modalStatus, setModalStatus] = useState(false);

//   let openModal = () => {
//     return setModalStatus((prev) => !prev);
//   };

//   return (
//     <>
//       <h1>Portals In React</h1>
//       <br />
//       <br />
//       <h2>Are You sure, you proceed to payment section??</h2>
//       <div style={{ display: 'flex', gap: '1rem' }}>
//         <button onClick={openModal}>yes</button>
//         <button onClick={() => alert('payment cancelled')}>No</button>
//       </div>
//       <div>
//         <Modal closeModal={openModal} status={modalStatus} />
//       </div>
//     </>
//   );
// }

//? custom hook: display counter using two different component
// import React from 'react';
// import CounterA from './componentH/CounterA';
// import CounterB from './componentH/CounterB';

// export default function App() {
//   return (
//     <>
//       <h1>Custom React Hook</h1>
//       <br />
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'space-evenly',
//           alignItems: 'center',
//         }}
//       >
//         <div style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
//           <CounterA />
//         </div>
//         <div style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
//           <CounterB />
//         </div>
//       </div>
//     </>
//   );
// }

//? custom hook: change page title using two different component
// import React from 'react';
// import CounterC from './componentI/CounterC';
// import CounterD from './componentI/CounterD';

// export default function App() {
//   return (
//     <div>
//       <CounterC />
//       <br />
//       <br />
//       <CounterD />
//     </div>
//   );
// }
