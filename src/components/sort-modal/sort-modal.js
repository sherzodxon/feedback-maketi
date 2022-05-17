import "./sort-modal.scss"
import SortSpan from "../sort-span/sort-span"


const SortModal=({children})=>{
    return(
                <label className="sort-label">
                    <input type="radio" className="sort-input visually-hidden" name="sort" />
                    <SortSpan children={children} />
                </label>
    )
}
export default SortModal