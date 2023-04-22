import React from "react";
import { Carousel } from "react-bootstrap";

function MyBookshelf() {
    return (
        <>
            <article className="text-justify">
                <br /><br />

                <br />

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/2023/bookshelf.jpg" alt="Some of my technical books" />
                    <figcaption className="figure-caption text-center">My collection of read (left) and unread (right) technical books.</figcaption>
                </figure>

                <br />

                <p>
                    Here is a list of computer science and software development resources I have used:
                </p>

                <br />

                <p>
                    <ul>
                        <li>
                            {/* <span className="text-success"> */}
                            <b>Web Developer Bootcamp</b> (Awesome Inc)
                            {/* </span> */}
                            <ul>
                                <li>
                                    4-month coding bootcamp that I graduated from in the Fall of 2019.
                                </li>
                                <li>
                                    <a href="https://www.awesomeinc.org/bootcamp">Bootcamp Website</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <b>CS 50</b> (Harvard)
                            <ul>
                                <li>
                                    A very interesting and completely approachable introduction to some fundamental computer science topics. Free, online course.
                                </li>
                                <li>
                                    <a href="/blog/may-2020">My course notes</a>
                                </li>
                                {/* <li>
                                    <a href="https://pll.harvard.edu/course/cs50-introduction-computer-science">CS 50 Website</a>
                                </li> */}
                            </ul>
                        </li>

                        <li>
                            <b>C# Player's Guide</b> (RB Whitaker)
                            <ul>
                                <li>
                                    A great introduction to programming and the C# language.
                                </li>
                                <li>
                                    Console app with level notes and exercises: [coming soon]
                                </li>
                                {/* <li>
                                    <a href="https://csharpplayersguide.com/">C# Player's Guide Website</a>
                                </li> */}
                            </ul>
                        </li>

                        <li>
                            <b>Dependency Injection</b> (Steven van Deursen, Mark Seemann)
                            <ul>
                                <li>
                                    How to use DI to create loosely coupled applications.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <b>Head First Design Patterns</b> (Eric Freeman, Elisabeth Robson)
                            <ul>
                                <li>
                                    A good overview of design patterns, though I wish the writing style were more straightforward as their approach can be a little distracting.
                                </li>
                                <li>
                                    I would actually favor this website over the HFDP book: <a href="https://refactoring.guru/design-patterns">Refactoring Guru</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <b>Data Structures and Algorithms Bootcamp</b> (Jonathan Rasmusson)
                            <ul>
                                <li>
                                    This paid, online course provides an overview of data structures, algorithms, and technical interview questions -- all while keeping the lessons short, approachable, and informative.
                                </li>
                                <li>
                                    <a href="https://www.udemy.com/course/data-structures-and-algorithms-bootcamp/">Udemy Course</a>
                                </li>

                            </ul>
                        </li>

                        <li>
                            <b>Nand-to-Tetris (Part I)</b> (Hebrew University)
                            <ul>
                                <li>
                                    Part I covers logic gates, combination logic, machine language, computer architecture, and assemblers. By the end of part I, you will have built a basic computer out of logic gates. Free, online course.
                                </li>
                                <li>
                                    <a href="https://www.nand2tetris.org/">Course website</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/watch?v=LqirVc5SlW0&list=PLrDd_kMiAuNmSb-CKWQqq9oBFN_KNMTaI">Part I Lectures</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <b>Code</b> (Charles Petzold)
                            <ul>
                                <li>
                                    <a href="/blog/code-book-review">Book review</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <b>Clean Architecture</b> (Robert C. Martin)
                            <ul>
                                <li>
                                    <a href="/blog/clean-architecture-book-review">Book review</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <b>Designing Data Intensive Applications</b> (Martin Kleppmann)
                            <ul>
                                <li>
                                    <a href="/blog/designing-data-intensive-applications-book-summary">Book summary</a> [coming soon]
                                </li>
                            </ul>
                        </li>

                    </ul>
                </p>

                <br /><br />

                <hr />

                <br />

                <h3>Where to find other learning resources</h3>

                <br />

                <p>
                    My favorite learning resource is a website called <a href="https://teachyourselfcs.com/">teachyourselfcs.com</a>.
                </p>

                <p>
                    Written by the creators of the Bradfield Computer Science Intensive (San Francisco), the site details a multi-year, self-study course in computer science fundamentals.
                </p>

                <br />

                <p>
                    A few of my favorite technical book publishers:
                    <ul>
                        <li>
                            <a href="https://www.manning.com/">Manning</a>
                        </li>

                        <li>
                            <a href="https://nostarch.com/">No Starch Press</a>
                        </li>

                        <li>
                            <a href="https://www.oreilly.com/">O'Reilly</a>
                        </li>
                    </ul>
                </p>

                <br />

                <hr />

                <br /><br />

                <h3>About the Bookshelf</h3>

                <br />

                <p>
                    A few weeks ago my brother came to visit. He stayed in our guest bedroom and while there he asked about the bookshelf that lines one side of the room. I has some technical books on it, and he asked if I had really read all of them.
                </p>

                <p>
                    The answer was, absolutely not.
                </p>

                <br />

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/2023/xmas-2022.JPEG" alt="Family christmas" />
                    <figcaption className="figure-caption text-center">From when my brother came to visit. L-R: Hudson (dog), Dad, William (brother), Santa (Elf/immortal being), Mom, and Me</figcaption>
                </figure>

                <br />

                <p>
                    When I get a recommendation for a technical book, I can be pretty impulsive about buying it. The way I see it, the career benefit to a good technical book far outweighs the $25-50 that most of them cost. And if I let myself impulsively buy a few of these books, then I may read a number of them simply by having them on hand.
                </p>

                <p>
                    That said, I was a little disappointed to have to answer that I had not read more than half of them. After my brother went home to Colorado, I reorganized the bookshelf. In the image above, you can see the "read" books on the left, and the "unread" (or in many cases, partially read) books on the right.
                </p>

                <p>
                    It is my goal to continue to grow the "read" column over the coming months. As part of that, I wanted to share a related project: book reviews and summaries.
                </p>

                <p>
                    When I finish a technical book, I want to share either a review: Is the book worth reading? What did it cover? Did I make any projects with the concepts I learned? Or in rare cases, a book summary: This book was really ground breaking to me, and I wanted to type up a summary of the concepts I have learned -- both for my own benefit and for anyone who happens to be reading.
                </p>

                <p>
                    A note about the summaries: The are a mix of my own summaries and verbatim text from the book. I don't want to claim these as original works in any way.
                </p>


                <br /><br /><br /><br /><br /><br /><br /><br />

                <p class="text-muted">Thanks to Mom who pointed out some spelling and grammar errors in this post.</p>

            </article>
        </>
    );
}

export default MyBookshelf;
