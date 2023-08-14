import React from "react"
import {useEffect} from 'react'
import './Css/Contact.css'
import Header from "./Components/Header";

function Contact() {
    useEffect(() => {
        document.title = 'Contact';
    }, []);
    return(
        <div className="mainbody">
            <Header />
            <div className="contactbody">
                <form className="form" action="mailto:odozidanielosy@gmail.com" method="get" enctype="text/plain">
                    <h1 style={{color: '#182f5d'}}>Contact Me</h1>
                    <input placeholder="Enter your Full Name" type="text" name="name" className="name" required/>
                    <input placeholder="Enter your number" type="tel" name="Phone-number" className="number" required/>
                    <input placeholder="Enter your email" type="email" name="email" className="email" required/>
                    <textarea className="textarea" placeholder="Type your message" required/>
                    <input type="submit" className="submitbtn"/>
                </form>
            </div>
        </div>
    )
}

export default Contact;