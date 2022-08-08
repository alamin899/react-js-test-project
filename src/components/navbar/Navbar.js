import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {Navbar, Nav, Container,A} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function NavbarComponent() {
    const auth= useAuth();
    
    const logOut = ()=>{
        localStorage.clear();

        window.location.href = '/login';
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>ReactJs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                          {auth ? <Nav.Link onClick={logOut}>Logout</Nav.Link> : <Nav.Link as={NavLink} to="/login" >Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}