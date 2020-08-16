import React from 'react';
import './jumbotron.css';

const Jumbotron = ({ history }) => {
    return (
        <div className="jumbotron-container">
            <div className="jumbotron-left">
                <img src={require('./jumbo.jpg')} alt="mood-boost" className="jumbotron-left-img" />
                <img src={require('./mobile1.jpg')} alt="mood-boost" className="jumbotron-left-img-mobile" />
                <h1 className="jumbotron-left-header">WELCOME TO MOOD BOOST.</h1>
                <p className="jumbotron-left-p">We're on a mission to boost mental health by
                celebrating feel-good moods every month. This month, we're hoping to help everyone
            feel a little more Strong.</p>
                <button onClick={() => history.push('/shop')} className="jumbotron-left-button">SHOP STRONG</button>
            </div>
            <div className="jumbotron-right">
                <img onClick={() => history.push('/shop')} src={require('./jumbo2.jpg')} alt="shop-indie" className="jumbotron-right-img1" />
                <img onClick={() => history.push('/mood-boost')} src={require('./jumbo-gif.gif')} alt="watch-performance" className="jumbotron-right-img2" />
            </div>
        </div>
    );
};

export default Jumbotron;