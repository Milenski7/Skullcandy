import React, { useState } from 'react';
import First from '../../../components/FirstProductPage/firstProduct';
import Second from './Second/second';
import TextRightImage from '../../../components/textRightImage/textRightImage';
import TextLeftImage from '../../../components/textLeftImage/textLeftImage';
import Eight from '../IndyFuel/Eigth/eight';
import Grid from '../../../components/ProductGrid/grid';

const InkdPlus = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="indy-fuel-container">
            <First
                image={require('./img1.jpg')}
                header="ALL DAY MOTIVATION."
                description="Ink'd+® Active Wireless Sport Earbuds"
                price="$59.99"
                quantity={quantity}
                setQuantity={setQuantity}
                link="inkd-plus-active-earbuds"
                mobile={require('./mobile1.jpg')} />
            <Second />
            <TextLeftImage image={require('./img3.jpg')} header="PAIRS WELL WITH JOGGERS AND JEANS."
                p="From a sport-ready design to hours of listening, Ink’d+ Active delivers wireless, premium sound
                 to keep you going from work to play without ever getting in the way." height="35rem" mobile={require('./mobile3.webp')} />
            <TextRightImage image={require('./img4.jpg')} header="A COLLAR THAT’S ALWAYS POPPIN’."
                p="Lightweight and low-profile, the Flexsport™ collar keeps your buds within reach at all times. Perfect for all-day
                 use whether you’re working out or just working. It’s even flexible enough to fit in your pocket."
                mobile={require('./mobile4.webp')} />
            <TextLeftImage image={require('./img5.jpg')} header="ALL DAY ACTION. AND THEN SOME."
                p="Up to 15 hours of battery with sweat and water resistance. When you need a quick boost, a 10-minute
                 Rapid Charge gives you 2 additional hours of playtime. And no matter what activity you’re engaged in,
                  removable FitFin™ ear gels keep your buds secure the whole time." mobile={require('./mobile5.webp')} />
            <TextRightImage image={require('./img6.jpg')} header="ALWAYS IN CONTROL."
                p="Manage volume, tracks, calls, as well your device’s assistant—straight from the remote on the collar. 
                And if you ever misplace your buds, a built-in Tile® Tracker helps you quickly find them." mobile={require('./mobile6.webp')} />
            <img src={require('./quote.jpg')} alt="people" style={{ width: `100%` }} className="quote-img" />
            <img src={require('./quote-m.jpg')} alt="people" style={{ width: `100%` }} className="quote-img-m" />
            <Eight />
            <Grid image1={require('./grid1.jpg')} image2={require('./grid2.jpg')} />
        </div>
    );
};

export default InkdPlus;