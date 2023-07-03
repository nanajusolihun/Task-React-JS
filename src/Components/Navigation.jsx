import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark" className="w-100 d-flex">
      <Container>
        <Navbar.Brand>
          <Link to="/home" className="text-white text-decoration-none fw-bold">
            ROUTING.
          </Link>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Link to="/home" className="text-white mx-2 text-decoration-none fw-semibold">
            Home
          </Link>
          <Link to="/aboutme" className="text-white mx-2 text-decoration-none fw-semibold">
            About Me
          </Link>
          <Link to="/projects" className="text-white mx-2 text-decoration-none fw-semibold">
            Projects
          </Link>
          <Link to="/contactme" className="text-white mx-2 text-decoration-none fw-semibold">
            Contact Me
          </Link>
          <Link to="/learn" className="text-white mx-2 text-decoration-none fw-semibold">
            Redux
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
