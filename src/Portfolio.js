import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import PageFormat from "./PageFormat";
import ProjectsViewer from "./ProjectsViewer";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Pdf from "./documents/robbie-gay-resume.pdf";

function Portfolio() {
    let fontSize = "30px";
    let largerSize = "75px";

    return (
        <>
            <NavBar />
            <br />
            <h1>Robbie Gay</h1>
            <PageFormat>
                <Container>
                    <Row>
                        <Col xs={2}></Col>
                        <Col xs={8}>
                            <Image src={process.env.PUBLIC_URL + "/images/headshot-march-2020.jpg"} roundedCircle fluid />
                        </Col>
                        <Col xs={2}></Col>
                    </Row>
                </Container>
                <br />

                {/* GitHub and LinkedIn Links */}
                <Row>
                    <Col></Col>
                    <Col xs="auto">
                        <p>
                            <a href="https://www.linkedin.com/in/robbiegay/" title="My LinkedIn Profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" style={{ color: "#0077b5", fontSize: largerSize }}></i></a>{" "}
                            {/* <a href="https://www.upwork.com/fl/robbiegay" title="My UpWork Profile" target="_blank" rel="noopener noreferrer"><Image src={process.env.PUBLIC_URL + "/websiteIcons/upwork.svg"} style={{ height: largerSize }} className="mb-5" /></a>{" "} */}
                            <a href="https://github.com/robbiegay" title="My GitHub Profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" style={{ color: "#24292e", fontSize: largerSize }}></i></a>
                        </p>
                    </Col>
                    <Col></Col>
                </Row>

                {/* Bio */}
                <p>
                    Hi, my name is Robbie! I graduated
                    from <a href="https://www.centre.edu" title="Centre's Website">Centre College</a> in
                    the Spring of 2016 with a degree in English Literature and a minor in Film Studies.
                    For 3 years I pursued my passion for filmmaking, photography, and music, while working
                    part time as a property manager for the Downtown Company in Versailles, KY.
                    In the fall of 2019, I
                    completed <a href="https://www.awesomeinc.org/bootcamp" title="Bootcamp Website">Awesome Inc's Web Developer Bootcamp</a>, where
                    I learned Full Stack Web Development (LAMP Tech Stack). From Jan - May of 2020, I worked as a freelance iOS developer on <a href="https://www.upwork.com/fl/robbiegay" title="My UpWork Profile">UpWork</a>, developing apps
                    for clients in the the sports, fitness, and agriculture industries.
                    In June of 2020, I started working as Associate QA Engineer at <a href="https://vetdata.com/" title="Vetdata's Website">VetData</a>,
                    a leader in data integration, conversion, and support services for the veterinary industry.
                </p>

                {/* Language Icons */}
                <p className="text-justify">
                    {/* <i className="fas fa-terminal" style={{ color: "#37932e", fontSize: fontSize }}></i>{" "} */}
                    <a href="https://git-scm.com/" title="Git"><i className="fab fa-git-alt" style={{ color: "#fb4f28", fontSize: fontSize }}></i></a>{" "}
                    <a href="https://github.com/" title="GitHub"><i className="fab fa-github" style={{ color: "#24292e", fontSize: fontSize }}></i></a>{" "}
                    <a href="https://www.w3schools.com/html/" title="HTML"><i className="fab fa-html5" style={{ color: "#ef652a", fontSize: fontSize }}></i></a>{" "}
                    <a href="https://www.w3schools.com/css/" title="CSS"><i className="fab fa-css3-alt" style={{ color: "#2965f2", fontSize: fontSize }}></i></a>{" "}
                    <a href="https://www.w3schools.com/js/" title="JavaScript"><i className="fab fa-js" style={{ color: "#f5df18", fontSize: fontSize }}></i></a>{" "}
                    <a href="https://swift.org/" title="Swift"><i className="fab fa-swift" style={{ color: "#f15138", fontSize: fontSize }}></i></a>{" "}
                    <a href="https://getbootstrap.com/" title="Bootstrap"><i className="fab fa-bootstrap" style={{ color: "#563d7d", fontSize: fontSize }}></i></a>{" "}
                    <a href="https://reactjs.org/" title="React"><i className="fab fa-react" style={{ color: "#5fd7f6", fontSize: fontSize }}></i></a>{" "}
                    <a href="https://www.php.net/" title="PHP"><i className="fab fa-php" style={{ color: "#8992c0", fontSize: fontSize }}></i></a>{" "}
                    {/* Added bottom margins to images to push their top alignment even with icons */}
                    <a href="https://www.mysql.com/" title="MySQL"><Image src={process.env.PUBLIC_URL + "/languageIcons/mysql.png"} style={{ height: fontSize }} className="mb-3" /></a>{" "}
                    <a href="https://laravel.com/" title="Laravel"><i className="fab fa-laravel" style={{ color: "#ff4841", fontSize: fontSize }}></i></a>{" "}
                    <a href="https://firebase.google.com/" title="Firebase"><Image src={process.env.PUBLIC_URL + "/languageIcons/firebase.png"} style={{ height: fontSize }} className="mb-3" /></a>{" "}
                    <a href="https://ptsjs.org/" title="Pts.js"><Image src={process.env.PUBLIC_URL + "/languageIcons/pts.png"} style={{ height: fontSize }} className="mb-3" /></a>{" "}
                    <a href="https://tonejs.github.io/" title="Tone.js"><Image src={process.env.PUBLIC_URL + "/languageIcons/tone.png"} style={{ height: fontSize }} className="mb-3" /></a>
                    {/* Hack to spread the icons evenly across the line */}
                    <span style={{ width: "100%", display: "inline-block" }}></span>
                </p>

                {/* Resume and UpWork */}
                <Row>
                    <Col></Col>
                    <Col xs="auto">
                        <Button href={Pdf} target="_blank" className="mr-1">
                            Resume
                        </Button>

                        <Button href="https://www.upwork.com/freelancers/~019f4a1f66cf9ca3ce" target="_blank" className="ml-1">
                            UpWork
                        </Button>
                        <br /><br />
                    </Col>
                    <Col></Col>
                </Row>

                {/* Projects */}
                <Row>
                    <Col></Col>
                    <Col xs="auto">
                        <h2>Projects</h2>
                        <br />
                    </Col>
                    <Col></Col>
                </Row>
                <ProjectsViewer />
            </PageFormat>
            <Footer />
        </>
    );
}

export default Portfolio;
