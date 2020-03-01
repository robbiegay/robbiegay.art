import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import PageFormat from './PageFormat';
import CountUpTimer from './CountUpTimer';

function Music() {
    let largerSize = "75px";

    return (
        <>
            <NavBar />
            <h1>Music</h1>
            <PageFormat>
            {/* Soundcloud Players */}
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/766901725&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_comments=true&show_user=true&show_reposts=true&show_teaser=true&visual=true" />
            {/* Music Bio */}
            <p>
                I have been making music for <CountUpTimer />. I started making music as a first-year student at Centre college. I took a 1-credit 
                "Digital Music Production" course.
            </p>
            </PageFormat>
            <a href="https://soundcloud.com/robbiegay" title="My SoundCloud Page" target="_blank" rel="noopener noreferrer"><i class="fab fa-soundcloud" style={{ color: "#ff6c02", fontSize: largerSize }}></i></a>{' '}
            <a href="https://robbiegay.bandcamp.com/" title="My BandCamp Page" target="_blank" rel="noopener noreferrer"><i class="fab fa-bandcamp" style={{ color: "#1ea1c3", fontSize: largerSize }}></i></a>{' '}
            <a href="https://www.youtube.com/robbiegay" title="My YouTube Channel" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube" style={{ color: "#ff0000", fontSize: largerSize }}></i></a>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </>
    );
}

export default Music;
