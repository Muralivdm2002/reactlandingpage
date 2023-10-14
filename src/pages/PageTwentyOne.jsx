import React from 'react';
import Play from '../images/play.png';

function PageTwentyOne(){
    return(
        <div className="page21">
            <div className="overlay">
                <div className="header">
                        <div className="icon">Startup 3</div>
                        <div className="center">
                            <div>Get App</div>
                            <div>Features</div>
                            <div>About</div>
                            <div>F.A.Q.</div>
                        </div>
                        <div className="right">
                            <button className='b1'>Sign In</button>
                            <button>Sign Up</button>
                        </div>
                </div>
                <div className="content"> Startup 3. Suit Up Your Startup</div>
                <img className='I1' src={Play} alt="play" />
                <div className="final">
                    <div className="div1">
                        <div className='fhead'>Drag and Drop Generator</div>
                        <div className='fBody'>Build your site quickly with an intuitive and easy-to-use drag and drop interface.</div>
                    </div>
                    <div className="div2">
                        <div className='fhead'>Share & Export to HTML</div>
                        <div className='fBody'>Save time and energy by showing a developer about how things.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTwentyOne;