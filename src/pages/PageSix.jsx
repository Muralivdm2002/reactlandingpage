import React from "react";
import Play from "../images/play.png";

function PageSix(){
    return(
        <div className="page6">
            <div className="layout">
                <div className="header">
                    <div className="left">
                        <div>Products</div>
                        <div>Pricing</div>
                        <div>Community</div>
                    </div>
                    <div className="icon">Startup 3</div>
                    <div className="right">
                        <div>Login</div>
                        <button>Sign Up</button>
                    </div>
                </div>
                <div className="content">A high-quality solution for those who want a beautiful startup website quickly</div>
                <img src={Play} />
                <p>We made it so beutiful and simple. It combines landings, pages, blogs and shop screens. It is definitely the tool you need in your collection! </p>
            </div>
        </div>
    )
}

export default PageSix;