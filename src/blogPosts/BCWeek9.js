import React from 'react';
import { Carousel } from 'react-bootstrap';

function BCWeek9() {
    return (
        <>
            {/* <!-- Main Text --> */}
            <article className="text-justify">

                <h3 className="text-center">Weekly Update</h3>
                <p>
                    Lots of fun things happened this week! On Monday, Bootcamp and Brews —
                    a meet up of past, current, and (potentially) future Bootcamp students —
                        was held at <a href="https://www.westsixth.com/" title="West 6th's Website">West 6th Brewery</a>.
        It was a lot of fun, but perhaps the most exciting thing happened as
        we were leaving: SNOW!!!
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/first-snow-kroger.JPG" alt="First snow in the Kroger parking lot" />
                    <figcaption className="figure-caption text-center">Our first snow of the year</figcaption>
                </figure>

                <p>
                    On Tuesday, Ian and I met up to make some music — stay tuned for the{' '}
                    <a href="https://soundcloud.com/robbiegay" title="My SoundCloud Page">robbiegay</a>{' '}
                    x <a href="https://soundcloud.com/whythough" title="Ian's SoundCloud Page">whythough?</a>{' '}
                    remix. On Thursday, Bootcamp Lunch Club struck again. We went to{' '}
                    <a href="http://www.ilovecajun.com/">Bourbon and Toulouse</a>. I had recently decided to become
        a pescatarian, so I couldn’t order my usual chicken etouffee. Finally, on Friday, Awesome Inc
        had a potluck style family lunch. Overall, a lot of good food was eaten this week!
                    </p>

                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/music-with-ian.JPG"
                            alt="Ian and I making music" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Making beats!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/bnt-nov-14.JPG"
                            alt="Food at BnT" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">BnT: Artichoke and Pram, Corn and Black Beans</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/bnt-nov-14-group.JPG"
                            alt="Group shot at BnT" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">L-R: Anna, Sam, Rachael, Ethan, Ian</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/family-lunch-thanksgiving.JPG"
                            alt="Family lunch at Awesome Inc" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Potluck style family lunch!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <p>
                    On Friday night, we had our second Bootcamp Happy Hour! We started at{' '}
                    <a href="https://www.goodfellaspizzeria.com/" title="Goodfella's Website">Goodfella’s</a>{' '}
                    for pizza, and then migrated over to the{' '}
                    <a href="https://www.theburlky.com/arcade/" title="Burl Arcade Website">Burl Arcade</a>!
            Lots of quarters were spent, Anna smoked me in some skee ball, and some very long Uno and giant
            Jenga games closed out the night.
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/bootcamp-burl-happy-hour.JPG" alt="Skee Ball at the Burl Arcade" />
                    <figcaption className="figure-caption text-center">Ian and Anna playing Skee Ball</figcaption>
                </figure>

                <h3 className="text-center">Bootcamp Update</h3>

                <p>
                    Our project this week was to deconstruct and recreate a popular website.
                    I selected Instagram, and decided to turn it into{' '}
                    <a href="https://github.com/robbiegay/catgram-front-end" title="Catgram Front End Repo">Catgram</a>!
            Step one was to break down various components of the site, and to MoSCoW these
            features. MoSCoW-ing a project involves sorting the proposed features into
            the categories of: Must have, Should have, Could have, and Won’t have.
                    </p>

                <p>
                    Once I had my pseudo code, MoSCoW, and stories completed, I got to work writing
                    code! This week was a big lesson in project and time management. After spending
                    Monday pseudo coding, we only had 4 days to finish the project. The first task
                    on everyone’s plate was to setup our login and logout functionality. I think
                    that most of us expected this to be a fairly quick process, and therefore budgeted
                    a lot of time for other stories. By Friday’s Demo Day, very few people had made
                    it past the login/logout step. Next week we will begin looking at strategies
                    for budgeting time for various features.
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/agile-whiteboard.JPG" alt="Attack of the Clones Order of Ops" />
                    <figcaption className="figure-caption text-center">Order of operations for Attack of the Clones. Most people only made it to Auth...</figcaption>
                </figure>

                <p>
                    Next week we will start our final project sprint! I am very excited to
                    hone in on a topic for my final project. I would like to do something
                    that combines my background in electronic music production with the LAMP
                    tech stack that we have been learning in the Bootcamp!
                    </p>

                {/* <!-- White space --> */}
                <br /><br /><br /><br /><br /><br /><br /><br />

            </article>
        </>
    );
}

export default BCWeek9;
