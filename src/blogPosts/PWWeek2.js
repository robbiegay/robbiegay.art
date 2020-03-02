import React from 'react';
import { Carousel } from 'react-bootstrap';

function PWWeek2() {
    return (
        <>
                <article className="text-justify">

                    <p>
                        I’m writing this late on a Labor Day Monday night. My
                        girlfriend is currently in flight back from NYC where
                        she saw a Jonas Brother Concert (not super jealous),
                        and ate at a Michelin Starred Chinese restaurant
                        (<strong>super</strong> jealous). My Labor Day Weekend
                        was <em>pretty</em> good (thanks for asking) — I spent
                        a decent amount of time reading and reviewing HTML and
                        CSS but did manage to stop by my neighbor’s new pool
                        each of the 3 holiday weekend days!
                    </p>

                    {/* Carousel Images  */}
                    <Carousel>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100" 
                                src="/blogAssets/img/cafe-china-nyc.JPG"
                                alt="An image of Chinese food. Photo Credit: Anna B." 
                            />
                            <Carousel.Caption>
                                <p>Food from Cafe China, NYC</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100" 
                                src="/blogAssets/img/labor-day-pool.JPG"
                                alt="A nice picture of my legs and water bottle at my neighbor's pool" 
                            />
                            <Carousel.Caption>
                                <p>Relaxing by the pool</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <p>
                        This weekend wraps up the second week of Coding Bootcamp
                        Prework. The focus of this week was an introduction to HTML
                        and CSS. HTML stands for hypertext markup language. HTML is
                        not a coding language (it’s a markup language), although if
                        you looked at a page of HTML, you might be fooled.
                    </p>

                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/html-looks-like-code.png"
                            alt="HTML looks like code. It's actually a markup language" />
                        <figcaption className="figure-caption text-center">Not code, don't get fooled.</figcaption>
                    </figure>

                    <p>
                        CSS stands for cascading style sheets. HTML provides the
                        structure of your webpage and CSS gives it its style. If HTML
                        is like the frame of your house, CSS is the doors, windows,
                        paint, etc:
                    </p>

                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/html-vs-css.png" alt="Visual analogy of HTML vs CSS" />
                        <figcaption className="figure-caption text-center">HTML is like the frame of a house; CSS adds
                            style.</figcaption>
                    </figure>

                    <p>
                        We covered a range of basic HTML and CSS topics, and although
                        I would love to write a post covering <em>everything</em> we
                        learned, I would also love to go to sleep at some point tonight.
                        Instead, here is a very basic introduction to HTML/CSS!
                    </p>

                    {/* <!--|| HTML Intro --> */}

                    <h3 className="text-center">HTML: A very basic introduction</h3>

                    <p>
                        The basic building block of HTML is the element. An element
                        is declared using opening (&lt;element&gt;) and closing (&lt;/element&gt;)
                        tags. Between said tags, lies the content of the element.
                    </p>

                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/html-tags.png" alt="An image of HTML tags" />
                        <figcaption className="figure-caption text-center">An example of HTML tags</figcaption>
                    </figure>

                    <p>
                        The above example uses the <code>&lt;p&gt;</code> tag. “p”
                        stands for paragraph. A paragraph is the basic holding element
                        for the body of your text. The text you are reading now is
                        contained within a <code>&lt;p&gt;</code> tag. You can find
                        a whole list of other tags on the{' '}
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                            title="MDN HTML Reference">documentation
                            site</a>.
                    </p>

                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/current-text.png" alt="An image of some HTML" />
                        <figcaption className="figure-caption text-center">The HTML of the above paragraph</figcaption>
                    </figure>

                    <p>
                        Elements are nested within a hierarchy in HTML. Below is a
                        very basic layout for a HTML webpage:
                    </p>

                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/html-example.png" alt="An image of some basic HTML" />
                        <figcaption className="figure-caption text-center">Here is an example of basic HTML</figcaption>
                    </figure>

                    <p>
                        A rundown of what is going on here:
                        <ul>
                            <li>
                                <code>&lt;!DOCTYPE html&gt;</code> this declares to
                                the muses of the internet that the below information
                                is a HTML document, and to process that information
                                accordingly.
                            </li>
                            <li>
                                <code>&lt;html&gt;</code> This is the opening tag that
                                begins the actual HTML document. Notice at the bottom
                                of our markup is <code>&lt;/html&gt;</code> this
                                closes the markup. This level is sometimes called the
                                root.
                            </li>
                            <ul>
                                <li>
                                    Although not required, I have also declared
                                    the language (“lang”) of our webpage: it is
                                    written in English (“en”), the US dialect.
                                </li>
                            </ul>
                            <li>
                                <code>&lt;head&gt;</code> The head contains the
                                elements that the end user does not need to see,
                                but that the machines find useful.
                            </li>
                            <ul>
                                <li>
                                    Here we have a metadata tag “meta” that
                                    declares the charset (set of characters
                                    that the browser can interpret). Here we
                                    have defined it as utf-8, which allows us
                                    to use virtually all 1.1 million characters
                                    and symbols in any world language. You can{' '}
                                    <a href="https://en.wikipedia.org/wiki/UTF-8" title="utf-8 Wikipedia Page">
                                        read more about utf-8 here</a>.
                                </li>
                                <li>
                                    <code>&lt;title&gt;</code> This is the title
                                    of the webpage. It is useful for search
                                    engines (it is the name that appears in big
                                    title letters in search results). It also
                                    appears as the title of the window or tab
                                    when on the site. Additionally, it is the
                                    default name when you try to bookmark the
                                    page (for example, bookmarking this
                                    <em>awesome</em> blog would give you
                                    the default title "Prework Week 2")
                                </li>
                                <li>
                                    <code>&lt;/head&gt;</code> notice that we
                                    then close the head with a closing tag.
                                </li>
                            </ul>
                            <li>
                                &lt;body&gt; The body is where the main content of our
                                webpage lives. The only content that we have here is
                                “hello world” (<a href='https://en.wikipedia.org/wiki/"Hello,_World!"_program'
                                    title="'Hello, world!' Wikipedia Page">
                                    click for context about the hello world convention</a>).
                            </li>
                            <li>
                                We then close out our <code>&lt;body&gt;</code> and
                                close out our <code>&lt;html&gt;</code>
                            </li>
                        </ul>
                        Notice how the <code>&lt;p&gt;</code> opening and closing tags
                        are on the same line, but the <code>&lt;html&gt;</code> tags
                        are on different lines (and indentations)? Whitespace, or the
                        spacing of the HTML document, doesn’t matter to the web
                        browser. We could put everything on one line! Rather, it
                        matters to us. Laying things out in a human-readable manner
                        is handy for anyone working with computers.
                        <br /><br />
                        Here is the end result of our sample HTML. Things will look a little sparse,
                        but we did a good job setting up a basic layout:
                    </p>

                    <figure className="figure">
                        <img className="img-fluid border" src="/blogAssets/img/html-result.png"
                            alt="An image of our test website" />
                        <figcaption className="figure-caption text-center">This is what our test website looks like!
                        </figcaption>
                    </figure>

                    {/* <!--|| CSS Intro --> */}

                    <h3 className="text-center">CSS: Another brief introduction</h3>

                    <p>
                        We can add CSS to our example HTML to give it some style!
                        <br /><br />
                        First, we need to link our CSS file in the HTML markup, that
                        way the web browser knows where to find it. If we don’t tell
                        the computer where to look, it would be like telling a human,
                        “fetch me a glass of water”. Your friend might not know where
                        you keep your cups. Linking to the stylesheet is like saying
                        “fetch me a glass of water, the glasses are in the cabinet
                        next to the fridge.”
                    </p>

                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/html-add-stylesheet.png"
                            alt="An image showing how to link to a CSS Stylesheet" />
                        <figcaption className="figure-caption text-center">Linking to a CSS Stylesheet</figcaption>
                    </figure>

                    <p>
                        CSS is formatted a little different than HTML. A CSS rule or
                        ruleset tells the browser how to style various HTML elements.
                        On the left are the selectors, these tell HTML which part of
                        the page to apply the style rule to.
                    </p>

                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/css-dec.png" alt="An example of a CSS declaration" />
                        <figcaption className="figure-caption text-center">An example of a CSS declaration</figcaption>
                    </figure>

                    <p>
                        A CSS example might look like:
                        <br /><br />
                        <code>.robbie &#123;color: purple&#125;</code>
                        <br /><br />
                        In computer speak, this takes the class “<code>robbie</code>”
                        (an endstop “<code>.</code>” before a word makes it apply to a
                        whole class of elements), and turns it/him purple. In human
                        speak the selector <code>.robbie</code> would sound like “make
                        robbie…” and the declaration <code>&#123;color: purple&#125;</code>
                        would sound like “…become purple colored”.
                        <br /><br />
                        A final example of CSS will be to apply it to the example HTML we used before.
                        <br /><br />
                        <div className="bg-light rounded-pill py-2">
                            <code className="ml-5">
                            p &#123;<br />
                            <span className="ml-5">color: lightsalmon;</span><br />
                            <span className="ml-5">border: 1px dotted green</span><br />
                            <span className="ml-5">&#125;</span>
                        </code>
                        </div>
                        <br /><br />
                        We have told the web browser to make all &lt;p&gt; elements
                        the color “<code>lightsalmon</code>” and to add a
                        "<code>1px</code>" (pixel) wide, dotted, green-colored border
                        around them.
                    </p>

                    <figure className="figure">
                        <img className="img-fluid border" src="/blogAssets/img/example-css-applied.png"
                            alt="An image of CSS being applied" />
                        <figcaption className="figure-caption text-center">What our example site looks like with CSS applied
                        </figcaption>
                    </figure>

                    <p>
                        Thanks for sitting through my brief HTML and CSS tutorial! If
                        this were the year 1990, you might be able to get a job
                        working with <a href="https://en.wikipedia.org/wiki/HTML#Development"
                            title="The history of HTML, Wikipedia">Tim Berners-Lee</a>,
                        otherwise you’ll likely need to read through more of the{' '}
                        <a href="https://developer.mozilla.org/en-US/docs/Learn" title="MDN Learn Web Dev Guide">MDN
                            tutorials</a>{' '}
                        before this
                        becomes remotely practical.
                    </p>

                    {/* <!--|| Pseudo Code --> */}

                    <h3 className="text-center">Pseudo Code: not code, but not <em>not</em> code</h3>

                    <p>
                        This week we also learned about Pseudo Code. Pseudo Code is
                        really useful in the brainstorming phase of your code writing
                        process, as it allows you to find a happy medium between
                        super technical real code, and regular, everyday English.
                        <br /><br />
                        Why find this middle ground? Jumping right into code can be
                        like starting a journey without any sort of road map. Pseudo code gives
                        you a chance to outline your work, and maybe see what problems
                        and challenges you are likely to face. You may be able to
                        solve some of those problems in this outline, perhaps saving
                        you the time of starting in the wrong direction!
                        <br /><br />
                        Pseudo Code is not full code. The meaning of this is that you
                        don’t have to worry about the code being technically correct —
                        there’s no getting bogged down in the complexities of figuring
                        out how to solve certain problems. For example, in your Pseudo
                        Code, you might realize that you need to invent a new
                        algorithm for streaming video. Instead of putting down the pen
                        and spending hours/days/years (I have no idea how long it take
                        to write an algorithm) writing your new algorithm, it is enough
                        to simply know that it is needed — plot it on your roadmap and
                        move on.
                        <br /><br />
                        At the same time, you would want to avoid full on English.
                        Saying “go find the peanut butter” might not mean much to a
                        computer. Humans are great at making inferences and thinking
                        creatively, computers are very literal. While you don’t need
                        to actually map out, via full-blown code, how to get your
                        robot/computer to find the peanut better, you should at least
                        acknowledge the basic steps: locate kitchen, locate pantry,
                        find peanut butter.
                    </p>

                    {/* <!--|| Prework Week 3 Reflection --> */}

                    <h3 className="text-center">Reflection</h3>

                    <p>
                        I really enjoyed Prework Week Two of the Awesome Inc. Bootcamp. There
                        is a lot to learn and I have really enjoyed getting to build
                        some test websites!
                        <br /><br />
                        I struggled a bit this week with CSS. We worked through the
                        MDN Intro readings on the topic, and I found myself rereading
                        them today for the 3rd time, taking notes, and only now
                        starting to feel more comfortable understanding topics such as{' '}
                        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#Inheritance"
                            title="MDN Guide to Inheritance">inheritance</a>,{' '}
                        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#Conflicting_rules"
                            title="MDN Guide to Cascade">cascade</a>, and{' '}
                        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model"
                            title="MDN Guide to Box Model">box model</a>.
                        <br /><br />
                        HTML came a bit more easily. An assignment for acceptance into the Bootcamp
                        involved building a basic HTML site. To help me
                        build that, I signed up for a free trial of Code Academy Pro
                        and worked through an Introduction to HTML course. Having even
                        a brief sampler of HTML helped me get through the HTML
                        fundaments more easily.
                        <br /><br />
                        I found Pseudo Code really interesting to work with. It’s
                        really helpful to create an outline and to be able to
                        (mentally) run through your program and know that it might
                        (<em>hopefully</em>) work. This is nice because you can build a roadmap
                        without becoming caught up with the various typos and small
                        errors that your code might have initially. With Pseudo Code,
                        you are making a good faith effort to ensure that your
                        top-level logic is sound!
                    </p>

                    {/* <!--|| Resources --> */}

                    <h3 className="text-center">Resources</h3>

                    <p>
                        Two resources that I found helpful were{' '}
                        <a href="https://fonts.google.com" title="Google Fonts">Google Fonts</a>{' '}
                        and Google's <a href="https://www.google.com/search?q=color+picker" title="Online Color Picker">
                            online color selector</a>. Google Fonts gives you a large
                        selection of fonts to chose from (I’m currently using
                        "Roboto"), as well as a great interface for selecting fonts
                        and easy to understand instructions on how to implement them.
                        <br /><br />
                        A color selector was helpful for picking aesthetically
                        pleasing colors for a website, as it allowed you to turn
                        any color you wanted into hex or rgb notation.
                        <br /><br />
                        A closing note, if you’re interested in HTML and CSS and want
                        to see (aka judge) my use of them, you can likely access
                        developer tools on your web browser. Here are some links
                        that would allow you to turn those on in a variety of popular
                        browsers.
                        <ul className="text-left">
                            <li>
                                Chrome: <a href="https://developers.google.com/web/tools/chrome-devtools/"
                                    title="Chrome Web Dev Tools">
                                    Accessing Developer Tools</a>
                            </li>
                            <li>
                                Safari: <a href="https://developer.apple.com/safari/tools/"
                                    title="Safari Web Dev Tools">Accessing
                                    Developer Tools</a>
                            </li>
                            <li>
                                Internet Explorer:{' '}
                                <a href="https://technet.microsoft.com/en-us/gg589513(v=vs.71)"
                                    title="IE Web Dev Tools">Accessing
                                    Developer Tools</a>
                            </li>
                            <li>
                                Firefox: <a href="https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox" title="Firefox Web 
                            Dev Tools">Accessing Developer Tools</a>
                            </li>
                        </ul>
                    </p>

                    {/* <!-- White space --> */}
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    
                </article>
        </>
    );
}

export default PWWeek2;
