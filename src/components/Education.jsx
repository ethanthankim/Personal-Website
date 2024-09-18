import React from "react";

export default function Education(props) {
    return (
        <div className="education">
            <h2>{props.school}</h2>
            <div className="education--subheading">
                <h3 className="education--degree">{props.degree}</h3>
                <h3>{props.dates}</h3>
            </div>
            <ul className="education--notes">
                <li>Cumulative GPA: {props.gpa}</li>
                {props.note && <li>{props.note}</li>}
            </ul>
        </div>
    )
}