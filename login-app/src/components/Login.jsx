import React,{useState} from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function Login(){
    const navigate=useNavigate();

    const [input,setInput]=useState({
        email:"",
        password:"",
    })

    const handleLogin=(e)=>{
        e.preventDefault();
        const alreadyLoggedUser=JSON.parse(localStorage.getItem("users"));

        if(input.email===alreadyLoggedUser.email && input.password===alreadyLoggedUser.password){
            localStorage.setItem("LoggedIn",true)
            navigate("/welcome")
        }
        else{
            alert("Please enter valid details")
        }
    }

    return(
        <>
        <div>
            <div className="formContainer">
                <form onSubmit={handleLogin}>
                    <fieldset>
                        <legend>Login</legend>
                    <div>
                        <label htmlFor="username">Username : </label><br />
                        <input type="text" id="username" placeholder="Enter username"
                        name="email" value={input.email} onChange={(e)=>{setInput({...input,[e.target.name]:e.target.value})}}
                        />
                    </div>
                    <div>
                        <label htmlFor="pswd">Password : </label><br />
                        <input type="password" id="pswd" placeholder="Enter password" 
                        name="password" value={input.password} onChange={(e)=>{setInput({...input,[e.target.name]:e.target.value})}}
                        />
                    </div>
                    <div className="btn_div">
                    <button type="submit" className="submit_btn" onClick={()=>{}}>Login</button>
                    <p>Don't have Accout ? <Link to="/register"> <u>Register here</u> </Link></p>
                    </div>
                    </fieldset>
                </form>
            </div>
            </div>
        </>
    )
}