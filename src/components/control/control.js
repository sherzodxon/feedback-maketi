import FeatureRadio from "../feature-radio/feature-radio"
import Roadmap from "../roadmap/roadmap"
import {useState} from "react"
import "./control.scss"


const Control=()=>{
    const [bool ,setBool] = useState(true)

    const buttonClick=()=>{
        return setBool(!bool)
    }
   const body = document.querySelector("body");
   body.className = bool?"hidden":"card-hidden"

    return(
        <div className="control-wrapper">
            <div className="frontend-wrapper">
                <h2 className="frontend-title">Frontend Mentor</h2>
                <p className="frontend-text">Feedback Board</p>
                <button onClick={buttonClick} className={bool? 'frontend-button':'frontend-button--active'}></button>
            </div>
            <div className={bool?"hamburger-wrapper":"hamburger-wrapper--active"}>
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
            <div onClick={buttonClick} className={bool?"black-wrapper":"black-wrapper--active"}></div>  
        </div>
       
    )
}
export default Control