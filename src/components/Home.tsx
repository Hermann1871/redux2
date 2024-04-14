import { useSelector } from "react-redux"
import { Counter } from "./Counter"
import { Person } from "./Person"
import { ShowPerson } from "./ShowPerson"
import { Theme } from "./Theme"
import { Test } from "./Test"
import { Test2 } from "./Test2"
import { Input } from "./Input/Input"

export const Home = () => {
    const theme = useSelector((state: any) => state.theme.value)


    return (

        <div className={`App ${theme} vp1`} >
            {/* <div className="App" > */}
            {/* Pippo */}
            {/* <Provider store={store}> */}
            {/* <div className={theme} style={{ height: '100vh' }} > */}
            {/* <div className={`${theme}`}  > */}
            {/* <div> */}


            <h1>Test Redux - Home.tsx</h1>
            <Counter></Counter>
            <Theme></Theme>
            <Person />
            <ShowPerson></ShowPerson>
            <Test></Test>
            <Test2></Test2>
            <Input></Input>
            <br/><br/><br/><br/>


            {/* </div> */}
            {/* </Provider> */}
        </div>

    )


}

