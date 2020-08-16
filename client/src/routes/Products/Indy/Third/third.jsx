import React from 'react';
import './third.css';

const Third = () => {
    return (
        <div className="third-container4-indy">
            <div className="third4">
                <div className="third4-top">
                    <h1 className="third4-top-header">NO WIRES, NO WORRIES.</h1>
                    <p className="third4-top-p">With a sleek, truly wireless design, Indy keeps you connected to
                    your music and content without the hassle of any wires whatsoever. No tangled cables.
                      No awkward controls. No worries.</p>
                </div>
                <div className="third4-bottom">
                    <div className="third4-bottom-container">
                        <img src={require('./img1.webp')} alt="icon" className="third4-bottom-icon" />
                        <h1 className="third4-bottom-header">PREMIUM SOUND</h1>
                        <p className="third4-bottom-p">Indy’s sound profile is tuned to deliver crisp highs and warm lows
                    without distortion.</p>
                    </div>
                    <div className="third4-bottom-container">
                        <img src={require('./img2.webp')} alt="icon" className="third4-bottom-icon" />
                        <h1 className="third4-bottom-header">SWEAT, WATER, AND DUST RESISTANT</h1>
                        <p className="third4-bottom-p">Indy boasts an IP55 protection rating – with sweat, water, and dust resistance –
                    so you can wear it confidently wherever you go.</p>
                    </div>
                    <div className="third4-bottom-container">
                        <img src={require('./img3.webp')} alt="icon" className="third4-bottom-icon" />
                        <h1 className="third4-bottom-header">TOUCH CONTROLS</h1>
                        <p className="third4-bottom-p">Touch the Skull to control. You can change songs, adjust volume, and manage calls just by tapping your earbuds.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Third;