import React, { useState } from 'react';
import First from '../../../components/FirstProductPage/firstProduct';
import Second from './Second/second';
import Third from './Third/third';
import ReactPlayer from 'react-player';
import TextRightImage from '../../../components/textRightImage/textRightImage';
import TextLeftImage from '../../../components/textLeftImage/textLeftImage';
import Eight from '../IndyFuel/Eigth/eight';
import Grid from '../../../components/ProductGrid/grid';

const RiffWireless = () => {
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
                link="riff-wireless"
                mobile={require('./mobile1.jpg')} />
            <Second />
            <ReactPlayer
                width="100%"
                height="800px"
                url="https://www.youtube.com/watch?v=0xqkUkHXWBg&feature=emb_logo"
                controls={true} />
            <TextLeftImage image={require('./img3.jpg')} header="EVERYDAY HEADPHONES WITH FLAVOR."
                p="Riff Wireless comes in four different colorways to reflect your unique style. Complement your
                 look with colors that pop, a soft-touch finish, and plush ear cushions." height="35rem"
                mobile={require('./mobile3.webp')} />
            <Third />
            <img src={require('./quote.jpg')} alt="people" style={{ width: `100%` }} className="quote-img" />
            <img src={require('./quote-m.jpg')} alt="people" style={{ width: `100%` }} className="quote-img-m" />
            <Eight />
            <Grid image1={require('./grid1.jpg')} image2={require('./grid2.jpg')} />
        </div>
    );
};

export default RiffWireless;