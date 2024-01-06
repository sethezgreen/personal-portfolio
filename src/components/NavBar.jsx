import {Navbar, Nav, Container} from "react-bootstrap"
import { BrowserRouter as Router } from "react-router-dom"

const NavBar = (props) => {

    return (
        <Router>
            <Navbar expand="md">
                <Container>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle> */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}

export default NavBar