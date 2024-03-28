import "./NavBar.css"
import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard, faFileLines, faHome,  faUser } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"


const NavBar = () => {
    const [navActive, setNavActive] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    
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

    const darkmode = () => {
        let element = document.body

        element.classList.toggle("dark")

        setIsClicked(isClicked => !isClicked)
    }

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
                <a
                    onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vQkTGCD4vFyWcBvWhBiig9-AKgMknzKnEy1P3ZeXA4cjxbxI5nbzhat_0vu7FJoP9QCwYgOKi2CJyPT/pub')}
                    className="nav-link"
                >
                    <FontAwesomeIcon icon={faFileLines} />
                    Resume
                </a>
                <button className="dark-mode-btn" onClick={darkmode}>
                    {isClicked ? "☼" : "☾"}
                </button>
            </div>
            
        </nav>
    )
}

export default NavBar