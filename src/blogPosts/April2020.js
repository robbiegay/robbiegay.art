import React from "react";
import { Button } from "react-bootstrap";

function April2020() {
    return (
        <>
            <article className="text-justify">

                <br /><br />

                <h3 className="text-center">Monthly Update</h3>

                <br />

                <p>
                    Highlights from April: Anna borrowed her Dad’s lawn mower.
                    We are now proud lawn mowers!
                </p>

                <video width="100%" controls>
                    <source src="/blogAssets/video/anna-mowing-the-lawn.MOV" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>

                <br /><br />

                <p>
                    Anna's job as a Healthcare Technician has gotten significantly more
                    stressful as she has gotten pulled to a COVID-19 floor for the past
                    3 shifts. Luckily they have plenty of PPE, and neither of use have come
                    down with any symptoms. Although she finds working on the COVID-19 floor
                    more stressful than usual, she is in Nursing School because she loves to
                    help people, and she has been happy to help her patients. I'm very proud of her.
                </p>

                <br />

                <div className="text-center">
                    <figure className="figure" style={{ maxWidth: "50%", margin: "auto" }}>
                        <img className="img-fluid" src="/blogAssets/img/anna-working-on-covid19-floor.JPG" alt="Anna at work" />
                    </figure>
                </div>

                <br />

                <p>
                    For the last few months, I have been working as a freelance iOS developer,
                    but mostly in a team setting, and mostly building out individual features.
                    This has all been very exciting, and I have enjoyed the process of learning
                    mobile development, but I really felt like my rudimentary introduction to app
                    building wouldn’t be complete until I had built a full app from the ground up.
                </p>

                <p>
                    In April, I worked through
                    an <a href="https://www.letsbuildthatapp.com/course/Instagram%20Firebase">LBTA tutorial</a> series
                    chronicling how to build a clone of the Instagram app, using Firebase for Authentication,
                    backend database, and image asset storage. The course took a long time to work through —
                    over 16 hours of content, and since I paused often to code along of look things off,
                    I’m sure that time was at least doubled. Below is a video walkthrough of my completed app.
                    I can’t recommend LBTA enough.
                </p>

                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/BcsI42rxDQs" title="Instagram Clone Demo Video" allowfullscreen></iframe>
                </div>

                <br />

                <p>
                    My next project was to create an app — something relatively
                    original — and attempt to take it from conception all the way
                    through to being published on the app store.
                </p>

                <p>
                    Step 1 of course was handing over the $99 to join the Apple developer program...
                </p>

                <p>
                    With my wallet now slightly lighter, it was time to decide
                    what kind of app I wanted to create. I really like photography,
                    and since I had already learned how to create a custom camera
                    interface in the LBTA Instagram course, I decided I would try to
                    make a glitch camera app.
                </p>

                <p>
                    I wanted the interface to be simple. The user loads the app,
                    opening with the camera already activated. The only control
                    is the shutter button. Once the user takes a photo, they can
                    save it or delete it and try again. As an additional bit of
                    flair, I wanted the camera shutter button to animate in and out,
                    to make the app feel a bit more alive. The graphic for the camera
                    shutter was made from a photo taken by the app.
                </p>

                <div className="text-center">
                    <figure className="figure border" style={{ maxWidth: "50%", margin: "auto" }}>
                        <img className="img-fluid" src="/appAssets/img/glch-saved-message.PNG" alt="Generated with the Glch App" />
                    </figure>
                </div>

                <br />

                <p>
                    There are no controls that the user can manipulate. The effect
                    that the user gets is random and unexpected.
                </p>

                <p>
                    Building the effects was where things started to get more challenging.
                    I used Core Image filters to create the distorted effects. These often
                    had their parameters maxed out far beyond their intended ranges, or
                    were chained one after another to create interesting effects. Currently,
                    the app has 14 different effects.
                </p>

                <p>
                    Walk through an effect?
                </p>

                <p>
                    You can download a Beta version of the app below, or
                    check out the app’s landing page for more information!
                </p>

                <p className="text-center">
                    <Button href="/apps/glch" className="m-3">
                        Glch App
                    </Button>
                    <Button href="https://testflight.apple.com/join/1ZTQ3ZSX" className="m-3">
                        Download Glch Beta
                    </Button>
                </p>

                <br /><br /><br /><br /><br /><br /><br /><br />
            </article>
        </>
    );
}

export default April2020;
