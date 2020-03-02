import React from 'react';
import { Carousel } from 'react-bootstrap';


function PWWeek2() {
    return (
        <>
            {/* <!-- Main Text --> */}
                <article className="text-justify">

                    <p>
                        We just wrapped up Bootcamp Week 1 — it was really 
                        exciting to dive into our first week of full-time 
                        coding, but it also came with some personal highs and lows.
                        A high was that the first week of Bootcamp was a
                        lot of fun! We learned about design theory, started
                        working with the Bootstrap framework, and learned some
                        more about objects in JavaScript!
                    </p>
                    <p>
                        Some lows: my girlfriend’s 16-year-old cat went missing
                        on Monday. Smokey is awesome, and I really hope he comes
                        home soon! And then on Friday, my cat came down with some sort
                        of severe bacterial infection, and ended up dying at the
                        vet’s office several hours later. Overall, it was a pretty rough
                        week for cats :&lpar;
                    </p>

                    {/* <!-- Carousel Images --> */}
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src="/blogAssets/img/smokey.JPG" alt="Smokey Billhymer" />
                            <Carousel.Caption className="pb-5">
                            <p>Smokey has been missing since Monday. If you see my dude
                                        wandering around the Beaumont area, please let me know!!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/mickey.JPG"
                                    alt="Mickey passed away on Friday" />
                            <Carousel.Caption>
                            <p>Mickey passed away on Friday :(</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/lunch-athenian-grill.JPG"
                                    alt="Lunch at Athenian Grill" />
                            <Carousel.Caption>
                            <p>Got lunch with my Grandpa Bob on Friday!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <p>
                        A final high of the week: A perk of going to school downtown
                        means that I was able to meet up with my Grandfather for
                        lunch! His office is across the street from the new
                        Athenian Grill, so I walked over there on my lunch break
                        and had a really good time hanging out with him!
                    </p>

                    <h3 className="text-center">Design</h3>

                    <p>
                        Jacqueline, a graphic designer here at Awesome Inc, came by
                        on Wednesday to talk to us about some basic design principles.
                        Her talk was about{' '}
                        <span className="text-danger">C.</span><span className="text-primary">R.</span><span className="text-warning">A.</span><span className="text-success">P.</span>:
                    </p>

                    <ol>
                        <li><span className="text-danger">C</span>ontrast: can be contrast of color, type weight, texture, shape</li>
                        <li><span className="text-primary">R</span>epetition: repeated colors, patterns, or elements</li>
                        <li><span className="text-warning">A</span>lignment: how do the elements on the page align with one another?</li>
                        <li><span className="text-success">P</span>roximity: grouping, whitespace; how close are elements to each other?</li>
                    </ol>

                    <p>
                        We talked about{' '}
                        <span className="text-danger">C.</span><span className="text-primary">R.</span><span className="text-warning">A.</span><span className="text-success">P.</span>{' '}
                        principles, and then looked at
                        some examples of bad design. After our design workshop wrapped
                        up, I turned back to my blog and realized just how much additional
                        design work my blog could use! I really enjoyed learning more
                        about design, and am looking forward to our future design theory sessions.
                    </p>
                    <p>
                        This week we started working with the Bootstrap framework. A framework 
                        is a software abstraction that adds certain functionality to common code.
                        The main difference between a framework and a library is "inversion of control" — 
                        in a framework, the global flow of control is employed by the framework, rather 
                        than the user. What using Bootstrap meant for me, was that I could
                        take something that previously took me 40-50 lines of CSS, and enter only a
                        word or two of Bootstrap and achieve the same effect… often with
                        even better results. Switching from vanilla CSS to Bootstrap was
                        a bit like being given superpowers — it was amazing what sort of
                        features I could add to my blog with just a few Bootstrap classes!
                    </p>

                    <h3 className="text-center">JavaScript Objects</h3>

                    <p>
                        I definitely struggled with understanding JavaScript objects at
                        first. I tried reading the “objects” chapter in{' '}
                        <a title="Eloquent JavaScript" href="https://eloquentjavascript.net/06_object.html">“Eloquent JavaScript”</a>{' '}
                        on Monday. By “tried to read”, I mean that I made it about halfway through
                        before becoming so lost that I only skimmed the rest, knowing that nothing else was going to
                        stick. Later in the week, I began working through the <a title="MDN JS Objects Module"
                        href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects"> MDN JavaScript
                        Objects module</a>. Getting to read a second explanation of JS objects really helped me begin
                        to understand what objects are &lpar;hint: they are everything, and everything is them&rpar; 
                        and why they are useful.
                    </p>
                    <p>
                        We rounded out the week by completing an assignment that
                        involved applying what we had learned about JS objects.
                    </p>

                    <h3 className="text-center text-secondary d-none d-sm-block">Bouncing Balls Game</h3>

                    {/* <!-- Bouncing Balls Game (only appears on sm size and larger) --> */}
                    <div className="border embed-responsive embed-responsive-4by3 mb-1 d-none d-sm-block">
                        <iframe className="embed-responsive-item" title="Bouncing Balls Game" height="515"
                            src="https://robbiegay.github.io/bouncing-balls/">
                        </iframe>
                    </div>

                    <p className="d-none d-sm-block text-secondary pb-3"><small>
                        Instructions: Control the red circle with WASD keys. Try to eat all 25 bouncing balls. 
                        You win the game when all the balls are gone. Note: If controls don't seem work, 
                        try click once in the window of the game.
                    </small></p>


                    <p>The <a title="MDN Bouncing Balls" 
                        href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features">
                        Bouncing Balls project</a> was a guided exercise as part of MDN’s JS objects
                        module. It was nice to still have a bit of hand holding throughout this project, as it allowed
                        us to build a fairly “complex” &lpar;complex to me&rpar; program, and to see how objects made 
                        a program like this possible.
                    </p>

                    <h3 className="text-center">Coming Attractions</h3>

                    <p>
                        Over the next two weeks, we are going to be diving a bit more deeply into 
                        JavaScript, while also doing a lot of project-based work. We are going to 
                        be building  a Tic Tac Toe game, a Calculator, a Sliding Puzzle, and 
                        finally, a Weather App!
                    </p>

                    {/* <!-- White space --> */}
                    <br /><br /><br /><br /><br /><br /><br /><br />

                </article>
        </>
    );
}

export default PWWeek2;
