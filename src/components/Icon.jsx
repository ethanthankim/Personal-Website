import React from "react";

export default function Icon(props) {
    return (
        <img src={require(`../images/${props.name}.png`)} alt={props.name} />
    )
}