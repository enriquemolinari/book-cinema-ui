import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Footer() {
  const today = new Date().getFullYear();

  return (
    <div className="fixed-bottom">
      <Navbar bg="dark" variant="light">
        <Container>
          <Navbar.Brand>Enrique Pablo Molinari ({today})</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
