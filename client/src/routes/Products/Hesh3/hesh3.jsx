import React, { useState } from 'react';
import First from '../../../components/FirstProductPage/firstProduct';
import Second from './Second/second';
import Third from './Third/third';
import ReactPlayer from 'react-player';
import TextRightImage from '../../../components/textRightImage/textRightImage';
import TextLeftImage from '../../../components/textLeftImage/textLeftImage';
import Eight from '../IndyFuel/Eigth/eight';
import Grid from '../../../components/ProductGrid/grid';

const Hesh3 = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="indy-fuel-container">
            <First
                image={require('./img1.jpg')}
                header="PACKABLE PREMIUM SOUND."
                color="darkred"
                description="Hesh® 3 Wireless Over-Ear Headphone"
                price="$49.99"
                quantity={quantity}
                setQuantity={setQuantity}
                link="hesh-3"
                mobile={require('./mobile1.jpg')} />
            <Second />
            <ReactPlayer
                width="100%"
                height="800px"
                url="https://www.youtube.com/watch?v=uFme2bJhE6U&feature=emb_logo"
                controls={true} />
            <TextLeftImage image={require('./img3.jpg')} header="TRIED AND TRUE." height="37rem"
                p="Featuring a subtle yet premium look and feel, Hesh 3 is the latest version of our most popular go-anywhere 
            headphone. Praised for its durability and powerful audio, Hesh 3 is your favorite headphone with more tech 
            than ever." mobile={require('./mobile3.webp')} />
            <TextRightImage image={require('./img4.jpg')} header="BUILT FOR TRAVEL."
                p="Bluetooth technology, a 22 hour battery, and a lightweight, foldable design. It’s up for anything and comfortably
             sits around your neck with pivoting armatures when you’re not listening." mobile={require('./mobile4.webp')} />
            <TextLeftImage image={require('./img5.jpg')} header="PREMIUM SOUND."
                p="Memory foam ear cushions and a noise isolating fit meet custom-tuned 40mm drivers for inspiring acoustics. Hesh
              3 also packs a digital amp bringing it to a level of best-in-class audio." mobile={require('./mobile5.webp')} />
            <Third />
            <img src={require('./quote.jpg')} alt="quote" style={{ width: `100%` }} className="quote-img" />
            <img src={require('./quote-m.jpg')} alt="quote" style={{ width: `100%` }} className="quote-img-m" />
            <Eight />
            <Grid image1={require('./grid1.jpg')} image2={require('./grid2.jpg')} />
        </div>
    );
};

export default Hesh3;