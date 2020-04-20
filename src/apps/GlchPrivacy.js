import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import PageFormat from "../PageFormat";

function GlchPrivacy() {
    return (
        <>
            <NavBar />
            <br />
            <h1>Glch</h1>
            <h3>Privacy Policy & Terms of Service</h3>
            <br />
            <PageFormat>
                <p className="text-center">
                    <a href="/apps/glch" title="Glch marketing page">Glch app main page</a>
                </p>
                <ul>
                    <li>
                        Users own the photos they generate using Glch.
                    </li>
                    <li>
                        Photos can be used for both personal and commercial projects.
                    </li>
                    <li>
                        Users have no obligation to credit Glch with the creation of their
                        content — although we would certainly appreciate it if they did &#128513;
                    </li>
                    <li>
                        We do not store or save user photos or user data beyond crash reports and
                        any analytics reporting done by Apple.
                    </li>
                    <li>
                        Since we don't collect any personal information, we certainly won't be selling
                        it to 3rd parties.
                    </li>
                </ul>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </PageFormat>
            <Footer />
        </>
    );
}

export default GlchPrivacy;
