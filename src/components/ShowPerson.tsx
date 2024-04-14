import { useSelector } from "react-redux"
import { State } from "../redux/store";


export const ShowPerson = () => {
    const person = useSelector((state: State) => state.person.value);
    // lettura di una porzione (slice)
    
    return <><h2>Test Redux - ShowPerson.tsx</h2>
        <h3>Leggo dallo stato</h3>
        <span>Ciao {person.name} {person.surname}</span>

        <h3>Leggo dal local storage</h3>
        <span>{localStorage.getItem('name')} {localStorage.getItem('surname')}</span>
    </>
}