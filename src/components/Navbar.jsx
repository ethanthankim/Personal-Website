import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/Home" className="link">
                <h1 className="navbar--title">Ethan Kim</h1>
            </Link>
            <ul className="navbar--items">
                <Link to="/About" className="link">
                    <li>About</li>
                </Link>
                <Link to="/Projects" className="link">
                    <li>Projects</li>
                </Link>
                <Link to="/Videos" className="link">
                    <li>Dance Films</li>
                </Link>
                <Link to="/Contact" className="link">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}