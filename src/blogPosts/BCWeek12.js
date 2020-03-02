import React from 'react';
import { Carousel } from 'react-bootstrap';

function BCWeek12() {
    return (
        <>
            {/* <!-- Main Text --> */}
            <article className="text-justify">

                <p>
                    Demo day! After 4 weeks of prework and 12 weeks of full-time Bootcamp,
                    everything culminated in the presentation of our final projects on Demo Day!
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/demo-day-audience-my-speech.jpg"
                        alt="Robbie presenting MPM2" />
                    <figcaption className="figure-caption text-center">
                        Yours truly giving his presentation at Demo Day
                        </figcaption>
                </figure>

                <p>
                    Our final week was structured like this:
                        <ol>
                        <li>
                            <span className="text-danger">Monday & Tuesday</span>: Final days of coding.
                            </li>
                        <li>
                            <span className="text-warning">Wednesday</span>: 10:30am code freeze. Work on README's and
                            prepare Demo Day presentations.
                            </li>
                        <li>
                            <span className="text-success">Thursday</span>: Final dress rehearsal in the morning. Demo
                            Day reception at 11:30am.
                            Introductory speeches at Noon. Open house until 1pm.
                            </li>
                        <li>
                            <span className="text-primary">Friday</span>: Retro and feedback.{' '}
                            <a href="https://breakoutgames.com/lexington" title="Breakout Games Website">Breakout Games</a>{' '}
                            after lunch. Evening:
                                Bootcamp Graduation party at{' '}
                            <a href="https://newtonsattic.com/index.php" title="Newton's Attic Website">Newton's Attic</a>.
                            </li>
                    </ol>
                </p>

                <h3>Final Days of Coding</h3>

                <p>
                    Monday and Tuesday were our final days of coding. The stress levels in the room seemed
                    noticeably lower than at the end of week 11. At the end of week 11, many of us were still trying
                    to implement new stories, and the time crunch was bearing down on us. By Monday of week 12, if
                    we had not yet started a new story, it was likely that that story would now be pushed to a future
                    sprint. We were now in the process of polishing up our code and making small improvements.
                    </p>

                <p>
                    Most of my major stories got wrapped up the previous Friday. The final major story that I was
                    attempting to implement was a timer function to kick inactive users out of the queue. I got
                    about halfway done Monday evening before determining that this was unlikely to get done this
                    sprint, and added it to my features list for next sprint!
                    </p>

                <p>
                    On Tuesday, I set about tackling my Google Cloud hosting problem. For some reason, Google Cloud
                    did not like the fact that I used both React and Laravel in one project file. After attempting to
                    debug this with both Justin and Ian, and with time now running dangerously low, I decided that this
                    build would have to be run locally, and went about the process of hosting my app from my IP address.
                    Once I got my site hosted locally
                    (I implemented it fully sometime Tuesday afternoon), I spent my remaining time testing for bugs
                    and bringing my code up to production standards.
                    </p>

                <h3>Demo Day Prep</h3>

                <p>
                    Our code freeze was at 10:30am Wednesday morning. Now that I had a demo-able project, I set about
                        writing a blog post for the week and a <a>README</a> for MPM<sup>2</sup>. I then began
                    drafting my speech for our two-minute introduction presentations. We did several rehearsals — and
                    critiques — on Wednesday, and a final dress rehearsal on Thursday morning.
                    </p>

                <h3>Demo Day</h3>

                <p>
                    Around 10am, we went down and began setting up our booths. I borrowed some external speakers to
                    play my
                    synth sounds, and set up an external monitor for the visuals. I found that, although the app
                    worked locally
                    and could be run on a user's phone, it was much more stable on desktop versions. As such, Ian
                    offered to let
                    me use his laptop to demo the user experience. On Ian's laptop, users could control the various
                    synth and visual parameters. On my laptop, I had the source code and MySQL database, as
                    well as my blog
                    and LinkedIn pages available for users to peruse. I also set up a contact sheet, laid out some resumes, and
                    posted my name on the table!
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/demo-day-booth.JPG" alt="MPM2 Demo Day Booth" />
                    <figcaption className="figure-caption text-center">Ready for Demo Day!</figcaption>
                </figure>

                <p>
                    Around 11:30am, the guests started to arrive! We then mingled and talked with friends and family
                    for
                    about 30 minutes. Waiting was making me a little anxious, so I was glad when the instructors
                    began
                    their presentations around noon. Nick, Justin, and Ian all talked about the Bootcamp and
                    our final project development process. After they were done speaking, we each had two minutes to
                    introduce ourselves and to talk about our projects.
                    </p>

                {/* <!-- Carousel Images --> */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/demo-day-instructors.JPG"
                            alt="Justin, Ian, and Josh" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Lead instructor Justin talking about
                                        the Bootcamp</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/demo-day-audience-2.jpg"
                            alt="Demo Day Audience" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">The audience — ready for some Demo Day
                                        fun!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/demo-day-robbie-presenting.jpg"
                            alt="My presentation speech" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Explaining MPM2</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <p>
                    For my presentation, I talked about my background in{' '}
                    <a href="spotify:album:3izLLRwlc66KiLs3M6P4wk" title="My single 'Wake'">music making</a>, my intention of
                    combining this passion with our tech stack for the final project, and finally how
                        MPM<sup>2</sup> worked.
                    I even had two jokes planned for my speech — one about how I cut off all my long hair, and
                    another about
                    the value of my project (none — it's art). They were both received well — but don't worry, no
                    plans to
                    go into stand up comedy anytime soon.
                    </p>

                {/* <!-- Carousel Images --> */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/demo-day-booth-talking.jpg"
                            alt="Talking at my Demo Day booth" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Talking with Wendy Trivisonno about MPM2</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/demo-day-fans.JPG" alt="Demo day booth" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2">My Demo Day fans — Back L-R: Martha, Judi, Bob, Jon
                                        Front: Anna</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <p>
                    After presenting, we had about an hour of open booths. I got to showcase MPM<sup>2</sup> to
                    several groups of people, and many of them managed to make some rather interesting sounds and visuals!
                    It was really fun getting to talk about a project that had consumed so much of my time for the last 3 weeks.
                    I also got some really interesting feedback and advice on where to take the project next!
                    </p>

                <h3>Post Demo Day</h3>

                <p>
                    After Demo Day wrapped up, we all went across the street to{' '}
                    <a href="https://www.eastendtapandtable.com/" title="EE T&T Website">East End Tap and Table</a>{' '}
                    for a celebratory meal. Still staying true to my new Pescetarian lifestyle, I ordered the
                    tofu siam-wich. It was really good!
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/demo-day-food.JPG" alt="My food" />
                    <figcaption className="figure-caption text-center">Tofu siam-wich at East End Tap and Table</figcaption>
                </figure>

                <p>
                    It feels a little strange that the Bootcamp is over. At the start, 16 weeks seemed
                    like a really long time — yet it mostly flew by. I really enjoyed the projects we
                    worked on, and the occasional ping pong or melee match definitely added to the overall fun. I'm
                    really excited to continue updating this blog, and to keep you in the loop as I kick my job hunt
                    into high gear!
                    </p>

                {/* <!-- White space --> */}
                <br /><br /><br /><br /><br /><br /><br /><br />

            </article>
        </>
    );
}

export default BCWeek12;
