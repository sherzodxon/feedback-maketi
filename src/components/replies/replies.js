import "./replies.scss"
const Replies =(img,userName,userEmail,userReply,userText)=>{
    return(
    <div className="comments-replies">
        <div className="comments-header">
            <div className="user-wrapper">
             <div className="user-image"></div>
             <div className="user-status">
                 <h4 className="user-name">{userName}</h4>
                 <p className="user-email-name">{userEmail}</p>
             </div>
            </div>
            <button className="comment-button">Reply</button>
        </div>
        <p className="comment-texts"><span className="user-reply-email">{userReply}</span>{userText}</p>
    </div>
    )
}

export default Replies