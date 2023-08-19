import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom"
import { FaSignInAlt, FaUserPlus } from "react-icons/fa"
//import styles from "./NavBar.module.scss"

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="rounded my-4"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Ads App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/login">
                <FaSignInAlt className="me-1" />
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register">
                <FaUserPlus className="me-1" />
                Register
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
