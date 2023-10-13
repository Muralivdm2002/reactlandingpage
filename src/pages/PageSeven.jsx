import React from "react";
import Girl from "../images/girl.png";

function PageSeven(){
    return(
        <div className="page7">
            <div className="left">
                <div className="header">
                    <div className="icon">Startup 3</div>
                    <div className="right">
                        <div>Pricing</div>
                        <div>About</div>
                    </div>
                </div>
                <div className="content">Great tool to boost your startup </div>
                <p>We made it so beutiful and simple. It combines landings, pages, blogs and shop screens. It is definitely the tool you need in your collection! </p>
                <div className="final">
                    <div className="buttons">
                        <button className="button1">Get Started</button>
                        <button className="button2">Learn More</button>
                    </div>
                    <div className="terms">By signing up, you agree to the Terms of Service</div>
                </div>
            </div>
            <img src={Girl} />
        </div>
    )
}

export default PageSeven;