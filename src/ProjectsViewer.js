import React from "react";
import { CardDeck, Card } from "react-bootstrap";

function ProjectsViewer() {
    // let fontSize = "30px";
    // let largerSize = "75px";

    return (
        <>
            <CardDeck>
                <Card>
                    <Card.Header>Instagram Clone</Card.Header>
                    <Card.Body>
                        <Card.Title>Swift, Firebase, Xcode</Card.Title>
                        <Card.Text>
                        <ul>
                            <li>
                                <a href="https://www.youtube.com/watch?v=tRLZppAY7Ik">Video Demo</a>
                            </li>
                            <li>
                                <a href="https://github.com/robbiegay/learning-swift/tree/master/instagram-firebase-clone">GitHub Repo</a>
                            </li>
                        </ul>
                            In order to better understand Swift and mobile app development, I have been 
                            working on a clone of the Instagram app, with backend data being stored on 
                            Firebase. I hope to have this app completed by the end of April 2020. In the meantime, 
                            feel free to check out a video demo of the current state of the app by following the link 
                            above!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">April 2020</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <br />
            <CardDeck>
                <Card>
                    <Card.Header>Moolathon App</Card.Header>
                    <Card.Body>
                        <Card.Title>Swift, Firebase, Google Maps SDK</Card.Title>
                        <Card.Text>
                        <ul>
                            <li>
                                <a href="https://apps.apple.com/us/app/moolathon/id1486017163">Apple App Store Link</a>
                            </li>
                            <li>
                                <a href="http://moolathon.com/">Moolathon Website</a>
                            </li>
                        </ul>
                            In the Spring of 2020, I worked as a part of a team developing an app called Moolathon. 
                            Moolathon is a fitness fundraising app, where users raise money by running more miles. 
                            I helped create a feature where users could turn a workout summary into an easily shareable 
                            post for social media. Moolathon was released on the Apple App store in March of 2020.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">March 2020</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Header>Robbiegay.art</Card.Header>
                    <Card.Body>
                        <Card.Title>Bootstrap, React.js, React Router, Pts.js</Card.Title>
                        <Card.Text>
                        <ul>
                            <li>
                                <a href="https://www.robbiegay.art/">Demo</a>
                            </li>
                            <li>
                                <a href="https://github.com/robbiegay/robbiegay.art">GitHub Repo</a>
                            </li>
                        </ul>
                            In late February I decided it was finally time to upgrade my website. 
                            I built <a href="https://robbiegay.github.io/">my old website</a> early on in 
                            the Bootcamp, and thought that due to how much new technology I was familiar with, 
                            it would be best to rebuild from the ground up. This iteration of my website is built 
                            using Bootstrap and React.js for the front end. The page navigation is run through 
                            React Router. For the homepage, I wanted to do something that both showed some technical 
                            skill in the Web Developer department, as well as something create to showcase my background 
                            in the arts. I created a homepage the animated through a range of "sunrise-ey" colors, and that 
                            will increase in luminosity as a user move their mouse vertically from the bottom to the 
                            top of the page.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">February 2020</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <br />
            <CardDeck>
                <Card>
                    <Card.Header>Phone Simulator</Card.Header>
                    <Card.Body>
                        <Card.Title>React.js and Hooks</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>
                                    <a href="https://robbiegay.github.io/phone-sim/">Demo</a>
                                </li>
                                <li>
                                    <a href="https://github.com/robbiegay/phone-sim">GitHub Repo</a>
                                </li>
                            </ul>
                            For the Phone Simulator, I combined 6 projects that we worked on during
                            the Awesome Inc Web Developer Bootcamp. The Phone Simulator displays the
                            current time at the top of the "screen". Below that, there is a weather
                            module that pulls realtime weather data based on your current location.
                            Below the weather app is a countdown timer (currently set to countdown
                            to my birthday — March 21st). Below the countdown timer are three
                            applications: Calculator, Todo List, and Mind Reader.
                            <br /><br />
                            For this project, I wanted to 
                            use <a href="https://reactjs.org/docs/hooks-intro.html" title="React Hooks Documentation">React Hooks</a>, as
                            these are a feature of React that I was previously not too familiar with.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">January 2020</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Header>MPM²</Card.Header>
                    <Card.Body>
                        <Card.Title>Laravel, Tone.js, and Pts.js</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>
                                    <a href="https://www.youtube.com/watch?v=lDrPAQl78dc">Demo Video</a>
                                </li>
                                <li>
                                    <a href="https://github.com/robbiegay/mpm2">GitHub Repo</a>
                                </li>
                            </ul>
                            Prior to the F19 Bootcamp, I spent several years making electronic music and, 
                            for the past year, hosted a talk show on WRFL interviewing music makers. For my 
                            final project, I wanted to do something that combined my love of digital music 
                            with the Full Stack technologies that we learned in the course. MPM² is an 
                            interactive art installation that allows up to 7 users to control various 
                            pitch and tone aspects of an online synthesizer. Users use their mobile phones 
                            to modify their respective parameter. The sounds generated cause the main screen’s 
                            visuals to change.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">December 2019</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <br />
            <CardDeck>
                <Card>
                    <Card.Header>Laravel Library</Card.Header>
                    <Card.Body>
                        <Card.Title>PHP and Laravel</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>
                                    <a href="https://www.youtube.com/watch?v=M9PBVx0f840">Demo Video</a>
                                </li>
                                <li>
                                    <a href="https://github.com/robbiegay/laravel-library">GitHub Repo</a>
                                </li>
                            </ul>
                            Built a website and checkout system for a fictional library.
                            Used foreign keys to link between tables, allowing book and
                            user data to be connected. Allowed users to sign-up for an account.
                            Gave librarians the ability to add books to the database. Books can be
                            added manually or by using searching 
                            the <a href="https://developers.google.com/books">Google Books API</a>.
                            Librarians can checkout or return books by entering the books ISBN
                            number, and the user's username. Checked out books appear in red on 
                            the view all books page. Utilized
                            the seven <a href="https://laracasts.com/series/laravel-6-from-scratch/episodes/21">RESTful controller actions</a> and 
                            the four <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD principles</a>.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">November 2019</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Header>React Restaurant</Card.Header>
                    <Card.Body>
                        <Card.Title>React.js</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>
                                    <a href="https://robbiegay.github.io/react-restaurant/">Demo</a>
                                </li>
                                <li>
                                    <a href="https://github.com/robbiegay/react-restaurant">GitHub Repo</a>
                                </li>
                            </ul>
                            Built a website for a fictional restaurant located at Awesome Inc!
                            Used the <a href="https://entree-f18.herokuapp.com/">Random Menu Generator API</a> to 
                            get a list of random menu items, and then pulled both a title and a description from
                            that JSON file. Generated random menu prices and included a parameter for low, medium,
                            and high price range items. Menu items are stored in Local Storage,
                            allowing for menu consistency across page loads (restaurant name, operating 
                            hours, and item prices are not saved to Local Storage and will reload upon each page load).
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">October 2019</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <br />
            <CardDeck>
                <Card>
                    <Card.Header>To-Do List</Card.Header>
                    <Card.Body>
                        <Card.Title>Local Storage</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>
                                    <a href="https://robbiegay.github.io/to-do-list/">Demo</a>
                                </li>
                                <li>
                                    <a href="https://github.com/robbiegay/to-do-list">GitHub Repo</a>
                                </li>
                            </ul>
                            Worked with 
                            the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" title="MDN Documentation">Local Storage API</a> in 
                            order to build a To-Do List app that can save entires
                            between page loads. Has several "view states", allowing
                            users to toggle between viewing: all entries, completed
                            entires, or entries that you have yet to complete.                        
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">October 2019</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Header>Sliding Puzzle</Card.Header>
                    <Card.Body>
                        <Card.Title>JavaScript</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>
                                    <a href="https://robbiegay.github.io/sliding-puzzle/">Demo</a>
                                </li>
                                <li>
                                    <a href="https://github.com/robbiegay/sliding-puzzle">GitHub Repo</a>
                                </li>
                            </ul>
                            Built a Sliding Puzzle game that allows users to rearrange a 4x4 grid
                            of tiles to create a completed image. Built using an object-oriented
                            approach, using an array of objects to store information such as the 
                            name of the tile, and the tile's current location on the board. Users 
                            can upload their own image or use the provided default image.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">October 2019</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <br />
            <CardDeck>
                <Card>
                    <Card.Header>Calculator</Card.Header>
                    <Card.Body>
                        <Card.Title>HTML and JavaScript</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>
                                    <a href="https://robbiegay.github.io/calculator/">Demo</a>
                                </li>
                                <li>
                                    <a href="https://github.com/robbiegay/calculator">GitHub Repo</a>
                                </li>
                            </ul>
                            Created a calculator app that can perform various mathematical functions.
                            Dynamically rendered the HTML elements using JS. The most challenging
                            aspect was dealing with various "edge-case" scenarios. The calculator would
                            work pretty well if users performed a basic math function (ex. 5 + 3), then 
                            cleared the memory ("C" button), and then performed another basic math 
                            function. A real world user, however, would likely use the calculator in 
                            many different ways. There were a multitude of orders in which the user 
                            might press various buttons. Additionally, there had to be ways of dealing with
                            inputs that didn't make much sense at all (ex. What would happen if the
                            user inputted: + - 53 + / 4 - 4?). And the final (and perhaps most difficult)
                            part of dealing with edge-cases was getting to a point where you had several 
                            fixes for very specific situations, and then had to try to not break any of 
                            those old fixes whenever you implemented a fix for a new scenario.                       
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">October 2019</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Header>Tic-Tac-Toe</Card.Header>
                    <Card.Body>
                        <Card.Title>HTML and JavaScript</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>
                                    <a href="https://robbiegay.github.io/tic-tac-toe/">Demo</a>
                                </li>
                                <li>
                                    <a href="https://github.com/robbiegay/tic-tac-toe">GitHub Repo</a>
                                </li>
                            </ul>
                            Built a Tic-Tac-Toe game that allows two users to play against each
                            other. Used nested arrays to test win conditions against the current board
                            setup. Includes a reset button that allows the board to be reset. After at 
                            least 1 game has been played, a tally appears that keeps track of X wins, 
                            O wins and ties.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">September 2019</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <br />
        </>
    );
}

export default ProjectsViewer;