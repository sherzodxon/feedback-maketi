import "./feature.scss"
const Feature =({className, children})=>{
    return(
        <span className={"feature " + className}>{children}</span>
    )
}
export default Feature