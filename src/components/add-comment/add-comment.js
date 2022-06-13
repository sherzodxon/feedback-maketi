import { useRef } from "react";
import { useData } from "../../contexts/data"
import "./add-comment.scss"
const AddComment =({id})=>{
const {posts,setPosts}=useData();
const commentRef=useRef();

let post = posts.productRequests.find(post => post.id ===+id);
const postIndex =posts.productRequests.findIndex(post=>post.id===+id);


const formSubmit=(evt)=>{
    evt.preventDefault();
    const addForm=evt.target.matches(".add-comment-form")
    const commentValue=commentRef.current.value;
    const newComment={
        content:commentValue,
        id:Math.floor(Math.random()*100),
        user:posts.currentUser
    }
    
   const lastComment=post.comments?post.comments:0
     const newPost={
         id:post.id,
         title:post.title,
         description:post.description,
         isLiked:post.isLiked,
         status:post.status,
         upvotes:post.upvotes,
         category:post.category,
         comments:post.comments?[
             newComment,
             ...post.comments
         ]:
         [
             newComment
         ]

     }
    setPosts({
        ...posts,
        ...posts.productRequests.splice(postIndex,1,newPost)
    })

        evt.target.reset();
}
 
    return(
        <div className="add-comment-body">
            <h3 className="add-comment-title">Add Comment</h3>
            <form onSubmit={formSubmit} className="add-comment-form">
                <label htmlFor="add-comment">
                    <textarea 
                   ref={commentRef} type="text" placeholder="Type your comment here" className="add-comment-input" />
                </label>
          
            <div className="add-comment-bottom">
            <p className="maximum-text">250 Characters left</p>
            <button className="button">Post Comment</button>
            </div>
            </form>
        </div>
    )
}
export default AddComment