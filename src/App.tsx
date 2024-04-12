// npm i react-redux @reduxjs/toolkit

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store';
import { Counter } from './components/Counter'
import { Theme } from './components/Theme';
import './components/Theme.css'
import { Person } from './components/Person';
import { ShowPerson } from './components/ShowPerson';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';


const router = createBrowserRouter(
  [
    {

      path: '/',
      element: <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        {/* <SimpleNavbar />
        <div style={{ margin: '10px', backgroundColor: 'red' }}>
          <Outlet></Outlet></div> */}
      </>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/prova',
          element: <Home />
        },
        {
          path: '/registrati',
          element: <Person />
        },
        

      ]
    },
    {
      path: '/about',
      element: <h1>About - senza parent</h1>
    }
  ],


)

function App() {
  // const theme = useSelector((state: any) => state.theme.value)

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
