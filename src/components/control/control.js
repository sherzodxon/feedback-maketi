import FeatureRadio from "../feature-radio/feature-radio"
import Roadmap from "../roadmap/roadmap"
import {
    useState
} from "react"
import "./control.scss"
import {
    click
} from "@testing-library/user-event/dist/click"
import {
    useData
} from "../../contexts/data"


const Control = () => {
    const [bool, setBool] = useState(true)
    const {
        posts,
        setPosts
    } = useData();

    const buttonClick = () => {
        return setBool(!bool)
    }
    const body = document.querySelector("body");
    body.className = bool ? "hidden" : "card-hidden"

    const AllValue = posts.productRequests.filter((post) => {
        return posts.productRequests
    })
    const [all, setAll] = useState(AllValue);

    const onClickAll = () => {
        setPosts({
            productRequests: [
                ...all
            ]
        })
    }

    const bugValue = posts.productRequests.filter((post) => {
        return post.category === "bug"
    })
    const [bug, setBug] = useState(bugValue)

    const onClickBug = () => {
        setPosts({
            productRequests: [
                ...bug
            ]
        })
    }
    const FeatValue = posts.productRequests.filter((post) => {
        return post.category === "feature"
    })
    const [feature, setFeature] = useState(FeatValue)
    const onClickFeature = () => {

        setPosts({
            productRequests: [
                ...feature
            ]
        })
    }
    const UiValue = posts.productRequests.filter((post) => {
        return post.category === "ui"
    })
    const [ui, setUi] = useState(UiValue)
    const onClickUi = () => {

        setPosts({
            productRequests: [
                ...ui
            ]
        })
    }
    const UxValue = posts.productRequests.filter((post) => {
        return post.category === "ux"
    })
    const [ux, setUx] = useState(UxValue)
    const onClickUx = () => {

        setPosts({
            productRequests: [
                ...ux
            ]
        })
    }

    const EnValue = posts.productRequests.filter((post) => {
        return post.category === "enhancement"
    })
    const [en, setEn] = useState(EnValue)
    const onClickEn = () => {

        setPosts({
            productRequests: [
                ...en
            ]
        })
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
            </div>
            <div onClick={buttonClick} className={bool?"black-wrapper":"black-wrapper--active"}></div>  
        </div>

    )
}
export default Control