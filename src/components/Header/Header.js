import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="md">
      <Link to="/">
        <Navbar.Brand>Dream League Soccer</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className="nav-link" exact to="/">
            Home
          </Link>
          <Link className="nav-link" exact to="/">
            All Teams
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
