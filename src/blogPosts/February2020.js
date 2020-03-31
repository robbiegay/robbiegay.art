import React from "react";
import { Carousel } from "react-bootstrap";

function February2020() {
    return (
        <>
            {/* <!-- Main Text --> */}
            <article className="text-justify">

                <p>
                    Happy Leap day! If today is your birthday, congrats on having an
                    age on paper that is 1/4th of the age you actually feel. :)
                    </p>

                <h3 className="text-center">Design</h3>

                <p>
                    For the past few weeks, I have been reading{" "}
                    <a href="https://www.penguin.co.uk/books/110/1107939/user-friendly/9780753556641.html" title="User Friendly Book Publisher's Page">”User Friendly: How the Hidden Rules of Design Are Changing the Way We Live, Work, and Play”</a>{" "}
                    by Cliff Kuang and Robert Fabricant. Sometimes I think that design
                    is looked at as the least important of a developer’s skill set.
                    Backend is typically seen as more complex, and is usually more highly
                    compensated. Kuang and Fabricant’s book has had me thinking a lot
                    this month about the importance of design.
                    </p>

                <p>
                    The first thing that I found interesting is the story of{" "}
                    <a href="https://en.wikipedia.org/wiki/Apple_Inc." title="Apple, Inc Wikipedia">Apple</a>.
                    When Apple began its rise to world dominance, I was still too young to be
                    a heavy computer user. It’s interesting because when I say “too young”
                    I was actually much older than the age that many children today surf
                    the web and watch Jake Paul vlogs. The difference is that before Apple
                    ushered in the age of user friendly devices, children did not use computers
                    at nearly the rate they do today. Since I was too young to really use a
                    computer before Apple became prominent, I did not really understand the
                    context in which Apple began making hardware.
                    </p>

                <p>
                    Before Apple, computers were powerful machines that required specialized
                    knowledge to use. They came with large, densely worded manuals, and despite
                    the fact that they could do many tasks better than old methods, their
                    difficulty of use prevented them from being nearly as prevalent as they
                    are today. Apple’s designers strove to create user interfaces that lessened
                    the difficulty of taking a task from an idea in your head --> to the
                    interaction with the computer --> to the desired result. The iPhone and
                    the ability to physically touch and drag objects around the screen really
                    embodies this ease of use. To move down a page you simply drag down, just
                    as you would drag a piece of physical paper across a table if you wanted to
                    move it downward. Apple helped revolutionize the world of intuitive computing.
                    </p>

                <p>
                    One aspect that “User Friendly” has had me thinking about is the difference between
                    UI and UX. UI and UX are often grouped together as UI/UX, and it wasn’t until recently
                    that I started thinking about their differences. UI stands for User Interface, and I
                    think this is what most people think about when they imagine a designer. UI includes
                    aspects such as color, layout, and aesthetics. UX stands for User Experience, and may
                    have very little to do with visual design, but rather with how a human interacts with
                    an object. UX involves thinking about how a designer can help make using a device as
                    intuitive as possible. UI and UX can be completely independent of each other. Imagine
                    you download an app with great UI: the colors are beautiful, there are tons of animations
                    when you interact with the screen, etc. Now imagine that you start interacting with the
                    app. You want to move an object from the bottom to the top of the screen. Instinctively,
                    you click and drag. Nothing happens. Finally, you realize if you tap on the object, a
                    menu appears. In that menu,  hidden at the bottom of a scrollable list of 20 options,
                    you finally see “Move”. You tap “Move”, and are taken to a new screen where you are
                    asked to enter X and Y coordinates for the desired location of the object. Talk about
                    bad UX. I’m sure you can also imagine a case when an app with minimal User Interface,
                    could have a great, intuitive User Experience.
                    </p>

                <p>
                    For more information on UI and UX, I recommend reading{" "}
                    <a href="https://www.penguin.co.uk/books/110/1107939/user-friendly/9780753556641.html" title="User Friendly Book Publisher's Page">“User Friendly”</a>,
                        or to check out some of Apple’s documentation on{" "}
                    <a href="https://developer.apple.com/design/human-interface-guidelines/" title="Apple's Human Interface Guidelines">Human Design Interface Guidelines</a>.
                    </p>

                {/* <!-- White space --> */}
                <br /><br /><br /><br /><br /><br /><br /><br />

            </article>
        </>
    );
}

export default February2020;
