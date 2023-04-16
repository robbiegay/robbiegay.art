import React from "react";
import { Carousel } from "react-bootstrap";

function CleanArchitectureBookReview() {
    return (
        <>
            <article className="text-justify">
                <br /><br />

                <p>
                    <b><u>Rating</u></b>:
                </p>

                <p>
                    &#11088; &#11088; &#11088; &#11088; &#9733;
                </p>

                <br />

                <p>
                    <b><u>Review</u></b>:
                </p>

                <p>
                    <i>Note: These reviews are not meant to be an objective or comprehensive review, but rather just a short summary of my key takeaways.</i>
                </p>

                <p>
                    <i>This review was completed on 2/9/23 but only made its way onto my site on 4/16/23.</i>
                </p>

                <br /><br />

                <p>
                    Parts 1 and 2 of Clean Architecture covered programing paradigms (structured, object-oriented and functional programing) and SOLID principles. I did not get a lot out of this first part of the book because SOLID is important enough that several other technical books that I have read have all included a section on SOLID principles. If you have not encountered SOLID before, then I think these initial section will be of interest.
                </p>

                <p>
                    <b>S: Single Responsibility Principle (SRP)</b>: Group together the things that change at the same rate and for the same reason.
                </p>

                <p>
                    <b>O: Open Closed Principle (OCP)</b>: Classes should be closed to modification and open to extension.
                </p>

                <p>
                    <b>L: Liskov Substitution Principle (LSP)</b>: Classes that inherit from the same interface should be swappable.
                </p>

                <p>
                    <b>I: Interface Segregation Principle (ISP)</b>: Don’t make classes implement interface members that they don't need. I.e. Make your interfaces lean and focused on specific, narrow functionality.
                </p>

                <p>
                    <b>D: Dependency Inversion Principle (DIP)</b>: Don’t make high level components depend on low level components.
                </p>

                <p>
                    The remaining chapters focused on architecture. The book makes a point that an architect is someone who codes, and often is one of the best coders on the team. After all, an architect should be in the trenches having to deal with the problems that good architecture attempts to solve.
                </p>

                <p>
                    One key thing that an architect does is to delay decisions as long as possible. I know, this makes it sound like an architect is just a major procrastinator. What this actually means is that you want your software to remain “soft”; You want it to be adaptable. Requirements change over time and building software is in itself an act of discovery. If you commit to decisions early on, then when things change, you won’t be able to change with them. Deferring decisions means writing code that is loosely coupled – code that doesn’t care what database or framework is used and data that doesn’t care how it is entered or displayed. Decisions can be deferred indefinitely in well architected code.
                </p>

                <br />

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/2023/clean-architecture.jpg" alt="Dependencies being pointed in the right direction" />
                    <figcaption className="figure-caption text-center">Dependencies pointed in the right direction. Lower level components depending on higher level components.</figcaption>
                </figure>

                <br />

                <p>
                    How does a good architect keep components from becoming tightly coupled? By making sure that higher level modules never depend on lower level modules.
                </p>

                <p>
                    What are higher and lower level modules? Robert Martin defines lower level modules as components that are closer to the I/O of the system. GUI’s, frameworks, databases all exist close to the inputs and outputs. On the opposite end, the business rules – the logic that governs how the company either makes money or saves money should have absolutely no dependencies. The business logic should not care at all about how it is implemented.
                </p>

                <p>
                    It can be easy to violate this principle. If you were to write a simple application that calculated sales tax per state, you might write your business logic to run an equation on the sales tax for each state:
                </p>

                <p>
                    <code>
                        tax = [state tax rate] * [sale price]
                    </code>
                </p>

                <p>
                    Where will you get the sales tax of each state? From your database of course! So you create a reference to you database service directly in your business logic. Now your business logic depends directly on your data control layer.
                </p>

                <p>
                    <code>
                        tax = [query database for state tax rate] * [sale price]
                    </code>
                </p>

                <p>
                    When your database logic changes, there is a good chance that you will break your business logic. By creating a dependency on your database, your dependency tree looks like this:
                </p>

                <p>
                    <code>
                        [database layer] &lt;- [business logic]
                        The arrow shows that your business logic depends on your database layer.
                    </code>
                </p>

                <p>
                    You can fix this by inverting your dependencies. Our business logic will expose an interface that the database layer will have to conform to.
                </p>

                <p>
                    <code>
                        [database layer : IDataAccess] -> [IDataAccess]
                    </code>
                </p>

                <p>
                    <code>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[business logic]
                    </code>
                </p>

                <p>
                    Now anything that wants to interact with our business logic has to take on a dependency on our business logic. If the business logic has to make a change to its data access API – to the contract it has made with its dependencies – this change will likely ripple down to all components that depend on it. This is desirable because high level changes are likely to occur less often and be more important than frequent, trivial changes in lower level components.
                </p>

                <p>
                    Databases, frameworks, the web are all implementation details that your higher level components should know nothing about. Keeping your higher level components ignorant or your lower level components allows your software to remain soft and mailable.
                </p>

                <p>
                    The book ends with a warning about over-engineering: boundaries between components are expensive to create and expensive to maintain. Take into account the experience of your team and the requirements of your project. Don’t over-engineer a solution. Remember the YAGNI principle: you ain’t gonna need it.
                </p>

                <br /><br /><br /><br /><br /><br /><br /><br />
            </article>
        </>
    );
}

export default CleanArchitectureBookReview;
