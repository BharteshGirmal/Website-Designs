import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap Styles

export default function MyNavbar() {
  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://github.com/BharteshGirmal/Website-Designs/blob/main/Portfolio/Images/Letter%20B%20Logo.jpg?raw=true"
            alt="Logo"
            className="navbar-logo"
          />
        </Navbar.Brand>

        {/* Add the toggle button for smaller screens */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          aria-label="Toggle navigation"
        />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="m-auto gap-3 text-center">
            <Nav.Link href="#home" className="nav-link text-light active">
              Home
            </Nav.Link>
            <Nav.Link href="#project-section" className="text-light">
              Projects
            </Nav.Link>
            <Nav.Link href="#work-section" className="text-light">
              Work
            </Nav.Link>
            <Nav.Link href="#technology-section" className="text-light">
              Technology
            </Nav.Link>
            <Nav.Link href="#certification-section" className="text-light">
              Certification
            </Nav.Link>
          </Nav>

          {/* Button placed outside of Nav.Link */}
          <Button
            className="mybtn d-block rounded-0 text-uppercase bg-green text-black"
            href="#contactme-section"
          >
            Let's Talk
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
