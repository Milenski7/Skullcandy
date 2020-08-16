import React from 'react';
import BluetoothAudioIcon from '@material-ui/icons/BluetoothAudio';
import LinkIcon from '@material-ui/icons/Link';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import InvertColorsOffIcon from '@material-ui/icons/InvertColorsOff';
import FastForwardIcon from '@material-ui/icons/FastForward';
import TuneIcon from '@material-ui/icons/Tune';
import './second.css';

const Second = () => {
    return (
        <div className="second-container-indy">
            <img src={require('../mobile2.webp')} alt="mobile" className="second-img-mobile" />
            <div className="second-tile">
                <BluetoothAudioIcon className="second-icon" />
                <h1 className="second-text">Bluetooth® Wireless Technology</h1>
            </div>
            <div className="second-tile">
                <LinkIcon className="second-icon" />
                <h1 className="second-text">Removable Stability Ear Gels for Secure Fit</h1>
            </div>
            <div className="second-tile">
                <BatteryChargingFullIcon className="second-icon" />
                <h1 className="second-text">Up to 16 Hours of Total Battery Life</h1>
            </div>
            <div className="second-tile">
                <InvertColorsOffIcon className="second-icon" />
                <h1 className="second-text">IP55 SWEAT, Water and Dust Resistant</h1>
            </div>
            <div className="second-tile">
                <FastForwardIcon className="second-icon" />
                <h1 className="second-text">Call, Track and Volume via Touch Controls</h1>
            </div>
            <div className="second-tile">
                <TuneIcon className="second-icon" />
                <h1 className="second-text">Noise Reduction for Calls</h1>
            </div>
        </div>
    );
};

export default Second;