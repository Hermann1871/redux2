// npm i react-redux @reduxjs/toolkit

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store';
import { Counter } from './components/Counter'
import { Theme } from './components/Theme';
import './components/Theme.css'


function App() {
  const theme = useSelector((state: any) => state.theme.value)

  return (
    <div className={`App ${theme}`} >
      {/* <div className="App" > */}
      {/* Pippo */}
      {/* <Provider store={store}> */}
      {/* <div className={theme} style={{ height: '100vh' }} > */}
      {/* <div className={`${theme}`}  > */}
      {/* <div> */}
        <h1>Redux prova</h1>
        <Counter></Counter><br /><br />
        <Theme></Theme>
      {/* </div> */}
      {/* </Provider> */}
    </div>
  );
}

export default App;
