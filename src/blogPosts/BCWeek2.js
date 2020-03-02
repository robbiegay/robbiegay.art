import React from 'react';

function BCWeek2() {
    return (
        <>
            {/* <!-- Main Text --> */}
            <article className="text-justify">

                <p>
                    Bootcamp Week 2 was mostly project based. I worked on
                    three projects this week: a Weather App, a Tic-Tac-Toe
                    game, and a Calculator. Each of these projects was built
                    using JavaScript, and each helped introduce us to some
                    new aspect of the language.
                    </p>

                <h3>This Week’s Projects</h3>

                <p>
                    <a href="https://robbiegay.github.io/weather-app/" title="My Weather App">The Weather App</a>{' '}
                    was designed to take a user-inputted zip-code, and output
                    real-time weather conditions for that area. This project
                    introduced us to APIs and JSON. APIs are Application
                    Programming Interfaces, sets of code governing access
                    points to servers or databases. JSON stands for JavaScript
                    Object Notation, and is a standardized data format. We used the{' '}
                    <a href="https://openweathermap.org/api" title="openweathermap API">openweathermap API</a>{' '}
                    for this project, and received data from that API in the JSON format.
                    </p>

                <p>
                    The <a href="https://robbiegay.github.io/tic-tac-toe/" title="My Tic-Tac-Toe game">Tic-Tac-Toe game</a>{' '}
                    involved testing a set of 8 possible win conditions against the
                    current X and O positions on the Tic-Tac-Toe board.
                    To solve this, I created a nested array with the various
                    win conditions, and tested them against the current state
                    of the board (also in an array). This test was run upon
                    each firing of the click event handler.
                    </p>

                <p>
                    The <a href="https://robbiegay.github.io/calculator/" title="My Calculator App">Calculator</a>{' '}
                    project involved building a basic calculator that could use
                     +, -, /, x on user-inputted numbers. This project seemed pretty
                     straight forward at first — computers should be pretty good
                     at adding, subtracting, dividing, and multiplying. The problem,
                     however, lay in the fact that there are a multitude of
                     combinations for which the user could input values. What
                     happens if the user presses: - + 5 6 - / 3 =? Should the computer
                     ignore the opening two operands? 5 and 6 pressed sequentially
                     should obviously form “56”. And what about the “- /“? Should
                     the computer ignore the first operand in this case as well?
                    </p>

                <p>
                    There were many edge cases, and, on my first attempt at creating
                    the calculator, I tried to solve all of these scenarios from
                    the beginning. This resulted in a somewhat functioning calculator,
                    but at the expense of running some very convoluted code behind
                    the scenes. I decided to start fresh and create a second JS sheet,
                    and to focus on just solving core problems first. After I had
                    some fairly clean code working, I then began to
                    incrementally add edge case solutions.
                    </p>

                <p>
                    Additionally, the Calculator was my first time dynamically
                    rendering an application in JavaScript. The body of my HTML
                    document only contains a single &lt;div&gt; element for the
                    JavaScript to build the app on.
                    </p>

                <h3>Process</h3>

                <p>
                    My biggest take away from Bootcamp Week 2 was that I started
                    to think about and establish a personal development process.
                    </p>

                <p>
                    My first step is to read over the project parameters, and to
                    Pseudo Code the problem. I will draw out the potential UI,
                    thinking about how various elements will scale at different
                    screen sizes, as well as what elements are clickable and how
                    various elements should interact. I will work on the
                    code as well — mapping out ideas relating to how I think
                    the problem could be solved.
                    </p>

                <p>
                    I will then usually go ahead and build my UI. This gives me
                    something to work with and test code upon. If you need to
                    test what happens when a button gets pressed, it’s pretty
                    hard to do so if you haven’t built any buttons yet!
                    </p>

                <p>
                    My next step is to build the core functionality of the project.
                    This MVP will fulfill the broad requirements for functionality,
                    while leaving edge cases to a later step. Throughout this
                    process, I will likely come up with ideas for new features,
                    or think of possible edge case problems. In order to not get
                    sidetracked, I will jot down these ideas on a pad of paper.
                    </p>

                <p>
                    Once I get the core functionality working, I will then begin
                        solving for edge cases. <a href="http://ianrios.me/" title="Ian's Website">Ian</a>{' '}
                    recommended that I prioritize edge cases by using a four-quadrant
                    grid. The grid compares Important and Not-Important vs.
                    Urgent and Less-Urgent. This allowed me to tackle edge
                    cases with a certain hierarchy.
                    </p>

                <figure className="figure">
                    <img className="img-fluid border" src="/blogAssets/img/edge-case-chart-white-bg.png" alt="Chart for Edge Case Prioritization" />
                    <figcaption className="figure-caption text-center">A useful way to prioritize edge case solutions and bug fixes</figcaption>
                </figure>

                <p>
                    Working within this developmental framework helped me
                    write more efficient code, and in a more timely manner!
                    </p>

                <h3>Looking Forward</h3>

                <p>
                    In Bootcamp Week 3, we will be tackling a{' '}
                    <a href="https://github.com/bootcamp-students/Projects-Exercises/blob/master/docs/projects/sliding-puzzle.md" title="Sliding Puzzle Project Prompt">Sliding Puzzle project</a>{' '}
                    — involving moving pieces around a board on
                    each user click. This project seems pretty
                    intimidating right now, but I think that we
                    will be learning some new concepts this week that will
                    hopefully help with completing this project!
                    </p>

                {/* <!-- White space --> */}
                <br /><br /><br /><br /><br /><br /><br /><br />

            </article>
        </>
    );
}

export default BCWeek2;
