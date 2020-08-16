import React from 'react';
import './charged.css';

const Charged = ({ history }) => {
    return (
        <div className="charged-container">
            <h1 className="charged-header">ALWAYS STAY CHARGED.</h1>
            <p className="charged-p">Check out the Skullcandy lineup of plugs, cables,
            battery packs and wireless charging pads.</p>
            <button onClick={() => history.push('/shop')} className="charged-button">SHOP NOW</button>
        </div>
    );
};

export default Charged;