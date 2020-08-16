import React from 'react';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import InvertColorsOffIcon from '@material-ui/icons/InvertColorsOff';
import FastForwardIcon from '@material-ui/icons/FastForward';
import HearingIcon from '@material-ui/icons/Hearing';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import './second.css';

const Second = () => {
    return (
        <React.Fragment>
            <div className="second-container2">
                <div className="second-tile">
                    <BatteryChargingFullIcon className="second-icon" />
                    <h1 className="second-text">40 Hours Total Battery + Rapid Charge</h1>
                </div>
                <div className="second-tile">
                    <FlashOnIcon className="second-icon" />
                    <h1 className="second-text">Wireless Charging Case</h1>
                </div>
                <div className="second-tile">
                    <InvertColorsOffIcon className="second-icon" />
                    <h1 className="second-text">IP67 SWEAT and Waterproof</h1>
                </div>
                <div className="second-tile">
                    <HearingIcon className="second-icon" />
                    <h1 className="second-text">Moldable Hooks + Stay-Aware Buds</h1>
                </div>
                <div className="second-tile">
                    <FastForwardIcon className="second-icon" />
                    <h1 className="second-text">Full Media Controls on Each Bud</h1>
                </div>
                <div className="second-tile">
                    <PhoneIphoneIcon className="second-icon" />
                    <h1 className="second-text">Find your Earbuds with Tile&#8482;</h1>
                </div>
            </div>
            <div className="second-container2-m">
                <img src={require('../mobile2.jpg')} alt="mobile" className="second-container-m-img" />
                <div className="second-container-icons2">
                    <div className="second-tile">
                        <FlashOnIcon className="second-icon" />
                        <h1 className="second-text">Wireless Charging Case</h1>
                    </div>
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
                        <h1 className="second-text">Full Media Controls on Each Bud</h1>
                    </div>
                    <div className="second-tile">
                        <HearingIcon className="second-icon" />
                        <h1 className="second-text">Use Either Bud Solo</h1>
                    </div>
                    <div className="second-tile">
                        <PhoneIphoneIcon className="second-icon" />
                        <h1 className="second-text">Find your Earbuds with Tile&#8482;</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Second;