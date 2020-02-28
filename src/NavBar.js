import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

function NavBar() {
    return (
        <>
            <Navbar expand="md" sticky="top"> 
            {/* bg="light" */}
                <Navbar.Brand href="#home">robbiegay</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#blog">blog</Nav.Link>
                        <Nav.Link href="#portfolio">portfolio</Nav.Link>
                        <Nav.Link target="_blank" href="https://soundcloud.com/robbiegay">music</Nav.Link>
                        {/* <Nav.Link target="_blank" href="https://github.com/robbiegay">github</Nav.Link> */}
                        {/* <Nav.Link target="_blank" href="https://www.linkedin.com/in/robbiegay/">linkedin</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBar;