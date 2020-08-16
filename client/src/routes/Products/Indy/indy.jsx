import React, { useState } from 'react';
import First from '../../../components/FirstProductPage/firstProduct';
import Second from './Second/second';
import ReactPlayer from 'react-player';
import TextLeftImage from '../../../components/textLeftImage/textLeftImage';
import TextRightImage from '../../../components/textRightImage/textRightImage';
import Third from './Third/third';
import Eight from '../IndyFuel/Eigth/eight';
import Grid from '../../../components/ProductGrid/grid';

const Indy = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="indy-fuel-container">
            <First
                image={require('./img1.jpg')}
                header="CONNECTED, NOT TIED DOWN."
                description="Indy™ True Wireless Earbuds"
                price="$39.99"
                quantity={quantity}
                setQuantity={setQuantity}
                link="indy"
                mobile={require('./mobile1.jpg')} />
            <Second />
            <ReactPlayer
                width="100%"
                height="800px"
                url="https://www.youtube.com/watch?time_continue=3&v=7maBH02QUT0&feature=emb_logo"
                controls={true} />
            <TextRightImage image={require('./img3.jpg')} header="CONNECTED AND FREE."
                p="Now you can have the truly wireless freedom you want in a look you can confidently rock. Indy lets you move 
            seamlessly through your day with a secure fit and premium sound quality." height="37rem" mobile={require('./mobile3.webp')} />
            <TextLeftImage image={require('./img4.jpg')} header="THE ESSENTIALS PERFECTED."
                p="The jump to truly wireless audio has never been easier. From quickly pairing to your phone, to 16 hours of 
            battery life, to a pocket-sized portable charging case, Indy makes living life without wires the simple experience
             it’s meant to be." mobile={require('./mobile4.webp')} />
            <Third />
            <TextLeftImage image={require('./img5.jpg')} header="FEARLESS USE PROMISE."
                p="Living without wires is meant to be a liberating experience. So use Indy when and where you want—fearlessly. 
            If you ever do lose or damage any part of your earbuds, we’ll replace it for a discount." mobile={require('./mobile6.webp')} />
            <img src={require('./quote.jpg')} style={{ width: `100%` }} alt="quote" className="quote-img" />
            <img src={require('./quote-m.jpg')} style={{ width: `100%` }} alt="quote" className="quote-img-m" />
            <Eight />
            <Grid image1={require('./grid1.jpg')} image2={require('./grid2.jpg')} />
        </div>
    );
};

export default Indy;