import React from 'react';
import Search from '../images/search.png';

function Landing() {
    return ( 
        <div className='page1'>
            <div className='header'>
                <div className="icon">Startup 3</div>
                <div className="nav">
                    <div>Home</div>
                    <div>Features</div>
                    <div>Blog</div>
                    <div>Shop</div>
                    <img src={Search} alt='Search'/>
                </div>
                <div>
                    <button className='b1'>Sign In</button>
                    <button className='b2'>Sign In</button>
                </div>
            </div>
            <div className='details'>
                <p>Startup Framework</p>
                <div>We made it so beutiful and simple. It combines landings, pages, blogs and shop screens. It is definitely the tool you need in your collection! </div>
            </div>
            <div className='buttonContainer'>
                <button>Purchase now for $248</button>
                <div>Learn More</div>
            </div>
        </div>
     );
}

export default Landing;