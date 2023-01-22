import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { PersonCircle } from "react-bootstrap-icons";
import { Tv } from "react-bootstrap-icons";
import User from "./User";
import { useNavigate } from "react-router-dom";

export default function Menu(props) {
  const userName = User.current().userName();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/login");
  }

  function handleLogout(e) {
    e.preventDefault();
    User.current(props.host)
      .logout()
      .then(() => navigate("/"));
  }

  return (
    <Navbar variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <Tv /> Cinema
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#movies">All Movies</Nav.Link>
          <Nav.Link href="#theatres">Theatres</Nav.Link>
        </Nav>
        <Nav>
          {!userName && (
            <>
              <Nav.Link href="#lgin" onClick={handleLogin}>
                <PersonCircle /> Sign in
              </Nav.Link>
            </>
          )}
          {userName && (
            <Nav.Link href="#lgout" onClick={handleLogout}>
              <PersonCircle /> {userName} (Log out)
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
