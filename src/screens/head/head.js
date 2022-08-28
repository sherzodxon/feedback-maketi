import { useState } from "react";
import Card from "../../components/card/card";
import Control from "../../components/control/control";
import Header from "../../components/header/header";
import Loader from "../../components/loader/loader";
import { useData } from "../../contexts/data";

const Head =({loader, setLoader})=>{
  const {posts ,setPosts} = useData();
  let [bodyClass, setBodyClass] = useState("first-body");
  let [button1 ,setButton1]=useState(true);
  let [button2 ,setButton2]=useState(false);
  let [button3 ,setButton3]=useState(false);
  let [button4 ,setButton4]=useState(false);
  let [isDisabled, setDisabled]=useState(true);
  let [nextDisabled , setDisable]=useState(false)
  if(posts.productRequests.length>12){
    var Click1=()=>{
      setBodyClass(
        bodyClass="first-body top-body"
      )
    setButton1(
        button1=true
    )
    setButton2(
        button2=false
    )
    setButton3(
        button3=false
    )
    setButton4(
      button4=false
    )
    button1?setDisabled(true):setDisabled(false);
    button1?setDisable(false):setDisable(true);
    
    }
    var Click2=()=>{
      setBodyClass(
        bodyClass="second-body top-body"
      )
      
        setButton1(
            button1=false
        )
        setButton2(
            button2=true
        )
        setButton3(
            button3=false
        )
        setButton4(
          button4=false
        )
        button2?setDisabled(false):setDisabled(true);
        button2?setDisable(false):setDisable(true)
        
    }   
    var Click3=()=>{
          setBodyClass(
            bodyClass="three-body top-body"
          )
            setButton1(
                button1=false
            )
            setButton2(
                button2=false
            )
            setButton3(
                button3=true
            )
            setButton4(
              button4=false
            )
            button3?setDisabled(false):setDisabled(true);
        button3?setDisable(false):setDisable(true)
            
    }   
    var Click4=()=>{
      setBodyClass(
        bodyClass="four-body top-body"
      )
        setButton1(
            button1=false
        )
        setButton2(
            button2=false
        )
        setButton3(
            button3=false
        )
        setButton4(
          button4=true
        )
        button4?setDisabled(false):setDisabled(true);
        button4?setDisable(true):setDisable(false)
        
  }   
    
    var previousButton=()=>{
      if(button1){
         setButton1(
          button1=false
         )
         setButton4(
          button4=true
         )
         setBodyClass(
          bodyClass="four-body left-body"
         )
         
      }
      else if(button4){
        setButton4(
          button4=false
         )
        setButton3(
          button3 = true
        )
        setBodyClass(
          bodyClass="three-body left-body"
         )
         setDisable(false)
      }
      else if(button3){
        setButton3(
          button3=false
         )
        setButton2(
          button2 = true
        )
        setBodyClass(
          bodyClass="second-body left-body"
         )
      }
      else if(button2){
        setButton2(
          button2=false
         )
        setButton1(
          button1 = true
        )
        setBodyClass(
          bodyClass="first-body left-body"
         )
         setDisabled(true)
      }
      
    }    
    var nextButton=()=>{
      if(button1){
        setButton1(
         button1=false
        )
        setButton2(
         button2=true
        )
        setBodyClass(
         bodyClass="second-body right-body"
        )
        setDisabled(false)
     }
     else if(button2){
       setButton2(
         button2=false
        )
       setButton3(
         button3 = true
       )
       setBodyClass(
         bodyClass="three-body right-body"
        )
     }
     else if(button3){
       setButton3(
         button3=false
        )
       setButton4(
         button4 = true
       )
       setBodyClass(
         bodyClass="four-body right-body"
        )
        setDisable(true)
     }
     else if(button4){
      setButton4(
        button4=false
       )
      setButton1(
        button1 = true
      )
      setBodyClass(
        bodyClass="first-body right-body"
       )
       
    }
     
    }
   
   }
   else if(posts.productRequests.length <= 12){
    Click1=()=>{
      setBodyClass(
        bodyClass="first-body top-body"
      )
    setButton1(
        button1=true
    )
    setButton2(
        button2=false
    )
    setButton3(
        button3=false
    )
    button1?setDisabled(true):setDisabled(false);
    button1?setDisable(false):setDisable(true)
    }
    Click2=()=>{
      setBodyClass(
        bodyClass="second-body top-body"
      )
        setButton1(
            button1=false
        )
        setButton2(
            button2=true
        )
        setButton3(
            button3=false
        )
        button2?setDisabled(false):setDisabled(true);
        button2?setDisable(false):setDisable(true)
    }   
    Click3=()=>{
          setBodyClass(
            bodyClass="three-body top-body"
          )
            setButton1(
                button1=false
            )
            setButton2(
                button2=false
            )
            setButton3(
                button3=true
            )
            button3?setDisabled(false):setDisabled(true);
            button3?setDisable(true):setDisable(false)
    }
  
    previousButton=()=>{
      if(button1){
         setButton1(
          button1=false
         )
         setButton3(
          button3=true
         )
         setBodyClass(
          bodyClass="three-body left-body"
         )
        
      }
      else if(button3){
        setButton3(
          button3=false
         )
        setButton2(
          button2 = true
        )
        setBodyClass(
          bodyClass="second-body left-body"
         )
         setDisable(false)
      }
      else if(button2){
        setButton2(
          button2=false
         )
        setButton1(
          button1 = true
        )
        setBodyClass(
          bodyClass="first-body left-body"
         )
         setDisabled(true)
      }
      
    }    
    nextButton=()=>{
      if(button1){
        setButton1(
         button1=false
        )
        setButton2(
         button2=true
        )
        setBodyClass(
         bodyClass="second-body right-body"
        )
        setDisabled(false)
     }
     else if(button2){
       setButton2(
         button2=false
        )
       setButton3(
         button3 = true
       )
       setBodyClass(
         bodyClass="three-body right-body"
        )
        setDisable(true)
     }
     else if(button3){
       setButton3(
         button3=false
        )
       setButton1(
         button1 = true
       )
       setBodyClass(
         bodyClass="first-body right-body"
        )
        
     }
     
    }
    
   }
   var pagClass ="";
   if(posts.productRequests.length>12){
    pagClass="pag-button"
   }
   else{
    pagClass="pag-four"
   }
    return(
    <> 
    
    <Loader className={loader?"loader-wrapper":"loader-close"}/>
    <div className={loader?"site-block":"site-open"}>
     <div className="container">
       <Control loader={loader} setLoader={setLoader} />
       <main> 
      <Header />
       <div className="card-wrapper" >
       {posts && posts.productRequests.map((post)=> <Card title={post.title} text={post.description} like={post.upvotes} feature
       ={post.category} key={post.id} comment={post.comments} id={post.id} className={bodyClass}/>)}
       </div> 
       <div className="pagination-bottom-wrapper">
       <button className={isDisabled?"disabled-active":"previous-button"} onClick={previousButton}></button>
       <span className={isDisabled?"previous-button-disabled":"previous-active"}></span>
       <div id="app">
          <div onClick={Click1} className={button1?"pag-button--active":"pag-button"}>1</div>
          <div onClick={Click2} className={button2?"pag-button--active":"pag-button"}>2</div>
          <div onClick={Click3} className={button3?"pag-button--active":"pag-button"}>3</div>
          <div onClick={Click4} className={button4?"pag-button--active":pagClass}>4</div>
         </div>
         <button className={nextDisabled?"disabled-active":"next-button"} onClick={nextButton}></button>
         <span className={nextDisabled?"next-button-disabled":"disabled-active"}></span>
       </div>
       </main>
     
     </div>
     </div>
     </>
    )
}
export default Head;