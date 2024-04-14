import { Link, useLocation } from 'react-router-dom'
import { ShowPerson } from './ShowPerson'
import './Theme.css'
import './Navbar.css'

import { useDispatch, useSelector } from "react-redux"
import React, { useContext } from 'react'
import { toggle } from '../redux/themeSlice'
import { State } from '../redux/store'
import { AllLanguages, allLanguages } from '../lang'
import { LangContext } from '../App'

export const Navbar = () => {
    const theme = useSelector((state: any) => state.theme.value)
    const person = useSelector((state: State) => state.person.value);

    const { pathname } = useLocation();
    const dispatch = useDispatch()
    const currentLang = useContext(LangContext)

    const urls = ['/registrati', '/prova', '/about', '/test'];

    // variabili di stile
    const bold = { fontWeight: "bold" };
    const textColor = { color: theme === 'light' ? 'black' : 'white' }

    return (
        <div className={`${theme}`}>
            <nav>
                {/* <h1>Navbar</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/registrati">Registrati</Link></li>
                    <li><Link to="/prova">Prova</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul> */}

                <div className='navbar'>
                    <div className='left-section'>
                        <ul>
                            <li><Link className={`${theme}`} style={pathname === '/' ? bold : textColor} to="/">Home</Link><br /></li>
                            {urls.map((url, index) => {
                                return <React.Fragment key={index}>
                                    <li><Link className={`${theme}`} style={pathname === url ? bold : textColor} to={url}>{url.replace('/', '')}</Link></li>
                                </React.Fragment>
                            })}
                        </ul>
                    </div>
                    <div className='right-section'>

                        <select
                            name="languages"
                            // id="languages-select"
                            // onChange={(e: React.ChangeEvent<HTMLSelectElement>) => switchLang2(e.target.value as AllLanguages)}
                            style={{ fontWeight: 'bold' }}

                        >
                            {allLanguages.map(
                                (item, index) => (
                                    <option
                                        // id="languages-option"
                                        selected={currentLang === item}
                                        key={index}
                                        value={item}
                                        style={{ fontWeight: currentLang === item ? 'bold' : 'normal' }}
                                    >
                                        {item}
                                    </option>)
                            )}
                        </select>

                        <button onClick={() => dispatch(toggle())}>Cambia tema</button>
                        {/* <ShowPerson></ShowPerson> */}
                        <span> Ciao {person.name} {person.surname} </span>
                        {/* Col local storage non si aggiorna se cambiato */}
                        {/* <span> Ciao {localStorage.getItem('name')} {localStorage.getItem('surname')}</span> */}

                    </div>

                </div>

            </nav>
        </div>

    )
}