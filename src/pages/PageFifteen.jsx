import React from "react";
import Lady from "../images/lady.png";
import Cut from "../images/cut.png";
import UnderWater from "../images/UnderWater.png";

function PageFifteen(){
    return(
        <div className="page15">
            <div className="header">
                    <div className="icon">Startup 3</div>
                    <div className="center">
                        <div>Tour</div>
                        <div>Prices</div>
                        <div>About</div>
                        <div>F.A.Q.</div>
                        <div>Support</div>
                    </div>
                    <div className="right">
                        <div>Login</div>
                        <button>Get Started</button>
                    </div>
            </div>
            <div className="content">Build Your Own Site like a Lego Constructor</div>
            <p>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
            <button>Create An Account</button>
            <div className="images">
                <div><img src={Lady} alt="Lady" /></div>
                <div className="imgCent"><img src={Cut} alt="Cut" /></div>
                <div><img src={UnderWater} alt="Something" /></div>
            </div>
            <div className="details">
                <div><div className="inner">A high-quality solution for a beautiful startup website.</div></div>
                <div><div className="inner">Startups can save money on design and code and use those savings to develop the business.</div></div>
                <div><div className="inner">Startup Framework includes great form options for your startup projects.</div></div>
            </div>
        </div>
    )
}

export default PageFifteen;