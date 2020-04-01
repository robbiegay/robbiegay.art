import React from "react";
import { Carousel } from "react-bootstrap";

function January2020() {
    return (
        <>
            {/* <!-- Main Text --> */}
            <article className="text-justify">

                <h3 className="text-center">Monthly Update</h3>

                <p>
                    This past month, Anna and I adopted two cats, I played my first game
                    of disc golf (and fell in the mud), we visited friends and family in
                    Louisville, we made homemade pizza, and I hit some January resolutions
                    (but not others).
                    </p>

                {/* <!-- Carousel Images --> */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/poppy-and-waffles-blur.png"
                            alt="Picture of the cats" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Waffles (front) and Poppy</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/first-game-of-disc-golf-blur.png"
                            alt="A muddy picture of me" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2">After I fell in the mud. Note my superb taste in functional eyewear</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/lou-aja-jenga-blur.png"
                            alt="A picture of Aja" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2">Aja playing giant Jenga at Mile Wide Brewery</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/lou-robbie-anna-ricky-larry.JPG"
                            alt="A picture of Aja" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2">L-R: Robbie, Anna, Ricky, Larry. Visiting my great Uncle in Louisville.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/baking-pizza-at-ians-blur.png"
                            alt="A picture of our pizzas" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2">Baking pizzas at Ian and Olivia's house</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/music-studio.JPG"
                            alt="A picture of my home music studio" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2">I finally got my home music studio decorated. I made it half the month on my piano practice resolution.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <h3 className="text-center">The Job Hunt</h3>

                <p>
                    Around Jan 15th, I started doing freelance iOS development for{" "}
                    <a href="https://warnerdesigntechnology.com/" title="Tommy's website">Tommy Warner</a>.
Tommy previously worked as a physics teacher at Lafayette High School for 6 years, during which
    time he taught himself to write software and started taking on clients through{" "}
                    <a href="https://www.upwork.com/" title="UpWork's website">UpWork</a>.
After the 2018-19 school year, Tommy was able to step away from teaching and pursue
freelancing full-time. Tommy told me that he had gotten to the point where he
was having to turn away clients because he was too busy,
    and was therefore hoping to hire someone part-time to help write some{" "}
                    <a href="https://swift.org/" title="Swift documentation">Swift</a> code.
                    </p>

                <p>
                    Switching gears from web to mobile development presented some challenges.
                    During the Bootcamp, we slowly ramped up from the most basic to more advanced
                    apps. This meant that I usually got a fairly solid grip on a concept before
                    adding something new. Working with Tommy, I had to jump into the middle of a
                    project and I felt as though I was confused as to what was going on
                    outside of the small scope of my current work.
                    </p>

                <p>
                    To help remedy this, I spent some time last weekend and this week reading
                    through the Swift documentation and taking notes. In addition to note taking,{" "}
                    <a href="https://developer.apple.com/xcode/" title="Xcode website">Xcode</a>{" "}
                    also has a cool playground feature that allows you to write code and see
                    instant results — this allowed me to apply new concepts as I was learning them.
                    </p>

                <p>
                    This past week I built my first personal app, a calculator! I was really excited
                    to build something that I could run on my phone. While web development seemed
                    challenging, there are online website builders and it didn’t seem impossible
                    to build my own website, even prior to the Bootcamp. App development,
                    however, had a certain magical quality and I was really excited to build
                    something that I could run on my phone.
                    </p>
                <div className="text-center">
                    <figure className="figure" style={{ maxWidth: "50%" }}>
                        <img className="img-fluid" src="/blogAssets/img/calculator-demo.gif" alt="A demo gif of my calculator app" />
                        <figcaption className="figure-caption text-center">My calculator app!</figcaption>
                    </figure>
                </div>

                <p>
                    We built a calculator app in the Bootcamp, so this project mostly involved
                    refactoring my old code over from JavaScript to Swift. Even so, there were
                    some problems
                        (mostly <a href="https://en.wikipedia.org/wiki/Don't_repeat_yourself" title="DRY Code — Wikipedia page">WET code</a>)
that I was able to address in this build.
I was also pretty happy with the retro color scheme. Since almost everyone
has a calculator on their phone, I also added an Easter Egg — Party Mode — that can
                        be accessed by inputting my birthday: “32193” (March 21<sup>st</sup>, 1993).
                    </p>

                <h3 className="text-center">Swift vs JavaScript</h3>

                <p>
                    I wanted to end this post with my thoughts on some key differences
                    between Swift and JavaScript. Swift is for native iOS projects,
                    and is based on{" "}
                    <a href="https://en.wikipedia.org/wiki/Objective-C" title="Objective-C Wikipedia page">Objective-C</a>.
Below are some key differences that I found:
                    </p>

                <ul>
                    <li>
                        Swift doesn't require <code>;</code> to end each line — they are optional, and
                        can be used to separate two short clauses on the same line,
                        </li>
                    <li>
                        <code>()</code> are also optional around things like <code>if</code> statements
                        </li>
                    <li>
                        In JavaScript, you use <code>const</code> to declare a{" "}
                        <a href="https://en.wikipedia.org/wiki/Constant_(computer_programming)" title="Constant — Wikipedia Page">constant</a> and{" "}
                        <code>let</code> or <code>var</code> to declare a{" "}
                        <a href="https://en.wikipedia.org/wiki/Variable_(computer_science)" title="Variable — Wikipedia page">variable</a>.
                            In Swift, you use <code>let</code> to declare a constant and <code>var</code> to declare a variable.
                        </li>
                    <li>
                        Functions are written a little differently in Swift: <code>func funcName(argumentName parameterName: String) -> String &#123; func code &#125;</code>.
                            <ul>
                            <li>
                                To declare a function, you use <code>func</code> instead of <code>function</code>.
                                </li>
                            <li>
                                The function's name is similar to JavaScript -> <code>funcName</code>.
                                </li>
                            <li>
                                You can define the function's parameters one of two ways: named or unnamed. Named parameters have
                                    an argument name that comes first. In the above example, this means that when we call <code>funcName</code> we would need to
                                    specify the name of each parameter we give it: <code>funcName(argumentName: "Some value")</code>. The{" "}
                                <code>parameterName</code> is the value used within the body of the function.
                                </li>
                            <li>
                                After the argument and parameter names you see <code>: String</code>. This is another interesting difference
                                between Swift and JavaScript. You declare variable types using a semicolon followed by the variable type (things like:{" "}
                                <code>String</code>, <code>Int</code>, <code>Double</code>, <code>Bool</code>, <code>Array</code>, or <code>Any</code>).
            Here we are declaring that the parameter type supplied will be a String.
                                </li>
                            <li>
                                Finally, after the parameters, we see <code>-> String</code>. This specifies a return type. Functions in Swift
                                can either be Void or return a single value (of which you could combine several values in a single, compound{" "}
                                <a href="https://en.wikipedia.org/wiki/Tuple" title="Tuple — Wikipedia page">tuple</a>). Here we are specifying that
            our function will return a String value.
                                </li>
                        </ul>
                    </li>
                </ul>

                <h3 className="text-center">Reflection</h3>

                <p>
                    I've really enjoyed learning Swift and like both building apps and freelancing in general.
                    That said, I am still continuing my job hunt and have been sending out applications every week.
                    For now, I plan on continuing to make more apps, both for clients and myself.
                    </p>

                {/* <!-- White space --> */}
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

            </article >
        </>
    );
}

export default January2020;
