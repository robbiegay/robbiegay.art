import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import PageFormat from './PageFormat';
import AuthorCard from './AuthorCard';
import PWWeek1 from './blogPosts/PWWeek1';
import PWWeek2 from './blogPosts/PWWeek2';
import PWWeek3 from './blogPosts/PWWeek3';
import PWWeek4 from './blogPosts/PWWeek4';
import BCWeek1 from './blogPosts/BCWeek1';
import BCWeek2 from './blogPosts/BCWeek2';
import BCWeek3 from './blogPosts/BCWeek3';
import BCWeek4 from './blogPosts/BCWeek4';
import BCWeek5 from './blogPosts/BCWeek5';
import BCWeek6 from './blogPosts/BCWeek6';
// import BCWeek7 from './blogPosts/BCWeek7';
// import BCWeek8 from './blogPosts/BCWeek8';
// import BCWeek9 from './blogPosts/BCWeek9';
// import BCWeek10 from './blogPosts/BCWeek10';
// import BCWeek11 from './blogPosts/BCWeek11';
// import BCWeek12 from './blogPosts/BCWeek12';
// import JHWeek1 from './blogPosts/JHWeek1';
// import JHWeek4 from './blogPosts/JHWeek4';
// import 20Week5 from './blogPosts/20Week5';
// import 20Week9 from './blogPosts/20Week9';


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
            case "PWWeek1":
                this.setState({
                    blogPost: <PWWeek1 />,
                    title: "Prework Week 1: Bootcamp Path and Intro to Git",
                    date: <time datetime="2019-09-07">August 30<sup>th</sup>,
                    2019</time>
                });
                break;
            case "PWWeek2":
                this.setState({
                    blogPost: <PWWeek2 />,
                    title: "Prework Week 2: HTML and CSS",
                    date: <time datetime="2019-09-07">September 2<sup>nd</sup>,
                    2019</time>
                });
                break;
            case "PWWeek3":
                this.setState({
                    blogPost: <PWWeek3 />,
                    title: "Prework Week 3: An Introduction to JavaScript",
                    date: <time datetime="2019-09-07">September 7<sup>th</sup>,
                    2019</time>
                });
                break;
            case "PWWeek4":
                this.setState({
                    blogPost: <PWWeek4 />,
                    title: "Prework Week 4: More JavaScript, the end of Prework",
                    date: <time datetime="2019-09-13">September 13<sup>th</sup>,
                    2019</time>
                });
                break;
            case "BCWeek1":
                this.setState({
                    blogPost: <BCWeek1 />,
                    title: "Bootcamp Week 1: Bootstrap and Design Theory",
                    date: <time datetime="2019-09-22">Sept. 22<sup>nd</sup>, 2019</time>
                });
                break;
            case "BCWeek2":
                this.setState({
                    blogPost: <BCWeek2 />,
                    title: "Bootcamp Week 2: JavaScript Projects",
                    date: <time datetime="2019-09-29">Sept. 29<sup>th</sup>,
                    2019</time>
                });
                break;
            case "BCWeek3":
                this.setState({
                    blogPost: <BCWeek3 />,
                    title: "Bootcamp Week 3: More JavaScript Projects",
                    date: <time datetime="2019-10-05">October 5<sup>th</sup>,
                    2019</time>
                });
                break;
            case "BCWeek4":
                this.setState({
                    blogPost: <BCWeek4 />,
                    title: "Bootcamp Week 4: Saying Goodbye to Vanilla JS",
                    date: <time datetime="2019-09-07">October 13<sup>th</sup>,
                    2019</time>
                });
                break;
            case "BCWeek5":
                this.setState({
                    blogPost: <BCWeek5 />,
                    title: "Bootcamp Week 5: React.JS",
                    date: <time datetime="2019-09-07">October 20<sup>th</sup>,
                    2019</time>
                });
                break;
            case "BCWeek6":
                this.setState({
                    blogPost: <BCWeek6 />,
                    title: "Bootcamp Week 6: More React, A Halfway Point",
                    date: <time datetime="2019-10-26">October 26<sup>th</sup>,
                    2019</time>
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