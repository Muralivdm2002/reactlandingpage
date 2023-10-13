import React from 'react';
import IPad from "../images/iPad.png";

function PageEleven(){
    return(
        <div className="page11">
            <div className="header">
                <div className="left">
                    <div className="icon">Startup 3</div>
                </div>
                <div className="right">
                    <div style={{color:"GrayText"}}>About</div>
                    <div>Features</div>
                    <div>Contacts</div>
                    <button>Buy</button>
                </div>
            </div>
            <div className="content">Great things begin in a small way</div>
            <p>We haven’t forgotten about responsive layout. With Startup Framework, you can create a website with full mobile support.</p>
            <button>Get Started</button>
            <div className='learn'>Learn More</div>
            <img src={IPad} />
        </div>
    )
}

export default PageEleven;