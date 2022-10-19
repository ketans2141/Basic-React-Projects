import React,{useState} from "react";
import "./Footer.css"

export function Footer(){
    const [time,setTime]=useState();
    const currentTime=new Date().toLocaleTimeString();

    const updateTime=()=>{
        setTime(currentTime);
    }

    setInterval(updateTime,1000)

    return(
        <>
        <footer className="footer">
        <h2 className="currentTime">{currentTime}</h2>
        </footer>   
        </>
    )
}
