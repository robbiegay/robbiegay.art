import React from "react";
import { Carousel } from "react-bootstrap";

function CodeBookReview() {
    return (
        <>
            <article className="text-justify">
                <br /><br />

                <p>
                    <b><u>Rating</u></b>:
                </p>

                <p>
                    &#11088; &#11088; &#11088; &#11088; &#9733;
                </p>

                <br />

                <p>
                    <b><u>Review</u></b>:
                </p>

                <p>
                    <i>Note: These reviews are not meant to be an objective or comprehensive review, but rather just a short summary of my key takeaways.</i>
                </p>

                <p>
                    <i>This review was completed in January of 2023 but only made its way onto my site on 4/16/23.</i>
                </p>

                <br /><br />

                <p>
                    <a href="https://www.charlespetzold.com/code/index.html">Code</a> is a really fun read if you are interested in a comprehensive history and technical understanding of how computers work. The author, Charles Petzold, is a Microsoft MVP and was named one of seven <a href="https://en.wikipedia.org/wiki/Windows_Pioneers">Windows Pioneers</a> for his contributions to technical writing.
                </p>

                <p>
                    What makes code really interesting is that Petzold starts from the ground floor: he begins with a story of children using flashlights to communicate between houses to illustrate how binary information (flashlight on or off) can be used to communicate anything. He covers the history of how information is encoded and transmitted: counting systems (binary, decimal, hex), encodings (braille, morse code), and how electronic circuitry is used to transmit information (telegraph relays, logic gates, and eventually chips and computer architectures). Petzold works to keep things simple, making a point of explaining how to build basic computer components using technology that has existed for over a hundred years: explaining how you could build basic logic gates and computer chips using only telegraph relays. Code was written in 1999, and finishes with sections on operating systems, low and high level languages and the graphical revolution – some of which feels a little dated nearly 25 years later. Code is a great overview of the history of information encoding and computer engineering.
                </p>

                <br /><br /><br /><br /><br /><br /><br /><br />
            </article>
        </>
    );
}

export default CodeBookReview;
