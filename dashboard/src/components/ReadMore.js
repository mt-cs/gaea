import React from "react"

function ReadMore(props) {
    return (
        <p className="read-more">
            {props.text.slice(0,120)} ...
      <a href="/">read more</a>
        </p>
    )
}

export default ReadMore