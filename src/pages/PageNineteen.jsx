import React from 'react';
import ProductHunt from '../images/productHunt.png';
import Apple from '../images/apple.png';
import Paginator from '../images/Black.png';
import Iwatch from '../images/Iwatch.png';

function PageNineteen(){
    return(
        <div className="page19">
            <div className="icon">Startup 3</div>
            <div className="header">
                <div>Home</div>
                <div>Features</div>
                <div>About</div>
                <div>Blog</div>
                <div>Contact Us</div>
                <img src={ProductHunt} alt="ProHunt" />
                <img src={Apple} alt="Apple" />
            </div>
            <div className="content">The best Apple Watch apps</div>
            <p>Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. </p>
            <button>Download from App Stroe</button>
            <img className='I1' src={Paginator} alt="Paginator" />
            <img src={Iwatch} alt="IWatch" className="I2" />
        </div>
    )
}

export default PageNineteen;