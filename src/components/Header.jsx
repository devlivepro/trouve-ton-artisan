import React from "react";
import { Container, Navbar, Nav, Form, FormControl } from "react-bootstrap";

import logo from "../assets/img/Logo.png";
import "../assets/css/styles.css";

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="color-template1">
        <Container className="justify-content-between">
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
              <Nav.Link href="/craftsman">Bâtiment</Nav.Link>
              <Nav.Link href="/cardservice">Services</Nav.Link>
              <Nav.Link href="/cardmanufacturing">Fabrication</Nav.Link>
              <Nav.Link href="/cardfood">Alimentation</Nav.Link>
            </Nav>
            {/* Search bar */}
            <Form>
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
