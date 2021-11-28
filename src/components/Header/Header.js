import React from "react";
import logo from "../../image/logo.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ml-auto ">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/doctors">
              Doctors
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            { user.email &&
              <span className="text-dark"> Hello, {user.displayName} </span>
            }
                
            {user?.email ? (
              <Button onClick={logOut}>log Out</Button>
            ) : (
              <Nav.Link as={Link} to="/LogIn">
                LogIn
              </Nav.Link>
            )}
          </Nav>
    </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
