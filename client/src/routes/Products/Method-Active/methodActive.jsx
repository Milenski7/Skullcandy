import React, { useState } from 'react';
import First from '../../../components/FirstProductPage/firstProduct';
import Second from './Second/second';
import TextRightImage from '../../../components/textRightImage/textRightImage';
import TextLeftImage from '../../../components/textLeftImage/textLeftImage';
import Eight from '../IndyFuel/Eigth/eight';
import Grid from '../../../components/ProductGrid/grid';

const MethodActive = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="indy-fuel-container">
            <First
                image={require('./img1.jpg')}
                header="BOLD SOUND, UNPLUGGED."
                description="Riff Wireless™ On-Ear Headphone"
                price="$49.99"
                quantity={quantity}
                setQuantity={setQuantity}
                link="method-active"
                mobile={require('./mobile1.jpg')} />
            <Second />
            <TextLeftImage image={require('./img3.jpg')} header="HOW MUSIC BUFFS GET BUFF."
                p="A wireless, collarless design that lets you move freely. Top-shelf durability and battery life to
                 go the distance. And several smart features that make sure you never lose them. Meet Method Active, 
                 your new workout partner." height="35rem" mobile={require('./mobile3.jpg')} />
            <TextRightImage image={require('./img4.gif')} header="SWEAT AMOK."
                p="Impervious to perspiration and watertight to take on any weather for up to 10 hours on a charge. 
            And when you need a quick boost, a 10-minute Rapid Charge gives you 2 hours of playtime."
                mobile={require('./mobile4.webp')} />
            <TextLeftImage image={require('./img5.jpg')} header="NEVER LOOSE. NEVER LOST."
                p="When the buds are in your ears, FitFin™ ear gels hold them comfortably in place. Take a 
                break and magnets in the back of each bud let you wear them around your neck. And if they ever
                 wander off, a built-in Tile® Tracker helps you find them fast." mobile={require('./mobile5.webp')} />
            <TextRightImage image={require('./img6.jpg')} header="COMPLETE CONTROLS."
                p="The in-line remote under the left bud lets you manage everything—volume, tracks, and calls—as well
            as activate your device’s assistant." textColor="black" mobile={require('./mobile6.webp')} />
            <img src={require('./quote.jpg')} alt="people" style={{ width: `100%` }} className="quote-img" />
            <img src={require('./quote-m.jpg')} alt="people" style={{ width: `100%` }} className="quote-img-m" />
            <Eight />
            <Grid image1={require('./grid1.jpg')} image2={require('./grid2.jpg')} />
        </div>
    );
};

export default MethodActive;