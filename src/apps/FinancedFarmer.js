import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import PageFormat from "../PageFormat";
import { Carousel, Button } from "react-bootstrap";

function FinancedFarmer() {
    return (
        <>
            <NavBar />
            <br />
            <h1>Financed Farmer</h1>
            <br />
            <PageFormat>
                <p className="text-center">
                    <Button href="/apps/financed-farmer/privacy" className="m-3">
                        Privacy Policy & ToS
                    </Button>
                    <Button href="" className="m-3" disabled>
                        Download App Beta
                    </Button>
                </p>
                <p>
                    Financed Farmer allows farmers to easily create finance reports to send to 
                    loan officers and other financial institutions. The current build is designed 
                    specifically for Almond Farmers, but future builds will expand into a wide 
                    variety of farming operations.
                </p>
                <p className="text-center">
                </p>
                <br />
                <h3 className="text-center">Images</h3>
                <br />
                <Carousel style={{ maxWidth: "50%", margin: "auto" }}  className="border" text-center>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/appAssets/img/financed-farmer-login.png"
                            alt="Login Screen" />
                        {/* <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded"></p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/appAssets/img/financed-farmer-select-year.png"
                            alt="Select Crop Year" />
                        {/* <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded"></p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/appAssets/img/financed-farmer-data-input.png"
                            alt="Data Input" />
                        {/* <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded"></p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/appAssets/img/financed-farmer-pdf.png"
                            alt="Glch example effect" />
                        {/* <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded"></p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
                <br /><br /><br /><br />
            </PageFormat>
            <Footer />
        </>
    );
}

export default FinancedFarmer;
