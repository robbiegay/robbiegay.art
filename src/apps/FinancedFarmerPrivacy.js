import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import PageFormat from "../PageFormat";
import { Button } from "react-bootstrap";

function FinancedFarmerPrivacy() {
    return (
        <>
            <NavBar />
            <br />
            <h1>Financed Farmer</h1>
            <h3>Privacy Policy</h3>
            <br />
            <PageFormat>
                <ul>
                    <li>
                        User data will be saved to our database. This allows uses to retain 
                        their data even after logging out of the app. All data entered into 
                        the Finance Farmer app becomes the property of Financed Farmer.
                    </li>
                    <li>
                        Users own all reports created through the Financed Farmer app. Users 
                        can use, share, and distribute these reports as they see fit. There 
                        is no requirement to credit Financed Farmer for the creation of these 
                        reports.
                    </li>
                </ul>
                <p className="text-center">
                    <Button href="/apps/financed-farmer" className="m-3">
                        Financed Farmer App Main Page
                    </Button>
                    <Button href="" className="m-3" disabled>
                        Download App Beta
                    </Button>
                </p>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </PageFormat>
            <Footer />
        </>
    );
}

export default FinancedFarmerPrivacy;
