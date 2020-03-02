import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import PageFormat from './PageFormat';
import CountUpTimer from './CountUpTimer';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function Music() {
    let largerSize = "75px";

    return (
        <>
            <NavBar />
            <br />
            <h1>Music</h1>
            <br />
            <PageFormat>
                {/* Soundcloud Players */}
                <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/766901725&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_comments=true&show_user=true&show_reposts=true&show_teaser=true&visual=true" />
                {/* Music Bio */}
                {/* Song total -> from start till bootcamp = 88 songs and covers, excluding short ideas */}
                <p>
                    I have been making mostly mediocre music for the last <span className="clockFont"><CountUpTimer /></span>.
                    I started making music as a first-year student at Centre College. I took a 1-credit
                    "Digital Music Production" course, and with the help of my professor, Dr. Dan Worley,
                    made a remix of an XX song. I spent the next 4 years at Centre filling my schedule with
                    as many music theory, music production, and music performance classes as I fit. When
                    I graduated in May 2016, I decided that I wanted to spend the next few years pursing music
                    full-time. I moved in with my parents, worked several part-time jobs, and spent most
                    of my time making music. During the next 3 years, I made lot of music while also reviving some old passions in
                    filmmaking (<a href="https://www.youtube.com/robbiegay" title="filmmaking portfolio">filmmaking portfolio</a>) and
                    photography (<a href="https://www.instagram.com/robbiegay/" title="photography portfolio">photography portfolio</a>).
                    After 3 years of working in the arts, I decided that I wanted to pursue a day job that was
                    both interesting and financially in-demand. I was really fortunate to hear
                    about Awesome Inc's  <a href="https://www.awesomeinc.org/bootcamp" title="Bootcamp Website">Web Developer Bootcamp</a>, and
                    I spent the Fall of 2019 completing that course. During this time, I took a break from making music.
                    I had become burnt out on trying to make music a career, on trying to make songs that could be
                    popular enough for me to make a living making them. During the Spring of 2020, I have been slowly
                    getting back into making music, but with a focus now on exploring ideas that interest me. I have
                    also made in my resolution for 2020 to try to learn Jazz Piano. As a laptop musician, I look forward to
                    being able to play something that doesn't have to be plugged into the wall. At the top of the page
                    you can hear an example of a recent song, or you can find links to various music platforms down below!
            </p>

                {/*  Music making photo */}
                <Image src={process.env.PUBLIC_URL + '/images/making-music.jpg'} rounded fluid />

                <br /><br />
                <Container>
                    <Row>
                        <Col xs={3}></Col>
                        <Col xs={6}>
                            <p className="text-justify">
                                <a href="https://robbiegay.bandcamp.com/" title="My BandCamp Page" target="_blank" rel="noopener noreferrer"><i className="fab fa-bandcamp" style={{ color: "#1ea1c3", fontSize: largerSize }}></i></a>{' '}
                                <a href="https://soundcloud.com/robbiegay" title="My SoundCloud Page" target="_blank" rel="noopener noreferrer"><i className="fab fa-soundcloud" style={{ color: "#ff6c02", fontSize: largerSize }}></i></a>{' '}
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
