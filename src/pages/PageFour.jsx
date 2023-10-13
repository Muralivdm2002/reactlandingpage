import React from "react";
import Twitter from "../images/twitter.png";
import Google from "../images/google.png";
import Facebook from "../images/facebook.png";
import Video from "../images/Video.png";

function PageFour(){
    return(
        <div className="page4">
            <div className="header">
                <div className="left">
                    <div className="icon">Startup 3</div>
                    <div>Features</div>
                    <div>Downloads</div>
                    <div>Docs</div>
                    <div>Support</div>
                    <div>Blog</div>
                </div>
                <div className="right">
                    <img src={Twitter} alt="Twitter"/>
                    <img src={Facebook} alt="Facebook"/>
                    <img src={Google} alt="Google"/>
                </div>
            </div>
            <div className="content">Simple and beautiful ready for use blocks</div>
            <img src={Video} alt="Video"/>
        </div>
    )
}

export default PageFour;