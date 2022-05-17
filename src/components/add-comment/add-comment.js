import "./add-comment.scss"
const AddComment =()=>{
    return(
        <div className="add-comment-body">
            <h3 className="add-comment-title">Add Comment</h3>
            <form  className="add-comment-form">
                <label htmlFor="add-comment">
                    <input type="text" placeholder="Type your comment here" className="add-comment-input" />
                </label>
            </form>
            <div className="add-comment-bottom">
            <p className="maximum-text">250 Characters left</p>
            <button className="button">Post Comment</button>
            </div>
        </div>
    )
}
export default AddComment