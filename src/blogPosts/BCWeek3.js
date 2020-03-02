import React from "react";

function BCWeek3() {
    return (
        <>
            {/* <!-- Main Text --> */}
            <article className="text-justify">

                <p>
                    Bootcamp Week 3 was both fun, and felt a lot more challenging
                    than the previous weeks. Both Weeks 2 and 3 involved the
                    completion of 4 projects. One Monday I added some stretch
                        goals to the first 3 projects — keyboard input for the <a href="https://robbiegay.github.io/weather-app/">Weather
                        App</a> and <a href="https://robbiegay.github.io/calculator/">Calculator</a>; a “get weather by current location” button
                        for the Weather App; a running scoreboard for <a href="https://robbiegay.github.io/tic-tac-toe/">Tic-Tac-Toe</a>;
                and I also wrote my first README file for the Calculator app
                (more on README’s later).
                    </p>

                <p>
                    We also took headshots and a group photo this week — check out our cohort below!
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/bootcamp-group-photo.JPG"
                        alt="Fall 2019 Bootcamp Group Photo" />
                    <figcaption className="figure-caption text-center">
                        L-R: Ian Rios (Assistant Instructor), Todd Trivisonno, David Joyce, Robbie Gay, Sam
                        Wheeling, Abram Gornik,
                        Will McGill, Taylor Akin, Michael Loyselle, Rachael Yoder, Eric Hampton, Justin Hall (Lead
                        Instructor), Ethan Borkosky
                        </figcaption>
                </figure>

                <p>
                    I’ve been trying to wake up early and either go to the gym or
                    get some work done before class starts. On Tuesdays, I have been
                    starting my day across the street at{" "}
                    <a href="http://acupofcommonwealth.com/">Cup of Commonwealth</a>.
                It has been really nice to be able to have about an hour before
                class to plan out what projects I want to work on, and to even get
                a bit of a headstart on the day’s coding work! I also just REALLY
                enjoy being up that early. Note: I hate the act of actually getting out of
                bed (I love to sleep), but once I'm up, I love those predawn hours.
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/cup-of-common.JPG"
                        alt="Some Tea at Cup of Commonwealth" />
                    <figcaption className="figure-caption text-center">
                        I've been going with the Fogged Chai
                        </figcaption>
                </figure>

                <h3>Sliding Puzzle Game</h3>

                <p>
                    On Tuesday, we started working on our final project of the 2 week sprint.{" "}
                    <a href="https://robbiegay.github.io/sliding-puzzle/">The Sliding Puzzle game</a>{" "}
                    gave be a lot of headaches! I took an object-oriented approach, using an
                    array to hold 16 objects, each containing properties such as the array’s
                    name, and its current position on the board. Trying to conceptualize
                    how the tiles would move around the board, while really the physical div’s
                    containing each tile remained stationary, and while the objects
                    themselves weren’t even on the board, was really hard to make sense of.
                    </p>

                <p>
                    Throughout this week’s warm-ups and the projects themselves, the instructors really
                    stressed working together to think through common problems. Several group whiteboarding sessions
                    were
                    taking place throughout the week, and I don’t think I could’ve gotten through this week’s work
                    without being able to talk/think through the problems with some of my fellow bootcampers and the
                    instructors.
                    </p>

                <h3>Working with JavaScript</h3>

                <p>
                    I’m really interested in continuing to learn more about JavaScript! We have already learned how
                        to do so much using <abbr title="Plain JavaScript without any additional Libraries or Frameworks">vanilla JS</abbr>, and yet I know that we have only barely scratched the surface. We will
                        soon start working with <a href="https://reactjs.org">React</a>, and begin to move away from using only vanilla JS.
                    </p>

                <p>
                    I’m also really excited to do some more research on APIs and what various JS
                    frameworks and libraries can allow you to do. I feel like there are so many cool things
                    that you can do with this technology, and I can't wait to learn more!
                    </p>

                <h3>Breakfast Club</h3>

                <p>
                    On Thursday, we had our first Coding Breakfast Club! A group of bootcampers, instructors, and
                    local developers all met up from 6-8am at Awesome Inc for some optional coding and
                    conversation. Starting at 6am meant that I had to wake up
                    pretty early in order to shower and drive in from Versailles. I ended up waking up at 4:45am, and
                    I swear I must’ve set a world record for the earliest someone has EVER gone to sleep — 9:30pm —
                    it was so early!
                    </p>

                <p>
                    About half of the bootcampers made it to this bonus morning session. There were also several real-world
                    developers in attendance, and it was really cool to get to talk with some people who are
                    currently working as devs, and to hear about the various fields that they currently work in. We spent most of the morning session setting
                        up <a href="https://flutter.dev">Flutter</a> on our machines, and we will hopefully get more
                into working with Flutter in this week’s session!
                    </p>

                <h3>README’s</h3>

                <p>
                    This week I added <a href="https://github.com/robbiegay/calculator">my first README</a>{" "}
                    to a project! I added some basic info about my Calculator app,
                    as well as diving fairly deeply into the various edge-cases that I had to solve for while building
                        and testing the app. Assistant Instructor <a href="http://ianrios.me/">Ian</a> also gave me a tip about including
                links in the project's repo descriptions. Although all of the apps that I have built so far are hosted on
                GitHub Pages, without easy access to links, many who visit my page may never realize this.
                Ian recommended that I include links to the hosted app in the description of each repo.
                    </p>

                <figure className="figure">
                    <img className="img-fluid border" src="/blogAssets/img/adding-links-to-repos.png"
                        alt="I added links to my GitHub repos" />
                    <figcaption className="figure-caption text-center">
                        Ian recommended that I add links to my GitHub repos
                        </figcaption>
                </figure>

                <p>
                    I made use of this great template for writing README's, made by
                        GitHub user <a href="https://gist.github.com/PurpleBooth">PurpleBooth</a>. Check out
                    the template here:{" "}
                    <a href="https://gist.githubusercontent.com/PurpleBooth/109311bb0361f32d87a2/raw/8254b53ab8dcb18afc64287aaddd9e5b6059f880/README-Template.md">README Template</a>{" "}
                </p>

                {/* <!-- White space --> */}
                <br /><br /><br /><br /><br /><br /><br /><br />

            </article>
        </>
    );
}

export default BCWeek3;
