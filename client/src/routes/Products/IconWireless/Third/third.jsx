import React from 'react';
import './third.css';

const Third = () => {
    return (
        <div className="third-container4-icon-wireless">
            <div className="third4">
                <div className="third4-top">
                    <h1 className="third4-top-header">FIT TO RIDE.</h1>
                    <p className="third4-top-p">Snug-fitting and low-profile, you can use Icon Wireless on the mountain, in the skatepark, or
                     anywhere else. Paired with the essential tech, you're good to go.</p>
                </div>
                <div className="third4-bottom">
                    <div className="third4-bottom-container">
                        <img src={require('./img1.webp')} alt="icon" className="third4-bottom-icon" />
                        <h1 className="third4-bottom-header">LONGER SESSIONS</h1>
                        <p className="third4-bottom-p">A 10 hour battery life keeps you flowing from one spot to the next.</p>
                    </div>
                    <div className="third4-bottom-container">
                        <img src={require('./img2.webp')} alt="icon" className="third4-bottom-icon" />
                        <h1 className="third4-bottom-header">MUSIC AND CALLS</h1>
                        <p className="third4-bottom-p">The built-in mi lets you take a call whenever you need to.</p>
                    </div>
                    <div className="third4-bottom-container">
                        <img src={require('./img3.webp')} alt="icon" className="third4-bottom-icon" />
                        <h1 className="third4-bottom-header">TAP IT</h1>
                        <p className="third4-bottom-p">One button - that's all. Just press the left ear cup to change tracks and manage calls.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Third;