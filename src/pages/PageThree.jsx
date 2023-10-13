import React from 'react';
import Down from '../images/down.png';
import Play from '../images/play.png';

function PageThree(){
    return (
        <div className='page3'>
            <div className='header'>
                <div className='left'>
                    <div className="icon">Startup 3</div>
                    <div>Product <img src={Down} /></div>
                    <div>Pricing</div>
                    <div>Community</div>
                </div>
                <div className='right'>
                    <div>API</div>
                    <div>Help</div>
                    <div>Login</div>
                    <button>Sign In</button>
                </div>
            </div>
            <div className="body">
                <div className="left">
                    <p>A high-quality solution for those who want a beautiful startup website quickly</p>
                    <form>
                        <input type="text" placeholder='Your Email'/>
                        <input type="text" placeholder='Your Password'/>
                        <input id="submit" type="submit" value="Sign In"/>
                        <p>By signing up, you agree to the Terms of Service</p>
                    </form>
                </div>
                <div className="right">
                    <div className='image'>
                        <img src={Play} />
                    </div>
                    <p>We made it so beutiful and simple. It combines landings, pages, blogs and shop screens. It is definitely the tool you need in your collection! </p>
                </div>
            </div>
        </div>
    )
}

export default PageThree;