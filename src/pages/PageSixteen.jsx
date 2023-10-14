import React from "react";
import Gears from "../images/gears.png";
import Html from "../images/html.png";
import MacBook from "../images/MacbookPro.png";

function PageSixteen(){
    return(
        <div className="page16">
            <div className="overlay">
                <div className="header">
                    <div className="left">
                        <div className="icon">Startup 3</div>
                        <div>Tour</div>
                        <div>Prices</div>
                        <div>About</div>
                        <div>F.A.Q.</div>
                        <div>Support</div>
                    </div>
                    <button>Buy$38</button>
                </div>
                <div className="content">Suit Up Your Startup</div>
                <p>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
                <div className="final">
                    <div>
                        <img src={Gears} alt="Gears" />
                        <p className="innerHead">Based on Bootstrap 4</p>
                        <div className="innerbody">HTML layout is based on one of the most common and reliable framework - Bootstrap.</div>
                    </div>
                    <div>
                        <img src={Html} alt="Html" />
                        <p className="innerHead">HTML5 & CSS3</p>
                        <div className="innerbody">We used only time-tested technologies for the best results.</div>
                    </div>
                </div>
                <img src={MacBook} alt="MacBook" />
            </div>
        </div>
    )
}

export default PageSixteen;