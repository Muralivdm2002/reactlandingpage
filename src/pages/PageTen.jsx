import React from "react";
import Lipstick from "../images/lipstick.png";
import Planet from "../images/planet.png";

function PageTen(){
    return(
        <div className="page10">
            <div className="header">
                <div className="left">
                    <div className="icon">Startup 3</div>
                    <div>Products</div>
                    <div>Pricing</div>
                    <div>Community</div>
                </div>
                <div className="right">
                    <div>Help</div>
                    <div>Login</div>
                    <button>Sign up</button>
                </div>
            </div>
            <div className="content">A high-quality solution for those who want a beautiful startup website quickly</div>
            <p>Startup contains components and complex blocks which can easily be integrated into almost any design.</p>
            <button>Get Started for Free</button>
            <div className="final">
                <div>
                    <img src={Lipstick} alt="Lipstick"/>
                    <div>A high-quality solution for a beautiful startup website.</div>
                </div>
                <div>
                    <img src={Planet} alt="Planet"/>
                    <div>Learn more about Startup Framework in demo version.</div>
                </div>
            </div>
        </div>
    )
}

export default PageTen;