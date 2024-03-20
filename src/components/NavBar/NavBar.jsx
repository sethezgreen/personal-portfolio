import "./NavBar.css"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard, faEnvelope, faFile, faFileLines, faHome, faSquareEnvelope, faUser } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faMailchimp, faPage4 } from "@fortawesome/free-brands-svg-icons"

const NavBar = () => {

    return (
        <div className="nav-bar">
            <nav>
                <NavLink exact="true" activeClassName="active" className="nav-link" to="/">
                    <FontAwesomeIcon icon={faHome} /><span className="marin-left">Home</span>
                    
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
                <NavLink>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Connect
                </NavLink>
            </nav>
        </div>
    )
}

export default NavBar