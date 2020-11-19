import React from "react";
import Navbar from "react-bootstrap/Navbar";
import GetYear from "./GetYear";

function Footer() {
    return (
        <>
            <footer>
                <Navbar sticky="bottom" bg="light">
                    <Navbar.Text>
                        <em>&copy; {GetYear()} Robbie Gay. All rights reserved.</em>
                    </Navbar.Text>
                </Navbar>
            </footer>
        </>
    );
}

export default Footer;
