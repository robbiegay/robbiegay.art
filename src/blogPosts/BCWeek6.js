import React from "react";
import { Carousel } from "react-bootstrap";

function BCWeek2() {
    return (
        <>
{/* <!-- Main Text --> */}
                <article className="text-justify">

                    <h3 className="text-center">Weekly Update</h3>

                    <p>
                        Week 6 of the Bootcamp was pretty fun!{" "}
                        <a href="https://wildercat.github.io/" title="Abram's Blog">Abram</a>{" "}
                        brought in his GameCube and we played some lunchtime{" "}
                        <a href="https://en.wikipedia.org/wiki/Super_Smash_Bros._Melee" title="Wikipedia Page">Melee</a>. 
                        Todd showed us his favorite game —{" "}
                        <a href="https://en.wikipedia.org/wiki/Super_Monkey_Ball_(video_game)" title="Wikipedia Page">Monkey Ball</a> — 
                        it was pretty fun but I was not very good at it. On Thursday, Anna and I carved a pumpkin! Warning: 
                        very spooky pic of said pumpkin below. On Friday, Awesome Inc held their monthly Family Lunch. 
                        They brought in Pasta and Salad from <a href="https://www.puccinissmilingteeth.com/">Puccini’s</a> and all those who work out of the Awesome Inc 
                        space shared a meal! I was already a huge Puccini's pizza fan — now I’m a lover of their 
                        lasagna as well!
                    </p>

                    {/* <!-- Carousel Images --> */}
                    <Carousel>
                        <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/bootcamp-melee.jpg"
                                        alt="Playing some Melee" />
                            <Carousel.Caption>
                            <p className="d-inline-flex px-2">Some Bootcampers playing GameCube (L-R: Taylor, Abram, Myself, and Will)</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/carving-pumpkin.JPG"
                                        alt="A pic of pumpkin carving" />
                            <Carousel.Caption>
                            <p className="d-inline-flex px-2">Anna carving the eyes</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/glowing-pumpkin.JPG"
                                        alt="A glowing pumpkin" />
                            <Carousel.Caption>
                            <p className="d-inline-flex px-2">Very spooky!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/family-lunch-oct-2019.JPG"
                                        alt="Puccini’s Pasta" />
                            <Carousel.Caption>
                            <p className="d-inline-flex px-2">Family lunch — Puccini's Pasta and Salad!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <br />

                    <h3 className="text-center">A Halfway Point</h3>

                    <p>
                        This Friday marked the halfway point of the Bootcamp. It is a 
                        little wild that the course has flown by so quickly. 
                        At the same time, as we started to refactor some of our earlier projects 
                        this week, I realized just how much ground we have covered in such a short period of time. 
                        I’m having a lot of fun in the Bootcamp, so it is a little bittersweet to 
                        think that the rest of the Bootcamp might fly by as well. I am very excited, however, to 
                        graduate and pursue a job in Lexington’s Tech scene!
                    </p>

                    <h3 className="text-center">React Reflection</h3>

                    <p>
                        As I wrote in <a href="https://robbiegay.github.io/posts/bc-week-5.html">last week’s blog post</a>, 
                        I initially struggled with understanding React. It took me most of week 5 before I even 
                        felt like I was gaining any traction. Last weekend, I got a full night's sleep 
                        and spent part of Sunday re-reading the <a href="https://reactjs.org/docs/getting-started.html">React documentation</a>. 
                        This week, I worked through the <a href="https://reactjs.org/tutorial/tutorial.html">React tutorial</a>{" "}
                        for the second time, and read through the documentation 
                        a third. Each time through, I would make it further and further before my comprehension 
                        level would start to drop. By the end of the week, I was starting to feel well 
                        versed in the basics of React — just in time to switch gears and start learning 
                        MySQL and PHP. &#128579;
                    </p>

                    <h3 className="text-center">Next Week: Back End Development</h3>

                    <p>
                        Next week we will start working with Back End languages. Up until this point, we have 
                        been working with Front End languages and frameworks. Front End development 
                        is more client side focused and deals with design and user interfaces. Back End development involves 
                        working with servers and doing more behind-the-scenes work. Additionally, being able to do 
                        both Front End and Back End development is what makes someone a Full Stack Developer!                           
                    </p>

                    <p>
                        We will start Back End work by learning <a href="https://www.php.net/">PHP</a>{" "}
                        and <a href="https://www.mysql.com/">MySQL</a>. We got a bit of an introduction to 
                        these languages with our morning Warm-ups this week.{" "}
                        <a href="https://jmstewart00.github.io/" title="Josh's Website">Josh</a> turned us 
                        loose with some <a href="https://www.hackerrank.com/">HackerRanks</a> on PHP and MySQL. 
                        Both were challenging at first, but it seems that we have become pretty good Google’ers 
                        as we were able to pull up documentation and figure out methods to solve the problems fairly quickly!
                    </p>

                    <h3 className="text-center">Keyboard Shortcuts</h3>

                    <p>
                        After using <a href="https://code.visualstudio.com/" title="VS Code Website">VS Code</a>{" "}
                        daily for several weeks, I decided that today it was time to learn some useful shortcuts 
                        for the software. I listed below some of the useful shortcuts that I found:
                        
                    </p>

                    <ul>
                        <li>
                            <kbd>⌥</kbd> + <kbd>click</kbd> --> Add cursor
                        </li>
                        <li>
                            <kbd>⌘</kbd> + <kbd>C</kbd> OR <kbd>⌘</kbd> + <kbd>X</kbd> (empty selection) --> Copy or Cut entire line
                        </li>
                        <li>
                            <kbd>⌘</kbd> + <kbd>L</kbd> --> Select current line
                        </li>
                        <li>
                            <kbd>⌘</kbd> + <kbd>D</kbd> --> Add to current selection 
                        </li>
                        <li>
                            <kbd>⌘</kbd> + <kbd>&larr; OR &rarr;</kbd> --> Move to beginning or end of line
                        </li>
                        <li>
                            <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>&larr; OR &rarr;</kbd> --> Move to left or right editor
                        </li>
                        <li>
                            <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>S</kbd> --> Save all
                        </li>
                        <li>
                            <kbd>shift</kbd> + <kbd>⌥</kbd> + <kbd>F</kbd> --> Format document
                        </li>
                        <li>
                            <kbd>⌘</kbd> + <kbd>B</kbd> --> Toggle sidebar visibility
                        </li>
                    </ul>

                    <p>
                        Finally, a somewhat unusual shortcut that I found was for something called Zen Mode. 
                        Similar to Focus Mode in Microsoft Word, it minimizes distracting elements of the screen, 
                        allowing you to focus on the act of coding:
                    </p>

                    <ul>
                        <li>
                            <kbd>⌘</kbd> + <kbd>K</kbd> then press <kbd>Z</kbd> --> Zen Mode ( <kbd>esc</kbd> <kbd>esc</kbd> (twice) to exit)
                        </li>
                    </ul>

                    {/* <!-- White space --> */}
                    <br /><br /><br /><br /><br /><br /><br /><br />

                </article>
        </>
    );
}

export default BCWeek2;
