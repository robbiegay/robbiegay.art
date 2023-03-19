import React from "react";
import { Carousel } from "react-bootstrap";

function March2023StartingToBlog() {
    return (
        <>
            <article className="text-justify">
                <br /><br />

                <p>
                    Today is a Saturday -- It is basketball season. 
                    UK won its first NCAA game since 2019 yesterday evening. This morning, I watched Woodford County play in the final four of the Kentucky state basketball tournament. Woodford lost but played well against a very 
                    talented Warren Central. Tomorrow I'm having an early birthday brunch 
                    with my parents and grandma. Next tuesday I turn 30. With some NCAA tournament games playing in the background, I've spent 
                    several hours today working on my website and drafting some blog posts.
                </p>

                <br />

                <figure className="figure">
                    <img className="img-fluid" src="/blogAssets/img/2023/woodford-in-final-four.jpg" alt="Woodford County vs Warren Central" />
                    <figcaption className="figure-caption text-center">Watching Woodford County play in the Final Four of the KY state tournament</figcaption>
                </figure>

                <p>
                    During the Awesome Inc bootcamp in 2019, we were all challenged to keep a weekly blog. This is 
                    something I really enjoyed -- and that I kept at for a few months after the bootcamp (I made monthly 
                    posts until <a href="may-2020">May 2020</a>). I made one more post in <a href="may-2021">May of 2021</a> and have not posted since.
                </p>

                <p>
                    I have a few topics I have been writing about (mostly reviews and summaries of technical books), and 
                    I thought I would start the blog back up as a place to share these. While thinking about posting again, I also looked at some 
                    old posts and realized that I missed the personal side of blogging -- sharing small updates 
                    about what has been going on in my life.
                </p>

                <p>
                    To get the blog back up, I have to do a few things:
                    <ul>
                        <li>Some general maintenance and updates to the website.</li>
                        <li>Writing a few blog posts:</li>
                        <ul>
                            <li>A post saying that I will be posting again (this post!)</li>
                            <li>Year in Review posts for 2020, 2021, 2022, and a short post of what has been going on so far in 2023.</li>
                            <li>A post talking about my "read more technical books" goal.</li>
                            <li>Adding a few already written reviews/summaries of technical books as posts to this blog.</li>
                        </ul>
                        <li>
                            Create a <a href="https://github.com/robbiegay/BlogPostParser">utility script</a> that will parse a text file (blog post) into html. 
                            I typically write blog posts in a text editor and then manually format them into html. I am hoping to streamline 
                            my blog writing a little bit by writing a utility program.
                        </li>
                    </ul>
                </p>

                <p>
                    I'm exciting to be posting on this site again! Check out my year in review posts below:

                    <ul>
                        <li><a href="year-in-review-2020">2020 Year in Review</a></li>
                        <li><a href="">2021 Year in Review</a> [Coming Soon]</li>
                        <li><a href="">2022 Year in Review</a> [Coming Soon]</li>
                    </ul>
                </p>

                <br /><br /><br /><br /><br /><br /><br /><br />
            </article>
        </>
    );
}

export default March2023StartingToBlog;
