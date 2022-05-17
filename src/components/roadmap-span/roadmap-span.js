import "./roadmap-span.scss"
const RoadmapSpan =({className="",children})=>{
    return(
        <span className={"roadmap-span "+className}>{children}</span>
    )
}
export default RoadmapSpan