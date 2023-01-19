import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { PersonCircle } from "react-bootstrap-icons";
import { Tv } from "react-bootstrap-icons";

export default function Menu() {
  return (
    <Navbar variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <Tv /> Coding an Arch Style
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#task">
            <PersonCircle /> Username
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
