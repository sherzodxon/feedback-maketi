import { Link } from "react-router-dom"
import "./back-button.scss"
const BackButton =({to,children,className})=>{
    return(
        <Link to={to} className={className+" back-button"} children={children} />
    )
}
export default BackButton;