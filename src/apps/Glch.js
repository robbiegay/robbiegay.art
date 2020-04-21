import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import PageFormat from "../PageFormat";
import { Carousel, Button } from "react-bootstrap";

function Glch() {
    return (
        <>
            <NavBar />
            <br />
            <h1>Glch</h1>
            <br />
            <PageFormat>
                <p className="text-center">
                    <Button href="/apps/glch/privacy" className="m-3">
                        Privacy Policy & ToS
                    </Button>
                    <Button href="https://testflight.apple.com/join/1ZTQ3ZSX" className="m-3">
                        Download App Beta
                    </Button>
                </p>
                <p>
                    Glch (pronounced "glitch") is a single button glitch photo generator. Users click
                    the "capture photo" button and one of several effects is randomly applied.
                    Users then have the option to save their photo, or discard it and try again.
                </p>
                <p className="text-center">
                </p>
                <br />
                <h3 className="text-center">Images</h3>
                <br />
                <Carousel style={{ maxWidth: "50%", margin: "auto" }} text-center>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/appAssets/img/glch-capture.PNG"
                            alt="Glch capture interface" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Glch capture interface</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/appAssets/img/glch-effect-1.PNG"
                            alt="Glch example effect" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">An example of a Glch effect</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/appAssets/img/glch-effect-2.PNG"
                            alt="Glch example effect" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">An example of a Glch effect</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/appAssets/img/glch-effect-3.PNG"
                            alt="Glch example effect" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">An example of a Glch effect</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/appAssets/img/glch-effect-4.PNG"
                            alt="Glch example effect" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">An example of a Glch effect</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/appAssets/img/glch-saved-message.PNG"
                            alt="Photo saved confirmation message" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Photo saved confirmation message</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br /><br /><br /><br />
            </PageFormat>
            <Footer />
        </>
    );
}

export default Glch;
