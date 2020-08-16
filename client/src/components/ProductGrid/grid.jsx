import React from 'react';
import './grid.css';

const Grid = ({ image1, image2 }) => {
    return (
        <div className="ninth-container">
            <img src={image1} alt="person1" className="ninth-img1" />
            <img src={image2} alt="person2" className="ninth-img2" />
        </div>
    );
};

export default Grid;