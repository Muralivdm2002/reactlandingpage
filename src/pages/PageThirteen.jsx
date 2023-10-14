import React from "react";
import Instagram from '../images/Instagram.png';
import Kamartaj from '../images/kamartaj.png';
import Something from '../images/Something.png';

function PageThirteen(){
    return(
        <div className="page13">
            <div className="overlay">
                <div className="header">
                    <div className="icon">Startup 3</div>
                    <div className="center">
                        <div>Tour</div>
                        <div>Features</div>
                        <div>Pricing</div>
                        <div>Blog</div>
                        <img src={Kamartaj} alt="Kamartaj" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={Something} alt="Something" />
                    </div>
                    <button>Get Started</button>
                </div>
                <div className="content">Create  sites without routine</div>
                <p>Startup gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. </p>
            </div>
        </div>
    )
}

export default PageThirteen;