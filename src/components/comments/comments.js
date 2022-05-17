import "./comments.scss"
const Comments =({className="", text,image,userName,name})=>{
    return(
     <div className={"comments " +className}>
         <div className="comments-header">
             <div className="user-wrapper">
              <img className="user-img" src={image} alt="img" />
              <div className="user-status">
                  <h4 className="user-name">{name}</h4>
                  <p className="user-email-name">{userName}</p>
              </div>
             </div>
             <button className="comment-button">Reply</button>
         </div>
         <p className="comment-texts">{text}</p>
     </div>
    
    )
}
export default Comments