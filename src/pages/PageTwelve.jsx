import React from "react";
import IphoneX from "../images/iPhoneX.png";
import IphoneXX from "../images/iPhoneXX.png";

function PageTwelve(){
    return(
        <div className="page12">
            <div className="icon">Startup 3</div>
            <div className="content">Beautiful Startup Framework for Your Next Project</div>
            <p>A high-quality solution for those who want a bea-utiful startup website quickly.</p>
            <button>Download from App Store</button>
            <img src={IphoneX} className="I1"/>
            <img src={IphoneXX} className="I2"/>

        </div>
    )
}

export default PageTwelve;