import { useEffect, useState } from "react";
import Button from "../button/button";
import SortModal from "../sort-modal/sort-modal";
import Sort from "../sort/sort";
import "./header.scss"

const Header=()=>{
const [sortOpen, setSortOpen]= useState(false);
const [posts ,setPosts]=useState(null);
const sortOpenClick =()=>{
    setSortOpen(true)
}
useEffect(()=>{
    fetch('/data.json')
    .then(response=> response.json())
    .then(data=>setPosts(data))
   
  },[]);

return(
     <header className="header">
        <h2 className="header-text">{(posts ? posts.productRequests.length : 0) + " Suggestions"}</h2>
        <div className="button-wrapper">
            <p className="button-wrapper-text">Sort by :</p>
            <button onClick={sortOpenClick} className={`${sortOpen? "sort-button-close":"sort-button-active"}`}>Most Upvotes</button>
        </div>
        <Button to="./add-feedback" children="+ Add Feedback" className="header-button"/>
       < Sort className="sort--modal" open={sortOpen} close={setSortOpen} />
      </header>
)

}
export default Header;