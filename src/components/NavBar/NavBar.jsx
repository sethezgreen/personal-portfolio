import "./NavBar.css"
import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard, faFileLines, faHome,  faUser } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"


const NavBar = () => {
    const [navActive, setNavActive] = useState(false)
    
    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 500) {
                closeMenu
            }
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    
    useEffect(() => {
        if(window.innerWidth <= 1200) {
            closeMenu
        }
    }, [])

    return (
        <nav className={`navbar ${navActive ? "active" : ""} `}>
            <div id="logo">
                <p>Seth Green</p>
            </div>
            <div className="nav-links">
                <Link 
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="hero"
                    className="nav-link"
                >
                    <FontAwesomeIcon icon={faHome} />
                    Home
                </Link>
                <Link 
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                    to="about"
                    className="nav-link"
                >
                    <FontAwesomeIcon icon={faUser} />
                    About
                </Link>
                <Link 
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                    to="projects"
                    className="nav-link"
                >
                    <FontAwesomeIcon icon={faClipboard} />
                    Projects
                </Link>
                <Link 
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="resume"
                    className="nav-link"
                >
                    <FontAwesomeIcon icon={faFileLines} />
                    Resume
                </Link>
            </div>
            
        </nav>
    )
}

export default NavBar