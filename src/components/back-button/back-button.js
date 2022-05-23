import { Link } from "react-router-dom"
import "./back-button.scss"
const BackButton =({to,children})=>{
    return(
        <Link to={to} className="back-button" children={children} />
    )
}
export default BackButton;