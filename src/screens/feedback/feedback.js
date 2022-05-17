import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PostsContext } from "../../App";
import AddComment from "../../components/add-comment/add-comment";
import Button from "../../components/button/button";
import Card from "../../components/card/card";
import Comments from "../../components/comments/comments";
import Replies from "../../components/replies/replies";
import "./feedback.scss"

const Feedback = () => {
  const {posts}=useContext(PostsContext);
  const { id } = useParams();
  
   const post = posts.productRequests.find(post => post.id ==id)
   
   const commentLength = post.comments ? post.comments.length : 0
    const replies = post.comments? post.comments.map(reply=> reply.replies):[]
 
   const repliesLength = replies? replies.length :0
    const count = commentLength+repliesLength;
   console.log(count);
   
  return (
    <div className="feedback-container">
      <header className="feedback-header">
      <Link to={"/"} className="add-back-button" children="Go Back"/>
      <Button to="./edit-feedback" children="Edit Feedback" />
      </header>
      <Card className="feedback-card" title={post.title} text={post.decription} like={post.upvotes} feature
      ={post.category} key={post.id} comment={post.comments} id={post.id} />
      <div className="comments-body">
        <p className="comments-length">{count+" Comments"}</p>
       {post.comments? post.comments.map((comment)=> <Comments className="comments-row" key={comment.id} text={comment.content} image={comment.user.image} name={comment.user.name} userName={comment.user.username} />):""}
        {/* {replies && replies.map((reply)=> <Replies img={reply.user.image} userName={reply.user.name} userEmail={reply.user.username} userReply={reply.replyingTo} userText={reply.content} />)} */}
      </div>
      <AddComment/>
    </div>
  );
}

export default Feedback;