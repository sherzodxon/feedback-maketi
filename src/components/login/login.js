import {useState,useRef} from 'react'
import "./login.scss"

const Login=(display,formLoginSubmit,formsignSubmit,emailLoginRef,passwordLoginRef,emailSignRef,passwordSignRef,nameSignRef )=>{
    
    const [first, setfirst] = useState(true);
    const rightclassName="bounceRight"
    const leftclassName="bounceLeft"

    const changeclassName=()=>{
        setfirst(!first)
    }
    return(
        <div className="user-wrapper">
        <section className={display?"user":"user-close"}>
        <div className="user_options-container">
            <div className="user_options-text">
                <div className="user_options-unregistered">
                    <h2 className="user_unregistered-title">Don't have an account?</h2>
                    <p className="user_unregistered-text">if you do not have an account on our site, you can sign up.</p>
                    <button onClick={changeclassName}  className="user_unregistered-signup" id="signup-button">Sign up</button>
                </div>

                <div className="user_options-registered">
                    <h2 className="user_registered-title">Have an account?</h2>
                    <p className="user_registered-text">if you have an account on our site, you can log in with a personal
                        password</p>
                    <button className="user_registered-login" 
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
                            <input type="submit" value="Log In" className="forms_buttons-action"></input>
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
                            <input type="submit" value="Sign up" className="forms_buttons-action"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </section>
    
    </div>
    )
}
export default Login;