import React from 'react';
import { Carousel } from 'react-bootstrap';

function BCWeek4() {
    return (
        <>
            {/* <!-- Main Text --> */}
            <article className="text-justify">

                <h3 className="text-center">Weekly Update</h3>

                <p>
                    A few personal highlights from last week: I saw some really beautiful sunrises walking to <a href="https://www.awesomeinc.org" title="Where our Bootcamp meets">Awesome Inc</a> each morning. My uncle has been in town from California all week and we went out to eat… a lot. On Saturday, we all went to the UK football game. It was a tough win, but UK seemed to metaphorically drag their season back on track. After breaking our 3 game losing streak, we get rewarded with a trip down south to play number 10 Georgia next weekend. The Bulldogs opened as a 27-point favorite, so it should be a very <i>exciting</i> game. Finally, on Sunday, Bobby came into the <a href="http://wrfl.fm" title="88.1 FM — Your Only Alternative Left">WRFL</a> studio and co-hosted my weekly radio show!
                    </p>

                {/* <!-- Carousel Images --> */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/beautiful-sunrise-oct-11th.JPG" alt="A pretty sunrise" />
                        <Carousel.Caption className="pb-5">
                            <p>I've been catching some really beautiful sunrises walking to class!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/joellas-food-pic.JPG"
                            alt="Some fried chicken" />
                        <Carousel.Caption className="pb-5">
                            <p>A food pic: Joella's Hot Chicken!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/pic-of-eachother-taking-food-pics-joellas.JPG"
                            alt="Some guys taking pics of each other" />
                        <Carousel.Caption className="pb-5">
                            <p>A pic of each other taking food pics</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/uk-vs-arkansas-football.JPG"
                            alt="Before the UK Football game" />
                        <Carousel.Caption className="pb-5">
                            <p>Before the UK Football game!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/dj-bobby-frizzle.JPG"
                            alt="At the radio station" />
                        <Carousel.Caption className="pb-5">
                            <p>DJ Bobby Frizzle takes over the WRFL airwaves</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


                <p>
                    Some highlights from the Bootcamp: In Bootcamp Week 4, we worked on a <a href="https://robbiegay.github.io/to-do-list/" title="Robbie's To-Do List app">To-do List app</a>. This involved working with the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" title="MDN Documentation - Local Storage">Local Storage API</a> to store entries even when you close your web browser or refresh the page. One useful thing that I did for the To-Do app — and which I might do again in the future — was to write some code for custom hotkeys. During the development process, I would often change my code and needed to test it with a totally refreshed page. Since Local Storage retains data between page loads, it became more difficult to quickly load a brand new version of the webpage. Because of this, I decided to map the <code>=</code> key to some lines of code that cleared the Local Storage (as well as emptying the array the held data related to the To-Do List entries). Additionally, I mapped the <code>-</code> key to trigger several useful <code>console.log()</code>’s. This meant that I could quickly get a status update on several of the key functions of the app — without these logs cluttering up the console upon every action.
                    </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/to-do-custom-hotkeys.png" alt="My To-Do code" />
                    <figcaption className="figure-caption text-center">I mapped some custom hotkeys in my To-Do List app</figcaption>
                </figure>

                <h3 className="text-center">Frameworks and Libraries</h3>

                <p>
                    The prompt for this week’s blog post asked: “Why do you see JavaScript frameworks and libraries [as] useful or hard to use?” I thought that this was an interesting question, as I would likely answer that I find frameworks and libraries as both useful AND hard to use (at least at first).
                    </p>

                <p>
                    JavaScript frameworks and libraries are really useful — they abstract away a lot of functionality, allowing you to write code that is both clean and highly functional. Cleaner code allows for easier debugging and maintenance. Additionally, many of the functionalities contained within these frameworks or libraries solve complex problems that took entire teams of highly skilled individuals to solve. Many coders (especially novice ones like myself) would be hard pressed to solve these problems, let alone with code that remains remotely legible.
                    </p>

                <p>
                    And in answer to the second part of the prompt: I also think that frameworks and libraries can be difficult to learn. Picking up any new aspect of coding can be challenging. You often work really hard to attain some level of competency in a certain area, and then a new framework or library comes knocking at our door. This new tech offers increased functionality and powerful new features, but comes at the cost of jumping (yet again) into the <a href="https://s3.amazonaws.com/viking_education/web_development/blog/coding_is_hard_confidence_competence.png" title="Graphic from Erik Trautman's 'Why Learning to Code is So Damn Hard'">desert of despair</a>. Couple this with the fact that you may then have to refactor many of your old projects in order to incorporate this new tech, and you might be tempted to slam your door on the framework/library salesman and go back to the comfort of your old code. As tempting as this is, I think that the added functionality of new frameworks/libraries, as well as the opportunity to keep your 'learning muscle' strong, more than justifies the mental discomfort and extra work — even if it will always remain tempting to stay within your comfort zone --> &#128563;.
                    </p>

                <p>
                    [Bonus content: Since I added an emoji above, here is a <a href="https://www.w3schools.com/charsets/ref_emoji.asp" title="w3schools - Emoji Reference Page">great resource</a> for adding emoji's to your code!]
                    </p>

                <h3 className="text-center">Coming Attractions: React</h3>

                <p>
                    Next week we will begin working with the <a href="https://reactjs.org" title="The React Website">React library</a>. React is billed as a “JavaScript library for building user interfaces”. I am really excited to make this jump! We have been working with <abbr title="Plain JavaScript without any additional Frameworks or Libraries">Vanilla JavaScript</abbr> for several weeks now, and although Vanilla JS was very challenging at first, I have started to get fairly comfortable, at least with the more basic applications that we have been building. As such, I’m really excited to dive in and get out of my comfort zone!
                    </p>

                <h3 className="text-center">VS Code Snippets</h3>

                <p>
                    One resource that I found this week that was really helpful was this article on <a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets" title="VS Code Documentation — Snippets">creating VS Code snippets</a>. Snippets are lines of text that you can program to auto-complete into useful lines of code! I wrote a snippet for quickly adding <code>console-log()</code>’s to my code: you type in <code>lll</code> (three lowercase L’s), and then press <code>Enter</code>. This converts the <code>lll</code> into a new <code>console.log();</code>, with the text input cursor placed in the parentheses for quickly typing what you want to log. I chose the letter L because it is next to the enter key, allowing for very quick implementation!
                    </p>

                {/* <!-- White space --> */}
                <br /><br /><br /><br /><br /><br /><br /><br />

            </article>
        </>
    );
}

export default BCWeek4;
