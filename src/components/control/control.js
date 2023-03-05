import FeatureRadio from "../feature-radio/feature-radio"
import Roadmap from "../roadmap/roadmap"
import { useEffect, useState} from "react"
import "./control.scss" 

import {
    useData
} from "../../contexts/data"
import { useNavigate } from "react-router-dom"


const Control = ({}) => {
const navigate =useNavigate();

    const [bool, setBool] = useState(true)
    const [fetch,setFetch]=useState(false)
    const {posts,setPosts} = useData();
    const [data ,setData]=useState(null)
    useEffect(()=>{
        setFetch(true)
       setData({...posts})
        localStorage.setItem("key" , JSON.stringify(data))
        console.log(JSON.parse(localStorage.getItem("key")));
     
    },[fetch])
    
    const buttonClick = () => {
        return setBool(!bool)
    }
    
    const onClickAll = () => {
        setPosts({
            ...data,
        })
    }

  
    const onClickBug = () => {
        const bugValue =   data.productRequests.filter((post) => {
            return post.category === "bug"
        })
        
        setPosts({
            ...posts,
            productRequests:[
                ...bugValue
            ]
        })
    }
   
    const onClickFeature = () => {
        const featValue = data.productRequests.filter((post) => {
            return post.category === "feature"
        })
       
        setPosts({
            ...posts,
            productRequests: [
                ...featValue
            ]
        })
    }
   
 
    const onClickUi = () => {
        const uiValue = data.productRequests.filter((post) => {
            return post.category === "ui"
        })
        setPosts({
            ...posts,
            productRequests: [
                ...uiValue
            ]
        })
    }
    
    const onClickUx = () => {
        const uxValue = data.productRequests.filter((post) => {
            return post.category === "ux"
        })
       
        setPosts({
            ...posts,
            productRequests: [
                ...uxValue
            ]
        })
    }

    
    const onClickEn = () => {
        const enValue = data.productRequests.filter((post) => {
            return post.category === "enhancement"   
        })
        
        setPosts({
            ...posts,
            productRequests: [
                ...enValue
            ]
        })
    }
    const logOutButton=()=>{
        const currentUser ={
            image: "./assets/user-images/image-zena.jpg",
            email:"",
            username: "velvetround",
            password:""
        }
            setPosts({
              ...posts,
              currentUser,
            })
           localStorage.removeItem("data")
          navigate('/')
    }
    return(
        <div className="control-wrapper">
            <div className="frontend-wrapper">
                <h2 className="frontend-title">Frontend Mentor</h2>
                <p className="frontend-text">Feedback Board</p>
                <button onClick={buttonClick} className={bool? 'frontend-button':'frontend-button--active'}></button>
            </div>
            <div className={bool?"hamburger-wrapper":"hamburger-wrapper--active"}>
            <div className="feature-wrapper">
              <div onClick={onClickAll} className="onclick-all">
                <FeatureRadio className={"feature-radio__input"} children="All"/>
              </div>
              <div onClick={onClickUi} className="onclick-ui">
                <FeatureRadio className={"feature-radio__input"}   children="UI"/>
                </div>
              <div onClick={onClickUx} className="onclick-ux">
                <FeatureRadio className={"feature-radio__input"}  children="UX"/>
              </div>
              <div onClick={onClickEn} className="onclick-en">
                <FeatureRadio className={"feature-radio__input"}  children="Enhancement"/>
               </div>
               <div onClick={onClickBug} className="onclick-bug">
                <FeatureRadio className={"feature-radio__input"}  children="Bug"/>
                </div>
              <div onClick={onClickFeature} className="onclick-feat">
                <FeatureRadio className={"feature-radio__input"}  children="Feature"/>
              </div>

            </div>   
            <Roadmap />
            <form className="control-out-form" ><button onClick={logOutButton} className="button control-out-button">Log Out</button></form>
            </div>
            <div onClick={buttonClick} className={bool?"black-wrapper":"black-wrapper--active"}></div>  
            
            
        </div>

    )
}
export default Control