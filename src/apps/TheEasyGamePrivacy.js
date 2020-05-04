import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import PageFormat from "../PageFormat";
import { Button } from "react-bootstrap";

function TheEasyGamePrivacy() {
    return (
        <>
            <NavBar />
            <br />
            <h1>The Easy Game</h1>
            <h3>Privacy Policy & Terms of Service</h3>
            <br />
            <PageFormat>
                <ul>
                    <li>
                        We do not store or save any user data beyond crash reports, beta testing feedback, and
                        analytics reporting done by Apple.
                    </li>
                    <li>
                        Since we don't collect any personal information, we certainly won't be selling
                        it to 3rd parties.
                    </li>
                    <li>
                        I hope you enjoy the game :)
                    </li>
                </ul>
                <p className="text-center">
                    <Button href="/apps/easy-game" className="m-3">
                        The Easy Game Main Page
                    </Button>
                    <Button href="https://testflight.apple.com/join/gHYS01EE" className="m-3">
                        Download App Beta
                    </Button>
                </p>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </PageFormat>
            <Footer />
        </>
    );
}

export default TheEasyGamePrivacy;
