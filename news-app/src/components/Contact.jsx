import React from "react"
import "./Contact.css"

export function Contact(){
    return(
        <>
        <div className="contactContainer">
            <div className="contactUsContainer">
            <div>
            <h1 className="contactHeading">Contact Us</h1>
            <p className="contactPara">Go to NBCNews.com for breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture.</p>
            </div>
            </div>
            <div className="contactContent">
                <h2>Contact Editor</h2>
                <p className="contactPara">To send an email to an editor at KTN News Digital,<a href="#">please go to this page.</a> </p>

                <h2>Receiving unwanted emails?</h2>
                <p className="contactPara">If you are receiving unwanted headlines from NBCNews.com, your e-mail client may be subscribed to one of our RSS feeds. Your software should offer you help in changing your settings or unsubscribing from the RSS feed. Information on how to do this with Outlook 2010 is available <a href="https://support.microsoft.com/en-us?ctt=3&correlationid=d2391e1a-4dc2-418b-b12b-532706364095&ui=en-us&rs=en-us&ad=us">here</a></p>

                <h2>Submit feedback or report an error</h2>
                <p className="contactPara">To report an error or comment on NBCNews.com, please email contact.ktnnews@nbcuni.com</p>

                <h2>Press inquiries</h2>
                <p className="contactPara">For press inquiries only, please call the 24/7 PR hotline at 212-413-6142 or e-mail KTNNewsMediaRelations@nbcuni.com</p>

                <h2>All legal notices should be sent by mail to the editor-in-chief</h2>
            </div>
        </div>
        </>
    )
}