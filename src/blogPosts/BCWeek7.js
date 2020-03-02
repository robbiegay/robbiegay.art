import React from 'react';
import { Carousel } from 'react-bootstrap';

function BCWeek7() {
    return (
        <>
            {/* <!-- Main Text --> */}
            <article className="text-justify">

                <p>
                    We are officially into the second half of the Bootcamp.
                    This week we began working with Back End programming —
                    but first — a weekly update!
                    </p>

                <h3 className="text-center">Weekly Update</h3>
                <p>
                    Anna and I made plans to grab lunch on Thursday. As soon
                    as I hopped in her car, we saw a group of Bootcampers coming
                    out of Awesome Inc, clearly deliberating on where to eat.
                    Anna had said that she wanted to meet some more of my classmates,
                    so I hopped out and invited everyone to join us!
                    </p>

                <p>
                    We went over to{' '}
                    <a href="https://wineandmarket.com/" title="Wine and Market's Website">Wine and Market</a>,
            a really cool sandwich spot and boutique grocery store over on
            Jefferson Street. I always feel like I’m in the hot seat when
            showing a new food spot to others but everyone seemed to enjoy
            it! I personally think their #9 — a turkey, strawberry rhubarb
            preserve, and goat cheese on ciabatta bread — is one of the best
            sandwiches in Lex.
                    </p>

                <p>
                    On Thursday, Awesome Inc held a fun little Halloween celebration!
                    There was a caramel apple bar as well as some pumpkin decorating.
                    It was a lot of fun — can you guess which pumpkin was mine?
                    </p>

                {/* <!-- Carousel Images --> */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/wine-and-market-sandwhiches.JPG"
                            alt="Wine and Market Sandwiches" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2">L-R: Wine and Market's #9 and #7 Sandwiches</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/wine-and-market-group-photo.JPG"
                            alt="Some Bootcampers and Anna at Wine and Market" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2">L-R: Anna, Rachael, Sam, and Ethan</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/awesome-inc-pumpkin-decorating.JPG"
                            alt="Awesome Inc Pumpkins" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Some 'Awesome' looking pumpkins!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <br />

                <p>
                    On Friday, the UK Men’s Basketball team played their second exhibition
                    game against Kentucky State. Anna and I had 2 extra tickets, so
                    I offered them up to anyone in the Bootcamp and{' '}
                    <a href="http://ianrios.me/" title="Ian's Website">Ian</a> was the
    first to claim them. Ian and his wife Olivia joined us for dinner
                            at <a href="https://www.facebook.com/Sawyers-Downtown-Bar-Grill-491414770920862/" title="Sawyer's Facebook Page">Sawyer's</a>{' '}
                    before the game. I’m starting to get a little ‘foodie’-ish with all
                    of these recommendation, but I do think that the chili and burgers at Sawyer's are the
                    best in town. We sat in our actual seats (upper arena) for the first
                    half, but took our chances in the second half by
                    snagging some open seats about 8 rows from the floor. Luckily no one
                    kicked us out, and we were a lot closer to the action! Additionally, during halftime we
                    got some very yummy Rupp Arena ice cream. &#128525;
                        </p>

                {/* <!-- Carousel Images --> */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/sawyers-chili-uk-kstate.JPG"
                            alt="Sawyer's Chili" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Sawyer's 'Chili Pie': Fritos, Cheese, and Chili!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/me-anna-olivia-ian-uk-kstate.JPG"
                            alt="Group selfie at the UK game" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">A group selfie at the UK game! L-R: Me, Anna, Olivia, Ian</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/blogAssets/img/anna-and-ice-cream-uk-kstate-blur.png"
                            alt="Rupp Arena Ice Cream" />
                        <Carousel.Caption>
                            <p className="d-inline-flex px-2 bg-dark rounded">Anna and Ice Cream!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <br />

                <p>
                    This week we started learning Back End development! We began by
                        learning some{' '}
                    <a href="https://www.php.net/" title="PHP Documentation Site">PHP</a>.
            PHP stands for ‘PHP: Hypertext Processor’, which is a recursive acronym,
            apparently something that programmers love. We built a practice server,
            and attempted to build an API that could pull data from that server.
            I might have gone a little bit overboard when I decided to add 1,000,000
            items to my nonsense database…
                        </p>

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/million-item-db.png" alt="My example database" />
                    <figcaption className="figure-caption text-center">1 million food items</figcaption>
                </figure>

                <p>
                    About midweek, we jumped into{' '}
                    <a href="https://laravel.com/" title="The Laravel Website">Laravel</a>.
            Laravel is a PHP framework that is billed as an elegant and
            expressive means to do Back End programming. I have really
            enjoyed learning Laravel so far. We have been working our
            way through this
                            "<a href="https://laracasts.com/series/laravel-6-from-scratch" title="Laracasts">Laravel 6 From Scratch</a>"
    video series. I find it to be a pretty fun way to learn!
    I follow along with the video, pausing it to apply what
    I just learned to my own code. Once I feel like I
    have come to an understanding about some topic, I then try to
    summarize it in my notes.
                        </p>

                <p>
                    Around chapter 3 of the Laracast series, my comprehension
                    level started to drop. I found the same thing happening
                    with several of our recent learning endeavors (React, PHP). I
                    will make a decent amount of progress, but then the wave of
                    confusion washes over me and I have to swim back to shore.
                    A solution that I have found is to go ahead and skim over
                    the remaining material. I don’t stress about the fact that
                    I am not entirely following along. Rather, I am trying to
                    get a broad picture, to see how the pieces fit together.
                    I then go back and read (or watch) the material again.
                    When I started getting lost in the Laracasts, I turned
                    the playback speed to 2x and powered through the remaining videos. This
                    allowed me to get a broad overview of many of the cool Laravel features.
                        </p>

                <p>
                    One thing that I have been struggling with is getting enough
                    sleep. Don’t get me wrong, I’m not falling asleep in class,
                    but when learning new material, I find that even a little
                    bit of extra fatigue really hinders my ability to learn
                    new concepts. My goal for next week, is to go to bed an
                    hour earlier! That plan sounds great, except that I had
                    the same goal last week. Oh well.
                        </p>

                <p>
                    I slept in both Saturday and Sunday mornings, and then started
                    rewatching the Laracasts. I found this really helpful — I
                    was fresh and alert, and was able to absorb the material
                    really well. I am really starting to see how useful Laravel
                    is. Right now, its only hindrance is that it is
                    so full of features that it can be a little difficult to
                    understand at first. While working with JavaScript, I would
                    create one or two JS files, an HTML file, and a CSS file.
                            When I run <code>Laravel new project name</code>, it makes
    a massive amount of files. I just went through and tried to count
    how many files this actually does create. I was around 140~
    when I got into the vendor bin and realized that it
    would be a waste of time to keep counting. This is obviously
    a great thing — look how much functionality comes built in
    to Laravel. It does mean, however, that the learning curve is a little
    bit steep, and a fair bit intimidating. I look forward to a
    time when I can make better use of some of these powerful features!
                        </p>

                <p>
                    Next week we start the week off with a remote day!{' '}
                    <a href="https://twitter.com/realDonaldTrump" title="The Donald's Twitter Page">President Trump</a>{' '}
                    is holing a political rally in the evening, and most of
                    downtown will be blocked off starting at 2pm. Traffic
                    will be a nightmare, and because of this we will be working
                    from home. We will spend the first day or two working through
                        the rest of the Laracasts, and will then move into the{' '}
                    <a href="https://github.com/bootcamp-students/Projects-Exercises/blob/master/docs/projects/laravel-library.md" title="Project Prompt">Laravel Library</a>{' '}
                    project. Tuesday is election day. I’m looking forward to voting,
                    and will be excited to see how the election plays out across
                    the state. Finally, on Tuesday night (9:30pm — remember
                    my earlier goal about bedtimes?) #2 UK faces off against
                    #1 Michigan State. I’m very excited for the game — hopefully
                    it won't be a repeat of last years UK – Duke matchup!
                        </p>

                {/* <!-- White space --> */}
                <br /><br /><br /><br /><br /><br /><br /><br />

            </article>
        </>
    );
}

export default BCWeek7;
