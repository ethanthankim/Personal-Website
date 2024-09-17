import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="navbar">
            <div className="socials">
                <button className="social--button" id="fb">
                    <a href="https://www.facebook.com/ethan.kim.549" target="_blank" rel="noreferrer">
                        <img className="social--image" src={require("../images/Facebook.png")} alt="facebook logo"/>
                    </a>
                </button>
                <button className="social--button" id="ig">
                    <a href="https://www.instagram.com/ethanthankim/" target="_blank" rel="noreferrer">
                        <img className="social--image" src={require("../images/Instagram.png")} alt="instagram logo"/>
                    </a>
                </button>
                <button className="social--button" id="li">
                    <a href="https://www.linkedin.com/in/ethan-kim-4a55b2304/" target="_blank" rel="noreferrer" >
                        <img className="social--image" src={require("../images/linkedin.png")} alt="linkedin logo"/>
                    </a>
                </button>
                <button className="social--button" id="gh">
                    <a href="https://github.com/ethanthankim" target="_blank" rel="noreferrer">
                        <img className="social--image" src={require("../images/GitHub.png")} alt="github logo"/>
                    </a>
                </button>
            </div>
            <ul className="navbar--items">
                <Link to="/About" className="link">
                    <li>About</li>
                </Link>
                <Link to="/Projects" className="link">
                    <li>Projects</li>
                </Link>
                <Link to="/Videos" className="link">
                    <li>Videos</li>
                </Link>
                <Link to="/Contact" className="link">
                    <li>Contact</li>
                </Link>
            </ul>
        </footer>
    )
}