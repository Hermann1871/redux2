import { useReducer, useState } from "react"
import { useSelector } from "react-redux"

// Lez 2024-03-08

export const Test = () => {

    // type TypeAction = 'increment' | 'decrement' | 'reset' | 'set'
    // type Action = {
    //     type: 'increment' | 'decrement' | 'reset' | 'set',
    //     value?: number
    // }
    type Action = {
        type: 'increment' | 'decrement' | 'reset'
    } | {
        type: 'set',
        value: number
    }

    const theme = useSelector((state: any) => state.theme.value)

    // console.log("Test loaded")

    // const reducer = (state: { counter: number }, action: { type: TypeAction }) => {
    const reducer = (state: { counter: number }, action: Action) => {
        switch (action.type) {
            case 'reset': return { counter: 0 }
            // case 'set': return { counter: action.value || 0 }
            case 'set': return { counter: action.value }
            case 'increment': return { counter: state.counter + 1 }
            case 'decrement': return { counter: Math.max(0, state.counter - 1) }
            default: return { counter: state.counter }
        }

        // if (action.type === 'reset') {
        //     return { counter: 0 }
        // } else if (action.type === 'increment') {
        //     return { counter: state.counter + 1 }
        // } else if (action.type === 'decrement' && state.counter > 0) {
        //     return { counter: state.counter - 1 }
        // } else {
        //     return { counter: state.counter }
        // }
    }

    const [state, dispatch] = useReducer(reducer, { counter: 0 })

    const [numbers, setNumbers] = useState<number[]>([])
    const [obj, setObj] = useState({name: 'Carlo'})

    const insertRandom = () => {
        const random = Math.random()
        numbers.push(random)
        console.log(numbers)
        // setNumbers(numbers) // così non rirenderizza
        setNumbers([...numbers]) // così sì perchè nuovo riferimento
    }



    return (<>
        <div className={`App ${theme}`}>

            <h1>Test useReducer</h1>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button disabled={state.counter <= 0} onClick={() => dispatch({ type: 'decrement' })}>Decrementa</button>
            <button onClick={() => dispatch({ type: 'increment' })}>Incrementa</button>
            <button onClick={() => dispatch({ type: 'set', value: 10 })}>Set a 10</button>

            <p>{state.counter}</p>

            <button onClick={insertRandom}>Insert Random</button>
            <ol>
                {numbers.map((item) => <li>{item}</li>)}
            </ol>
        </div>

    </>)
}