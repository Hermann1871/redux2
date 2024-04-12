import { useSearchParams } from "react-router-dom";
import { Character, useCharacters } from "../../hooks/useFetch";
import { Pagination } from "../Pagination/Pagination";
import { memo } from "react";


export const Characters = memo(() => {
    const [searchParams] = useSearchParams()
    const [characters, info] = useCharacters(Number(searchParams.get('page')));
    console.log("Characters", searchParams?.get('page'), info?.count, info?.pages)

    return (<>
        <Pagination currentPage={Number(searchParams.get('page')) || 1} info={info} />
        <li><ul>
            {characters.map(character => <li>{character.name}</li>)}
        </ul>
        </li>
    </>)
})