import { useRef } from "react";
import MnfOption from "../mnf-option/mnf-option";

const Modal =({isOpen,close,products,setProducts})=>{
  const titleRef = useRef();
  const priceRef = useRef();
  const modelRef = useRef();
  const benefitsRef =useRef();

  const handleCloseClick = () => {
    close(false);
  }

  const handleModalClick = (evt) => {
    if (evt.target.matches(".modal.fade")) {
      close(false);
    }
  }

  const handleFormSubmit=(evt)=>{
  evt.preventDefault();

  const titleValue =titleRef.current.value;
  const priceValue =+priceRef.current.value;
  const modelValue =modelRef.current.value;
  const benefitsValue =benefitsRef.current.value.split(" ");
  
  if(titleValue && priceValue && modelValue && benefitsValue){
    const addProduct={
      id:Math.floor(Math.random()*100),
      title:titleValue,
      img: "https://picsum.photos/300/200",
      price:priceValue,
      model:modelValue,
      addedDate: new Date().toISOString(),
      benefits:benefitsValue
    }
    setProducts([
      ...products,
      addProduct
    ]); 

   evt.target.reset();
    close();
  }
  
  }

    return (
        <div 
        className={`modal fade ${isOpen? "show":""}`} 
        style ={{display:isOpen?"block":"none"}}
        id="edit-student-modal" 
        tabIndex={-1}
        aria-labelledby="editStudentModalLabel"
        aria-hidden="false"
        onClick={handleModalClick}>
          
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="editStudentModalLabel">Add product</h5>
          <button type="button" onClick={handleCloseClick} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form id="add-modal-form" onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="product-title"  className="form-label">Title</label>
              <input type="text" className="form-control" ref={titleRef} id="product-title" placeholder="Falon telefon" />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Narxi</label>
              <input type="number" className="form-control" ref={priceRef} id="price" placeholder="12400000" />
            </div>
            <div className="mb-3">
              <label htmlFor="product-manufacturer" className="form-label">Manufacturer</label>
              <select className="form-select" ref={modelRef} id="product-manufacturer">
                <option disabled selected defaultValue="Select a manufacturer">Select a manufacturer</option>
                {products.map((product)=> <MnfOption option={product.model}/>)}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="benefits" className="form-label">Benefits</label>
              <input type="text" ref={benefitsRef} className="form-control" id="benefits" placeholder="150" />

              <ul className="d-flex flex-wrap list-unstyled mt-3" id="split-list">
                <li className="me-1 mb-1"><button type="button"
                    className="btn btn-sm badge rounded-pill btn-danger">8gb</button></li>
               
              </ul>
            </div>
            <button type="submit" className="btn btn-primary d-block w-100 p-2">Add product</button>
          </form>
        </div>
      </div>
    </div>
  </div>
    )
}
export default Modal;