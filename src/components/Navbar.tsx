import './Theme.css'

import { useSelector } from "react-redux"

export const Navbar = () => {
    const theme = useSelector((state: any) => state.theme.value)

    return (
        <div className={`${theme}`}>
            <h1>Navbar</h1>
        
        </div>

    )
}