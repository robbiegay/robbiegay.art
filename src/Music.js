import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import PageFormat from "./PageFormat";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function Music() {
    let largerSize = "75px";

    return (
        <>
            <NavBar />
            <br />
            <h1>Music</h1>
            <br />
            <PageFormat>
                {/*  Music making photo */}
                <Image src={process.env.PUBLIC_URL + "/images/making-music.jpg"} rounded fluid />

                {/* Music Bio and Soundcloud Players */}
                <br /><br />
                <p>
                    I started making music as a first-year student at Centre College. I took a 1-credit
                    "Digital Music Production" course, and with the help of my professor, Dr. Dan Worley,
                    made a remix of an XX song. I spent the next 4 years at Centre filling my schedule with
                    as many music theory, music production, and music performance classes as I could. 
                </p>
                <iframe title="liten sno" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/766901725&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=true&show_teaser=true&visual=true" />
                
                <br /><br />
                <p>
                    When I graduated in May 2016, I decided that I wanted to spend the next few years pursing music
                    full-time. I moved in with my parents, worked several part-time jobs, and spent most
                    of my time making music. During the next 3 years, I made lot of music while also reviving some old passions in
                    filmmaking (<a href="https://www.youtube.com/robbiegay" title="filmmaking portfolio">filmmaking portfolio</a>) and
                    photography (<a href="https://www.instagram.com/robbiegay/" title="photography portfolio">photography portfolio</a>).
                </p>
                <iframe title="NITRO (robbiegay remix)" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/869678896&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                
                <br /><br />
                <p>
                    After 3 years of working in the arts, I decided that I wanted to pursue a day job that was
                    both interesting and financially in-demand. I was really fortunate to hear
                    about Awesome Inc's  <a href="https://www.awesomeinc.org/bootcamp" title="Bootcamp Website">Web Developer Bootcamp</a>, and
                    I spent the Fall of 2019 completing that course. During this time, I took a break from making music.
                    I had become burnt out on trying to make a living making music. During the Spring of 2020, I began to slowly
                    get back into making music, but this time with a focus on exploring ideas that interested me and having fun.
                </p>
                <iframe title="pitter_patter" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/929164231&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true" />

                <br /><br /><br /><br />
                <Container>
                    <Row>
                        <Col xs={3}></Col>
                        <Col xs={6}>
                            <p className="text-justify">
                                <a href="https://open.spotify.com/artist/3qNg01UJiLcqaPPWVlsdwc?si=n1XE-bGpQ_O9wS69UGQFug" title="My Spotify Page" target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify" style={{ color: "#1ed761", fontSize: largerSize }}></i></a>{" "}
                                <a href="https://soundcloud.com/robbiegay" title="My SoundCloud Page" target="_blank" rel="noopener noreferrer"><i className="fab fa-soundcloud" style={{ color: "#ff6c02", fontSize: largerSize }}></i></a>{" "}
                                {/* <a href="https://robbiegay.bandcamp.com/" title="My BandCamp Page" target="_blank" rel="noopener noreferrer"><i className="fab fa-bandcamp" style={{ color: "#1ea1c3", fontSize: largerSize }}></i></a>{" "} */}
                                {/* <a href="https://www.youtube.com/robbiegay" title="My YouTube Channel" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" style={{ color: "#ff0000", fontSize: largerSize }}></i></a> */}
                                {/* Hack to spread the icons evenly across the line */}
                                <span style={{ width: "100%", display: "inline-block" }}></span>
                            </p>
                        </Col>
                        <Col xs={3}></Col>
                    </Row>
                </Container>
            </PageFormat>

            <Footer />
        </>
    );
}

export default Music;
