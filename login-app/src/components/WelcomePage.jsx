import React from "react";
import "./WelcomePage.css"
import { useNavigate } from "react-router-dom";

export function WelcomePage(){
    const navigate=useNavigate();
    const userName=JSON.parse(localStorage.getItem("users"));

    const handleLogout=()=>{
        localStorage.removeItem("LoggedIn")
        navigate("/login")
    }
    return(
        <>
            <div className="container">
                <h1>Home Page</h1>
                <p>Welcome {userName.email}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
            
        </>
    )
}