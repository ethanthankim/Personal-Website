import React from "react";

export default function Project(props) {
    return(
        <div className="project">
            <h2>{props.title}</h2>
            <p>{props.caption}</p>
            {props.link && <a href={props.link} target="_blank" rel="noreferrer">{props.link}</a>}
            <div className="project--video">
                <iframe
                    src={`https://youtube.com/embed/${props.vidID}`}
                    title="YouTube video player"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
            </div>
            <p>{props.desc}</p>
        </div>
    )
    
}