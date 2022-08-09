import "./sort.scss"
const Sort = ({width="300px",options,name,defaultValue,open,onChange,className="" })=>{
 
 return(
    <ul  onChange={onChange} className={`${className} ${open ? "":"sort__list--opened"}`}>
    {
      options.map(option => (
        <li key={option.value} className={"sort__item"}>
          <label className="sort__option-label">
            <input defaultValue={option.value} defaultChecked={defaultValue === option.value} className="sort__option-radio visually-hidden" name={name} type="radio" />
            {option.text}
            <span className="sort__option-tick"></span>
          </label>
        </li>
      ))
    }
  </ul>
    )
}
export default Sort