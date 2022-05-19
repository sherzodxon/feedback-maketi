import { useMemo, useState } from "react";
import { Link } from "react-router-dom"
import { useData } from "../../contexts/data";
import RoadmapSpan from "../roadmap-span/roadmap-span"
import "./roadmap.scss"
const Roadmap=()=>{
  const { posts } = useData();

  const counts = useMemo(() => {
    return posts.productRequests.reduce((accumulator, product) => {
      switch (product.status) {
        case "suggestion":
          accumulator.suggestion++;
          return accumulator;
        case "planned":
          accumulator.planned++;
          return accumulator;
        case "in-progress":
          accumulator.inProgress++;
          return accumulator;
        default:
          accumulator.live++;
          return accumulator;
      }
    }, {
      suggestion: 0,
      planned: 0,
      inProgress: 0,
      live: 0,
    })
  }, [posts]);

    return(
        <div className="roadmap-wrapper">
            <div className="roadmap-head">
              <h3 className="roadmap-title">Roadmap</h3>
              <Link to="/" className="roadmap-link">View</Link>
            </div> 
            <form className="roadmap-form">
            <label className="roadmap-label">
                  <input type="radio" name="roadmap" className="visually-hidden roadmap-input" />
                 <RoadmapSpan className="red" children="Suggestion"/>
                 <p className="content-status">{counts.suggestion}</p>
              </label>
              <label className="roadmap-label">
                  <input type="radio" name="roadmap" className="visually-hidden roadmap-input" />
                 <RoadmapSpan className="orange" children="Planned"/>
                 <p className="content-status">{counts.planned}</p>
              </label>
              <label className="roadmap-label">
                  <input type="radio" name="roadmap" className="visually-hidden roadmap-input" />
                 <RoadmapSpan className="blue" children="In-Progress"/>
                 <p className="content-status">{counts.inProgress}</p>
               </label>
               <label className="roadmap-label">
                  <input type="radio" name="roadmap" className="visually-hidden roadmap-input" />
                  <RoadmapSpan className="green" children="Live"/>
                  <p className="content-status">{counts.live}</p>
              </label>
            </form>
        </div>
    )
}
export default Roadmap