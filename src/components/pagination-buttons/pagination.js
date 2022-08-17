import { useState } from 'react'
import './pagination.scss'
const Pagination=()=>{
    let [button1 ,setButton1]=useState(true);
    let [button2 ,setButton2]=useState(false);
    let [button3 ,setButton3]=useState(false);

    const Click1=()=>{
    setButton1(
        button1=true
    )
    setButton2(
        button2=false
    )
    setButton3(
        button3=false
    )
    }

    const Click2=()=>{
        setButton1(
            button1=false
        )
        setButton2(
            button2=true
        )
        setButton3(
            button3=false
        )
        }   
        const Click3=()=>{
            setButton1(
                button1=false
            )
            setButton2(
                button2=false
            )
            setButton3(
                button3=true
            )
            }   
        
    return(
        <div id="app">
         <div onClick={Click1} className={button1?"pag-button--active":"pag-button"}></div>
         <div onClick={Click2} className={button2?"pag-button--active":"pag-button"}></div>
         <div onClick={Click3} className={button3?"pag-button--active":"pag-button"}></div>
        </div>
    )
}
export default Pagination