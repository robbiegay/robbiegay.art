import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import PageFormat from './PageFormat';
import AuthorCard from './AuthorCard';
import PWWeek1 from './blogPosts/PWWeek1';

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            blogPost: "",
            title: "",
            date: ""
        }
    }
    
    getPost() {
        let idx = window.location.pathname.lastIndexOf("/") 
        let postName = window.location.pathname.slice(idx + 1);
        switch(postName) {
            case "PWWeek1":
                this.setState({
                    blogPost: <PWWeek1 />,
                    title: "Prework Week 1: Bootcamp Path and Intro to Git",
                    date: <time datetime="2019-09-07">August 30<sup>th</sup>,
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