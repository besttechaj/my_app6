import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Read from './Read';
export default function CrudRoute() {
  let Route = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/create',
      element: <Create />,
    },
    {
      path: '/read/:id',
      element: <Read />,
    },
    {
      path: '/update/:id',
      element: <Update />,
    },
  ]);

  //* returning all Route
  return Route;
}
