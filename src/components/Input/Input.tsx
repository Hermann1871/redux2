import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { State } from "../../redux/store"
import { setName, setSurname } from "../../redux/personSlice"

export const Input = () => {

    const [word, setWord] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null)
    const ref2 = useRef<HTMLInputElement>(null)
    const ref3 = useRef<HTMLButtonElement>(null)

    const ref4 = useRef<HTMLInputElement>(null)
    const ref5 = useRef<HTMLInputElement>(null)
    const ref6 = useRef<HTMLButtonElement>(null)

    // console.log(ref)
    // console.log(ref.current)
    console.log(ref.current?.value)

    function changeInput() {
        setWord(ref.current?.value || "")
        ref2.current?.focus()
        ref3.current!.disabled = true
    }


    const person = useSelector((state: State) => state.person.value);
    const dispatch = useDispatch();

    function changeInput2() {
        if (ref4.current?.value === "") {
            ref4.current?.focus()
            return
        }
        if (ref5.current?.value === "") {
            ref5.current?.focus()
            return
        }
        dispatch(setName(ref4.current?.value))
        dispatch(setSurname(ref5.current!.value))
        // ref6.current!.disabled = true
        ref4.current!.value = ""
        ref5.current!.value = ""
    }

    return <div>
        <h1>Test useRef - Input.tsx</h1>
        <h2>{word}</h2>
        {/* <button onClick={()=>setWord(ref.current?.value || "")}>Submit</button> */}
        <button ref={ref3} onClick={changeInput}>Submit</button>
        <input ref={ref} placeholder="Write here"></input>
        <input ref={ref2} placeholder="Write here2"></input>
        {/* <input ref={ref} onChange={(event) => { setWord(event.target.value); console.log(event.target.value) }} placeholder="Write here"></input> */}

        <h4>Cambia nome</h4>
        <input ref={ref4} placeholder="Name"></input>
        <input ref={ref5} placeholder="Surname"></input>
        <button ref={ref6} onClick={changeInput2}>Submit</button>



    </div>

}