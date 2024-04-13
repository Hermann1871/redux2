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


            <h1>Redux prova</h1>
            <Counter></Counter><br /><br />
            <Theme></Theme><br /><br />
            <Person /><br /><br />
            <ShowPerson></ShowPerson><br /><br />
            <Test></Test>
            <Test2></Test2>
            <Input></Input>


            {/* </div> */}
            {/* </Provider> */}
        </div>

    )


}

