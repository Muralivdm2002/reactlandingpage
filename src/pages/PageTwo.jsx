import React from "react";

function PageTwo(){
    return (
        <div className="page2">
            <div className='header'>
                <div className="icon">Startup 3</div>
                <div className="nav">
                    <div>Subscribe</div>
                    <div>Features</div>
                    <button>Sign Up</button>
                </div>
            </div>
            <div className='details'>
                <p>Let’s make design fast and easy</p>
                <div>The most important part of the Startup is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.</div>
            </div>
            <div className="form">
                <input type="text" placeholder="Your Email"/><button>Send</button>
                <div>By signing up, you agree to the Terms of Service</div>
            </div>
        </div>
    )
}

export default PageTwo;