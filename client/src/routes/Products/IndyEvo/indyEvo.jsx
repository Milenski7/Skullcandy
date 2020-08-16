import React, { useState } from 'react';
import First from '../../../components/FirstProductPage/firstProduct';
import Second from './Second/second';
import ReactPlayer from 'react-player';
import TextRightImage from '../../../components/textRightImage/textRightImage';
import TextLeftImage from '../../../components/textLeftImage/textLeftImage';
import Eight from '../IndyFuel/Eigth/eight';
import Grid from '../../../components/ProductGrid/grid';
import './indyEvo.css';

const IndyEvo = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="indy-fuel-container">
            <First image={require('./img1.jpg')}
                header="TRUE FREEDOM, AMPLIFIED."
                description="Indy™ Evo True Wireless Earbuds"
                price="79.99"
                quantity={quantity}
                setQuantity={setQuantity}
                mobile={require('./mobile1.jpg')}
                color="turquoise"
                link="indy-evo" />
            <Second />
            <ReactPlayer
                width="100%"
                height="800px"
                url="https://www.youtube.com/watch?time_continue=3&v=cxpQm7pwDPo&feature=emb_logo"
                controls={true} />
            <TextRightImage image={require('./img3.jpg')} header="SET YOURSELF WIRELESS."
                p="True wireless means no wires. And no wires mean no snagging, yanking or tangling. Plus, with Indy Evo, the case and buds 
            hold up to 30 hours of total play time, and either bud can take calls or activate your assistant."
                height="35rem" mobile={require('./mobile3.webp')} />
            <TextLeftImage image={require('./img4.jpg')} header="EASY ON THE EYES. AND EARS."
                p="Compared to first-gen Indy, Indy Evo buds are slightly smaller with improved ergonomics to fit your ears more comfortably."
                mobile={require('./mobile4.webp')} />
            <TextLeftImage image={require('./img5.webp')} header="CONTROL WITHOUT YOUR PHONE."
                position="bottom center"
                p="A simple series of touches control everything directly from your buds. Answer calls, skip tracks, adjust volume, activate 
                an assistant, switch EQ modes, even turn on Ambient Mode to hear more of your surroundings—all without ever touching your device."
                mobile={require('./mobile5.webp')} />
            <TextRightImage image={require('./img6.webp')} header="NEVER LOST WITH TILE."
                p="Built-in Tile™ technology makes it easy to track down either earbud if you ever misplace them. Download the Tile app and 
            follow the instructions to activate." mobile={require('./mobile6.webp')} mobileHeight="90%" justify="flex-end" />
            <TextRightImage image={require('./img7.webp')} header="DURABLE AND REPLACEABLE."
                p="Indy Evo earbuds are resistant to water, sweat and dust. And just in case any part is lost or damaged, 
                our Fearless Use Promise® means we’ll replace it at a discount." mobile={require('./mobile7.webp')} />
            <img style={{ width: `100%` }} src={require('./quote.jpg')} alt="quote" className="quote-img" />
            <img style={{ width: `100%` }} src={require('./mobile8.jpg')} alt="quote" className="quote-img-m" />
            <Eight />
            <Grid image1={require('./img8.jpg')} image2={require('./img9.jpg')} />
        </div>
    );
};

export default IndyEvo;