import { useState } from "react";
import { Button } from "react-bootstrap";
import Logo from "../Images/logo.png";
import { Container, Navbar } from "react-bootstrap";
import NavB from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function Nav() {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const closeNavbar = () => {
    setNavbarExpanded(false);
  };

  return (
    <Navbar expand="lg" className="navbar-dark p-0" expanded={navbarExpanded}>
      <Container fluid className="px-1">
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setNavbarExpanded(!navbarExpanded)}
        />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <NavB className="px-5">
            <NavB.Link as={Link} to="/" onClick={closeNavbar}>
              Home
            </NavB.Link>
            <NavB.Link as={Link} to="/about" onClick={closeNavbar}>
              About
            </NavB.Link>
            <NavB.Link as={Link} to="/skills" onClick={closeNavbar}>
              Skills
            </NavB.Link>
            <NavB.Link as={Link} to="/contact" onClick={closeNavbar}>
              Contact
            </NavB.Link>
            <Button
              className="resume-btn"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1uAJN4fNHyiM2pwEOV5MvHMcWrU-7Xj4T/view?usp=sharing"
                );
              }}
            >
              <span>Resume</span>
            </Button>
          </NavB>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
