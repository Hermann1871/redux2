import { Person } from "../Person"
import "../../components/Theme.css"
import { useSelector } from "react-redux"

export const Register = ()=>{
    const theme = useSelector((state: any) => state.theme.value)

    return<>
    <div className={`App ${theme} vp1`}>
        <Person></Person>
    </div>
    
    </>
}