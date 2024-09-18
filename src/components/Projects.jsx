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
                caption="SnapTunes is a web-based application prototype developed in partnership with the SynLab at Toronto Metropolitan University."
                desc="Traditional digital music workstations (DAWs) come with challenges for beginners with little to no music background. They can be overwhelming with their availability of options, and are primarily designed for individual work. SnapTunes tackles these challenges by focusing on teaching fundamentals of music production through simple and intuitive collaboration. Physical gestures are used to seamlessly transition between individual and collaborative creation across multiple devices. By offering a beginner-friendly platform, we aim to introduce users to music production through fostering artistic curiosity and exploration, and promoting interpersonal communication."
            />
            <Project
                title="Objects"
                vidID="L_bxK2eoR0I"
                link="https://ethanthankim.github.io/OBJECTS/"
                desc="This website was developed for a 6-week course in the Master of Digital Media Program at Toronto Metropolitan University. The theme is a treasure box/time capsule in which each object represents an individual’s past, journey, personality, story, etc. The goal is to guide users through a unique experience of resonance and empowerment, reminding them of the joys and values of reflecting on their personal experiences."
            />
            <Project
                title="AR Product Inspector"
                vidID="rEIonGe8i0Q"
                desc="This AR prototype was developed for a course in the Master of Digital Media Program at Toronto Metropolitan University. The application would assist customers when browsing stores to learn more information about the products they are interested in. It would allow them to point their camera at a product’s cover to reveal an interactive 3D model that is representative of the product in some way, along with a short description of the model and its purpose, creating a more engaging experience for potential consumers."
            />
            <Footer />
        </div>
    )
}