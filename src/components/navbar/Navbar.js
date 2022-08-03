import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export default function NavbarComponent() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>ReactJs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}