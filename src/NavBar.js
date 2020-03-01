import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router } from 'react-router-dom';

function NavBar() {
    return (
        <>
        <Router>
            <Navbar expand="md" sticky="top" bg="light"> 
                <Navbar.Brand href="/">robbiegay</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/blog">blog</Nav.Link>
                        <Nav.Link href="/portfolio">portfolio</Nav.Link>
                        <Nav.Link href="/music">music</Nav.Link>
                        {/* <Nav.Link target="_blank" href="https://soundcloud.com/robbiegay">music</Nav.Link> */}
                        {/* <Nav.Link target="_blank" href="https://github.com/robbiegay">github</Nav.Link> */}
                        {/* <Nav.Link target="_blank" href="https://www.linkedin.com/in/robbiegay/">linkedin</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Router>
        </>
    );
}

export default NavBar;