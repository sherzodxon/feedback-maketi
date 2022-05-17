import "./num-button.scss"
const NumButton =({className="", children})=>{
    return(
        <button className={"num-btn "+className }>{children}</button>
    )
}
export default NumButton