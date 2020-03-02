import React from 'react';

function PWWeek3() {
    return (
        <>
            {/* <!-- Main Text --> */}
            <article className="text-justify">
                <p>
                    I’m writing this on a Saturday — we’ve just wrapped up our third
                    week of Bootcamp Prework, and are barreling full steam ahead
                    towards the final work of remote learning. Starting on Sept.
                        16<sup>th</sup>, we will be reporting in to Awesome Inc., meeting
                Monday-Friday, 8am-5pm for 12 weeks. I’m very excited, but maybe
                also a little nervous.
                    </p>
                <p>
                    This week involved diving a little deeper into HTML and CSS, while
                    also serving as an introduction to JavaScript. Additionally, we
                    did our first Demo Day on Friday! As we are working remotely, this
                    was done via group video chat. We all took turns demonstrating the
                    functionality of our Silly Story Generators, as well as looking
                    under the hood and showcasing/explaining the source code behind
                    our projects.
                    </p>
                <h3 className="text-center">JavaScript</h3>
                <p>
                    JavaScript is a coding language that is used on both the client
                    and server sides. On the client side, it is used to add reactive
                        elements to a website. JavaScript <strong>IS NOT</strong> the same
                as the similarly popular programing language, Java. In fact, the
                only reason that they are named in a similar fashion is because
                Java was becoming very popular at the time, and the creators of
                JavaScript thought that they could benefit from Java’s popularity
                by adopting a similar name. This seems a little like the current
                naming convention involving adding Blockchain or Cryptocurrency to
                various new products.
                    </p>
                <p>
                    A final interesting fact about JavaScript — its creator,{' '}
                        <a href="https://en.wikipedia.org/wiki/Brendan_Eich">Brendan Eich</a>,
                wrote the prototype of the language{' '}
                        <a href="https://en.wikipedia.org/wiki/JavaScript#Beginnings_at_Netscape"
                        title="History of JavaScript (Wikipedia)">in just 10 days</a>. A pretty
            fast start for a programming language that has been going strong
            for 23 years!
                    </p>
                <h3 className="text-center">HTML, CSS, and JS</h3>
                <p>
                    How do the three languages we’ve talked about so far relate?
                    </p>
                <p>
                    As I’ve mentioned in previous posts, HTML creates the framework, and CSS adds the style.
                    </p>
                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/html-vs-css.png"
                        alt="An image comparing HTML and CSS" />
                    <figcaption className="figure-caption text-center">HTML creates the framework; CSS adds the style
                        </figcaption>
                </figure>
                <p>
                    If you leave it at the, you can still have a beautiful, fully
                    functional website only using HTML and CSS. A website like this,
                    however, is considered static — you can’t change elements without
                    reloading the page. JavaScript allows you to create dynamic websites.
                    </p>
                <p>
                    In the above example of a house, JavaScript would allow you to
                    click on the front door and see the door open, and your neighbors
                    walk out!
                    </p>
                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/html-vs-css-vs-js-house.png"
                        alt="An image comparing JS to a House" />
                    <figcaption className="figure-caption text-center">JavaScript creates reactive websites — Similar to
                        being able to click on a house and
                        open the
                            door</figcaption>
                </figure>
                <p>
                    You’ve likely seen examples of JavaScript all over the web.
                    Examples might include: pressing the “like” button on Facebook and
                    seeing the total number of “likes” instantly increase. Or, as you
                    scroll through Instagram, a post changes from “posted 3 minutes
                    ago” to “posted 4 minutes ago” in real time. JavaScript allows you
                    to create dynamic, reactive websites, the type of website
                    functionality that users have come to expect across the web.
                    </p>
                <h3 className="text-center">Challenges: Resizing Websites (CSS) and Logic Errors (JavaScript)</h3>
                <p>
                    Two challenges that I faced this week involved attempting to make
                    this blog viewable on mobile devices, and trying to get my Silly
                    Story Generator program to work using JavaScript.
                    </p>
                <p>
                    After initializing the blog last week, I managed to get it so that
                    it looked pretty good on a desktop browser.
                    </p>
                <figure className="figure">
                    <img className="img-fluid border" src="/blogAssets/img/css-looks-good-on-desktop.png"
                        alt="CSS looking good on Desktop" />
                    <figcaption className="figure-caption text-center">A blog post viewed from a computer</figcaption>
                </figure>
                <p>
                    I realized, however, that there was a problem with how this
                    arrangement scaled down to mobile. What looks nice and spacious on
                    a widescreen, became very compressed on a mobile device.
                    </p>
                <figure className="figure">
                    <img className="img-fluid border" src="/blogAssets/img/css-not-scaling-well-to-mobile.png"
                        alt="CSS not scaling well to mobile view" />
                    <figcaption className="figure-caption text-center">The same blog post viewed on a mobile device
                        </figcaption>
                </figure>
                <p>
                    Unfortunately, attempting to remedy this made things much worse
                    before they got any better. For a while, not only did the site not
                    look good on mobile, but elements started to appear in strange
                    places on desktop as well.
                    </p>
                <p>
                    Although we learned about Git in our first week of Prework, it
                    wasn’t until I attempted to resize my blog that I became a real
                        believer. I should first say that this came about <em>not</em>
                    because I used Git properly and that it helped me to fix my
                    website, but rather, that I didn’t use a good Gitflow Strategy,
                    and that I ended up wishing fervently that I had!
                    </p>
                <p>
                    I was using a “dev” (development) branch to write my code, but
                    only doing so so that I could get into the habit. Once I had an
                    update, I would immediately merge with the local master branch and
                    then push to GitHub. This was unfortunate, because even though my code
                    was moving in the right direction, things, at least temporarily,
                    looked worse than before. If I had been using Git properly, I
                    could have left my master branch as a functioning version of the
                    site, while working on my dev branch until things were up to
                    publication quality. This process definitely made be a believer in
                    the usefulness of using a Version Control System like Git!
                    </p>
                <br />
                <p>
                    A second thing that I struggled with this week was encountering
                        logic errors in my <a href="https://robbiegay.github.io/silly-story/"
                        title="Robbie's Silly Story Generator">Silly Story Generator</a>.
            The SSG is supposed to take a string of text and, somewhat{' '}
                        <a href="https://en.wikipedia.org/wiki/Mad_Libs" title="Mad Libs Wikipedia">Mad Libs</a> style,
                                    insert funny
                                    characters and locations to generate a new “silly story” each time
                                    the “generate” button is pressed.
                    </p>
                <p>
                    A piece of additional functionality that I wanted to add involved
                    creating a Typewriter Effect, where each letter would appear one
                    at a time, as if being typed. Needless to say, this did not work
                    as planned either the first (or twenty-first) time that I tried to
                    run the program. The first thing that I looked for were syntax
                    errors. You can think of these as grammar or spelling mistakes.
                    This is like when you text someone: “on my way, soon” when you
                    really meant to say “one my way, noon” — A simple error that might
                    have someone waiting around for several hours. Computers being
                    very literal machines, these simple grammar and spelling errors
                    can cause a program to cease functioning entirely.
                    </p>
                <p>
                    After first addressing any syntactical errors that I could find in
                    my Silly Story Generator, I then had to deal with any logic
                    errors. A logic error is when you tell a program how to perform a
                    task, they are able to complete said task, but then, because of an
                    error in the logic of your instructions, the task completed does
                    not produce the desired results.
                    </p>
                <p>
                    A real-world example of a logic error could be to give someone
                    directions to your house. Perhaps you managed to spell everything
                    correctly and produce easy to follow directions (no syntax
                    errors), but you then told them to turn left on Main St. instead
                    of right! The instructions worked well, they just sent your friend
                    in the wrong direction.
                    </p>
                <p>
                    I found dealing with logic errors really frustrating. I would find
                    myself reading and rereading my code, and eventually coming to the
                        conclusion that my code definitely <em>should</em> work; It
                        <em>seemed</em> like everything made sense. There were even
                                    moments when I would just stare at the screen, unable to find
                                    anything to tweak or try.
                    </p>
                <p>
                    It seemed like there were no real “ah-ha” moments of getting this
                    week's code to work — rather than a large change that fixed the
                    program, it was several small implementations that eventually
                    built some functioning code.{' '}
                        <a href="https://en.wikipedia.org/wiki/The_Pragmatic_Programmer"
                        title="Pragmatic Programmer Wikipedia">The
                            Pragmatic Programmer</a>{' '}
                    mentions a Japanese phrase, “kaizen”. This is the process of
                    making small, incremental improvements that over time produce high
                    quality results. This is what the process of debugging both this
                    blog and my Silly Story Generator felt like — the more time I
                    spent working on the problem, and the more I slowly pieced
                    together bits of functionality, the closer I got to a program that
                    ran as I intended!
                    </p>
                <h3 className="text-center">Two Cool Things</h3>
                <p>
                    I wanted to mention two things that I learned this week that I
                    found really interesting. When working in HTML, there is a lot of
                    framework that gets recycled on every page. After my first couple
                    of webpages, I got tired of repeatedly building the same
                    structure. I had decided that it would be really useful to build a
                    template to start with. It was then that fellow Bootcamper{' '}
                        <a href="https://anchormansam.github.io/my-blog/blog.html" title="A link to Sam's Blog">Sam</a>
                    mentioned a
                    useful shortcut
                    in the class Slack (groupchat). He mentioned a shortcut in VS
                    Code Studio (software that you can use to write code in), where,
                        if you enter <code>!</code> and press return, then a great HTML
                                    template will appear. This was a significantly quicker and more
                                    convenient way to build a starting framework — thanks Sam!
                    </p>
                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/vs-code-!-template.png" alt="VS Code '!' Shortcut" />
                    <figcaption className="figure-caption text-center">Using the "!" Shortcut in VS Code</figcaption>
                </figure>
                <p>
                    A second really useful thing that we learned this week came from
                        our instructor, <a href="https://www.justinhall.com" title="Justin's Website">Justin</a>. Justin
                                        walked us
                                        through the
                                        process of using the Chrome Dev Tools to debug a program. When I
                                        was attempting to fix my logic errors in the Silly Story
                                        Generator, it would have been really helpful to see how the
                                        computer was interpreting my code. For example, if my code wasn’t
                                        displaying a string pulled from an array, is that because it isn’t
                                        pulling the string from the array at all, or is the computer
                                        having trouble inputting said string back into our story? With
                                        Chrome Dev Tools, you are able to insert a breakpoint, and to then
                        <em>see</em> how the computer is thinking. In the example photo
                                        below, my code is shown on the left, and what values the computer
                                        is using is shown on the rights.
                    </p>
                <figure className="figure">
                    <img className="img-fluid border" src="/blogAssets/img/using-chrome-breakpoints.png"
                        alt="Chrome Dev Tools: Breakpoint Function" />
                    <figcaption className="figure-caption text-center">An example of the Chrome Dev Tools</figcaption>
                </figure>
                <h3 className="text-center">Resources</h3>
                <p>
                    The resource that I wanted to share this week is less of a useful
                    tool and more of a really cool inspiration! While working through
                    this week’s{' '}
                        <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#So_what_can_it_really_do"
                        title="MDN: 'What is JavaScript?'">
                        MDN reading on JavaScript</a>, they mentioned that some
            programmers are doing some really cool things with audio and video
                        <abbr title="Application Programming Interfaces">API’s</abbr>. As
                                            an example, they gave use a link to the{' '}
                        <a href="https://experiments.withgoogle.com/collection/chrome" title="Chrome Experiments">Chrome
                                                Experiments
                            webpage</a>. This
                site showcased a lot of really fun and interesting webpages built
                using the JavaScript framework. As cool and inspirational as these
                projects were, they also left me with a sense of just how vast of a
                field of knowledge web development really is. It feels as though we
                are years (more likely even, decades) away from doing anything as
                remotely cool and complex as this. That said, I do really
                recommend that you check out a few of these projects — I thought
                that they really pushed the boundaries of what a reactive and
                responsive website can do!
                    </p>

                {/* <!-- White space --> */}
                <br /><br /><br /><br /><br /><br /><br /><br />

            </article>
        </>
    );
}

export default PWWeek3;
