import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <h1>This is the home page</h1>
            <Footer />
        </div>
    )
}