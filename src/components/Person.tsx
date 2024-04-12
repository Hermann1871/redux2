import { useDispatch, useSelector } from "react-redux"
import { State } from "../redux/store"
import { setName, setSurname } from "../redux/personSlice";


export const Person = () => {
    const person = useSelector((state: State) => state.person.value);
    const dispatch = useDispatch();
    
    return (<>
        <label >Name</label>
        <input onKeyUp={(event) => event.key === 'Enter' && dispatch(setName(event.currentTarget.value))} defaultValue={person.name}></input>
        <label >Surname</label>
        <input onKeyUp={(event) => event.key === 'Enter' && dispatch(setSurname(event.currentTarget.value))} defaultValue={person.surname}></input>
        </>)
        
}