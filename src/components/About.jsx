import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Education from "./Education"

export default function About() {
    return (
        <div className="about">
            <Navbar />
            <h1>About</h1>
            <div className="about--headshot">
                <img src={require("../images/headshot.jpeg")} alt="Headshot of Ethan, a 28 year-old Korean male with long hair wearing a blue collared shirt and grey suit jacket"/>
            </div>
            <p className="about--bio">
                From dancer and artist to aspiring computer scientist, my journey reflects a passion 
                for creativity and problem-solving in diverse fields. With an undergraduate background 
                in the arts, I transitioned into tech, earning a programming certificate and a 
                Master’s in Computer Science at Toronto Metropolitan University. I have taken 
                courses from the departments of computer science, digital media, and media production, 
                which have led me to learn a wide variety of languages and skills. I have worked on various
                projects in the fields of software application, web, and game development, as well as
                choreographed and edited short dance films. I have a passion for the arts and tech and hope
                to bring a unique lens to the world of software development. 
            </p>
            <h1>Education</h1>
            <Education 
                school="Toronto Metropolitan University (formerly Ryerson University)"
                degree="Master of Science: Computer Science"
                gpa="4.33"
                dates="Sept 2023 - Aug 2024"
            />
            <Education 
                school="The Chang School, Toronto Metropolitan University"
                degree="Certificate: Computer Coding"
                gpa="4.33"
                dates="May 2022 - Aug 2023"
                note="Professional Development Award achieved"
            />
            <Education 
                school="Toronto Metropolitan University"
                degree="Bachelor of Fine Arts: Performance Dance"
                gpa="3.89"
                dates="Sept 2016 - Apr 2020"
                note="Graduated with Distinction"
            />
            <Education 
                school="McMaster University"
                degree="Bachelor of Engineering: Engineering Physics and Society"
                gpa="4.00"
                dates="Sept 2014 - Dec 2015"
            />
            <Footer />
        </div>
    )
}