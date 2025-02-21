//# REVISION

//! fbc -> props
// import React from 'react';

// export default function Child(props) {
//   return (
//     <div>
//       <h1>USERNAME- {props.username}</h1>
//       <h2>id- {props.id}</h2>
//       <ol>
//         {props.skills.map((v, i) => {
//           return <li key={i}>{v}</li>;
//         })}
//       </ol>
//     </div>
//   );
// }

/////////////////////////////////////////////////////
//! fbc --> {children} prop in React. The children prop allows you to access and display whatever content is wrapped inside <Child>...</Child>.
// import React from 'react';

// export default function Child({ children }) {
//   return <div>{children}</div>;
// }

/////////////////////////////////////////////////////

//! destructuring the props
// import React from 'react';

// export default function Child({ pro, info, data }) {
//   return (
//     <>
//       <hr />
//       <h1>value is: {pro()}</h1>
//       <br />
//       <ul>
//         {data.map((v, i) => {
//           return <li key={i}>{v.title}</li>;
//         })}
//       </ul>

//       <h2>
//         {info.map((v, i) => {
//           return <p key={i}>{v.name}</p>;
//         })}
//       </h2>
//     </>
//   );
// }
/////////////////////////////////////////////////////

//! fbc -> setting default props inside child component. defaultProps property has been deprecated.
// import React from 'react';

// export default function Child({
//   username = 'un-knownnnnn',
//   id = 699,
//   company = 'WTFF',
// }) {
//   return (
//     <div>
//       <h1>{username}</h1>
//       <h1>{id}</h1>
//       <h1>{company}</h1>
//       <hr />
//     </div>
//   );
// }
///////////////////////////////////////////////////
//! fbc -> sending data from child to parent component
// import React from 'react';

// export default function Child({ generateReply }) {
//   return (
//     <div>
//       <h1>child component</h1>
//       <button onClick={() => generateReply('clicked')}>click me</button>
//     </div>
//   );
// }
/////////////////////////////////////////////////////

//! props drilling

// import React from 'react';
// import Navbar from './Navbar';

// function Child({ username, id }) {
//   console.log(username, id);
//   return (
//     <>
//       <Navbar username={username} id={id} />
//     </>
//   );
// }

// export default Child;
//////////////////////////////////////////////////////

//! prop types:  your program is running because PropTypes only issue warnings in the console; they do not prevent the component from rendering. React will still render your component even if the props don't match the expected types, but you will see warnings in the browser console.

// import React from 'react';
// import PropTypes from 'prop-types';
// export default function Child({ username, id }) {
//   return (
//     <div>
//       <h1>name: {username}</h1>
//       <h1>user id: {id}</h1>
//       <hr />
//     </div>
//   );
// }

// Child.propTypes = {
//   username: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
// };

///////////////////////////////////////////////////////////

//! conditional rendering: if_else, ternary_operator, switch_case, and_operator
//! ternary_operator and and_operator are the two conditional rendering concept used inside jsx.
//! Component always return jsx.

// import React from 'react';

// const Child = ({ loggedIn }) => {
//   if (loggedIn)
//     return (
//       <ul>
//         <li>Home</li>
//         <li>Products</li>
//         <li>Blogs</li>
//         <li>Sachin</li>
//         <li>LogOut</li>
//       </ul>
//     );
//   else
//     return (
//       <ul>
//         <li>Home</li>
//         <li>Products</li>
//         <li>Blogs</li>
//         <li>SignUp</li>
//         <li>LogIn</li>
//       </ul>
//     );
// };

// export default Child;

//! Ternary operator

// import React, { useState } from 'react';
// import { IoIosNotifications } from 'react-icons/io';

// const Child = ({ loggedIn }) => {
//   let [notifications, setNotifications] = useState([
//     'message-1',
//     'message-2',
//     'message-3',
//   ]);

//   // nested component
//   let Guest = () => {
//     console.log(notifications.length);
//     return (
//       <>
//         <li>SignUp</li>
//         <li>LogIn</li>
//         <li>
//           <IoIosNotifications />
//           <sup>{notifications.length > 0 ? notifications.length : <></>}</sup>
//         </li>
//       </>
//     );
//   };

//   let User = () => {
//     return (
//       <>
//         <li>Sachin</li>
//         <li>LogOut</li>
//         <li>
//           <IoIosNotifications />
//           <sup>{notifications.length > 0 ? notifications.length : <></>}</sup>
//         </li>
//       </>
//     );
//   };

//   return (
//     <ul>
//       <li>Home</li>
//       <li>Products</li>
//       <li>Blogs</li>
//       {loggedIn === true ? <User /> : <Guest />}
//     </ul>
//   );
// };

// export default Child;

//! switch case

// import React from 'react';

// export default function Child({ loggedIn }) {
//   switch (loggedIn) {
//     case true:
//       return (
//         <ul>
//           <li>Home</li>
//           <li>Products</li>
//           <li>Blogs</li>
//           <li>Sachin</li>
//           <li>LogOut</li>
//         </ul>
//       );
//     case false:
//       return (
//         <ul>
//           <li>Home</li>
//           <li>Products</li>
//           <li>Blogs</li>
//           <li>SignUp</li>
//           <li>LogIn</li>
//         </ul>
//       );
//     default:
//       <></>;
//   }
// }
