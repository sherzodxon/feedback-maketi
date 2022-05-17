import { Link } from "react-router-dom"
import RoadmapSpan from "../roadmap-span/roadmap-span"
import "./roadmap.scss"
const Roadmap=()=>{
    return(
        <div className="roadmap-wrapper">
            <div className="roadmap-head">
              <h3 className="roadmap-title">Roadmap</h3>
              <Link to="/" className="roadmap-link">View</Link>
            </div> 
            <form className="roadmap-form">
              <label className="roadmap-label">
                  <input type="radio" name="roadmap" className="visually-hidden roadmap-input" />
                 <RoadmapSpan className="orange" children="Planned"/>
              </label>
              <label className="roadmap-label">
                  <input type="radio" name="roadmap" className="visually-hidden roadmap-input" />
                 <RoadmapSpan className="blue" children="In-Progress"/>
               </label>
               <label className="roadmap-label">
                  <input type="radio" name="roadmap" className="visually-hidden roadmap-input" />
                  <RoadmapSpan className="green" children="Live"/>
              </label>
            </form>
        </div>
    )
}
export default Roadmap