import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function Register(){
    const navigate=useNavigate();

    const [input,setInput]=useState({
        name:"",
        email:"",
        password:"",
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem("users",JSON.stringify(input));
        navigate("/Login")
    }
    return(
        <>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Register</legend>

                    <div>
                        <label htmlFor="email">Name :</label><br />
                        <input type="text" id="name" placeholder="Enter your name"
                        name="name" value={input.name} onChange={(e)=>{setInput({...input,[e.target.name]:e.target.value})}}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label><br />
                        <input type="email" id="email" placeholder="Enter your email"
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
                    <button type="submit" className="submit_btn" onClick={()=>{}}>Submit</button>
                    <p>Already have Account? <Link to="/login"> <u>Login here</u> </Link> </p>
                    </div>
                    </fieldset>
                </form>
            </div>
        </>
    )
}