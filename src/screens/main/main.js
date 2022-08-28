import { useEffect, useMemo, useRef, useState } from "react";
import Card from "../../components/card/card";
import Control from "../../components/control/control";
import Header from "../../components/header/header";
import Loader from "../../components/loader/loader";
import Login from "../../components/login/login";
import Pagination from "../../components/pagination-buttons/pagination";
import { useData } from "../../contexts/data";
import Head from "../head/head";

const Main = () => {
  const {posts, setPosts} = useData();
  let [useDate,setuseDate]=useState([]);
  const [display,setdisplay]=useState(true);
  const [loader,setloader]=useState(true);
  const [isPush, setPush]=useState(false)
  
  const nameSignRef=useRef();
  const emailSignRef=useRef();
  const passwordSignRef=useRef();
  const emailLoginRef=useRef();
  const passwordLoginRef=useRef();
  const [first, setfirst] = useState(true);
  const rightclassName="bounceRight"
  const leftclassName="bounceLeft"

  const changeclassName=()=>{
      setfirst(!first)
  }

 
 
 
const formsignSubmit=(evt)=>{
evt.preventDefault();

const nameSignValue=nameSignRef.current.value;
const emailSignValue=emailSignRef.current.value;
const passwordSignValue=passwordSignRef.current.value;
let header = new Headers({

'cache-control': "no-cache, private",
'date': "Thu, 16 Jun 2022 17:55:03 GMT",
'content-type': "application/json",
'x-ratelimit-limit': "60",
'x-ratelimit-remaining': "60",
'access-control-allow-origin': "*"

});
if(passwordSignValue.length>5){
fetch(`https://demo.treblle.com/api/v1/auth/register`, {
method: 'POST',
mode: 'cors',
body: JSON.stringify({
   name: nameSignValue,
   email: emailSignValue,
   password: passwordSignValue,
}),
headers: header,
}).then((response) => {
return response.json()
})
.then((data) => {
setloader(false);
setuseDate(
   {...data}
)
})
setdisplay(false);
evt.target.reset()
}


}

const formLoginSubmit=(evt)=>{
evt.preventDefault();

let headers = new Headers({
"content-type": "application/json",
"content-length": "58",
"host": "demo.treblle.com",
"user-agent": "PostmanRuntime/7.29.0",
"x-amzn-trace-id": "Root=1-62c46a16-0d91bb66468361450e879fef",
"x-forwarded-for": "202.78.37.207,3.84.75.77, 172.70.134.21",
"x-forwarded-port": "443",
"x-forwarded-proto": "https",
"accept-encoding": "gzip",
"authorization": "Bearer lsGPLl4k6Vc4J0VhnFaMBqetNtn1ofsB",
"cdn-loop": "cloudflare",
"cf-connecting-ip": "3.84.75.77",
"cf-ipcountry": "US",
"cf-ray": "72618eaf5a5c8f0e-IAD",
"cf-visitor": "{\"scheme\":\"https\"}",
"x-vapor-source-ip": "172.70 .134 .21"
})
const emailLoginValue=emailLoginRef.current.value;
const passwordLoginValue=passwordLoginRef.current.value;
if(passwordLoginValue.length>5){
fetch(`https://demo.treblle.com/api/v1/auth/login`, {
           method: 'POST',
           mode: 'cors',
           body: JSON.stringify({
               email:emailLoginValue,
               password: passwordLoginValue,
           }),
           headers: headers,
       }).then((response) => {
           return response.json()
       })
       .then((data) => {
           setloader(false);
           setuseDate(
               {...data}
           )
       })
       setdisplay(false);
       evt.target.reset()
}

}
const {
code,
status,
message,
user
} = useDate
const {
name,
email,
phone_number,
created,  
uuid
} = user?user:useDate

const currentUser = {
  image: './assets/user-images/image-zena.jpg', 
  name: name||'zena' ,
  username: email||'zena'
}
useEffect(()=>{
  if(!loader){
    setPush(true);
  setPosts({
    ...posts,
    currentUser,
  })
 }
},[loader]);  

  return (
    <> 
   <div className="user-wrapper">
        <section className={display?"user":"user-close"}>
        <div className="user_options-container">
            <div className="user_options-text">
                <div className="user_options-unregistered">
                    <h2 className="user_unregistered-title">Don't have an account?</h2>
                    <p className="user_unregistered-text">if you do not have an account on our site, you can sign up.</p>
                    <button onClick={changeclassName}  className="user_unregistered-signup button" id="signup-button">Sign up</button>
                </div>

                <div className="user_options-registered">
                    <h2 className="user_registered-title">Have an account?</h2>
                    <p className="user_registered-text">if you have an account on our site, you can log in with a personal
                        password</p>
                    <button className="user_registered-login button" 
                    onClick={changeclassName} 
                    id="login-button">Login</button>
                </div>
            </div>

            <div 
            className={`user_options-forms ${first?rightclassName:leftclassName}`} 
            id="user_options-forms">
                <div className="user_forms-login">
                    <h2 className="forms_title">Login</h2>
                    <form onSubmit={formLoginSubmit} className="forms_form" >
                        <fieldset className="forms_fieldset">
                            <div className="forms_field">
                                <input type="email" ref={emailLoginRef} id="login-email" placeholder="Email" className="forms_field-input" required autoFocus ></input>
                            </div>
                            <div className="forms_field">
                                <input type="password" ref={passwordLoginRef} id="login-password" placeholder="Password" className="forms_field-input" required ></input>
                            </div>
                        </fieldset>
                        <div className="forms_buttons">
                            <button type="button" className="forms_buttons-forgot">Forgot password?</button>
                            <input type="submit" value="Log In" className="forms_buttons-action button"></input>
                        </div>
                    </form>
                </div>
                <div className="user_forms-signup">
                    <h2 className="forms_title">Sign Up</h2>
                    <form className="forms_form" onSubmit={formsignSubmit} id="sign-up-form">
                        <fieldset className="forms_fieldset">
                            <div className="forms_field">
                                <input type="text" ref={nameSignRef} placeholder="Full Name" className="forms_field-input" required id="fullname"></input>
                            </div>
                            <div className="forms_field">
                                <input type="email" ref={emailSignRef}  placeholder="Email" className="forms_field-input" required id="email" />
                            </div>
                            <div className="forms_field">
                                <input type="password" ref={passwordSignRef}  placeholder="Password" className="forms_field-input" id="password" required ></input>
                            </div>
                        </fieldset>
                        <div className="forms_buttons">
                            <input type="submit" value="Sign up" className="forms_buttons-action forms_sign-up button"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </section>
    </div>
    <Head loader={loader} setloader={setloader} />
    </>
  
   
    
  );
}

export default Main;