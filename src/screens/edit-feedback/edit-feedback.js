import { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackButton from "../../components/back-button/back-button";
import Button from "../../components/button/button";
import Sort from "../../components/sort/sort";
import { useData } from "../../contexts/data";
import "./edit-feedback.scss"
const InputCategoryOptions=[
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
const InputStatusOptions=[
  {
    text: "suggestion",
    value:"1"
  },
  {
    text: "planned",
    value:"2"
  },
  {
    text: "in-progress",
    value:"3"
  },
  {
    text: "live",
    value:"4"
  },
  
]

const EditFeedback = () => {
  const { id } = useParams();

  const titleRef= useRef();
  const categoryRef =useRef();
  const statusRef=useRef();
  const descriptionRef =useRef();
  const navigate =useNavigate();

   const {posts ,setPosts} =useData();
   const post =posts.productRequests.find(post=> post.id ===+id);
   const [optionOpen ,setOptionOpen] =useState(false);
   const [statusOpen, setStatusOpen]=useState(false);
   const [optionValue , setOptionValue]=useState("1");
   const [statusValue,setStatusValue]=useState("2");

   const handleFormSubmit=(evt)=>{
     evt.preventDefault();
     const titleValue =titleRef.current.value;
     const categoryValue =InputCategoryOptions.find(option => option.value === optionValue).text;
     const statusValues = InputStatusOptions.find(option => option.value === statusValue).text;
     const descriptionValue =descriptionRef.current.value;

     const editingPost={
      id:post.id,
      title:titleValue,
      category:categoryValue,
      upvotes:post.upvotes,
      status:statusValues,
      description:descriptionValue,
      comments:post.comments
     }
       
     const editingPostIndex = posts.productRequests.findIndex(product => product.id === +id);
    setPosts({
      ...posts,
      ...posts.productRequests.splice(editingPostIndex,1,editingPost)
    });
    
   }
   
   

   const deletePosts=()=>{
    const editingPostIndex = posts.productRequests.findIndex(product => product.id === +id);

    setPosts({
      ...posts,
      ...posts.productRequests.splice(editingPostIndex,1)
    }) 
   }
   //navigate("/")


  const handleAddOptionClick = () => {
    setOptionOpen((optionOpen) => {
      return !optionOpen
    });

  }
  const handleStatusClick = () => {
    setStatusOpen((optionOpen) => {
      return !optionOpen
    });

  }
const handleAddOptionChange = (evt) => {
    const optionValue = evt.target.value;

    setOptionOpen(false);
    setOptionValue(optionValue);

}
const handleStatusChange =(evt)=>{
  const statusValue =evt.target.value; 

  setStatusOpen(false);
  setStatusValue(statusValue);

}
  return (
    <>
     <div className="edit-feedback-wrapper">
      <BackButton to={`/feedback/${id}`} children="Go Back"/>
      <div className="edit-container">
       <h2 className="feedback-title">{`Editing '${post.title}'`}</h2>
       <form className="edit-form" onSubmit={handleFormSubmit}>
         <h4 className="input-title">Feedback Title</h4>
         <p className="input-text">Add a short, descriptive headline</p>
         <label className="edit-label">
           <input type="text" ref={titleRef} defaultValue={post.title} className="edit-feedback-input" />
         </label>
         <h4 className="input-title">Category</h4>
         <p className="input-text">Choose a category for your feedback</p>
         <button onClick={handleAddOptionClick} defaultValue={post.category}  className={optionOpen?"add-input-button" :" add-input-button"}>{InputCategoryOptions.find(option => option.value === optionValue).text}</button>
         <Sort
         className="add-option-list"
         open={optionOpen} 
         close={setOptionOpen}
         width="456px"
         name="add-option"
         defaultValue={optionValue}
         options={InputCategoryOptions}
         onChange={handleAddOptionChange} />
          <h4 className="input-title">Update Status</h4>
          <p className="input-text">Change feedback state</p>
          <button onClick={handleStatusClick}  className={optionOpen?"add-input-button" :" add-input-button"}>{InputStatusOptions.find(option => option.value === statusValue).text}</button>
         <Sort
         className="add-option-list"
         open={statusOpen} 
         close={setOptionOpen}
         width="456px"
         name="add-option"
         defaultValue={statusValue}
         options={InputStatusOptions}
         onChange={handleStatusChange} />
          <h4 className="input-title">Feedback Detail</h4>
          <p className="input-text">Include any specific comments on what should be improved, added, etc.</p>
          <label className="edit-label">
            <textarea type="text" defaultValue={post.description} ref={descriptionRef} className="edit-feedback-input edit-feedback-input-detail"   />
          </label>
          <div className="editing-button-wrapper">
          <Button className="danger-button" to="/     " onClick={deletePosts} children="Delete"/>
          <div className="edit-button-wrapper">
          <Button to={`/feedback/${id}`}  className="dark-button" children="Cancel"/>
          <Button  to={`/feedback/${id}`} children ="Add Feedback" />
          </div>
          </div>
        </form>
      </div>
     </div>
    </>
  );
}

export default EditFeedback;