import React from 'react';
import { Carousel } from 'react-bootstrap';

function JHWeek4() {
    return (
        <>
            {/* <!-- Main Text --> */}
            <article class="text-justify">

                <p>
                    I apologize for the short blog post — it’s 7:15pm on New Years Eve, and
                    I’m hoping to post a final blog post of the decade.
                    </p>

                <h3 class="text-center">Reviewing React</h3>

                <p>
                    I’ve spent the last few days working through some React documentation. First,
                        I went through the <a href="https://reactjs.org/docs/hello-world.html" title="React Docs: Main Concepts">Main Concepts</a>{' '}
                    section in order to reinforce the basic concepts that I learned in the Bootcamp.
                    </p>

                <p>
                    I then skimmed through the advanced topics: I learned how you can use{' '}
                    <a href="https://reactjs.org/docs/context.html" title="React Docs: Context">context</a>{' '}
                    to pass data through the component tree without passing props down through component after component.
                        I learned about using <a href="https://reactjs.org/docs/fragments.html" title="React Docs: Fragments">fragments</a>{' '}
                    to embed multiplied elements without adding nodes to the DOM (as well as a useful <code><> </></code>
                    shortcuts for fragments). I read about{' '}
                    <a href="https://reactjs.org/docs/static-type-checking.html" title="React Docs: Static Type Checking">Flow</a>,
                    a static type checker for React, and
                    I am considering using in in future React projects. Many of the remaining advanced articles seemed to
                    answer questions/problems that I hadn’t yet encountered, and as such seemed like they would be better
                    left for a future learning session.
                    </p>

                <p>
                    What I was most excited to learn about was React{' '}
                    <a href="https://reactjs.org/docs/hooks-intro.html" title="React Docs: Hooks">Hooks</a>.
                        Hooks allow you to “hook into” React{' '}
                    <a href="https://reactjs.org/docs/state-and-lifecycle.html" title="React Docs: State and Lifecycle">state and lifecycle</a>{' '}
                    features from function components. Hooks allow you to use React without creating classes.
                        React comes with two useful, built-in hooks: <code>useState</code> and <code>useEffect</code>.
                    </p>

                <h3 class="text-center">Hooks and State</h3>

                <p>
                    The <code>useState</code> hook allows you to use state in a React function component.
                    </p>

                <p>
                    First you need to import <code>useState</code>:
                    </p>

                <p>
                    <code>import React, &#123; useState &#125; from 'react';</code>
                </p>

                <p>
                    You create an instance of the <code>useState</code> hook like this:
                    </p>

                <p>
                    <code>const [count, setCount] = useState(0);</code>
                </p>

                <p>
                    The first item in your array, <code>count</code>, is the name of your state variable.
                        The second item, <code>setCount</code> is the method for updating that state. You then set this
                        array equal to the <code>useState</code> hook. <code>useState</code> accepts one parameter,
                    the initial value of the state. This could be a number, string, array, etc.
                    </p>

                <p>
                    Here is an example using the code snippets above to create a button that updates the user on how
                    many times it is clicked.
                    </p>

                <figure class="figure">
                    <img class="img-fluid" src="/blogAssets/img/hooks-example.png" alt="React hooks example code" />
                    <figcaption class="figure-caption text-center">An example of the useState hook</figcaption>
                </figure>

                <h3 class="text-center">Hooks and Lifecycle</h3>

                <p>
                    React has several different lifecycle components.
                        Things like <code>componentDidMount</code>, <code>componentDidUpdate</code>, and{' '}
                    <code>componentWillUnmount</code>. You can access these lifecycle components with
                    hooks by using the useEffect hook.
                    </p>

                <p>
                    Below is some example code that uses <code>useEffect</code> to update the browser
                        window. This is similar to the way that you would use <code>componentDidUpdate</code>{' '}
                    if using a React class.
                    </p>

                <figure class="figure">
                    <img class="img-fluid" src="/blogAssets/img/useeffect-example.png" alt="React useEffect example code" />
                    <figcaption class="figure-caption text-center">An example of the useEffect hook</figcaption>
                </figure>

                <h3 class="text-center">Closing Thoughts</h3>

                <p>
                    It’s now almost 8:30pm. I’ve got to go get ready to ring in the new year, and new decade.
                    I’m celebrating in Versailles tonight, with my girlfriend (Anna) and my parents. Anna
                    and I recently moved into a house in Versailles and are excited to start 2020 in the
                    new space. It is a little bit wild that the 2010’s are over. This past decade:
                        <ul>
                        <li>Graduated High School (2011)</li>
                        <li>Watched UK Basketball win a National Championship (2012)</li>
                        <li>Spent my freshman year at Furman University — studied abroad in Japan (2011-12)</li>
                        <li>Spent 4 years at Centre College — Studied abroad in Uganda and Rwanda (2012-16)</li>
                        <li>Spent 3 years as an artist, musician, photographer, and filmmaker (2016-19)</li>
                        <li>Completed the Awesome Inc Web Developer's Bootcamp (2019)</li>
                    </ul>
                </p>

                <p>I'm excited to see what the 2020's will hold!</p>

                {/* <!-- White space --> */}
                <br /><br /><br /><br /><br /><br /><br /><br />

            </article>
        </>
    );
}

export default JHWeek4;
