import React from 'react';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import InvertColorsOffIcon from '@material-ui/icons/InvertColorsOff';
import FastForwardIcon from '@material-ui/icons/FastForward';
import HearingIcon from '@material-ui/icons/Hearing';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import TuneIcon from '@material-ui/icons/Tune';
import './second.css';

const Second = () => {
    return (
        <div className="second-container-indy-evo">
            <img src={require('../mobile2.webp')} alt="mobile" className="second-img-mobile" />
            <div className="second-tile">
                <BatteryChargingFullIcon className="second-icon" />
                <h1 className="second-text">30 Hours Total Battery + Rapid Charge</h1>
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
                <HearingIcon className="second-icon" />
                <h1 className="second-text">Use Either Bud Solo</h1>
            </div>
            <div className="second-tile">
                <TuneIcon className="second-icon" />
                <h1 className="second-text">3 EQ Modes (Music, Movie, Podcast)</h1>
            </div>
            <div className="second-tile">
                <PhoneIphoneIcon className="second-icon" />
                <h1 className="second-text">Find your Earbuds with Tile&#8482;</h1>
            </div>
        </div>
    );
};

export default Second;