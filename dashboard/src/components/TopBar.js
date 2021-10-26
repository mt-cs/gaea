import React from "react"
import logo from "../logo.png"


function Brand() {
    return(
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img src={logo} className="bi me-2 my_brand" alt="logo" />
        </a>
    )
}
function NavItem() {
    return(
        <li className="nav-item">
            <a href="https://www.w3schools.com/" className="nav-link">Link 02</a>
        </li>
    )
}
function NavPill() {
    return(
        <ul className="nav nav-pills">
            <NavItem/>
            <NavItem/>
            <NavItem/>
        </ul>
    )
}
function Header() {
    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <Brand/>
            <NavPill/>
        </header>
    )
}
function Container() {
    return (
        <div className="container">
            <Header/>
        </div>
    )
}
function TopBar(props) {
    return(
        <Container/>
    )
}

export default TopBar