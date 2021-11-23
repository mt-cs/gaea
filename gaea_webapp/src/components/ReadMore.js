import React from "react"

function ReadMore(props) {
    return (
        <p className="read-more">
            {props.text.slice(0,120)} ...
        <a href={props.link} target = "_blank">read more</a>
        </p>
    )
}

export default ReadMore