import React from 'react';
import './third.css';

const Third = () => {
    return (
        <div className="third-container4-riff-wireless">
            <div className="third4">
                <div className="third4-top">
                    <h1 className="third4-top-header">EVERYTHING YOU NEED, NOTHING YOU DON’T.</h1>
                    <p className="third4-top-p">Riff Wireless perfectly blends simplicity and technology. You get bold sound quality
                    and convenient features that make your life easier. Without unnecessary extras.</p>
                </div>
                <div className="third4-bottom">
                    <div className="third4-bottom-container">
                        <img src={require('./img1.webp')} alt="icon" className="third4-bottom-icon" />
                        <h1 className="third4-bottom-header">RAPID CHARGE</h1>
                        <p className="third4-bottom-p">No waiting around for your headphones to charge. Just 10 minutes of charging gives you 2 hours of use.</p>
                    </div>
                    <div className="third4-bottom-container">
                        <img src={require('./img2.webp')} alt="icon" className="third4-bottom-icon" />
                        <h1 className="third4-bottom-header">GOES ANYWHERE</h1>
                        <p className="third4-bottom-p">The lightweight Riff Wireless folds up small so it can go anywhere you go.</p>
                    </div>
                    <div className="third4-bottom-container">
                        <img src={require('./img3.webp')} alt="icon" className="third4-bottom-icon" />
                        <h1 className="third4-bottom-header">CONVENIENT CONTROLS</h1>
                        <p className="third4-bottom-p">Easy-to-use buttons adjust volume, change tracks and even activate your
                        personal assistant to get directions or send hands-free texts.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Third;