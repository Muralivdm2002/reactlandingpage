import React from "react";
import Facebook from "../images/fb.png";
import Twitter from "../images/tweet.png";
import BackGround from "../images/bg.png";
import Play from "../images/play.png";

function PageSeventeen(){
    return(
        <div className="page17">
            <div className="header">
                <div className="icon">Startup 3</div>
                <div className="right">
                    <div>Tour</div>
                    <div>Features</div>
                    <div>Pricing</div>
                    <div>Blog</div>
                    <img src={Facebook} alt="fb" />
                    <img src={Twitter} alt="tweet" />
                </div>
            </div>
            <div className="content">Simple design & prototyping</div>
            <p>Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. </p>
            <img src={BackGround} alt="bg" />
            <img id="play" src={Play} alt="play" />
            <div className="button">
                <button>Get Started</button>
                <div>It is absolutely free</div>
            </div>
        </div>
    )
}

export default PageSeventeen;