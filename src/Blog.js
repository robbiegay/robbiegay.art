import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer"
import PageFormat from "./PageFormat"
import { Card, Accordion } from "react-bootstrap";

function Blog() {
    return (
        <>
            <NavBar />
            <br />
            <h1>Blog Posts</h1>
            <PageFormat>
                <p>
                    Welcome to my blog! This blog started as an assignment for
                    the <a href="https://www.awesomeinc.org/bootcamp" title="Bootcamp Webpage" target="_blank" rel="noopener noreferrer">Awesome Inc Web Developer's Bootcamp</a>.
                    I have continued to post articles (at a much slower rate) about web and mobile development
                    topics that are interesting to me. Below you can find a list of blog articles. I hope you enjoy!
                </p>

                <Accordion>
                    {/* defaultActiveKey="0" */}
                    <Card>
                        <Card.Header style={{ backgroundColor: "lightGray" }} className="text-center">
                            <b>2019 — Awesome Inc Bootcamp</b>
                        </Card.Header>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" style={{cursor: "pointer"}}>
                            August
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <ul>
                                    <li>
                                        <time datetime="2019-08-30">8.30.2019</time>
                                        : <a href="/blog/pw-week-1" title="Prework Week 1 Blog Post">
                                            Prework Week 1: Git and Github
                                        </a>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" style={{cursor: "pointer"}}>
                            September
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <ul>
                                    <li>
                                        <time datetime="2019-09-02">9.2.2019</time>
                                        : <a href="/blog/pw-week-2" title="Prework Week 2 Blog Post">
                                            Prework Week 2: HTML, CSS, and Pseudo Code
                                        </a>
                                    </li>
                                    <li>
                                        <time datetime="2019-09-07">9.7.2019</time>
                                        : <a href="/blog/pw-week-3" title="Prework Week 3 Blog Post">
                                            Prework Week 3: JavaScript
                                        </a>
                                    </li>
                                    <li>
                                        <time datetime="2019-09-13">9.13.2019</time>
                                        : <a href="/blog/pw-week-4" title="Prework Week 4 Blog Post">
                                            Prework Week 4: More JavaScript
                                        </a>
                                    </li>
                                    <li>
                                        <time datetime="2019-09-22">9.22.2019</time>
                                        : <a href="/blog/bc-week-1" title="Bootcamp Week 1 Blog Post">
                                            Bootcamp Week 1: Bootstrap
                                        </a>
                                    </li>
                                    <li>
                                        <time datetime="2019-09-29">9.29.2019</time>
                                        : <a href="/blog/bc-week-2" title="Bootcamp Week 2 Blog Post">
                                            Bootcamp Week 2: JavaScript Projects
                                        </a>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="2" style={{cursor: "pointer"}}>
                            October
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <ul>
                                    <li>
                                        <time datetime="2019-10-05">10.5.2019</time>
                                        : <a href="/blog/bc-week-3" title="Bootcamp Week 3 Blog Post">
                                            Bootcamp Week 3: More JavaScript Projects
                                        </a>
                                    </li>
                                    <li>
                                        <time datetime="2019-10-13">10.13.2019</time>
                                        : <a href="/blog/bc-week-4" title="Bootcamp Week 4 Blog Post">
                                            Bootcamp Week 4: Saying Goodbye to Vanilla JS
                                        </a>
                                    </li>
                                    <li>
                                        <time datetime="2019-10-20">10.20.2019</time>
                                        : <a href="/blog/bc-week-5" title="Bootcamp Week 5 Blog Post">
                                            Bootcamp Week 5: React.JS
                                        </a>
                                    </li>
                                    <li>
                                        <time datetime="2019-10-26">10.26.2019</time>
                                        : <a href="/blog/bc-week-6" title="Bootcamp Week 6 Blog Post">
                                            Bootcamp Week 6: More React, A Halfway Point
                                        </a>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="3" style={{cursor: "pointer"}}>
                            November
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <ul>
                                    <li>
                                        <time datetime="2019-11-3">11.3.2019</time>
                                        : <a href="/blog/bc-week-7" title="Bootcamp Week 7 Blog Post">
                                            Bootcamp Week 7: Back End Development
                                        </a>
                                    </li>
                                    <li>
                                        <time datetime="2019-11-9">11.9.2019</time>
                                        : <a href="/blog/bc-week-8" title="Bootcamp Week 8 Blog Post">
                                            Bootcamp Week 8: Laravel Library
                                        </a>
                                    </li>
                                    <li>
                                        <time datetime="2019-11-17">11.17.2019</time>
                                        : <a href="/blog/bc-week-9" title="Bootcamp Week 9 Blog Post">
                                            Bootcamp Week 9: Catgram
                                        </a>
                                    </li>
                                    <li>
                                        <time datetime="2019-11-24">11.24.2019</time>
                                        : <a href="/blog/bc-week-10" title="Bootcamp Week 10 Blog Post">
                                            Bootcamp Week 10: Final Projects
                                        </a>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="4" style={{cursor: "pointer"}}>
                            December
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                <ul>
                                    <li>
                                        <time datetime="2019-12-01">12.1.2019</time>
                                        : <a href="/blog/bc-week-11" title="Bootcamp Week 11 Blog Post">
                                            Bootcamp Week 11: Final Project Prototype
                                        </a>
                                    </li>
                                    <li>
                                        <time datetime="2019-12-07">12.7.2019</time>
                                        : <a href="/blog/bc-week-12" title="Bootcamp Week 12 Blog Post">
                                            Bootcamp Week 12: Demo Day
                                        </a>
                                    </li>
                                    <li>
                                        <time datetime="2019-12-15">12.15.2019</time>
                                        : <a href="/blog/jh-week-1" title="Job Hunt Week 1 Blog Post">
                                            30-60-90
                                        </a>
                                    </li>
                                    <li>
                                        <time datetime="2019-12-31">12.31.2019</time>
                                        : <a href="/blog/jh-week-4" title="Job Hunt Week 4 Blog Post">
                                            React Hooks
                                        </a>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header style={{ backgroundColor: "lightGray" }} className="text-center">
                            <b>2020 — Freelance Web and Mobile Developer</b>
                        </Card.Header>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="5" style={{cursor: "pointer"}}>
                            January
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>
                                <ul>
                                    <li>
                                        <time datetime="2020-01-31">1.31.2020</time>
                                        : <a href="/blog/jan-2020" title="January 2020 Blog Post">
                                            Swift vs React
                                        </a>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="6" style={{cursor: "pointer"}}>
                            February
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>
                                <ul>
                                    <li>
                                        <time datetime="2020-02-29">2.29.2020</time>
                                        : <a href="/blog/feb-2020" title="February 2020 Blog Post">
                                            Design
                                        </a>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="7" style={{cursor: "pointer"}}>
                            March
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="7">
                            <Card.Body>
                                <ul>
                                    <li>
                                        <time datetime="2020-03-31">3.31.2020</time>
                                        : <a href="/blog/mar-2020" title="March 2020 Blog Post">
                                            Creating an Image Cache
                                        </a>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="8" style={{cursor: "pointer"}}>
                            April
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="8">
                            <Card.Body>
                                <ul>
                                    <li>
                                        <time datetime="2020-04-30">4.30.2020</time>
                                        : <a href="/blog/april-2020" title="April 2020 Blog Post">
                                            Glch — Building an App from Scratch
                                        </a>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </PageFormat>

            <br /><br /><br />
            <Footer />
        </>
    );
}

export default Blog;
