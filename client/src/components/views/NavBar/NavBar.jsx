import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom"
import {
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa"
//import styles from "./NavBar.module.scss"
import { useSelector } from "react-redux"
import { getLoggedUser } from "../../../redux/subreducers/userRedux"

const NavBar = () => {
  const user = useSelector(getLoggedUser)
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
              {!user && (
                <Nav.Link as={NavLink} to="/login">
                  <FaSignInAlt className="me-1" />
                  Login
                </Nav.Link>
              )}

              {!user && (
                <Nav.Link as={NavLink} to="/register">
                  <FaUserPlus className="me-1" />
                  Register
                </Nav.Link>
              )}

              {user && (
                <Nav.Link as={NavLink} to="/logout">
                  <FaSignOutAlt className="me-1" />
                  Logout
                </Nav.Link>
              )}

              {user && (
                <Nav.Link as={NavLink} to="/account">
                  <FaUserCircle className="me-1" />
                  Profile
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
