import React from "react";

function PageFourteen(){
    return(
        <div className="page14">
            <div className="header">
                <div className="left">
                    <div className="icon">Startup 3</div>
                </div>
                <div className="right">
                    <div style={{color:"Gray"}}>Overview</div>
                    <div>Prices</div>
                    <div>Blog</div>
                    <div>Feedback</div>
                    <button>Purchase</button>
                </div>
            </div>
            <div className="content">Generate Awesome Web Pages</div>
            <p>The most important part of the Startup is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks.</p>
            <button>Learn More</button>
            <form className="absolute">
                <div className="formHead">Sign Up Now</div>
                <input type="text" placeholder="Your Email"/>
                <input type="text" placeholder="Your Password"/>
                <input type="checkbox" name="terms" /> I agree to the Terms and Conditions
                <button className="b1">Sign In</button>
                <div className="absOr">or</div>
                <hr />
                <button className="b2">Login Via Twitter</button>
                <div style={{textAlign: "center"}}>Do you have an Account? <span style={{color: "#1DA1F2"}}>Sign In</span></div>
            </form>
        </div>
    )
}

export default PageFourteen;