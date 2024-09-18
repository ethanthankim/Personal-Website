import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Contact() {
    return (
        <div className="contact">
            <Navbar />
            <div className="contact--content">
                <h1>Contact</h1>
                <p>
                    Thank you for your interest in my work! Please feel free to get in touch. I look forward to hearing from you.
                </p>
                <div className="contact--email">
                    <img src={require(`../images/mail.png`)} alt="mail icon"/>
                    <p>: </p>
                    <a href="mailto:ethan.kim1996@gmail.com">ethan.kim1996@gmail.com</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}