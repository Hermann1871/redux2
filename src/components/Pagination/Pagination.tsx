import { memo } from "react"
import { Info } from "../../hooks/useFetch"

export const Pagination = memo((props: {currentPage: number, info: Info}) => {
  console.log("Pagination")
    return <div className="join">
    <button className="join-item btn">«</button>
    {/* <button className="join-item btn">Page {props.currentPage}</button> */}
    <button className="join-item btn">»</button>
  </div>
})