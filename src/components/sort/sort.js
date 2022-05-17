import { useState } from "react"
import SortModal from "../sort-modal/sort-modal"

const Sort = ({open,close })=>{
 
    const SortCloseSubmit=()=>{
        close();
    }
 return(
  <div className={`sort-modal  ${open? " sort-modal-open" : ""}`} >
    <form onClick={SortCloseSubmit}  className="sort-form">
        <SortModal children="Most Upvotes"/>
         <hr className="sort-span-hr" />
         <SortModal children="Least Upvotes"/>
         <hr className="sort-span-hr" />
         <SortModal children="Most Comments"/>
         <hr className="sort-span-hr" />
         <SortModal children="Least Comments"/>
    </form>
  </div>
    )
}
export default Sort