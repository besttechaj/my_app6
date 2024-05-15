import React from 'react';
import Home from './componentD/Home';
import OrderSummary from './componentD/OrderSummary';
import AboutUs from './componentD/AboutUs';
import ProductList from './componentD/ProductList';
import PageNotFound from './componentD/PageNotFound';
import Featured from './componentD/Featured';
import NewProducts from './componentD/NewProducts';
import Users from './componentD/Users';
import UserDetails from './componentD/UserDetails';
import Admin from './componentD/Admin';
import { useRoutes } from 'react-router-dom';

export default function RouteApp() {
  let Route = useRoutes([
    //! normal routing
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <AboutUs />,
    },
    {
      path: '/order-summary',
      element: <OrderSummary />,
    },
    //! nested routing
    {
      path: '/products',
      element: <ProductList />,
      children: [
        //! index routing
        {
          path: 'featured',
          element: <Featured />,
          index: true,
        },
        {
          path: 'new',
          element: <NewProducts />,
        },
        {
          path: 'featured',
          element: <Featured />,
        },
      ],
    },
    //! nested and dynamic routing
    {
      path: '/users',
      element: <Users />,
      children: [
        {
          path: ':userId',
          element: <UserDetails />,
        },
        {
          path: 'admin',
          element: <Admin />,
        },
      ],
    },
    //! no match
    {
      path: '*',
      element: <PageNotFound />,
    },
  ]);

  return Route;
}
