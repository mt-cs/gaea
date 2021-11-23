import React from "react"

function NavItem(props) {
    return(
        <li className="nav-item">
            <a href={props.link} target="_blank" rel="noreferrer" className="nav-link">{props.text}</a>
        </li>
    )
}

export default NavItem