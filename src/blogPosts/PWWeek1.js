import React from 'react';

function PWWeek1() {
    return (
        <>
            <article className="text-justify">
                <h3 className="text-center">Welcome!</h3>
                <p>
                    Welcome to my blog! Here I’ll be posting regular updates about
                    the <a href="https://www.awesomeincu.com/bootcamp/" title="Awesome Inc Web Dev Bootcamp">Awesome Inc Web Dev Bootcamp</a>. This
                    first post covers Prework Week 1, but is being written towards the end of
                    Week 2 — as we had to learn some basic <abbr title="Hypertext Markup Language">HTML</abbr>
                    /<abbr title="Cascading Style Sheets">CSS</abbr> in order to create a blog post to begin with!
                </p>

                <h3 className="text-center">First Week of Prework</h3>
                <p>
                    Our first week started with a meet up at Awesome Inc. We got a chance to
                    meet our fellow bootcampers (there are 11 of us!), as well as meet our 3
                    instructors: <a href="https://www.justinhall.com/" title="Justin Hall's Website">Justin</a>,{' '}
                    <a href="http://ianrios.me/" title="Ian Rios' Website">Ian</a>,
                    and <a href="https://jmstewart00.github.io/" title="Josh Stewart's Website">Josh</a>.
                    <br /><br />
                    <figure className="figure">
                        <img className="img-fluid border" src="/blogAssets/img/awesome-u-bootcamp-curriculum.png"
                            alt="The Awesome Inc U Bootcamp Curriculum" />
                        <figcaption className="figure-caption text-center">source: <a
                            href="https://www.awesomeincu.com/bootcamp/">
                            Awesome Inc Web Dev Bootcamp</a></figcaption>
                    </figure>
                    <br />
                </p>

                <h3 className="text-center">The Learning Curve</h3>
                <p>
                    My favorite takeaway from our initial meet up was this cool graphic on the stages of learning:
                    <br /><br />
                    <figure className="figure">
                        <img className="img-fluid border" src="/blogAssets/img/awesome-learning-curve.png"
                            alt="Awesome Learning Curve" />
                        <figcaption className="figure-caption text-center">source: <a
                            href="https://www.thinkful.com/blog/why-learning-to-code-is-so-damn-hard/">"Why
                                Learning to Code is so Damn Hard"</a></figcaption>
                    </figure>

                    <br />
                    I love reading books about learning. I read (skimmed) Malcolm
                    Gladwell’s <a href="https://en.wikipedia.org/wiki/Outliers_(book)" title="Outliers by Malcolm Gladwell">“Outliers”</a> a
                    few months ago, and have been working my way through the public library’s
                    collection of Cal
                    Newport (<a href="http://www.calnewport.com/books/so-good/" title="So Good They Can’t Ignore You by Cal Newport">
                        “So Good They Can’t Ignore You”</a> is an awesome take on learning new skills;{' '}
                    <a href="http://www.calnewport.com/books/digital-minimalism/"
                        title="Digital Minimalism by Cal Newport">“Digital Minimalism”</a>{' '}
                    caused me to delete all social media from my phone and to disable its internet browser). I’d
                    seen images of learning
                    curves, and read various theories about the path someone takes when learning a new skill, but I
                    had never stumbled
                    across something that broke it down like this graphic did.
                </p>
                <p>
                    The graphic itself has 3 sections: confidence, resource density, and scope of knowledge. As you
                    progress
                    left to right, you go through various stages for each, while steadily increasing your
                    competency. What I liked
                    most about this was the confidence meter and the resource density sections.
                </p>
                <p>
                    I think that anyone who has tried to learn a new skill has likely experienced that initial boost
                    in confidence.
                    You start learning a new skill and (because you started at zero) you progress very quickly.
                    You’re flying through
                    the plethora of beginner's resources and climbing the learning curve so rapidly that you’re
                    <em>convinced</em> that
                    this time next week you’ll be working for Google. <br />
                    <br />
                    Then you crest that initial hill. <br />
                    <br />
                    When you started, you didn’t know enough to know what you didn’t know. As such, you felt like it
                    would be pretty
                    simple to acquire all of the information you would need. Now, after a few weeks of rapid
                    learning, you finally know
                    enough about whatever skill you are learning to realize just how much you have left to learn.
                    Your small pond
                    turned out to be a big ocean. And that’s where the confidence drop comes from — correspondingly,
                    it’s also likely
                    that this is where most newcomers flame out.<br />
                    <br />
                    To add to this blow, the graphic also shows a rapid increase in resource
                    scarcity. My own thoughts on this are that there are two markets for those who create such
                    resources:
                </p>
                <ol>
                    <li>Beginners</li>
                    <li>Experts (Paid Professionals)</li>
                </ol>
                <p>
                    In most fields, there are likely way more people in the beginning market than at any other
                    junction.
                    So, despite the fact that beginners likely aren’t making money yet
                    (and therefore don’t have much money to invest in learning resources), the sheer size of this
                    market makes
                    it appealing for resource creators to create content for. <br />
                    <br />
                    At the other end of the spectrum, experts likely represent a small percentage of the total
                    audience. Since they are paid for
                    their work, however, they can likely afford to pay a premium for advanced level knowledge
                    resources. This leaves
                    a small market for those skill-learners who are beyond the scope of the beginner resource but
                    below the level
                    of the expert resource. <br />
                    <br />
                    This creates a “desert of despair”, as the graphic calls it, where your confidence level is
                    knocked down
                    several pegs AND those learning resources that helped you advance so quickly early on are
                    becoming more
                    and more scarce. <br />
                    <br />
                    This learning curve graphic goes on to point out that:
                </p>
                <ol>
                    <li>Despite this feeling of hopelessness, <strong>others before you have had the same
                            experience</strong>.
                        The graphic encourages us to keep pushing.</li>
                    <li>Despite the fluctuations in confidence and resources, your competencey is steadily
                        increasing
                        throughout this journey.</li>
                </ol>
                <p>
                    Note: I didn’t mention the 3rd category, "scope of knowledge" — that’s basically showing how a
                    beginner
                    absorbs broad fundamentals early on before specializing (and decreasing total breadth of
                    knowledge) later on in their journey.<br />
                    <br />
                    ~Phew~ Sorry for the big rant on learning curves — on to the meat and potatoes of Prework Week
                    1.
                    <br /><br />

                    <h3>DVCS: Git and GitHub</h3>

                </p>
                <p>
                    The focus of our first week of prework was getting up to speed on Git and Github.<br />
                    <br />
                    What is Git?
                </p>

                <blockquote className="blockquote bg-light px-5 py-2 my-4 rounded-pill">
                    "Git is a free and open source distributed version control system designed to handle everything
                    from small to very large projects with speed and efficiency.” <cite className="blockquote-footer"><a
                        href="https://git-scm.com/">Git</a></cite>
                </blockquote>

                <p>
                    Great — but what is a DVCS?<br />
                    <br />
                    To start, VCS is a Version Control System. My one-week-of-coding-experience definition of a VCS
                    is that it allows you to track and document changes to code (including reverting to older
                    versions
                    of the code). A Distributed Version Control System (DVCS) is a VCS that is mirrored on multiple
                    devices.
                    For example, if I have a full copy of the code on my computer and you have an identical copy on
                    yours,
                    then we have a <em>distributed</em> copy of the code.<br />
                    <br />
                    But what if I change my copy — now our copies aren't aligned, right? That’s where the “version
                    control system”
                    comes into play.<br />
                    <br />
                    A DVCS like Git tracks any changes I make, and then allows me to merge those changes into a
                    shared code.
                    You could then update your copy of the code to match that shared code, and then add your own
                    changes.<br />
                    <br />
                    <a href="https://github.com" title="GitHub">GitHub</a> is a cloud based code repository. So, if
                    we each
                    have our copies of the code, we could place a third copy on GitHub. This saves us time, as I no
                    longer
                    have to drive to your house for us to compare code versions.
                </p>

                <figure className="figure">
                    <img className="img-fluid border" src="/blogAssets/img/git-stages.png" alt="Example of Git Workflow" />
                    <figcaption className="figure-caption text-center">Source: <a className="minimalLink"
                        href="https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository">"Intro
                            to Git"</a></figcaption>
                </figure>


                <p>
                    This oversimplified explanation of Git doesn’t even begin to get into some of the more complex
                    (or, to me, confusing) functions of Git.
                </p>

                <h3 className="text-center">Challenges</h3>

                <p>
                    I found Git pretty hard to understand. For one, working in Command Line meant that there wasn’t
                    much
                    of a user interface. It sometimes felt like you were flying in the dark — entering commands and
                    receiving
                    little to no visual or textual confirmation of what you are doing.
                </p>

                <figure className="figure">
                    <img className="img-fluid border" src="/blogAssets/img/why-git-is-confusing.png"
                        alt="Why Git is so confusing" />
                    <figcaption className="figure-caption text-center">Source: <a
                        href="https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows">"Intro to
                            Git"</a> (added text mine)</figcaption>
                </figure>


                <p>
                    One thing that helped me was reaching out to my brother, William.{' '}
                    <a href="https://github.com/1GWilly8" title="William's GitHub">William</a>{' '}
                    graduated with a <a href="https://www.hanover.edu/academics/programs/cs"
                        title="Hanover College Computer Science"><abbr title="Computer Science">CS</abbr> degree</a>{' '}
                    in 2018 and has been working for an <a href="https://glowlabs.co" title="Glow Labs">
                        <abbr title="Internet of Things">IoT</abbr> company</a> in Denver. I told him that I was
            struggling with Git and
            Command Line and that I was afraid of messing things up if I typed in the wrong
                    command. He told me to make mistakes and practice using Git/<abbr title="Command Line">CL</abbr>
                    — I wasn’t likely to break
                    anything (too badly) and I would learn more by doing.
                </p>

                <h3 className="text-center">Reflection: Prework Week 1 (and 2)</h3>

                <p>
                    Since I’m writing this near the end of Week 2, I am going to reflect
                    on both weeks, despite the rest of this post being about Week 1 topics.<br />
                    <br />
                    I really enjoyed the first week of the developer bootcamp. We are working
                    remotely and I wasn’t really sure what the workload would be like. I found it
                    to be challenging but manageable, although (perhaps more importantly) I also found it to be
                    really
                    fun! I really enjoyed that there is so much to learn at this phase. I also really
                    liked that so much of the work involves getting hands-on and creating web pages.
                    Even though the websites we are building are very basic, it felt very satisfying
                    to be able to apply what we had just learned and see the changes come to life!<br />
                    <br />
                    I am really excited to continue working through these prework topics. I’ve enjoyed
                    some of the design aspects of CSS, and am really looking forward to working with
                    JavaScript to build more responsive websites!<br />
                    <br />
                    I found Git and CSS relatively harder than HTML. The application process for the bootcamp
                    involved an HTML assignment, and I worked through a Coding Academy course on HTML to help me
                    with that. I found Git challenging due to the lack of a
                    <abbr title="User Interface">UI</abbr> as well as some confusion about the various intricacies
                    of branching, merging, rebasing, etc. I found CSS challenging mostly in the amount of
                    information to absorb. I think that with both Git and CSS, more time spent working with
                    them will help me to better digest the information.<br />
                    <br />
                    A final reflection is that I really love working in an academic setting that doesn’t
                    involve quizzes or grades! I think that this is really refreshing — instead of making
                    flashcards and doing rote memorization, you can approach the subject
                    matter in whichever way helps you to best absorb and apply the material!
                </p>

                <h3 className="text-center">A Bonus Resource</h3>

                <p>
                    The prompt for our first blog post asked us for a resource that would help others in the
                    program.
                    I’m sure that most bootcampers know of or use something similar to this, but I found an
                    online coding platform like <a href="https://codepen.io" title="CodePen">CodePen</a>{' '}
                    really helpful. I didn’t use it for major projects, but when I learned something new
                    and wanted to try applying it quickly, I could hop over to CodePen and draft something
                    up in a matter of minutes.
                </p>

                {/* <!-- White space --> */}
                <br /><br /><br /><br /><br /><br /><br /><br />

            </article>
        </>
    );
}

export default PWWeek1;