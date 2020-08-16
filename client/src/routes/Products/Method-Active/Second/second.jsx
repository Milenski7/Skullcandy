import React from 'react';
import BluetoothAudioIcon from '@material-ui/icons/BluetoothAudio';
import LinkIcon from '@material-ui/icons/Link';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import InvertColorsOffIcon from '@material-ui/icons/InvertColorsOff';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FormatColorResetIcon from '@material-ui/icons/FormatColorReset';
import TuneIcon from '@material-ui/icons/Tune';
import './second.css';

const Second = () => {
    return (
        <div className="second-container-method-active">
            <img src={require('../mobile2.webp')} alt="mobile" className="second-img-mobile" />
            <div className="second-tile">
                <BluetoothAudioIcon className="second-icon" />
                <h1 className="second-text">Bluetooth® Wireless Technology</h1>
            </div>
            <div className="second-tile">
                <BatteryChargingFullIcon className="second-icon" />
                <h1 className="second-text">Up to 10 Hours of Battery Life + Rapid Charge</h1>
            </div>
            <div className="second-tile">
                <FormatColorResetIcon className="second-icon" />
                <h1 className="second-text">IPX7 Sweat and Waterproof</h1>
            </div>
            <div className="second-tile">
                <LinkIcon className="second-icon" />
                <h1 className="second-text">Secure FitFin™ Ear Gels</h1>
            </div>
            <div className="second-tile">
                <TuneIcon className="second-icon" />
                <h1 className="second-text">Magnetic Earbuds</h1>
            </div>
            <div className="second-tile">
                <FastForwardIcon className="second-icon" />
                <h1 className="second-text">Built-in Tile® Tracker</h1>
            </div>
        </div>
    );
};

export default Second;