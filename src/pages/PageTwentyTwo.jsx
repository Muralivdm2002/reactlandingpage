import React from "react";
import Google from '../images/GoogleR.png';
import GitHub from '../images/GitHubR.png';
import Facebook from '../images/FBR.png';
import Twitter from '../images/TwitterR.png';

function PageTwentyTwo(){
    return(
        <div className="page22">
            <div className="overlay">
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
                <div className="content">The Amazing Hubble</div>
                <p>The first area of specialization in telescopes has to do with the types of telescopes people use. The three designs of telescopes that most people use are the Refractor</p>
                <form className="form">
                    <input type="text" placeholder="Your Name"/>
                    <input type="text" placeholder="Your Email"/>
                    <button id="formButton">Get Started</button>
                </form>
                <div className="end">OR SIGN UP WITH</div>
                <div className="social">
                    <img src={Twitter} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={Google} alt="" />
                    <img src={GitHub} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PageTwentyTwo;