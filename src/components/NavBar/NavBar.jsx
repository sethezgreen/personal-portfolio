import "./NavBar.css"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faSquareEnvelope, faUser } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const NavBar = () => {

    return (
        <div className="nav-bar">
            <nav>
                <NavLink exact="true" activeClassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faSquareEnvelope} />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sethezgreen/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/sethezgreen">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar