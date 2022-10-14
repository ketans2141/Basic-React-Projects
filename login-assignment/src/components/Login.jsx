import React,{useState} from "react";
import {SignUp} from "./SignUp"
import "./Login.css"

export function Login(){
    const [loginData,setLoginData]=useState({
        username:"",
        password:"",
    })

    const [isSignUp, setSignUp]=useState(false)

    const handleSignUp=()=>{
        setSignUp(true)
    }
    return(
        <>
        {!isSignUp?
        <div className="formContainer">
            <h1>LOGIN</h1>
                        <div className="cont">
                            <label htmlFor="">Username:</label><br />
                            <input type="text" placeholder="Enter your Username"/>
                        </div>
                        <div className="cont">
                            <label htmlFor="">Password:</label><br />
                            <input type="password"  placeholder="Enter Password"/>
                        </div>
                        <div className="cont">
                            <button className="signUp_btn">LOGIN</button><br />
                            <button onClick={handleSignUp} className="alreadyUser">NOT AN USER ? SIGNUP </button>
                        </div>
            </div>:
            <SignUp/>}
        </>
    )
}