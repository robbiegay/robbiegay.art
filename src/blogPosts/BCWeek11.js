import React from "react";
import { Carousel } from "react-bootstrap";

function BCWeek11() {
    return (
        <>
            {/* <!-- Main Text --> */}
            <article className="text-justify">

                <p>
                    This past week was week two of our final project sprint.
                    We had three days to work in class (Mon-Wed), before breaking
                    for Thanksgiving. Next week we will have two more class days
                    to work on the final project (Mon and Tue), before presenting
                    to our classmates on Wednesday, and presenting to the general
                    public on Thursday! This week I tried to keep a daily log of
                    what I worked on.
                    </p>

                <h3>Monday</h3>

                <p>
                    On Monday, I created a new{" "}
                    <a href="https://en.wikipedia.org/wiki/Kanban" title="Wikipedia: Kanban">kanban</a>{" "}
                    board for the project. Last week made me realize that time will
                    play an important role in how much I will be able to get done,
                    and I wanted to map out a project “prototype” — something with
                    all of the core functionality, that I could then build on as time allowed.
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/mpm2-prototype-kanban.png" alt="Prototype Kanban Board" />
                    <figcaption className="figure-caption text-center">Prototype Kanban Board</figcaption>
                </figure>

                <p>
                    At this point I had a synth with parameter controls, and visuals that DID NOT
                    yet react to the synth sounds. My synth parameters would store their values in state,
                    and my first task this week was to try to store these values in my database.
                    It was pretty straightforward to move the variables themselves, but I quickly
                    ran into as issue with creating too many API calls. When I would move the
                    slider once, it would send hundreds of calls to the database. This would
                    cause a “429 — too many requests" error. To remedy this, I decided to use
                    a technique called{" "}
                    <a href="https://en.wikipedia.org/wiki/Polling_(computer_science)" title="Wikipedia: Polling">polling</a>{" "}
                    — basically, checking for updates at regular time
                    intervals. I found that if I limited myself to one API call per second, I
                    could mostly avoid 429 errors.
                    </p>

                {/* <!-- Carousel Images --> */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/mpm2-synth-controls.png"
                            alt="Synth Controls" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Basic synth controls</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/mpm2-synth-and-visualizer.png"
                            alt="Synth Visualizer" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Synth visualizer and 429 errors</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <p>
                    My next step was to clean up my code. During the process of adding new
                    features and trying to fix bugs, I would often “comment out” various
                    fixes. This allowed me to see what I had tried, what had worked, and
                    what did not. Now that I had some functioning code, I went through and
                    deleted unused code, cleaned up existing code, and added explanatory comments.
                    </p>

                <p>
                    After lunch (a quick stop at Sahara with Sam and Anna, and a tour of{" "}
                    <a href="http://nymbl.healthcare/" title="Nymbl's Website">Nymbl’s</a>{" "}
                    offices), I still had one more problem I wanted to tackle: I was separating
                    my synth and synth control components, and knew that they wouldn’t have
                    any common parents to pass state up to. This meant that I needed some way
                    to store my Boolean value for triggering synth sounds. One strategy that
                    I attempted was using{" "}
                    <a href="https://reactjs.org/docs/context.html" title="React Documentation: Context">React context</a>.
                Context allows you to store values outside of the parent-child tree. This
                was a new aspect of React to me, so first I had to research this technique,
                before then attempting to implement it.
                    </p>

                {/* <!-- Carousel Images --> */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/attempting-to-use-context-1-blur.png"
                            alt="React Context Component" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2">React context component</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/attempting-to-use-context-2-blur.png"
                            alt="Context Provider" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2">Context Provider: provides the values to all "consumer" components</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/attempting-to-use-context-3-blur.png"
                            alt="Context Consumer" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2">Context Consumer: subscribes to value changes from the provider</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <p>
                    After that failed to work, I tried using conditional rendering and then
                    async functions before finally realizing that I might be able to solve
                    my problem with a simple line of PHP in the API call. At this point it
                    was 6pm, and I decided to go home and sleep on the problem.
                    </p>

                <h3>Tuesday</h3>

                <p>
                    Overslept my alarm — ended up being late to my workout class :(
                    </p>

                <p>
                    Sleeping on my API call problem worked! I got into class this morning and
                    ended up solving my problem in the first 30 minutes!
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/my-php-solution-blur.png" alt="A PHP solution to my passing up state problem" />
                    <figcaption className="figure-caption text-center">My PHP solution</figcaption>
                </figure>

                <p>
                    I spent most of the day working on getting my visualizer to react to my
                    synth audio. It would work, but only in very brief flashes. Today
                    was another fairly frustrating day — as I worked on one problem all
                    day and found no solutions. I had both Ian and Justin help me, but
                    since I was using a library (Pts.js) that they weren’t familiar with,
                    neither of them had much luck. I stayed until 7pm, felt like I made
                    no progress, and went home feeling a little defeated.
                    </p>

                <h3>Wednesday</h3>

                <p>
                    Wednesday was our final day before Thanksgiving break, and our last day
                    to get hands on feedback from the instructors or our classmates. With
                    only two days of coding remaining when we get back, it was pretty vital
                    that we be in a good position when we left on Wednesday. Since I was still
                    solidly blocked with my visualizer issue, Justin told me that he wanted
                    me to check in at 3pm — and that if I couldn’t solve it by then, then I
                    may have to consider pivoting on that aspect of my project.
                    </p>

                <p>
                    In the morning, Ian helped me refactor my Synth and Visuals into one
                    component. We thought that this would be helpful when attempting to
                    analyze the sound and have the visuals react.
                    </p>

                <p>
                    Since time was short, several of us decided to call in a pizza order.
                    I asked for extra ranch. A good slice of pizza is wasted without some
                    ranch to dip it in.
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/final-project-pizza.JPG" alt="Final project pizza order" />
                    <figcaption className="figure-caption text-center">Pizza (and ranch!!!)</figcaption>
                </figure>

                <p>
                    After lunch, I again worked with Ian in an attempt to fix my visualizer
                    problem. Ian was leaving for Denver at 2pm, so time was pretty short.
                    Ian had worked with me throughout the morning, and was now fairly familiar
                    with Pts.js — this meant that his feedback was likely my last shot at
                    completing this aspect of my project. As 2pm rolled around, we were
                    both feeling pretty dejected — we had tried a whole host of fixes for
                    the problem, but so far, nothing was working.
                    </p>

                <p>
                    After Ian left, I went out and laid on the couch in the hallway.
                    I wanted a break from my code, and, as often happens, this gave
                    my mind a chance to approach the problem from a different angle.
                    I realized that we had several parts working independently,
                    and that there seemed to be no reason why we shouldn’t be able
                    to combine these to get a functioning visualizer. I went back to
                    our workroom, grabbed my laptop, and  sequestered myself in a side
                    office to make one last attempt at fixing my code.
                    </p>

                <p>
                    I pulled up two different, partially working versions of the code. I began
                    by commenting things out, section by section, trying to figure out what
                    was breaking my visualizer. Finally, around 2:45, I commented out a small
                    “if statement”, and suddenly the visualizer worked! It seems that we had
                    left some code from a previous fix in our new version, and that it had
                    been breaking everything else. Needless to say, I was pretty excited about
                    getting my visualizer to work. I had been pretty bummed about the idea of
                    giving up on this aspect of my project.
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/the-code-that-broke-my-visualizer-blur.png" alt="The code that was breaking my visualizer" />
                    <figcaption className="figure-caption text-center">The offending code</figcaption>
                </figure>

                <p>
                    Fixing that issue completed my prototype build. I spent the next few hours
                    adding additional styling, creating a kanban board for build 2, and cleaning
                    up my code before finally heading out for the holiday weekend!
                    </p>

                <h3>Thursday</h3>

                <p>
                    I have a pretty large extended family in the Central Kentucky area, so
                    everyone converged on my parents house for a Thanksgiving feast! I’ll
                    let the pictures do the talking — I did not do much coding today.
                    </p>

                {/* <!-- Carousel Images --> */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/thanksgiving-4-group-blur.png"
                            alt="Family Thanksgiving" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/thanksgiving-3-all-the-food.JPG"
                            alt="All the food" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/thanksgiving-2-food-plate.JPG"
                            alt="My plate" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/thanksgiving-1-group.jpg"
                            alt="Everyone eating" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/thanksgiving-5-group.jpg"
                            alt="More family" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/thanksgiving-6-giving-good-boys-treats-blur.png"
                            alt="Giving Hudson and Zima some treats" />
                    </Carousel.Item>
                </Carousel>

                <h3>The Weekend</h3>

                <p>
                    I managed to work some more on my code over the weekend (as well as catching up
                    on week 10 and week 11’s blog posts). I mostly worked on some small features,
                    and planned out what major features I would start tackling on Monday. Some of
                    the features that I added: fixing the polling bounce issue, adding controls
                    for manipulating the visualizer, and figuring out how to set an EQ range.
                    </p>

                <h3>Final Project: Week 2 Reflection</h3>

                <p>
                    I wanted to end this blog post with a few things that I have leaned so
                    far while working on this project.
                    </p>

                <p>
                    The low hanging fruit would be the new technologies that I have on boarded:{" "}
                    <a href="https://tonejs.github.io/" title="Tone.js Homepage">Tone.js</a> and{" "}
                    <a href="https://ptsjs.org/" title="Pts.js Homepage">Pts.js</a>. While learning specific frameworks and libraries is
                important, as a beginner developer, the important lessons that I think I
                have learned are project management and pragmatic problem solving skills.
                    </p>

                <p>
                    This was the first project where we have designed everything from the
                    ground up. My initial MVP designated story (task) difficulty using a
                    point system. A one point story was easy, while an eight point story
                    could be really really hard. Once I started coding, I found that many
                    tasks had unexpected components that made them harder than expected.
                    Within a few days of working on my project, I had to start “pruning”
                    my stories — prioritizing the most essential stories, and reassigning
                    point values once I realized the full magnitude of each task.
                    </p>

                <p>
                    I have also learned some new strategies for dealing with problems as they
                        arise. When importing an element (for example, <code>PtsCanvas</code>), you
                    can right click in{" "}
                    <a href="https://code.visualstudio.com/" title="VSCode Website">VSCode</a> and
                select “go to definition” to find out how that component is defined. Reading
                the meaning behind these higher level abstractions can really help you figure
                out what is going wrong and why.
                    </p>

                <p>
                    A second strategy that I learned was to build test code, something much
                    simpler than the project you are working on. This test code’s only job
                    is to test out a key piece of functionality which you do not yet understand.
                    </p>

                <p>
                    A third technique that I learned is to compare my code to examples used
                    in the package documentation. When I was struggling to get Pts.js to work,
                    I looked up some of their example projects that were doing something
                    similar (sound frequency analyzation). I went through their code line
                    by line, commenting things out and changing variable values to get a
                    better understanding of what code controls what aspect of the project.
                    </p>

                <p>
                    And finally, a fourth problem solving technique that I used was to go to
                    others for help. When asking an instructor or classmate, I would write
                    down what my specific problem was, make a list of what I have done to
                    try to solve it, and list out what my theories are regarding why the code
                    does not work. I found that this helped them better understand my problem,
                    and quickly orient themselves in my code.
                    </p>

                <p>
                    I’m hoping to use these new project management and problem solving skills
                    in my future software endeavors!
                    </p>

                {/* <!-- White space --> */}
                <br /><br /><br /><br /><br /><br /><br /><br />

            </article>
        </>
    );
}

export default BCWeek11;
