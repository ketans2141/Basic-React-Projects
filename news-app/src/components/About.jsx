import React from "react";
import "./About.css"
// import { Link } from "react-router-dom";
export function About(){
    return(
        <>
        <div className="_container">
            <h1 className="headline">News is information about current events. This may be provided through many different media: word of mouth, printing, postal systems, broadcasting, electronic communication, or through the testimony of observers and witnesses to events. News is sometimes called "hard news" to differentiate it from soft media.</h1>

            <img src="https://tse4.mm.bing.net/th?id=OIP.O21Q6ByDjlqd7OoD0LWpCwHaE8&pid=Api&P=0" alt="" />

            <div>
            <p className="about_content">Common topics for news reports include war, government, politics, education, health, the environment, economy, business, fashion, entertainment, and sport, as well as quirky or unusual events. Government proclamations, concerning royal ceremonies, laws, taxes, public health, and criminals, have been dubbed news since ancient times. Technological and social developments, often driven by government communication and espionage networks, have increased the speed with which news can spread, as well as influenced its content. The genre of news as we know it today is closely associated with the newspaper.</p>
            </div>
        </div>   
        </>
    )
}