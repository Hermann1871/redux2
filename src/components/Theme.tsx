import { useDispatch, useSelector } from "react-redux"
import { toggle } from "../redux/themeSlice"
import './Theme.css'

export const Theme = () => {
    console.log("Render Theme")

    const theme = useSelector((state: any) => state.theme.value)
    const dispatch = useDispatch()

    return <>
        {/* <div className={theme}> */}
            <span>Current theme: {theme}</span> <br />
            <button onClick={() => dispatch(toggle())}>Cambia tema</button>
        {/* </div> */}
    </>
}

