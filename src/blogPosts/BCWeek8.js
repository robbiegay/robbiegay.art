import React from "react";
import { Carousel } from "react-bootstrap";

function BCWeek8() {
    return (
        <>
            {/* <!-- Main Text --> */}
            <article className="text-justify">

                <h3 className="text-center">Weekly Update</h3>

                <p>
                    On Monday we worked remote. President Trump held a last minute
                    rally for the Kentucky Republicans and there was concern about
                        traffic being congested. On Tuesday, Kentucky{" "}
                    <a href="https://en.wikipedia.org/wiki/Andy_Beshear#Governor_of_Kentucky" title="Andy Beshear Wikipedia">elected a new governor</a>{" "}
                    and UK opened their basketball season by defeating #1 Michigan State.
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/trump-rally.JPG" alt="Trump Rally – Pic Credit: Jon Gay" />
                    <figcaption className="figure-caption text-center">Dad sent me a picture of the Trump fans gathering — I was at home avoiding the traffic.</figcaption>
                </figure>

                <p>
                    Awesome Inc takes ping pong pretty seriously. There is a tournament every year, and
                    several Inc-ers are highly skilled. I’m trying to get better but still manage to
                    lose just about every match I play. We played some round robin ping pong this week.
                    You have to volley and then run around the table to return the shot.
                    </p>

                <video width="100%" controls>
                    <source src="/blogAssets/video/round-robin-ping-pong.MOV" type="video/mp4" />
                    Your browser does not support HTML5 video.
                      </video>
                <p>
                    On Thursday, our informal Bootcamp Lunch Club™ ate at{" "}
                    <a href="https://www.sunrisebakeryky.com/" title="Sunrise Bakery Website">Sunrise Bakery</a>.
                    They have a cool “make me a sandwich” option, so we all took our chances
                        with mystery sandwiches. On Friday we had Bootcamp Happy Hour! About 2/3<sup>rds</sup>
                    of our class met up at <a href="http://marikkaslex.com/" title="Marikka's Website">Marikka’s</a>{" "}
                    for drinks and games. Below is a picture of
                    Abram beating Taylor and I two-on-one in foosball. On Saturday, Anna and I
                    went to Sahara. Ethan has been telling me how good their food is all semester. I was
                    really impressed — their garlic sauce is awesome!
                    </p>

                {/* <!-- Carousel Images --> */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/sunrise-bakery-sweets.JPG"
                            alt="Sunrise Bakery Sweets" />
                        <Carousel.Caption className="pb-5">
                            <p className="d-inline-flex px-2">Sunrise Bakery: Homemade Oreo, Pear Pastry, and Pecan Bar</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/sunrise-bakery-sandwich.JPG"
                            alt="Sunrise Bakery Sandwich" />
                        <Carousel.Caption className="pb-5">
                            <p className="d-inline-flex px-2">Sunrise Bakery: The "make me a sandwich" option</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/marikkas-foosball.JPG"
                            alt="Marikka’s(L-R): Taylor, Myself, and Abram playing foosball" />
                        <Carousel.Caption className="pb-5">
                            <p className="d-inline-flex px-2"></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/sahara.JPG"
                            alt="Sahara Chicken Shawarma" />
                        <Carousel.Caption className="pb-5">
                            <p className="d-inline-flex px-2 bg-dark rounded">Sahara: Chicken Shawarma — 8/10 spice level</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <br />

                <h3 className="text-center">Bootcamp Update</h3>

                <p>
                    Last week we continued working on learning Laravel.
                        I worked through the remaining{" "}
                    <a href="https://laracasts.com/series/laravel-6-from-scratch" title="Laravel 6 from Scratch">Laracast Videos</a>{" "}
                    and then began working on the{" "}
                    <a href="https://robbiegay.github.io/react-restaurant/" title="Laravel Library GitHub Repo">Laravel Library project</a>.
                    This is the first time that the instructors have assigned this
                    project, and apparently they didn’t think we could
                    get it done in the allotted 3 days. On Thursday,
                    6 of us stuck around the classroom until 8 or 9 pm to
                    finish in time for Friday Demo Day. There might have
                    even been a blood oath to not leave until the project
                    was completed…
                    </p>

                <p>
                    I had a lot of fun working on the Laravel Library. I learn
                    more by doing and after following along with the Laracast Videos
                    for several days, I was really ready to jump in and start coding!
                    This project has made me realize that I like Back End. I really enjoy
                        the problem solving aspect of Back End programming, and found using{" "}
                    <a href="https://laracasts.com/series/laravel-6-from-scratch/episodes/30" title="Laracast Video on foreign keys">foreign keys</a>{" "}
                    to link items between tables really neat.
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/laravel-library.png" alt="A screenshot of my Laravel Library project" />
                    <figcaption className="figure-caption text-center">The Central Laravel County Public Library homepage</figcaption>
                </figure>

                <p>
                    On Thursday we wrapped up the{" "}
                    <a href="https://www.hackerrank.com/" title="HackerRank Website">HackerRank</a>{" "}
                    morning warm-ups &#128533;. I have really enjoyed starting the day with some fast
                    paced problem solving. Although we now get an extra hour to work on our various projects,
                    I will miss starting the day like this.
                    </p>

                <p>
                    We are officially 2/3<sup>rds</sup> of the way through the Bootcamp! On one hand, it seems
                    like the time has absolutely flown by. I was a little worried that 16 weeks of daily
                    programming was going to be hard to get through, but now I can’t believe that it’s
                    almost over! It’s also hard to believe that in July I knew nothing about programming,
                    and now I feel comfortable with a (small) laundry list of languages and frameworks:
                    HTML, CSS, JavaScript, Bootstrap, React, PHP, MySQL, Laravel…
                    </p>

                <p>
                    Upon completion of the Bootcamp, I hope to continue refining my knowledge portfolio.
                    I obviously think that I will learn a great deal at whatever job I land at, but I
                    also hope to use a 30-60-90 day plan to augment that learning with some work on my
                    own. A 30-60-90 day plan involves determining what you should be working on now
                    (your 30-day goal), what you plan on working on next (60-day goal), as well as
                    looking to the future, and brainstorming what might be on the horizon (90-day goal).
                    </p>

                <p>
                    I’m looking forward to this final stretch of the Bootcamp. Although I don’t actually
                    want it to be over, I am really excited to find a job and starting work as a web developer!
                    </p>

                <h3 className="text-center">Bonus</h3>

                <p>
                    This week I learned that I write my alphabet backwards. This is news to me. I had
                    never paid any attention to how I write letters, and I had assumed that others
                    write their letters in a similar manner. Midweek, some fellow Bootcampers saw
                    me writing on the white board, and commented that something seemed a little off.
                    I ended up writing out the entire alphabet (thankfully I still remember the song).
                    Apparently my e’s are the worst offender.
                    </p>

                <figure className="figure">
                    <img className="img-fluid border" src="/blogAssets/img/how-i-write-letters.JPG" alt="Whiteboarding our different calligraphy" />
                    <figcaption className="figure-caption text-center">Comparing calligraphy</figcaption>
                </figure>


                {/* <!-- White space --> */}
                <br /><br /><br /><br /><br /><br /><br /><br />

            </article>
        </>
    );
}

export default BCWeek8;
