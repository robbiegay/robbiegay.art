import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import PageFormat from './PageFormat';
import { Image, Container, Row, Col } from 'react-bootstrap';
// import profilePic from './images/headshot-short-hair.jpg';

function Portfolio() {
    let fontSize = "48px";

    return (
        <>
            <NavBar />
            <h1>Robbie Gay</h1>
            <PageFormat>
                <Container>
                    <Row>
                        <Col xs={2}></Col>
                        <Col xs={8}>
                            <Image src={process.env.PUBLIC_URL + '/images/headshot-short-hair.jpg'} roundedCircle fluid />
                        </Col>
                        <Col xs={2}></Col>
                    </Row>
                </Container>

                {/* Bio */}
                <br />
                <p>
                    Hi, my name is Robbie Gay. I graduated
                    from <a href="https://www.centre.edu" title="Centre's Website">Centre College</a> in
                    the Spring of 2016 with a degree in English Literature and a minor in Film Studies.
                    For 3 years I pursued my passion for filmmaking, photography, and music, while working
                    part time as a property manager for the Downtown Co. in Versailles, KY.
                    In the fall of 2019, I
                    completed <a href="https://www.awesomeinc.org/bootcamp" title="Bootcamp Website">Awesome Inc's Web Developer Bootcamp</a>, where
                    I learned Full Stack Web Development (LAMP Tech Stack). I currently work as a Freelance mobile and web
                    developer, with the help of my boss/mentor <a href="https://warnerdesigntechnology.com/" title="Tommy's Website">Tommy Warner</a>.
                    Additionally, I still
                    make <a href="https://soundcloud.com/robbiegay" title="My SoundCloud Page">music</a>! I'm
                    mostly a laptop musician, but my goal in 2020 is to learn jazz piano — stay tuned! I also
                    manage the RPM playbox (electronic music) for <a href="http://wrfl.fm/" title="WRFL's website">WRFL</a>.
                </p>
                <p>
                    <i class="fab fa-git-alt" style={{ color: "#fb4f28", fontSize: fontSize }}></i>
                    <i class="fab fa-github" style={{ color: "#24292e", fontSize: fontSize }}></i>
                    <i class="fab fa-html5" style={{ color: "#ef652a", fontSize: fontSize }}></i>
                    <i class="fab fa-css3-alt" style={{ color: "#2965f2", fontSize: fontSize }}></i>
                    <i class="fab fa-js" style={{ color: "#f5df18", fontSize: fontSize }}></i>
                    <i class="fab fa-bootstrap" style={{ color: "#563d7d", fontSize: fontSize }}></i>
                    <i class="fab fa-react" style={{ color: "#5fd7f6", fontSize: fontSize }}></i>
                    <i class="fab fa-php" style={{ color: "#8992c0", fontSize: fontSize }}></i>
                    <i class="fab fa-swift" style={{ color: "#f15138", fontSize: fontSize }}></i>
                    <i class="fab fa-laravel" style={{ color: "#ff4841", fontSize: fontSize }}></i>
                </p>
            </PageFormat>
            <Footer />
        </>
    );
}

export default Portfolio;
