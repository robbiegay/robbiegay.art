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
                    Before diving into creating an image cache, I wanted to provide an update
                    on some things I have done in February and March:
                </p>

                <ul>
                    <li>
                        Play Catan (and lose)
                    </li>
                    <li>
                        Spend a lot of money on yummy French food for Valentine’s day
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
                    to cancel our travel plans. Instead, we took lots of hand sanitizer and wipes, and we were careful on
                    the plane not to touch our faces and to wash our hands regularly.
                </p>

                <p>
                    During our week in Colorado, things continued to look worse and worse. We woke up in the
                    hotel room to the news of canceled sporting events, and watched throughout the week as the DOW
                    dropped nearly 3,000 points. We planned on skiing
                    for 2-3 days (packing our lunch, washing our hands often). The first day, there were no reports of COVID-19
                    in Breckenridge. On the second day, we noticed that employees were sanitizing tables and that ski lifts were now
                    loading only members of the same party. On our third day out there, after the first confirmed cases on COVID-19 were
                    reported on the mountain, the Governor stepped in and shut down all the ski slopes.
                </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/ski-trip-lift-policy.JPG" alt="COVID-19 Precautions" />
                    <figcaption className="figure-caption text-center">Day 2: Breckenridge institutes a "Load Related Parties Only" policy for the ski lifts.</figcaption>
                </figure>

                On a positive note, we really enjoyed seeing <a href="">William</a>! The 2 days that we got on the slopes
                were awesome. Anna continues to improve as a skier! On only her fourth cumulative ski day,
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

                <p>
                    In addition to doing Freelance work, I have also been 
                    spending my time working through 
                    a <a href="https://www.letsbuildthatapp.com/" title="The Let's Build That App website">LBTA course on building iOS apps</a>. 
                    The course I am working on walks you through development 
                    of an Instagram clone. My app is only about halfway done, 
                    but I wanted to talk about an image cache feature that I 
                    built this week that I thought seemed really important.
                </p>

                <p>
                    In computing, a cache is a collection of data, stored by the 
                    computer so that future requests for that data can be served 
                    quickly. Here is a possible real world analogy: imagine you 
                    are a police sketch artist. You spend several hours drawing 
                    suspects 1, 2, and 3. The next day, your star witness 
                    eliminates drawings of suspects 1 and 2. Do you throw away 
                    drawings 1 and 2 immediately? Perhaps not. If your star 
                    witness changes their mind, you would have to redraw suspects 
                    1 and 2. This would result in a lot of duplicated work. 
                    Rather, it might be better to store these drawings, at least 
                    for a little while, as the case progresses.
                </p>

                <p>
                    Computer programs do something similar. In my Instagram app, 
                    I have a “home feed” of images from users that I follow. When 
                    I scroll from top to bottom, any image that I scroll past, the app has to load 
                    from <a href="https://firebase.google.com/" title="Firebase Website">Firebase</a>. 
                    When I scroll past an image, should my app forget the data from that image? If 
                    so, when I scroll back to the top of my feed, my app will have to load all of 
                    those images again. That’s a lot of extra work. Instead, my app can cache those 
                    previously loaded images, storing them out of sight in case they are needed 
                    again in the future.
                </p>

                <div className="text-center">
                    <figure className="figure" style={{ maxWidth: "50%" }}>
                        <img className="img-fluid" src="/blogAssets/img/robbie-instagram-clone-home-feed.png" alt="Instagram Clone Home Feed" />
                        <figcaption className="figure-caption text-center">The "Home Feed" of my Instagram app clone.</figcaption>
                    </figure>
                </div>

                <p>
                    There are two main reasons why caching is helpful. First, it 
                    decreases data usage. If someone has a limited data plan, they 
                    don’t want to burn through data just to see photos their device 
                    should already have loaded. Second, it increases speed. If a user's 
                    device is on a relatively slow internet connection, they may have 
                    to wait for each file to load. Once the file is loaded, it would be 
                    wasteful for the device to delete the file if there is a reasonable 
                    expectation that the user will access it again soon.
                </p>

                <h3 className="text-center">My Image Cache Code</h3>

                <p>
                    Below is an image of my image cache code:
                </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/image-cache-code.png" alt="Image Cache Code" />
                    <figcaption className="figure-caption text-center">The code for fetching images from Firebase — includes a cache function (lines 21-24).</figcaption>
                </figure>

                <p>
                    This code is for a <code>CustomImageView</code> class, an 
                    extension of <code>UIImageView</code>. This custom class allows 
                    me to call a <code>.loadImage(urlString: String)</code> method on an image view, that loads 
                    an image from Firebase and sets the image view image equal to that loaded image. 
                    This abstracts away a lot of repetitive code as I have to load images 
                    from Firebase in several places throughout my Instagram app.
                </p>

                <p>
                    On line 11 I declare an <code>imageCache</code> variable. 
                    Since <code>imageCache</code> is declared outside 
                    of our custom class, it is available throughout our entire code 
                    base. <code>imageCache</code> is a dictionary of key-value pairs, 
                    with the keys being Strings and the values being 
                    of the type <code>UIImage</code>. The way key-value pairs work in a dictionary is similar 
                    to how a real world, paper dictionary works: a word (the key) is paired with a 
                    definition (the value). For example, lets say you created a dictionary called colors: 
                </p>

                <p className="text-center">
                    <code>colors["blue": "the color of water", "red": "the color of fire"]</code>.
                </p>

                <p>
                    If you called <code>colors["blue"]</code> the output would be: <code>"the color of water"</code>
                </p>

                <p>
                    Our code works just like this! The block of code from lines 30 
                    to 46 fetches our images from Firebase. After fetching the images, 
                    it adds the fetched image to the <code>imageCache</code> dictionary 
                    using the key value of the image's download url String. Let's say for example that 
                    the first image we download has a download url of <code>"xyz"</code>.
                </p>

                <p>
                    The next time <code>.loadImage(urlString: String)</code> is called, it 
                    will run a test on line 21 to see if the image we are about to download is 
                    already in our cache. If this is a new image (for example, if we have scrolled 
                    down on our feed) with a download url of <code>abc</code>, then the check of 
                    <code>imageCache["abc"]</code> will return <code>nil</code> and the code continues 
                    on to lines 26 and below — fetching this new image from Firebase and adding it 
                    to our cache.
                </p>

                <p>
                    Lets say that we now scroll back up on our feed. <code>.loadImage(urlString: String)</code> is 
                    called again, and on line 21, we check to see if the first image with a download 
                    url of <code>"xyz"</code> is in our cache. Since it is indeed in our image, we 
                    now enter our conditional block on line 22, setting the <code>CustomImageView</code>'s image 
                    to the cached image (ie. using the cached image as the image to display in the app). 
                    On line 23, we then <code>return</code> out of the <code>.loadImage(urlString: String)</code> method, 
                    never allowing our code to reach lines 30-46 where we would have made an unnecessary 
                    Firebase call.
                </p>

                <p>
                    Hopefully I have managed to explain why using caches are useful, and 
                    shown a simple example of how to implement one in your code!
                </p>




                {/* <!-- White space --> */}
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

            </article >





        </>
    );
}

export default March2020;