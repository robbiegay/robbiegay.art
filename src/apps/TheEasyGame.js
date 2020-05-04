
import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import PageFormat from "../PageFormat";
import { Carousel, Button } from "react-bootstrap";

function TheEasyGame() {
    return (
        <>
            <NavBar />
            <br />
            <h1>The Easy Game</h1>
            <br />
            <PageFormat>
                <p className="text-center">
                    <Button href="/apps/easy-game/privacy" className="m-3">
                        Privacy Policy & ToS
                    </Button>
                    <Button href="https://testflight.apple.com/join/gHYS01EE" className="m-3">
                        Download App Beta
                    </Button>
                </p>
                <p>
                    The Easy Game is a 2D platform game where users try to dodge oncoming "enemy" 
                    blocks and make it to the end of the level. I had a lot of fun creating this 
                    app. The Easy Game is my first foray into game development, and was built using 
                    Apple's <a href="https://developer.apple.com/spritekit/">Sprite Kit</a>. 
                    I created all of the game graphics in 
                    the <a href="https://en.wikipedia.org/wiki/Pixel_art">Pixel Art</a> style, and 
                    did the sound design and music production with <a href="https://www.ableton.com/en/">Ableton</a>. 
                    Also, apologies in advance, it really isn't that easy...
                </p>
                <p className="text-center">
                </p>
                <br />
                <h3 className="text-center">Images</h3>
                <br />
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/appAssets/img/the-easy-game-home.PNG"
                            alt="The Easy Game Starting Screen" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/appAssets/img/the-easy-game-gameplay.PNG"
                            alt="The Easy Game Gameplay" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/appAssets/img/the-easy-game-win-2.PNG"
                            alt="Winning The Easy Game" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/appAssets/img/the-easy-game-gameover.PNG"
                            alt="Losing The Easy Game" />
                    </Carousel.Item>
                </Carousel>
                <br /><br /><br /><br />
            </PageFormat>
            <Footer />
        </>
    );
}

export default TheEasyGame;
