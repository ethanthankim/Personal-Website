import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import {Link} from "react-router-dom"

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="home--intro">
                <h1>Hi, I'm Ethan Kim</h1>
                <h1>DEVELOPER</h1>
                <h2>based in Toronto, Ontario</h2>
                <p>
                    I am a developer & artist with a passion for front end, web, game and software development.
                </p>
                <Link to="/About" className="link">
                    <button>About me</button>
                </Link>
                <h3>Experienced in:</h3>
                <div className="home--languages">
                    <p>language logos</p>
                </div>
            </div>
            <div className="home--projects">
                <h3>Development Projects</h3>
                <p>Here are some of the websites/applications I have worked on recently</p>
                <p>screenshots of projects</p>
                <Link to="/Projects" className="link">
                    <button>View Projects</button>
                </Link>
            </div>
            <div className="home--dance">
                <h3>Dance Films</h3>
                <p>I am also a dancer, musician, and video editor! I have created many short dance films for various clients</p>
                <Link to="/Videos" className="link">
                    <button>View Films</button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}