import React from "react";
import { Navbar, Nav } from "react-bootstrap/";

const NavBarH = props => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Vidly</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/movies">Movies</Nav.Link>
          <Nav.Link href="/customers">Customers</Nav.Link>
          <Nav.Link href="/rentals">Rentals</Nav.Link>
          <Nav.Link href="/login">Log-In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarH;
