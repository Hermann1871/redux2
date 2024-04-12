import { useSelector } from "react-redux"
import { State } from "../redux/store";



export const ShowPerson = () => {
    const person = useSelector((state: State) => state.person.value);
    // lettura di una porzione (slice) 
    return <>
        <br />
        <span>Ciao {person.name} {person.surname}</span>
    </>
}