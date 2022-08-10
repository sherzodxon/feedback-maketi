import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/back-button/back-button";
import Button from "../../components/button/button";
import Sort from "../../components/sort/sort";
import { useData } from "../../contexts/data";
import "./add-feedback.scss"
 
const InputOptions=[
  {
    text:"feature",
    value:"1"
  },
  {
    text:"ui",
    value:"2"
  },
  {
    text:"ux",
    value:"3"
  },
  {
    text:"enhancement",
    value:"4"
  },
  {
    text:"bug",
    value:"5"
  },
]

const AddFeedback = () => {

const [optionOpen, setOptionOpen]= useState(false);
const [ optionValue, setOptionValue ] = useState("1");
const {posts ,setPosts} =useData();
const navigate =useNavigate();

const titleRef = useRef();
const categoryRef=useRef();
const descriptionRef =useRef();
const handleFormClick=(evt)=>{
  evt.preventDefault();
  const titleValue =titleRef.current.value;
  const categoryValue =InputOptions.find(option => option.value === optionValue).text
  const descriptionValue =descriptionRef.current.value;
  
  if(titleValue && categoryValue && descriptionValue){
    const newProductRequests={
      
        id:Math.floor(Math.random()*100),
        title:titleValue,
        category:categoryValue,
        upvotes:"0",
        status:"live",
        description:descriptionValue,
        comments:[]
      }
    
    setPosts({
      ...posts,
      productRequests:[
        ...posts.productRequests,
       newProductRequests
      ]
    })
   navigate("/")

  }
}

const handleAddOptionClick = () => {
    setOptionOpen((optionOpen) => {
      return !optionOpen
    });

  }
const handleAddOptionChange = (evt) => {
    const optionValue = evt.target.value;

    setOptionOpen(false);
    setOptionValue(optionValue);

}
    
  return (
     <>
     <div className="add-feedback-wrapper">
      <BackButton className="add-back-button" to={"/"} children="Go Back"/>
      <div className="add-container">
       <h2 className="add-feedback-title">Create New Feedback</h2>
       <form className="add-form" id="add-form-id" onSubmit={handleFormClick}>
         <h4 className="input-title">Feedback Title</h4>
         <p className="input-text">Add a short, descriptive headline</p>
         <label className="add-label">
           <input type="text" ref={titleRef} className="add-feedback-input" />
         </label>
         <h4 className="input-title">Category</h4>
         <p className="input-text">Choose a category for your feedback</p>
         <label className="add-label">
         <button onClick={handleAddOptionClick} ref={categoryRef} className={optionOpen?"add-input-button--active" :"add-input-button"}>{InputOptions.find(option => option.value === optionValue).text}</button>
         <Sort
         className="add-option-list"
         open={optionOpen} 
         close={setOptionOpen}
         name="add-option"
         defaultValue={optionValue}
         options={InputOptions}
         onChange={handleAddOptionChange} />
         </label>
          <h4 className="input-title">Feedback Detail</h4>
          <p className="input-text">Include any specific comments on what should be improved, added, etc.</p>
          <label className="add-label">
            <textarea type="text" ref={descriptionRef} className="add-feedback-input add-feedback-input-detail"  />
          </label>
          <div className="add-button-wrapper">
          <Button  to="/"  className="dark-button add-cancel-button" children="Cancel"/>
          <Button className="add-button" children ="Add Feedback" />
          </div>
        </form>
      </div>
     </div>
     </> 
  );
}

export default AddFeedback;