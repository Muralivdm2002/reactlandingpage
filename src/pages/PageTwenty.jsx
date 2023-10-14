import React from 'react';
import Burger from '../images/Burger.png';
import Hero from '../images/HERO.png'

function PageTwenty(){
    return(
        <div className="page20">
            <img src={Burger} className='burger' alt="burger" />
            <div className="icon">Startup 3</div>
            <div className="content">Let’s make design fast and easy</div>
            <p>The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.</p>
            <button>Get Started</button>
            <img src={Hero} className='I1' alt="Phone" />
        </div>
    )
}

export default PageTwenty;