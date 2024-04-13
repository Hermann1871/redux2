import { Link, useLocation } from 'react-router-dom'
import { ShowPerson } from './ShowPerson'
import './Theme.css'
import './Navbar.css'

import { useSelector } from "react-redux"

export const Navbar = () => {
    const theme = useSelector((state: any) => state.theme.value)

    const urls = ['/registrati', '/prova', '/about', '/test'];
    const bold = { fontWeight: "bold" };
    const textColor = { color: theme === 'light' ? 'black' : 'white' }

    const { pathname } = useLocation();

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
                            {urls.map(url => {
                                return <>
                                    <li><Link className={`${theme}`} style={pathname === url ? bold : textColor} to={url}>{url.replace('/', '')}</Link></li>
                                </>
                            })}
                        </ul>
                    </div>
                    <div className='right-section'>
                        <ShowPerson></ShowPerson>
                    </div>

                </div>

            </nav>
        </div>

    )
}