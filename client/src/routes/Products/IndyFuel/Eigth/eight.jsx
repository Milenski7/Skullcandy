import React from 'react';
import './eight.css';

const Eight = () => {
    return (
        <div className="eight-container">
            <div className="eight">
                <img src={require('./logo.jpg')} alt="logo" className="eight-img" />
                <p className="eight-p">We spend hundreds of hours designing, testing and perfecting every Skullcandy product in our
                Park City, Utah headquarters. But our engineers aren’t your typical corporate lab-coat-wearing technicians. They’re
                people who love music. They live for adventure. And they know what it’s like to work on the go. Probably a lot like
                you.</p>
            </div>
        </div>
    );
};

export default Eight;