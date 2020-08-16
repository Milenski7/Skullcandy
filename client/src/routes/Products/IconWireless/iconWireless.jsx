import React, { useState } from 'react';
import First from '../../../components/FirstProductPage/firstProduct';
import Second from './Second/second';
import Third from './Third/third';
import ReactPlayer from 'react-player';
import TextRightImage from '../../../components/textRightImage/textRightImage';
import TextLeftImage from '../../../components/textLeftImage/textLeftImage';
import Eight from '../IndyFuel/Eigth/eight';
import Grid from '../../../components/ProductGrid/grid';
import './iconWireless.css';

const IconWireless = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="indy-fuel-container">
            <First
                image={require('./img1.jpg')}
                header="RETURN OF A CLASSIC."
                description="Skullcandy Icon™ Wireless On-Ear Headphone"
                price="$49.99"
                quantity={quantity}
                setQuantity={setQuantity}
                link="icon-wireless"
                mobile={require('./mobile1.jpg')} />
            <Second />
            <TextRightImage image={require('./img3.jpg')} header="THE CLASSIC IS BACK WITHOUT WIRES."
                p="From 2006-2014, the Icon created a cult following in the snowboarding and skateboarding scenes for 
            its simple, low-profile design. Originally released as a wired headphone, Icon now returns as a limited-edition
             Bluetooth release-free of wires." textColor="black" height="35rem" mobile={require('./mobile3.webp')} />
            <ReactPlayer
                width="100%"
                height="800px"
                url="https://www.youtube.com/watch?v=CnVXbtjiaMM&feature=emb_logo"
                controls={true} />
            <img src={require('./img4.jpg')} alt="people" style={{ width: `100%` }} className="icon-wireless-img5" />
            <img src={require('./mobile4.jpg')} alt="people" style={{ width: `100%` }} className="icon-wireless-img5-m" />
            <Third />
            <img src={require('./img5.jpg')} alt="people" style={{ width: `100%` }} className="icon-wireless-img6" />
            <img src={require('./mobile6.jpg')} alt="people" style={{ width: `100%` }} className="icon-wireless-img6-m" />
            <img src={require('./quote.jpg')} alt="people" style={{ width: `100%` }} className="quote-img" />
            <img src={require('./quote-m.jpg')} alt="people" style={{ width: `100%` }} className="quote-img-m" />
            <Eight />
            <Grid image1={require('./grid1.jpg')} image2={require('./grid2.jpg')} />
        </div>
    );
};

export default IconWireless;