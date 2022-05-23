import Feature from "../feature/feature"
import NumButton from "../num-button/num-button"
import "./card.scss"
import { Link } from "react-router-dom"; 
import { useData } from "../../contexts/data";

const Card =({title,text,comment,feature,className="",like,id})=>{
    const length = comment ? comment.length :0;
    const {posts, setPosts}= useData(); 

    let post = posts.productRequests.find(post => post.id ===+id)
    const BtnClick=(evt)=>{
        const changedPost={
           ...post,
           isLiked:!post.isLiked,
           upvotes:post.isLiked ? post.upvotes-1:post.upvotes+1,
}
        const changedPostIndex = posts.productRequests.findIndex(product => product.id === +id);
        
        setPosts({
            ...posts,
            productRequests:[
                ...posts.productRequests.slice(0, changedPostIndex),
                changedPost,
                ...posts.productRequests.slice(changedPostIndex + 1)
            ]
        });
    }
    return(
        <div className={"card-body "+className}>
            <NumButton onClick={BtnClick}  className={post.isLiked? "num-btn-active":"num-button"} children={like} />
            <div className="card-text-body">
                <Link to={`/feedback/${id}`} className="card-title" children={title}/>
                <p className="card-text">{text}</p>
                <Feature className="card-feature">{feature}</Feature>
            </div>
            <p className="comment-length">{length}</p>
        </div>
    )
}
export default Card