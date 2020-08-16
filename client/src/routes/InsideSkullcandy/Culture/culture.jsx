import React from 'react';
import InsideSkull from '../../../components/insideSkull/insideSkull';
import './culture.css';

const Culture = ({ history }) => {
    return (
        <div className="indy-fuel-container">
            <img style={{ width: `100%` }} src={require('./Images/img1.jpg')} alt="culture" className="culture-img1" />
            <img style={{ width: `100%` }} src={require('./Images/mobile1.jpg')} alt="culture" className="culture-img1-m" />
            <div className="culture-img2-container">
                <img src={require('./Images/img2.jpg')} alt="culture" className="culture-img2" />
                <p className="culture-img2-p">
                    Our office in Park City, Utah, proudly sits in the heart of the Wasatch Mountains at exactly 6,434 feet.
                    Since we’re the kind of people who tend to be inspired by skyscrapers of the natural variety, we can think of no
                    better place to work.
                </p>
            </div>
            <img style={{ width: `100%` }} src={require('./Images/img3.jpg')} alt="culture" className="culture-img3" />
            <img style={{ width: `100%` }} src={require('./Images/mobile3.jpg')} alt="culture" className="culture-img3-m" />
            <div className="culture-img4-container">
                <p className="culture-img4-p">
                    We’re a diverse bunch at Skullcandy. Walk down any row of desks and you’ll run into the widest range of people you
                    can imagine. From former professional athletes to aspiring filmmakers and band members. But no matter who we are
                    individually, we’re all united by something bigger: Our passion for our brand and for each other.
                    Here’s to the Skull.
                </p>
                <img src={require('./Images/img4.jpg')} alt="culture" className="culture-img4" />
            </div>
            <img style={{ width: `100%` }} src={require('./Images/img5.jpg')} alt="culture" className="culture-img5" />
            <img style={{ width: `100%` }} src={require('./Images/mobile5.jpg')} alt="culture" className="culture-img5-m" />
            <InsideSkull history={history} first={true} third={true} fourth={true} />
        </div>
    );
};

export default Culture;