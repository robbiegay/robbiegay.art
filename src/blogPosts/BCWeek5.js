import React from 'react';
import { Carousel } from 'react-bootstrap';

function BCWeek5() {
    return (
        <>
            {/* <!-- Main Text --> */}
            <article className="text-justify">

                <p>
                    A lot of things happened this week — buckle up for a relatively long weekly update!
                    </p>

                <h3 className="text-center">The Big Chop</h3>

                <p>
                    On Wednesday, I scheduled my first haircut in nearly 5 years!
                    I started growing my hair out in January of 2016, with the
                    intention of one day having a “man bun”. By the Fall of 2016,
                    my hair was finally long enough to go up in a bun… and from
                    there it just kept growing and growing!
                    </p>

                <p>
                    Over the last few months, I had started to get a little tired
                    of its extreme length. It had gotten to the point where
                    it was almost too long for a bun and, after showering, my
                    hair would remain wet for hours! This month I decided that
                    I was going to go ahead and commit, so I scheduled the big chop!
                    </p>

                <p>
                    It has definitely been a significant change — I keep running my
                    hands through my hair, and I admit to surprising myself a few
                    times when I walk by a mirror. So far, I haven’t really
                    missed the length — I think I’ve been so busy enjoying
                    not having hair in my eyes, that I haven’t really felt any
                    remorse for the missing locks.
                    </p>

                {/* <!-- Carousel Images --> */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/robbie-before-the-haircut-blur-frame.jpg"
                            alt="Before the big chop" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Standing outside the barbershop!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/robbie-getting-a-haircut-blur-frame.jpg"
                            alt="Starting the haircut" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Greg brushing out my hair</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/robbie-mid-chop-blur-frame.jpg"
                            alt="Midchop" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">The final product...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/robbie-and-anna-after-haircut-crop.jpg"
                            alt="After the haircut" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">The actual final product... a happy girlfriend!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/robbie-hair-measured-length.JPG"
                            alt="15 inches of hair" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">15-inches — ready for donation to Wigs For Kids!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <h3 className="text-center">Fall Festivities</h3>

                <p>
                    On Saturday, Anna and I went hiking in Berea. We started off
                    by getting some bagels at{' '}
                    <a href="https://www.instagram.com/nativebagelco/" title="Instagram">Native Bagel Co</a>.
            I would really recommend the salt bagel with honey-rosemary cream cheese — so good!
            We then hiked up to the top of East Pinnacle. Even though
            we were hoping for more Fall colors, the view was amazing
            and it was perfect weather for being outside. Afterwards,
                we drove over to{' '}
                    <a href="https://www.instagram.com/eckertsorchard/" title="Instagram"> Eckert’s Orchard</a>{' '}
                    for some more Fall fun! We ordered their warm doughnut
                    Sunday: a warm apple cider doughnut, covered with vanilla
                    ice cream, and drizzled with caramel syrup. Very yummy!
                    </p>

                {/* <!-- Carousel Images --> */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/berea-hike-view.JPG"
                            alt="View from East Pinnacle" />
                        <Carousel.Caption>
                            <p>The view from East Pinnacle!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/robbie-and-anna-berea-hike.JPG"
                            alt="Anna and I at East Pinnacle" />
                        <Carousel.Caption>
                            <p>Got a selfie with nature!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/berea-hike-fall-foliage-blur-frame.jpg"
                            alt="A tree turning orange" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Saw lots of Fall foliage!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/anna-on-berea-hike-blur-frame.jpg"
                            alt="Anna hiking in Berea" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Anna leading the way</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/doughnuts-and-applecider.JPG"
                            alt="Applecider doughnuts, a doughnut sunday, and a cider slushie" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Got lots of Fall goodies at the Apple Orchard. That's a warm applecider doughnut
                                        sunday on the right!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <h3 className="text-center">React!!!</h3>

                <p>
                    This week we started working with the{' '}
                    <a href="https://reactjs.org" title="React Documentation">React.JS</a>{' '}
                    library. React is an open source project produced by Facebook,
                    and is billed as “A JavaScript library for building user interfaces”.
                    </p>

                <p>
                    A major feature of React is its use of components.
                    I would define a React component as a self-contained unit that
                    compartmentalizes a certain piece of functionality. This can be
                    very useful: you can write a component for a button. This button
                    component can contain all of the necessary code for a button (its shape,
                    what happens when it is clicked, etc). You can then call that
                    button component anywhere you want to insert a button on your site.
                    </p>

                <p>
                    Here is an example of a "Card" component that I made for our{' '}
                    <a href="https://robbiegay.github.io/react-restaurant/">React Restaurant project</a>:
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/using-react-components.png"
                        alt="An example of a React component" />
                    <figcaption className="figure-caption text-center">A React Component</figcaption>
                </figure>

                <p>
                    The card component creates an <code>&lt;h5&gt;</code> (header) element for
                        the title, an <code>&lt;h6&gt;</code> (header) element for the price, and
                        a <code>&lt;p&gt;</code> (paragraph) element for the description.
                        You may have noticed the <code>&#123;this.props.mealTitle&#125;</code> lines of code —
                                    A useful feature of components is that you can pass properties
                        into them using <code>props</code>.
                    </p>

                <p>
                    Within the Card component, I set the inner HTML of the above
                        mentioned elements to <code>&#123;this.props.INPUT&#125;</code>. React
                                        often uses an extension of JavaScript called{' '}
                    <a href="https://reactjs.org/docs/introducing-jsx.html" title="React Documentation">JSX</a>. JSX allows
                        you to put any valid JS expression within <code>{}</code> (curly braces),
                                    and that expression will then be evaluated. In my example
                        code, I placed <code>this.props.INPUT</code> within the curly
                        braces. <code>this</code> refers to the component itself,{' '}
                    <code>props</code> refers to properties of the object, and
                        then <code>INPUT</code> is a placeholder for whatever element
                                    you want to pass through to the component.
                    </p>

                <p>
                    When I call the component, I am then able to use this syntax
                    to pass code into the component.
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/card-example.png" alt="An example of component use" />
                    <figcaption className="figure-caption text-center">Calling the "Card" component</figcaption>
                </figure>

                <p>
                    In this example code, I pass in <code>mealTitle</code>,{' '}
                    <code>mealPrice</code>, and <code>mealDescription</code>.
                        Anything that I set these <code>props</code> equal to is inserted into
                                        the respective React component. The result of
                                        this example code is this:
                    </p>

                <figure className="figure">
                    <img className="img-fluid border" src="/blogAssets/img/card-result.png"
                        alt="The result of the component call" />
                    <figcaption className="figure-caption text-center">The result of the component call</figcaption>
                </figure>

                <p>
                    I found React fairly difficult to pick up. For the first few days,
                    I felt like I was aimlessly adrift. There
                    was so much to learn, that I wasn’t even sure where to turn my
                    boat. Slowly I was able to gain a little traction — I would
                    pick a project, experiment with React, and see what I could learn. A big part was being
                    willing to break things and make mistakes. After I had spent
                    some time building and breaking things, I slowly started to feel
                    more comfortable using React!
                    </p>

                <h3 className="text-center">The Pomodoro Method</h3>

                <p>
                    Warm-up Coach{' '}
                    <a href="https://jmstewart00.github.io" title="Josh's Website">Josh</a>{' '}
                    has recommended before that we take breaks. For me, a break typically
                    involved reading some content online or checking my phone. Unfortunately,
                    this isn’t really a ‘break’ as far as our brain is concerned — we
                    are merely switching from one type of stimulus to another. As such,
                    on Friday I decided to try the Pomodoro Method, and to start taking real breaks.
                    </p>

                <p>
                    The <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" title="Wikipedia">Pomodoro
                            Method</a>{' '}
                    involves setting a timer, working with laser focus for a defined length of
                    time, and then taking a short break. Here is an example of how these
                    breaks would work:
                    </p>


                <ul>
                    <li>25 minutes of work</li>
                    <li>5 minute break</li>
                </ul>

                <p>
                    After 4 of these Pomodoros, you then take a longer 15-30 minute break. An
                    important aspect of a Pomodoro is that it is indivisible —
                    you have to work for the full 25 minutes, and you have to maintain
                    your state of focus throughout. I found that I was able to keep my
                    focus much more effectively in these short bursts. Beyond this improved
                    focus, I found the real value in the type of breaks that I took.
                    </p>

                <p>
                    During my Pomodoro breaks, I tried to do something that didn’t involve a screen. Here are some
                    examples of breaks that I took:
                        <ul>
                        <li>Short walk around the block</li>
                        <li>Light stretching in the hallway (lots of great natural light!)</li>
                        <li>Same hallway: opened the window, felt the sun and wind on my face, and did some
                                yoga-like mindful breathing</li>
                    </ul>
                </p>

                <p>
                    These breaks might seem silly, but it was amazing how much a short break like
                    this improved my cognitive function. Every time I returned from these
                    breaks, I sat down at my desk totally refreshed! I found that I had the same
                    level of energy that I was used to experiencing only at the start of the day!
                    </p>

                <p>
                    Remembering and following through with taking breaks
                    can be a challenge — It can be pretty tempting to remain in your chair! That
                    said, I hope to continue to take breaks like this, as I think that they
                    really help me do my best work!
                    </p>

                {/* <!-- White space --> */}
                <br /><br /><br /><br /><br /><br /><br /><br />

            </article>
        </>
    );
}

export default BCWeek5;
