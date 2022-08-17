import { useState } from "react";
import Card from "../../components/card/card";
import Control from "../../components/control/control";
import Header from "../../components/header/header";
import Pagination from "../../components/pagination-buttons/pagination";
import { useData } from "../../contexts/data";

const Main = () => {
  const {posts, setPosts} = useData();
  let [bodyClass, setBodyClass] = useState("first-body");
  let [button1 ,setButton1]=useState(true);
  let [button2 ,setButton2]=useState(false);
  let [button3 ,setButton3]=useState(false);
  let [button4 ,setButton4]=useState(false);

  const Click1=()=>{
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
  }
  const Click2=()=>{
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
  }   
  const Click3=()=>{
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
          
  }   
  const Click4=()=>{
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
      
}   
  
  const previousButton=()=>{
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
    }
    
  }    
  const nextButton=()=>{
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
 
  return (
  
    <div className="container">
      <Control />
      <main>
     <Header />
      <div className="card-wrapper" >
      {posts && posts.productRequests.map((post)=> <Card title={post.title} text={post.description} like={post.upvotes} feature
      ={post.category} key={post.id} comment={post.comments} id={post.id} className={bodyClass}/>)}
      </div> 
      <div className="pagination-bottom-wrapper">
      <button className="previous-button" onClick={previousButton}></button>
      <div id="app">
         <div onClick={Click1} className={button1?"pag-button--active":"pag-button"}></div>
         <div onClick={Click2} className={button2?"pag-button--active":"pag-button"}></div>
         <div onClick={Click3} className={button3?"pag-button--active":"pag-button"}></div>
         <div onClick={Click4} className={button4?"pag-button--active":"pag-button"}></div>
        </div>
        <button className="next-button" onClick={nextButton}></button>
      </div>
      </main>
    
    </div>
    
  );
}

export default Main;