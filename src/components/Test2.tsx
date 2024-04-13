import { useContext } from "react"
import { LangContext } from "../App"
import { lang } from "../lang"

export const Test2 = () => {

    const currentLang= useContext(LangContext)
    const textOfButton = lang[currentLang].text

    return (<>
        <h2>TEST 2</h2>
        <button>{textOfButton}</button>
        <p>Lingua corrente: {currentLang}</p>
    </>)
}