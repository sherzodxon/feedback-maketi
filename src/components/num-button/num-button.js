import "./num-button.scss"
const NumButton =({className="", children,onClick})=>{
    return(
        <button onClick={onClick} className={"num-btn "+className }>{children}</button>
    )
}
export default NumButton