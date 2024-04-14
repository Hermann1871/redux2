import { useContext } from "react"
import { LangContext } from "../App"
import { lang } from "../lang"

export const Test2 = () => {

    const currentLang = useContext(LangContext)
    const textOfButton = lang[currentLang.lang].text

    return (<>
        <h2>TEST 2 - Accesso lingua da altro componente</h2>
        <button>{textOfButton}</button>
        <p>Lingua corrente: {currentLang.lang}</p>
        <h3>Dictionary of current language</h3>
        {/* <div style={{ display: 'flex', justifyContent: 'center', border: '1px solid green' }}> */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ul style={{ textAlign: 'start' }}>
                {Object.entries(lang[currentLang.lang]).map(
                    ([k, e]) => { return <li>{k} - {e}</li> }
                )}
            </ul>
        </div>
    </>)
}

