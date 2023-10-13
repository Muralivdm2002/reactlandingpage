import React from "react";
import MacBook from"../images/Macbook.png";

function PageFive(){
    return(
        <div className="page5">
            <div className="header">
                <div className="left">
                    <div className="icon">Startup 3</div>
                </div>
                <div className="right">
                    <div>Portfolio</div>
                    <div>How It Works</div>
                    <div>About</div>
                    <div>Pricing</div>
                    <div>Login</div>
                    <button>SignIn</button>
                </div>
            </div>
            <div className="content">A high-quality solution startup website quickly</div>
            <button className="button">Get Started</button>
            <img src={MacBook} />
            <div className="footer">
                <div>Startup Framework works on devices supporting Retina Display. Feel the clarity in each pixel.</div>
                <div className="center">There are a lot of different components that will help you create the perfect look and feel for your startup.</div>
                <div>You can easily combine components in a variety ways for different design projects. It’s easy!</div>
            </div>
        </div>
    )
}

export default PageFive;