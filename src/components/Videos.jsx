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
                desc="This project was conceived by Cawthra Park Secondary School arts teachers as a way to inspire creative collaboration between students at a time when live performance work was impossible during the COVID-19 pandemic. Me and one other were contracted by the school to create, choreograph, and edit the short video. It featured senior Repertoire classes consisting of 22 dancers, 16 singers and a 15-piece band, all dance sequences and each musician’s part were filmed and recorded in isolation during the school board’s period of full lockdown."
            />
            <Project
                title="Close"
                vidID="qtv5FGLWvB4"
                desc="This short dance film aims to explore the journeys of three individuals as they navigate the world simultaneously with and without each other. With a heavy focus on individual expression, this film address how their natural environment has impacted their ability to interact and emotionally connect with each other, despite being physically close."
            />
            <Project
                title="In"
                vidID="n8B65F7qI4I"
                desc="This short dance film was created during the COVID-19 pandemic and reflects the mentality and state of an individual during this tumultuous period. It explores themes of confinement and the desire to escape, hope, triumph, and the uncertainty that follows."
            />
            <Footer />
        </div>
    )
}