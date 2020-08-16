import React from 'react';
import './textRightImage.css';

const TextRightImage = ({ image, header, p, height, textColor, button, link, history, mobile, mobileHeight, justify }) => {
    return (
        <React.Fragment>
            <div style={{ backgroundImage: `url("${image}")`, height: `${height}` }} className="text-right-image-container">
                <div className="text-right-image">
                    <h1 style={{ color: `${textColor}` }} className="text-right-image-header">{header}</h1>
                    <p style={{ color: `${textColor}` }} className="text-right-image-p">{p}</p>
                    {button &&
                        <div className="text-right-image-button-container">
                            <button onClick={() => history.push(`${link}`)} className="text-right-image-button">{button}</button>
                        </div>}
                </div>
            </div>
            <div className="text-right-image-container-m">
                <img src={`${mobile}`} alt="mobile" className="text-right-img-m" />
                <div style={{ height: `${mobileHeight}`, justifyContent: `${justify}` }} className="text-right-image">
                    <h1 style={{ color: `${textColor}` }} className="text-right-image-header">{header}</h1>
                    <p style={{ color: `${textColor}` }} className="text-right-image-p">{p}</p>
                    {button &&
                        <div className="text-right-image-button-container">
                            <button onClick={() => history.push(`${link}`)} className="text-right-image-button">{button}</button>
                        </div>}
                </div>
            </div>
        </React.Fragment>
    );
};

export default TextRightImage;