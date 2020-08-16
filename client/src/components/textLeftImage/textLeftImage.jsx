import React from 'react';
import './textLeftImage.css';

const TextLeftImage = ({ image, header, p, height, position, button, history, link, mobile, color, justify, mobileHeight }) => {
    return (
        <React.Fragment>
            <div style={{ backgroundImage: `url("${image}")`, height: `${height}`, backgroundPosition: `${position}` }}
                className="text-left-image-container">
                <div className="text-left-image">
                    <h1 style={{ color: `${color}` }} className="text-left-image-header">{header}</h1>
                    <p style={{ color: `${color}` }} className="text-left-image-p">{p}</p>
                    {button &&
                        <div className="text-left-image-button-container">
                            <button onClick={() => history.push(`${link}`)} className="text-left-image-button">{button}</button>
                        </div>}
                </div>
            </div>
            <div className="text-left-image-container-m">
                <img src={`${mobile}`} alt="mobile" className="text-left-img-m" />
                <div style={{ justifyContent: `${justify}`, height: `${mobileHeight}` }} className="text-left-image">
                    <h1 style={{ color: `${color}` }} className="text-left-image-header">{header}</h1>
                    <p style={{ color: `${color}` }} className="text-left-image-p">{p}</p>
                    {button &&
                        <div className="text-left-image-button-container">
                            <button onClick={() => history.push(`${link}`)} className="text-left-image-button">{button}</button>
                        </div>}
                </div>
            </div>
        </React.Fragment>
    );
};

export default TextLeftImage;