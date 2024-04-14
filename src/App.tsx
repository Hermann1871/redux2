// npm i react-redux @reduxjs/toolkit

import React, { createContext, useState } from 'react';
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
import { Test } from './components/Test';
import { Register } from './components/routes/Register';
import { AllLanguages, allLanguages } from './lang';

// export const LangContext = createContext<AllLanguages>('it')

export const LangContext = createContext<{ lang: AllLanguages; setLang: React.Dispatch<React.SetStateAction<AllLanguages>> }>({ lang: 'it', setLang: () => {} });

export const setLanguage = (newLang: AllLanguages, setLang: React.Dispatch<React.SetStateAction<AllLanguages>>) => {
  setLang(newLang);
  localStorage.setItem('lang', newLang);
};

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
          element: <Register />
        },
        {
          path: '/test',
          element: <Test />
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

  const [lang, setLang] = useState<AllLanguages>('it')
  // const switchLang = () => lang ==='it' ? setLang('en') : setLang('it')
  // const switchLang = () => setLang(lang === 'it' ? 'en' : 'it' )
  // const switchLang = () => { NN FUNZ
  //   setLang(lang === 'it' ? 'en' : 'it')
  //   localStorage.setItem('lang', lang)
  // }





  const switchLang = () => {
    const newLang = lang === 'it' ? 'en' : 'it'
    setLang(newLang)
    localStorage.setItem('lang', newLang)
    // TODO ciclare tra tutte le lingue
  }
  const switchLang2 = (newLang: AllLanguages) => {
    setLang(newLang)
    localStorage.setItem('lang', newLang)
  }

  // const allLanguages: AllLanguages[] = ['it', 'en', 'es']
  // const allLanguages = Object.keys(lang) as AllLanguages[]



  return (
    <LangContext.Provider value={{lang, setLang}}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      <button onClick={switchLang}>Language switch it - en</button>
      <button disabled={lang === 'it'} onClick={() => switchLang2('it')}>Cambia lingua it</button>
      <button disabled={lang === 'en'} onClick={() => switchLang2('en')}>Cambia lingua en</button>
      <button disabled={lang === 'es'} onClick={() => switchLang2('es')}>Cambia lingua es</button>

      <p>Con button</p>
      {allLanguages.map((item, index) => <button key={index} disabled={lang === item} onClick={() => switchLang2(item)}>{item}</button>)}


      <p>Con select</p>
      <select
        name="languages"
        // id="languages-select"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => switchLang2(e.target.value as AllLanguages)}
        style={{ fontWeight: 'bold' }}

      >
        {allLanguages.map(
          (item, index) => (
            <option
              // id="languages-option"
              selected={lang === item}
              key={index}
              value={item}
              style={{ fontWeight: lang === item ? 'bold' : 'normal' }}
            >
              {item}
            </option>)
        )}
      </select>



    </LangContext.Provider>
  );
}

export default App;
