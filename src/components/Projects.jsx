import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Project from "./Project"

export default function Projects() {
    return (
        <div className="projects">
            <Navbar />
            <Project
                title="SnapTunes"
                vidID="pkYCsXRkFog"
                desc="description for snaptunes"
            />
            <Footer />
        </div>
    )
}