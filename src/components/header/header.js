import { useState } from "react";
import { useData } from "../../contexts/data";
import Button from "../button/button";
import Sort from "../sort/sort";
import "./header.scss"
const sortOptions = [
    {
      text: "Most upvotes",
      value: "1"
    },
    {
      text: "Least Upvotes",
      value: "2",
    },
    {
      text: "Most Comments",
      value: "3",
    },
    {
      text: "Least Comments",
      value: "4"
    }
  ]
  
const Header=()=>{
const [sortOpen, setSortOpen]= useState(false);
const {posts , setPosts} =useData();
const [ sortValue, setSortValue ] = useState("2");

const handleSortClick = () => {
    setSortOpen((sortOpen) => {
      return !sortOpen
    });
}
const handleOptionChange = (evt) => {
    const sortValue = evt.target.value;

    setSortOpen(false);
    setSortValue(sortValue);


  setPosts((posts) => {
    return {
      ...posts,
      productRequests: posts.productRequests.sort((a, b) => {
        switch (sortValue) {
          case "1":
            return b.upvotes - a.upvotes;
          case "2":
            return a.upvotes - b.upvotes;  
          case "3": 
            return (b.comments?.length||0) - (a.comments?.length||0)  
          case "4": 
            return (a.comments?.length || 0) - (b.comments?.length || 0)  
          default:
            return 0
        }
      })
    } 
  });

}
return(
     <header className="header">
        <h2 className="header-text">{(posts ? posts.productRequests.length : 0) + " Suggestions"}</h2>
        <div className="button-wrapper">
            <p className="button-wrapper-text">Sort by :</p>
            <button onClick={handleSortClick} className={`${sortOpen? "sort-button-close":"sort-button-active"}`}>{sortOptions.find(option => option.value === sortValue).text}</button>
        </div>
        <Button to="./add-feedback" children="+ Add Feedback" className="header-button"/>
       < Sort  
       className="sort__list header-sort"
       open={sortOpen} 
       close={setSortOpen}
       width="255px"
       name="sort"
       defaultValue={sortValue}
       options={sortOptions}
       onChange={handleOptionChange} />
      </header>
)

}

export default Header