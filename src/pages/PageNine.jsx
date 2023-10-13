import React from "react";
import Design from "../images/design.png";

function PageNine(){
    return(
        <div className="page9">
            <div className="header">
                <div className="left">
                    <div className="icon">Startup 3</div>
                </div>
                <div className="right">
                    <div style={{color:"grey"}}>Overview</div>
                    <div>Features</div>
                    <div>Company</div>
                    <div>Platform</div>
                    <button>Purchase</button>
                </div>
            </div>
            <div className="content">You have the design, you have the code</div>
            <p>We made it so beutiful and simple. It combines landings, pages, blogs and shop screens. It is definitely the tool you need in your collection! </p>
            <button>Explore Design</button>
            <img src={Design} />
        </div>
    )
}

export default PageNine;