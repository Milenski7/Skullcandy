import React from 'react';
import './third.css';

const Third = () => {
    return (
        <div className="third-container4-hesh3">
            <div className="third4">
                <div className="third4-top">
                    <h1 className="third4-top-header">ESSENTIAL TECH.</h1>
                    <p className="third4-top-p">Must-have features that make Hesh 3 the headphone you can take everywhere.</p>
                </div>
                <div className="third4-bottom">
                    <div className="third4-bottom-container">
                        <img src={require('./img1.webp')} alt="icon" className="third4-bottom-icon" />
                        <h1 className="third4-bottom-header">CHARGE FASTER</h1>
                        <p className="third4-bottom-p">Don’t sweat a low battery. Rapid charge means you get 4 hours of use
                         from just a 10 minute charge.</p>
                    </div>
                    <div className="third4-bottom-container">
                        <img src={require('./img2.webp')} alt="icon" className="third4-bottom-icon" />
                        <h1 className="third4-bottom-header">MUSIC AND CALLS</h1>
                        <p className="third4-bottom-p">Take a call without having to touch your phone. You can communicate
                        clearly through the built-in microphone.</p>
                    </div>
                    <div className="third4-bottom-container">
                        <img src={require('./img3.webp')} alt="icon" className="third4-bottom-icon" />
                        <h1 className="third4-bottom-header">EASY CONTROLS</h1>
                        <p className="third4-bottom-p">Track forward or turn it up. Hesh 3 lets you manage calls, tracks,
                        and volume straight from the earcup.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Third;