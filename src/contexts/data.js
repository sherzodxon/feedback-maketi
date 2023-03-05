import { createContext, useContext, useEffect, useRef, useState } from "react";
import "../components/login/login.scss"
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [ posts, setPosts ] = useState(null);
  const [ isFetched, setFetched ] = useState(false);
  const [email,setEmail]=useState(JSON.parse(localStorage.getItem("data"))?JSON.parse(localStorage.getItem("data")).currentUser.email:"")
  const [display, setdisplay] = useState(true);
  const [password ,setPassword]=useState(JSON.parse(localStorage.getItem("data"))?JSON.parse(localStorage.getItem("data")).currentUser.password:"")
  const [loader, setloader] = useState(true);
  let [useDate, setuseDate] = useState(null)
  const [name,setName]=useState(JSON.parse(localStorage.getItem("data"))?JSON.parse(localStorage.getItem("data")).currentUser.username:"")
   
  const nameSignRef = useRef();
    const emailSignRef = useRef();
    const passwordSignRef = useRef();
    const emailLoginRef = useRef();
    const passwordLoginRef = useRef();
    const [first, setfirst] = useState(true);
    const rightclassName = "bounceRight"
    const leftclassName = "bounceLeft"

    const changeclassName = () => {
        setfirst(!first)
    }
  

  useEffect(() => {
    if (!isFetched) {
      setFetched(true);
     if (localStorage.getItem('data')) {
      setPosts(JSON.parse(localStorage.getItem("data")))
      setloader(false)
     
     }
     else{
      fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setPosts({
          ...data,
          productRequests: data.productRequests.map(product => ({
            ...product,
            isLiked: false,
          }))
        });
       setloader(false)
       
      });
     }
    }
   
  }, [isFetched]);
  const formLoginSubmit = (evt) => {
    evt.preventDefault();
    const emailLoginValue = emailLoginRef.current.value;
    const passwordLoginValue = passwordLoginRef.current.value;
    if (passwordLoginValue.length > 5) {
        setPassword(passwordLoginValue);
        setEmail(emailLoginValue)
    }
  
  }
  
  const formsignSubmit = (evt) => {
    evt.preventDefault();
    const nameSignValue = nameSignRef.current.value;
    const emailSignValue = emailSignRef.current.value;
    const passwordSignValue = passwordSignRef.current.value;
   
    if (passwordSignValue.length > 5) {
        setPassword(passwordSignValue);
        setEmail(emailSignValue);
        setName(nameSignValue)
    }
  
  }
  
  
  useEffect(()=>{
    if (password && posts) {
     //console.log(posts);
      const currentUser = {
             image: './assets/user-images/image-zena.jpg',
             username: name || "",
             password: password,
             email : email,
         }
        
     setPosts({
      ...posts,
      currentUser:{...currentUser}
     })
    //
      
    }
    
},[password])

  if(!password) {
    return(
      <div className="user-wrapper">
        <section className="user">
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
    );
   }
   
   if (posts) {
  //if (posts.currentUser.password) {
    localStorage.setItem("data" ,JSON.stringify(posts))
    const data =JSON.parse(localStorage.getItem("data"))
   //console.log(posts);
     return (
       <DataContext.Provider value={{posts, setPosts}}>
         {children}
       </DataContext.Provider>
     );
 // }
 
  }
}

export const useData = () => {
  return useContext(DataContext);
}

export default DataProvider;