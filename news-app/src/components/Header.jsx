import React from "react"
import { Link } from "react-router-dom"
// import { NewsData } from "./NewsData"
import "./Header.css"
// import { FaMoon } from "react-icons/fa";

export function Header(){
    return(
        <>
        <div className="navDiv">
            <ul>
                <img src="http://www.ranklogos.com/wp-content/uploads/2012/04/ktn-news-logo-1-500x250.png" className="news_logo" alt="" />
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/news" className="link">Headlines</Link></li>
                <li><Link to="/about" className="link">About</Link></li>
                <li><Link to="/contact" className="link">Contact</Link></li>
                <button className="active dark_light_mode"  onClick={(e)=>{
                        document.body.classList.toggle("active");
                        document.querySelector(".dark_light_mode").classList.toggle("active")}}></button>
            </ul>
        </div>
        </>
    )
}