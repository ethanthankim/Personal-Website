import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Project from "./Project"

export default function Videos() {
    return (
        <div className="videos">
            <Navbar />
            <Project
                title="I Wish"
                vidID="iNlxQrmF5Lo"
                desc="description for I wish"
            />
            <Project
                title="Close"
                vidID="qtv5FGLWvB4"
                desc="description for Close"
            />
            <Project
                title="In"
                vidID="n8B65F7qI4I"
                desc="description for In"
            />
            <Footer />
        </div>
    )
}