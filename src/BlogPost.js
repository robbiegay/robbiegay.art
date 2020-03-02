import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import PageFormat from "./PageFormat";
import AuthorCard from "./AuthorCard";
import PWWeek1 from "./blogPosts/PWWeek1";
import PWWeek2 from "./blogPosts/PWWeek2";
import PWWeek3 from "./blogPosts/PWWeek3";
import PWWeek4 from "./blogPosts/PWWeek4";
import BCWeek1 from "./blogPosts/BCWeek1";
import BCWeek2 from "./blogPosts/BCWeek2";
import BCWeek3 from "./blogPosts/BCWeek3";
import BCWeek4 from "./blogPosts/BCWeek4";
import BCWeek5 from "./blogPosts/BCWeek5";
import BCWeek6 from "./blogPosts/BCWeek6";
import BCWeek7 from "./blogPosts/BCWeek7";
import BCWeek8 from "./blogPosts/BCWeek8";
import BCWeek9 from "./blogPosts/BCWeek9";
import BCWeek10 from "./blogPosts/BCWeek10";
import BCWeek11 from "./blogPosts/BCWeek11";
import BCWeek12 from "./blogPosts/BCWeek12";
import JHWeek1 from "./blogPosts/JHWeek1";
import JHWeek4 from "./blogPosts/JHWeek4";
import FLWeek3 from "./blogPosts/FLWeek3";
import FLWeek7 from "./blogPosts/FLWeek7";


class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPost: "",
            title: "",
            date: ""
        }
    }

    getPost() {
        let idx = window.location.pathname.lastIndexOf("/")
        let postName = window.location.pathname.slice(idx + 1);
        switch (postName) {
            case "pw-week-1":
                this.setState({
                    blogPost: <PWWeek1 />,
                    title: "Prework Week 1: Bootcamp Path and Intro to Git",
                    date: <time datetime="2019-09-07">August 30<sup>th</sup>,
                    2019</time>
                });
                break;
            case "pw-week-2":
                this.setState({
                    blogPost: <PWWeek2 />,
                    title: "Prework Week 2: HTML and CSS",
                    date: <time datetime="2019-09-07">September 2<sup>nd</sup>,
                    2019</time>
                });
                break;
            case "pw-week-3":
                this.setState({
                    blogPost: <PWWeek3 />,
                    title: "Prework Week 3: An Introduction to JavaScript",
                    date: <time datetime="2019-09-07">September 7<sup>th</sup>,
                    2019</time>
                });
                break;
            case "pw-week-4":
                this.setState({
                    blogPost: <PWWeek4 />,
                    title: "Prework Week 4: More JavaScript, the end of Prework",
                    date: <time datetime="2019-09-13">September 13<sup>th</sup>,
                    2019</time>
                });
                break;
            case "bc-week-1":
                this.setState({
                    blogPost: <BCWeek1 />,
                    title: "Bootcamp Week 1: Bootstrap and Design Theory",
                    date: <time datetime="2019-09-22">Sept. 22<sup>nd</sup>, 2019</time>
                });
                break;
            case "bc-week-2":
                this.setState({
                    blogPost: <BCWeek2 />,
                    title: "Bootcamp Week 2: JavaScript Projects",
                    date: <time datetime="2019-09-29">Sept. 29<sup>th</sup>,
                    2019</time>
                });
                break;
            case "bc-week-3":
                this.setState({
                    blogPost: <BCWeek3 />,
                    title: "Bootcamp Week 3: More JavaScript Projects",
                    date: <time datetime="2019-10-05">October 5<sup>th</sup>,
                    2019</time>
                });
                break;
            case "bc-week-4":
                this.setState({
                    blogPost: <BCWeek4 />,
                    title: "Bootcamp Week 4: Saying Goodbye to Vanilla JS",
                    date: <time datetime="2019-09-07">October 13<sup>th</sup>,
                    2019</time>
                });
                break;
            case "bc-week-5":
                this.setState({
                    blogPost: <BCWeek5 />,
                    title: "Bootcamp Week 5: React.JS",
                    date: <time datetime="2019-09-07">October 20<sup>th</sup>,
                    2019</time>
                });
                break;
            case "bc-week-6":
                this.setState({
                    blogPost: <BCWeek6 />,
                    title: "Bootcamp Week 6: More React, A Halfway Point",
                    date: <time datetime="2019-10-26">October 26<sup>th</sup>,
                    2019</time>
                });
                break;
            case "bc-week-7":
                this.setState({
                    blogPost: <BCWeek7 />,
                    title: "Bootcamp Week 7: Back End Development",
                    date: <time datetime="2019-11-03">November 3<sup>rd</sup>,
                    2019</time>
                });
                break;
            case "bc-week-8":
                this.setState({
                    blogPost: <BCWeek8 />,
                    title: "Bootcamp Week 8: Laravel Library",
                    date: <time datetime="2019-11-09">November 9<sup>th</sup>,
                    2019</time>
                });
                break;
            case "bc-week-9":
                this.setState({
                    blogPost: <BCWeek9 />,
                    title: "Bootcamp Week 9: Catgram",
                    date: <time datetime="2019-09-17">November 17<sup>th</sup>,
                    2019</time>
                });
                break;
            case "bc-week-10":
                this.setState({
                    blogPost: <BCWeek10 />,
                    title: "Bootcamp Bootcamp Week 9: Final Projects",
                    date: <time datetime="2019-11-24">November 24<sup>th</sup>,
                    2019</time>
                });
                break;
            case "bc-week-11":
                this.setState({
                    blogPost: <BCWeek11 />,
                    title: "Bootcamp Week 11: Final Project Prototype",
                    date: <time datetime="2019-12-01">December 1<sup>st</sup>,
                    2019</time>
                });
                break;
            case "bc-week-12":
                this.setState({
                    blogPost: <BCWeek12 />,
                    title: "Bootcamp Week 12: Demo Day",
                    date: <time datetime="2019-12-07">December 7<sup>th</sup>,
                    2019</time>
                });
                break;
            case "jh-week-1":
                this.setState({
                    blogPost: <JHWeek1 />,
                    title: "Job Hunt Week 1: 30-60-90",
                    date: <time datetime="2019-09-07">December 15<sup>th</sup>,
                    2019</time>
                });
                break;
            case "jh-week-4":
                this.setState({
                    blogPost: <JHWeek4 />,
                    title: "Learning React Hooks",
                    date: <time datetime="2019-09-07">December 31<sup>st</sup>,
                    2019</time>
                });
                break;
            case "fl-week-3":
                this.setState({
                    blogPost: <FLWeek3 />,
                    title: "Swift vs JavaScript",
                    date: <time datetime="2020-01-31">January 31<sup>st</sup>, 2020</time>
                });
                break;
            case "fl-week-7":
                this.setState({
                    blogPost: <FLWeek7 />,
                    title: "Design: UI and UX",
                    date: <time datetime="2019-09-07">February 29<sup>th</sup>,
                    2020</time>
                });
                break;
            default:
                console.log("Error: default case triggered.");
        }
    }
    componentDidMount() {
        this.getPost();
    }

    render() {
        return (
            <>
                <NavBar />
                <PageFormat>
                    <AuthorCard title={this.state.title} date={this.state.date} />
                    {this.state.blogPost}
                </PageFormat>
                <Footer />
            </>
        );
    }
}

export default BlogPost;