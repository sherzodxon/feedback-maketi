import { Link } from "react-router-dom";
import "./add-feedback.scss"
const AddFeedback = () => {

  return (
     <>
     <div className="add-feedback-wrapper">
      <Link to={"/"} className="add-back-button" children="Go Back"/>
      <div className="add-container">
       <h2 className="feedback-title">Create New Feedback</h2>
       <form className="add-form">
         <h4 className="input-title">Feedback Title</h4>
         <p className="input-text">Add a short, descriptive headline</p>
         <label className="add-label">
           <input type="text" className="add-feedback-input" />
         </label>
         <h4 className="input-title">Category</h4>
         <p className="input-text">Choose a category for your feedback</p>
          <button className="add-input-button">Feature</button>
          <h4 className="input-title">Feedback Detail</h4>
          <p className="input-text">Include any specific comments on what should be improved, added, etc.</p>
          <label className="add-label">
            <input type="text"  className="add-feedback-input add-feedback-input-detail"  />
          </label>
        </form>
      </div>
     </div>
     </> 
  );
}

export default AddFeedback;