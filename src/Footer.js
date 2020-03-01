import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <>
            <footer>
                <Navbar fixed="bottom" bg="light">
                    <Navbar.Text>
                        <em>&copy; 2020 Robbie Gay. All rights reserved.</em>
                    </Navbar.Text>
                </Navbar>
            </footer>
        </>
    );
}

export default Footer;
