import React from "react";
import { Container, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

import logo from "../assets/img/Logo.png";
import '../assets/css/styles.css';

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container
          className="justify-content-between"
        >
          {/* Logo */}
          <Navbar.Brand href="/">
            <img
              src={logo}
              className="logo-img"
              alt="Logo trouve ton artisan"
            />
          </Navbar.Brand>

          {/* Menu items */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#">Bâtiment</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Fabrication</Nav.Link>
              <Nav.Link href="#">Alimentation</Nav.Link>
            </Nav>
            {/* Search bar */}
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search..."
                className="mr-sm-2"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
