import Feature from "../feature/feature"
import NumButton from "../num-button/num-button"
import "./card.scss"
import { Link } from "react-router-dom"; 

const Card =({title,text,comment,feature,className="",like,id})=>{
    const length = comment ? comment.length :0;

    return(
        <div className={"card-body "+className}>
            <NumButton className="card-button" children={like} />
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