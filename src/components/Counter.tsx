import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/counterSlice"
import { State } from "../redux/store"

export const Counter = () => {
    console.log("Render Counter")
    const count = useSelector((state: State) => state.counter.value)
    const theme = useSelector((state: any) => state.theme.value)
    const dispatch = useDispatch()

    return <>
        <p>Counter</p>
        <span>Counter: {count}</span><br />
        <span>Theme: {theme}</span><br />
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
}