import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer'
import PageFormat from './PageFormat'
import PWWeek1 from './blogPosts/PWWeek1';

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            blogPost: ""
        }
    }
    
    getPost() {
        let idx = window.location.pathname.lastIndexOf("/") 
        let postName = window.location.pathname.slice(idx + 1);
        switch(postName) {
            case "PWWeek1":
                this.setState({
                    blogPost: <PWWeek1 />
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
                    {this.state.blogPost}
                </PageFormat>
                <Footer />
            </>
        );
    }
}

export default BlogPost;