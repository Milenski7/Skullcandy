import React, { useState } from 'react';
import First from '../../../components/FirstProductPage/firstProduct';
import Second from './Second/second';
import ReactPlayer from 'react-player';
import TextLeftImage from '../../../components/textLeftImage/textLeftImage';
import TextRightImage from '../../../components/textRightImage/textRightImage';
import Eight from '../IndyFuel/Eigth/eight';
import Grid from '../../../components/ProductGrid/grid';
import './seshEvo.css';

const SeshEvo = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="indy-fuel-container">
            <First
                image={require('./img1.jpg')}
                header="TRULY WIRELESS. PERFECTLY SIMPLE."
                description="Sesh® Evo True Wireless Earbuds"
                price="$59.99" color="lightskyblue"
                quantity={quantity}
                setQuantity={setQuantity}
                link="sesh-evo"
                mobile={require('./mobile1.jpg')} />
            <Second />
            <ReactPlayer
                width="100%"
                height="800px"
                url="https://www.youtube.com/watch?v=35VQ1RDUnEk&feature=emb_logo"
                controls={true} />
            <TextLeftImage image={require('./img3.jpg')} header="THE JOY OF SESH. AND THEN SOME."
                p="Sesh Evo makes it easier than ever to go truly wireless. With extended battery life, an impressive set of controls
             and our Fearless Use Promise®, there’s no reason to hold back." height="38rem" mobile={require('./mobile3.webp')} />
            <TextRightImage image={require('./img4.jpg')} header="HOURS (AND HOURS) OF POWER."
                p="The buds themselves hold up to 5 hours, and the case charges the buds 3 times between plug-ins. Plus, with
              Rapid Charge, the first 10 minutes of charging give you 2 hours of play time." mobile={require('./mobile4.webp')} />
            <TextLeftImage image={require('./img5.webp')} header="WATER RESISTANT, WORRY-PROOF."
                position="bottom center"
                p="Sesh Evo boasts an IP55 rating for sweat, water and dust resistance. And with the Skullcandy 
                Fearless Use Promise®, if anything ever happens to a bud or the case, we’ll replace it at a discount."
                mobile={require('./mobile5.webp')} />
            <TextRightImage image={require('./img6.webp')} header="NEVER LOST WITH TILE."
                p="Built-in Tile™ technology makes it easy to track down either earbud if you ever misplace them. Download the 
            Tile app and follow the instructions to activate." mobile={require('./mobile6.webp')}
                mobileHeight="90%" justify="flex-end" />
            <TextLeftImage image={require('./img7.jpg')} header="EASY CONNECTIONS AND CONTROLS."
                p="Sesh Evo automatically enters pairing mode the first time they power on. And after that, they’ll auto-pair with the 
            last device you used. Easy controls let you adjust volume, skip tracks, take calls, activate an assistant and even 
            select different EQ modes without ever touching your phone." mobile={require('./mobile7.webp')} />
            <img style={{ width: `100%` }} src={require('./quote.jpg')} alt="quote" className="quote-img" />
            <img style={{ width: `100%` }} src={require('./quote-m.jpg')} alt="quote" className="quote-img-m" />
            <Eight />
            <Grid image1={require('./grid1.jpg')} image2={require('./grid2.jpg')} />
        </div>
    );
};

export default SeshEvo;