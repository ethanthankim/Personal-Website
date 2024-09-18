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
            <Project
                title="Objects"
                vidID="L_bxK2eoR0I"
                desc="description for objects"
            />
            <Project
                title="AR Product Inspector"
                vidID="rEIonGe8i0Q"
                desc="description for AR prototype"
            />
            <Footer />
        </div>
    )
}