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

                <h3 className="text-center">Glch</h3>

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

                <h3 className="text-center">Creating a Core Image Filter</h3>

                <p>
                    Creating a Core Image filter is actually fairly simple.
                </p>

                <p>
                    In the Glch app, I am using UIImageViews. Step one is
                    to convert the <code>UIImageView.image</code> into
                    a <code>cgImage</code> (Core Graphics Image). In the example 
                    below, <code>imageView</code> is a parameter containing 
                    the <code>UIImageView</code> that I have passed into my function:
                </p>

                <code>
                    <pre>
                        {"    "}guard let cgImage = imageView.image?.cgImage else &#123;<br />
                        {"    "}{"    "}print("Failed to create CG Image.")<br />
                        {"    "}{"    "}return UIImage()<br />
                        {"    "}&#125;<br />
                        {"    "}let ciImage = CIImage(cgImage: cgImage)<br />
                    </pre>
                </code>

                <p>
                    Now that I have my <code>cgImage</code>, I can begin creating image 
                    filters:
                </p>

                <code>
                    <pre>
                        {"    "}let filter = CIFilter(name: "CIExposureAdjust")<br />
                        {"    "}filter?.setValue(ciImage, forKey: "inputImage")<br />
                        {"    "}filter?.setValue(NSNumber(1.5), forKey: "inputEV")<br />
                    </pre>
                </code>

                <p>
                    The <code>CIFilter</code> allows you to create a filter by setting 
                    its <code>"name"</code> property. You can find a list of all of the 
                    available <code>CIFilters</code> in 
                    the <a href="https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/">Apple Documentation</a>. 
                    I next pass the <code>cgImage</code> into the filter by setting the filter 
                    value, with a key of <cdoe>"inputImage"</cdoe>. Finally, I adjust the filter 
                    parameter by again setting the filter, but this time with a key value 
                    of <code>"inputEV"</code>.
                </p>

                <p>
                    From here, one option would be to continue to chain together more <code>CGFilters</code>. To 
                    do this you simply add another filter, but instead of passing in passing in our 
                    original <code>cgImage</code>, we pass in the output of our first 
                    filter, <code>filter?.outputImage</code>. Example:
                </p>
                
                <code>
                    <pre>
                        {"    "}let filter2 = CIFilter(name: "CIColorMonochrome")<br />
                        {"    "}filter2?.setValue(filter?.outputImage, forKey: "inputImage")<br />
                    </pre>
                </code>

                <p>
                    When you are done chaining together filters, you may now want 
                    to output a <code>UIImage</code>. To do this, you first 
                </p>

                <code>
                    <pre>
                        {"    "}guard let outputImage = filter?.outputImage else &#123;<br />
                        {"    "}{"    "}print("Failed to create Output Image.")<br />
                        {"    "}{"    "}return UIImage()<br />
                        {"    "}&#125;<br />
                    </pre>
                </code>

                <p>
                    This extracts the processed <code>cgImage</code> from out filter. 
                    Next we need to create a <code>CIContext</code> (Core Image Context) for 
                    rendering our UIImage:
                </p>

                <code>
                    <pre>
                        {"    "}let context = CIContext()<br />
                    </pre>
                </code>

                <p>
                    Finally, we will generate a <code>UIImage</code> containing 
                    our processed image:
                </p>

                <code>
                    <pre>
                        {"    "}if let cgimg = context.createCGImage(outputImage, from: outputImage.extent) &#123;<br />
                        {"    "}{"    "}let processedImage = UIImage(cgImage: cgimg, scale: 1, orientation: .right)<br />
                        {"    "}{"    "}return processedImage<br />
                        {"    "}&#125; else &#123;<br />
                        {"    "}{"    "}print("Failed to return image.")<br />
                        {"    "}{"    "}return UIImage()<br />
                        {"    "}&#125;<br />
                    </pre>
                </code>

                <p>
                    This section of code first checks to see if we can use 
                    our <code>CIContext</code> to create a <code>cgImage</code>. 
                    On line 2, we the create a <code>UIImage</code> from 
                    the <code>CGImage</code>, with a scale of 1, and orientated to 
                    the right. We then return this <code>UIImage</code> out of our 
                    effect function. If we are unable to create our processed image, our 
                    conditional statement fails and we print and error message and 
                    out put an empty <code>UIImage</code>
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
