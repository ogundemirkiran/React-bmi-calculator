import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function HeadNavbar() {
  return (
    <Navbar className="navbar" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="logo">
            BMI Calculator
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="menu">
            Home
          </Link>

          <Link to="/about" className="menu">
            About
          </Link>
          <Link to="/BMI" className="menu">
            BMI?
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeadNavbar;
