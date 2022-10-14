import React,{useState} from "react";
import { Login } from "./Login";
import "./SignUp.css"

export function SignUp(){
    const [signUpData,setSignUpData]=useState({
        name:"",
        email:"",
        password:"",
    })

    const [isLogin,setIsLogin]=useState(false)

    const handleIsLogin=()=>{
        setIsLogin(true);
    }
    return(
        <>
        {
            !isLogin?
        <div className="formContainer">
            <h1>SIGNUP</h1>
            <div className="cont">
                <label htmlFor="">Name:</label><br />
                <input type="text" placeholder="Enter your Name"/>
            </div>
            <div className="cont">
                <label htmlFor="">Email:</label><br />
                <input type="text" placeholder="Enter your Email" />
            </div>
            <div className="cont">
                <label htmlFor="">Password:</label><br />
                <input type="text" placeholder="Enter your password"/>
            </div>
            <div>
            <button className="signUp_btn">SIGNUP</button><br />
            <button onClick={handleIsLogin} className="alreadyUser">ALREADY AN USER? LOGIN</button>
            </div>
        </div>:<Login/>
        }
        </>
    )
}