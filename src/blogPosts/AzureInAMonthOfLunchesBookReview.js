import React from "react";
import { Carousel } from "react-bootstrap";

function AzureInAMonthOfLunchesBookReview() {
    return (
        <>
            <article className="text-justify">
                <br /><br />

                <p>
                    <b>Title</b>: "Azure in a Month of Lunches" by Iain Foulds
                </p>

                <p>
                    <b>Rating</b> &#11088; &#11088; &#11088; &#9733; &#9733;
                </p>

                <p>
                    <b>Readability</b>: <a href="https://www.manning.com/books/learn-azure-in-a-month-of-lunches-second-edition">Azure in a Month of Lunches</a> (AZMOL) is by its very premise meant to be approachable and easy to read. The book is broken up into 21 chapters, each meant to take about 45 minutes... i.e. something you could read on your lunch break. Each chapter covers a different feature or <a href="https://azure.microsoft.com/en-us">Azure</a> service and has several hands-on labs. These labs can all be done using the free credits that you get when you first sign up for an Azure account.
                </p>

                <p>
                    <b>Length</b>: AZMOL is around 350 pages, though as stated above, it is a fairly easy read. The labs take up a lot of space as they feature code and screenshots -- this reduces that amount of "real reading" in those 350 pages.
                </p>

                <p>
                    <b>Foundational/How-To</b>: AZMOL is more of a "how to" book as it gives you a broad tour of Azure's features and services.
                </p>

                <p>
                    <b>Overall</b>: AZMOL is a great initial resource for getting comfortable in Azure. If you follow the labs, you will have hands-on experience with many of the core services that Azure offers. I docked AZMOL some points only because it is just a normal (if well written and well organized) "Learn topic X" book. While I would recommend someone read it if they are working with Azure, I want to save my 4 and 5 star reviews for book that really changed my understanding of computer science.
                </p>

                <br />

                <hr />

                <br />

                <h3>Azure Cross Training</h3>

                <br />
                <br />

                <p>
                    We do team wide cross trainings at work on interesting and applicable programming and technology topics. About halfway through AZMOL, I felt *inspired* to volunteer for such a cross training. I had done one before on <a href="https://graphql.org/">GraphQL</a> but was pretty much voluntold to do so by my mentor. This was the first one that I signed up for, and by the time the cross training rolled around, I honestly did not want to do it anymore. After a weak attempt at canceling it, and encouragement at home to just get it over with, I spent a few days (and nights) practicing my presentation.
                </p>

                <p>
                    As an aside, shoutout to the new wave of AI products that have been coming out recently. Luke showed me <a href="https://gamma.app/">Gamma</a>, an AI powerpoint builder. It churned out a rough draft of my presentation in minutes. I'm sure it shaved hours off my prep time.
                </p>

                

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/azmol-1.jpg" alt="My Azure Cross Training" />
                        <figcaption className="figure-caption text-center">Getting ready to present!</ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    I formatted my cross training around a few core Azure services:
                    <ul>
                        <li><b>Accessing Azure</b>: Web-based <a href="https://portal.azure.com">Portal</a> and <a href="https://shell.azure.com">Shell</a>, command line, and even iOS and Android options available.</li>
                        <li><b>Resource Groups</b>: Everything in Azure lives in a resource group. These are a great way to organize services around one application, manage access to resources, and clean up demo resources like the ones I created during my cross training!</li>
                        <li><b>Virtual Machines</b>: Spin up hardware in <a href="https://datacenters.microsoft.com/globe/explore">data centers</a> around the world. Make them highly available using Availability Zones (separate data centers with separate utilities like power, network, cooling) and Availability Sets (separate resources across fault and update domains). Scale your VMs horizontally using Availability Scale Sets which, in a addition to update and fault domain separation, allow you to manually or automatically scale up or down the number of VMs to respond elastically to demand. VMs also have options around: machine hardware, image (preloaded operating systems and configurations), security, attaching managed disks, creating and restoring from backup, auto shutdown, boot diagnostics (collect logs when booting your VM -- useful if you can't remote in because you can't boot!).</li>
                        <li><b>Web Apps</b>: VMs are <abbr title="Infrastructure as a Service">IaaS</abbr> while Web Apps take a <abbr title="Platform as a Service">PaaS</abbr> approach, allowing you to abstract away the underlying hardware (and the maintenance like OS updates and security patches) and just focus on deploying your web app. Deployment Slots let you create copies of your deployment with different configurations (such as test databases) and swap deployments instantly.</li>
                        <li><b>Logic and Function Apps</b>: Logic apps are a low/no code solution to create automated tasks. You can trigger and respond to things like emails, tweets, schedules, and HTTP requests. Function apps are similar but allow for deploying small code-based functions.</li>
                        <li><b>Cosmos DB</b>: Azure's highly available, globally distributed database solution. I highlighted the option to select a consistency model and the handy animation that accompanies this selection that shows how each constancy model handles globally distributed reads and writes.</li>
                        <li><b>Other Services</b>: I briefly mentions some of the other services that Azure offers. There are over 100 Azure services and many more 3rd party solutions available. Some interesting ones include: AI (speech, facial recognition, vision), IoT, Containers (Azure Kubernetes Service -- AKS), and Messaging (Event Hub, Event Grid, Service Bus).</li>
                    </ul>
                </p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/azmol-2.jpg" alt="My Azure Cross Training" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    Also... cookies! I have attended some really good cross trainings at work but guess what? No one provided snacks. I figured if I brought cookies, that I would have the best cross training of all time!!!!
                </p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/azmol-3.jpg" alt="My Azure Cross Training" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    I think the cookies (and hopefully the cross training) were a hit.
                </p>

                <br /><br /><br /><br /><br /><br /><br /><br />
            </article>
        </>
    );
}

export default AzureInAMonthOfLunchesBookReview;
