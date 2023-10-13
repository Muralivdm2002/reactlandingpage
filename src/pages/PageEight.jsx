import React from "react";
import Kamartaj from "../images/kamartaj.png";
import Something from "../images/Something.png";
import Paginator from "../images/White.png";
import Left from "../images/left.png";
import Right from "../images/right.png";

function PageEight(){
    return(
        <div className="page8">
            <div className="overlay">
                <div className="header">
                    <div style={{color: "rgb(173, 173, 173)"}}>Home</div>
                    <div>Features</div>
                    <div>Pricing</div>
                    <div>Blog</div>
                    <img src={Kamartaj} alt="Kamartaj"/>
                    <img src={Something} alt="Something"/>
                </div>
                <div className="icon">Startup 3</div>
                <div className="title">Forget About Code</div>
                <p>Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. </p>
                <img src={Paginator} alt="Paginator"/>
                <button>Create an Account</button>
                <div className="absolute">
                    <img src={Left} alt="Left"/>
                    <img src={Right} alt="Right"/>
                </div>
            </div>
        </div>
    )
}

export default PageEight;