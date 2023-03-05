import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PostsContext } from "../../App";
import AddComment from "../../components/add-comment/add-comment";
import BackButton from "../../components/back-button/back-button";
import Button from "../../components/button/button";
import Card from "../../components/card/card";
import Comments from "../../components/comments/comments";
import Replies from "../../components/replies/replies";
import { useData } from "../../contexts/data";
import "./feedback.scss"

const Feedback = () => {
  const {posts, setPosts}= useData();
  const { id } = useParams();
  
   let post = posts.productRequests.find(post => post.id ===+id)
 
   const commentLength = post.comments ? post.comments.length : 0

  
const CommentString =()=>{
  if(commentLength==1 || commentLength==0 ) {
    return "Comment"
  }
  else{
    return "Comments"
  }
}

  return (
    <div className="feedback-container">
      <header className="feedback-header">
      <BackButton to={"/"}  children="Go Back"/>
      <Link className="button" to={`/edit-feedback/${id}`} children="Edit Feedback" />
      </header>
      <Card className="feedback-card" title={post.title} text={post.description} like={post.upvotes} feature
      ={post.category} key={post.id} comment={post.comments} id={post.id} />
      <div className="comments-body">
        <p className="comments-length">{commentLength+` ${CommentString()}`}</p>
       {post.comments? post.comments.map((comment)=> <Comments  className="comments-row" key={comment.id} text={comment.content} name={comment.user.username} userName={comment.user.email} />):""}
        {/* {replies && replies.map((reply)=> <Replies img={reply.user.image} userName={reply.user.name} userEmail={reply.user.username} userReply={reply.replyingTo} userText={reply.content} />)} */}
      </div>
      <AddComment id={id}/>
    </div>
  );
}

export default Feedback;