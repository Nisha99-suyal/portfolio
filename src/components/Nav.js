import React from "react";
import { Button } from "react-bootstrap";
import Logo from "../Images/logo.png";
import { Container, Navbar } from "react-bootstrap";
import NavB from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

export default function Nav() {
  return (
    <Navbar expand="lg" className="navbar-dark p-0">
      <Container fluid className="px-1">
        <Navbar.Brand href="/">
          <img className="logo" src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <NavB className="px-5">
            <NavB.Link as={Link} to="/">Home</NavB.Link>
            <NavB.Link as={Link} to="/about">About</NavB.Link>
            <NavB.Link as={Link} to="/skills">Skills</NavB.Link>
            <NavB.Link as={Link} to="/contact">Contact</NavB.Link>
            <Button
              className="resume-btn"
              onClick={() => {window.open("https://drive.google.com/file/d/1po5W7AWphOHMfo4ymGaNMjdYHuDRoHdi/view?usp=sharing");}}>
              <span>Resume</span>
            </Button>
          </NavB>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
