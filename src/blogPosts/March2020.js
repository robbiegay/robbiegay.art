import React from "react";
import { Carousel } from "react-bootstrap";

function March2020() {
    return (
        <>
            <article className="text-justify">

                <br /> <br />

                <h3 className="text-center">Monthly Update</h3>
                <p>
                    I realized that my blog post from February didn’t include a Monthly Update.
                    Before diving into creating an image cache, I wanted to provide a update
                    on some things I have done in February and March:
                </p>

                <ul>
                    <li>
                        Play Catan (and lose)
                    </li>
                    <li>
                        Spend a lot of money of yummy French food for Valentine’s day
                    </li>
                    <li>
                        Participate in
                        a <a href="https://anv4.artbyform.com/" title="FORM's Website">24-hour song making competition</a>.
                        My song was 1 of 37 tracks included on the album. You can listen to my track, "liten snö", on
                        the <a href="/music">music section of my website</a>.
                    </li>
                    <li>
                        Attend a Tyler Childers concert.
                    </li>
                    <li>
                        Since March 2019, I have been working to digitize several collections of 35mm slides belonging
                        to grandparents and great-grandparents on both sides of my family. The slides go as far back as the 1940's,
                        with the bulk of them being from the 60's-80's. The total amount of slides topped 5000, and in early March I finally
                        finished the last batch belonging to paternal grandparents.
                    </li>
                    <li>
                        Go skiing in Colorado (more on that below)
                    </li>
                    <li>
                        Turn 27 (what)
                    </li>
                    <li>
                        Start growing seeds for my garden
                    </li>
                </ul>

                {/* <!-- Carousel Images --> */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/playing-catan-ian-james-anna.JPG"
                            alt="Playing Catan" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Playing Catan with Ian (L), James, and Anna (R)</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/valentines-dinner-anna.JPG"
                            alt="Dinner with Anna" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2">Dinner with Anna for Valentine’s Day at Le Deauville</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/form-anv4-listening-party.JPG"
                            alt="Listening to FORM All Nighter Vol. 4" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Listening party for the FORM All Nighter Vol. 4 album. My song was last, so we had to wait awhile. (Back row, L-R: Mom, Dad, Anna)</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/tyler-childers-concert.JPG"
                            alt="Tyler Childers Concert" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2">At the Tyler Childers concert. Play "Feathered Indians" again!!!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/gay-family-slide-blur.png"
                            alt="An old slide from 1976" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2">A digitized 35mm slide: My Dad (left) and his brothers at a hotel pool, August 1976.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/turning-27-1.JPG"
                            alt="Anna and some birthday gifts" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2">Due to COVID-19, we celebrated my birthday at the house. Anna made cinnamon rolls for breakfast!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/turning-27-2.JPG"
                            alt="Food from Stave" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">For birthday dinner, we supported a local restaurant during the COVID-19 shutdown by getting food from The Stave</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/planting-seeds.JPG"
                            alt="Planting Seeds" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Seed germination: Super excited to plant these in the backyard when the weather warms up!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <br /> <br />

                <h3 className="text-center">Ski Trip</h3>

                <p>
                    A major perk of doing freelance work is that I was able to take some time off to
                    go visit my brother in Denver. We left for Colorado on March 11th. When we left, there
                    were 1,215 cases in the US, which was worrisome, but we didn't think it was enough at that point
                    to cancel our travel planes. Instead, we took lots of hand sanitizer and wipes, and we careful on
                    the plane not to touch our faces and to wash our hands regularly.
                </p>

                <p>
                    During out week in Colorado, things continued to look worse and worse. We woke up in the
                    hotel room to the news of canceled sporting events, and watched throughout the week as the DOW
                    dropped nearly 3,000 points. We planned on skiing
                    for 2-3 days (packing our lunch, washing our hands often). The first day, there were no reports of COVID-19
                    in Breckenridge. On the second day, we noticed that employees were sanitizing tables and that ski lifts were now
                    loading only members of the same party. On our third day out there, after the first confirmed cases on COVID-19 were
                    reported on the mountain, the Governor stepped in and shutdown all the ski slopes.
                </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/ski-trip-lift-policy.JPG" alt="COVID-19 Precautions" />
                    <figcaption className="figure-caption text-center">Day 2: Breckenridge institutes a "Load Related Parties Only" policy for the ski lifts.</figcaption>
                </figure>

                On a positive note, we really enjoyed seeing William! The 2 days that we got on the slopes
                we awesome. Anna continues to improve as a skier! On only her fourth cumulative ski day,
                she managed to go down a blue run! After spending the weekend in Breckenridge, we spent a few
                more days in Denver, mostly in William's apartment due to concerns with COVID-19.

                <br /> <br />

                {/* <!-- Carousel Images --> */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/ski-trip-1.JPG"
                            alt="Anna Skiing" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Anna is a quick learner! (Dad (L), Anna (R))</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/ski-trip-2.JPG"
                            alt="Falcon Chairlift" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Dad and I caught the last chair up Peak 10! It was really cool to ski as the mountain was shutting down for the day.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/ski-trip-3.png"
                            alt="Hiking in Colorado" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">We went hiking to distance ourselves from other people. To be extra safe, we even social distanced from each other!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <br />

                <p>
                    Near the end of our week in Colorado, we decided that it would be safest to rent a 
                    car and drive home. Once arriving back in Kentucky, we also decided to quarantine 
                    (with the exception of groceries) for 14 days to ensure that we didn't bring any 
                    sickness back with us.
                </p>

                <br />

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/ski-trip-driving-home.JPG" alt="Driving home" />
                    <figcaption className="figure-caption text-center">Driving home from Colorado.</figcaption>
                </figure>

                <br /> <br />

                <h3 className="text-center">Creating an Image Cache</h3>






                {/* <!-- White space --> */}
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

            </article >





        </>
    );
}

export default March2020;