import "./NavBar.css"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard, faFileLines, faHome,  faUser } from "@fortawesome/free-solid-svg-icons"


const NavBar = () => {

    return (
        <nav className="nav-bar">
            <div id="logo">
                <p>Seth Green</p>
            </div>
            <div className="nav-links">
                <NavLink exact="true" activeClassName="active" className="nav-link" to="/">
                    <FontAwesomeIcon icon={faHome} />
                    Home
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="nav-link" to="/about">
                    <FontAwesomeIcon icon={faUser} />
                    About
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="nav-link" to="/projects">
                    <FontAwesomeIcon icon={faClipboard} />
                    Projects
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="nav-link" to="/resume">
                    <FontAwesomeIcon icon={faFileLines} />
                    Resume
                </NavLink>
            </div>
            
        </nav>
    )
}

export default NavBar