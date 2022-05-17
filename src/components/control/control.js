import FeatureRadio from "../feature-radio/feature-radio"
import Roadmap from "../roadmap/roadmap"
import "./control.scss"

const Control=()=>{
    return(
        <div className="control-wrapper">
            <div className="frontend-wrapper">
                <h2 className="frontend-title">Frontend Mentor</h2>
                <p className="frontend-text">Feedback Board</p>
            </div>
            <div className="feature-wrapper">
               <FeatureRadio children="All"/>
               <FeatureRadio children="UI"/>
               <FeatureRadio children="UX"/>
               <FeatureRadio children="Enhancement"/>
               <FeatureRadio children="Bug"/>
               <FeatureRadio children="Feature"/>    
            </div>   
            <Roadmap />        
        </div>
       
    )
}
export default Control