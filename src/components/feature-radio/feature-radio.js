import "./feature-radio.scss"
import Feature from "../feature/feature"

const FeatureRadio =({children})=>{
    return(
        <label className="feature-radio" >
            <input className="feature-radio__input visually-hidden" type="radio" name="radio" />
            <Feature className="feature-radio__text" children={children} />
        </label>
    )
}
    export default FeatureRadio