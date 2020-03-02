import React from 'react';
import { Carousel } from 'react-bootstrap';

function BCWeek10() {
    return (
        <>
            {/* <!-- Main Text --> */}
            <article className="text-justify">

                {/* <!-- <h3 className="text-center">Heading</h3> --> */}
                <p>
                    This blog post brought to you by: a happy girlfriend.
                    Anna and I went to a UK Basketball game this week and
                    split a Vanilla cone. Rupp Arena ice cream is the best.
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/rupp-ice-cream-nov-2019-blur.png" alt="Rupp Arena Ice Cream" />
                    <figcaption className="figure-caption text-center">Vanilla cone — very yummy!</figcaption>
                </figure>

                <p>
                    Last week, we began our final sprint of the Bootcamp. We have
                    two and a half weeks to work on our final projects before class demo
                    day on Dec. 4th. On Monday, we each began researching and writing
                    our MVP proposals. For mine, I wanted to combine my background in
                    music production, with the LAMP tech stack that we have covered
                    in the Bootcamp.
                    </p>

                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/final-project-mvp-cover.png"
                            alt="MVP Cover Page" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 mb-4 bg-dark rounded">MVP Cover Page</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/final-project-mvp-intro.png"
                            alt="MVP Intro" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 mb-4 bg-dark rounded">MVP Intro</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/final-project-mvp-wireframe.png"
                            alt="MVP Wireframe" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 mb-4 bg-dark rounded">MVP Wireframe</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <p>
                    Our MVP proposal serves to both explain what out project
                    does, and to map out a road map for the development process (including MoSCoW,
                    stories, and wireframes). Taking the time to really plan out our
                    project should hopefully save us a lot of time later on — if
                    there’s one thing I have learned in the Bootcamp, it is the
                        dangers of <a href="https://en.wikipedia.org/wiki/Cowboy_coding" title="Wikipedia: Cowboy Coding">cowboy coding</a>.
                    </p>

                <p>
                    Despite the detailed planning, I still had to remain pretty flexible
                    during this first week of development. I planned on onboarding two
                        frameworks/libraries,{' '}
                    <a href="https://tonejs.github.io/" title="Tone.js Homepage">Tone.js</a>{' '}
                    (for sound) and{' '}
                    <a href="https://ptsjs.org/" title="Pts.js Homepage">Pts.js</a>{' '}
                    (for visuals). The documentation pages for both of these frameworks/libraries
                    talked about how simple they are to learn, and the example code was
                    often only 10-15 lines long. Because of this, I had a certain time
                    expectation for incorporating in these new techs. Nothing ever
                    goes quite as planned, and it turned out that Pts doesn’t work all
                        that well with React (I had to download an auxiliary package{' '}
                    <a href="https://www.npmjs.com/package/react-pts-canvas" title="NPM: react-pts-canvas">react-pts-canvas</a>).
                    I ended up getting the synth to work more quickly than the visuals,
                    and headed into the weekend with a working synth with basic control parameters.
                    </p>

                <p>
                    The first week of our final project sprint had its highs and lows.
                    I really enjoyed the planning process, and was definitely excited
                    to get started! It was rewarding to see aspects of the process come
                    to life, although there were times when things weren't working, and I
                    ended up with less functioning code than I started the day with. Next
                    week we will only have 3 class days to work on the project before
                    breaking for Thanksgiving. I hope to get a lot done by Wednesday,
                    and to then squeeze some work in over the holiday break!
                    </p>

                {/* <!-- White space --> */}
                <br /><br /><br /><br /><br /><br /><br /><br />

            </article>
        </>
    );
}

export default BCWeek10;
