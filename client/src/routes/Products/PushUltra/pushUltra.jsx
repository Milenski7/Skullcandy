import React, { useState } from 'react';
import TextLeftImage from '../../../components/textLeftImage/textLeftImage';
import TextRightImage from '../../../components/textRightImage/textRightImage';
import Grid from '../../../components/ProductGrid/grid';
import First from './First/first';
import Second from './Second/second';
import ReactPlayer from 'react-player';
import Eight from '../IndyFuel/Eigth/eight';
import Ninth from './Ninth/ninth';
import './pushUltra.css';

const PushUltra = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="indy-fuel-container">
            <First />
            <Second />
            <ReactPlayer
                width="100%"
                height="800px"
                url="https://www.youtube.com/watch?v=cZOTkNXN7ug&feature=emb_logo"
                controls={true} />
            <TextLeftImage image={require('./5.jpg')} header="AS FEARLESS AS IT IS WIRELESS." p="Push Ultra earbuds redefine freedom. 
            Freedom to move, sweat, explore and take your music farther than ever. And with up to 6 hours of playtime (and 34 more in 
                the case), that’s pretty far." height="37rem" mobile={require('./mobile5.webp')} />
            <TextRightImage image={require('./3.jpg')} header="THEY STAY SECURE. YOU STAY AWARE." p="Moldable ear hooks provide a 
            personal, comfortable and unshakable fit, while the unique design of the earbuds lets you hear more of your surroundings 
            when you need to." mobile={require('./mobile3.webp')} />
            <TextLeftImage image={require('./4.jpg')} header="MADE TO GET MESSY." p="Push Ultra earbuds can handle anything you or 
            nature throw at them. Get them wet, get them muddy, rinse them off and repeat. Even the wireless charging case has a 
            ruggedized exterior. Some people may say we overbuilt them. We say those people are house pets."
                mobile={require('./mobile4.webp')} />
            <TextRightImage image={require('./6.jpg')} header="100% AMBIDEXTROUS." p="Both earbuds give you access to all music and call 
            controls, including 3 EQ modes for tunes, movies and podcasts. So you can rock either bud by itself or use whichever hand’s 
            available." mobile={require('./mobile6.webp')} />
            <TextLeftImage image={require('./7.jpg')} header="WORRIES NOT INCLUDED." p="Enjoy your wireless freedom without ever thinking 
            twice about losing or breaking a piece. Both earbuds contain Tile™ Bluetooth finding technology in case you ever misplace one. 
            And with the Skullcandy Fearless Use Promise®, you can always replace a bud or the case at a discount (on top of our 
                manufacturer’s warranty)." mobile={require('./mobile7.webp')} />
            <img src={require('./quote.jpg')} alt="quote" className="push-ultra-img" />
            <img src={require('./quote-m.jpg')} alt="quote" className="push-ultra-img-m" />
            <Eight />
            <Ninth />
        </div>
    );
};

export default PushUltra;