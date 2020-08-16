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
                header="FEATHERLIGHT WITH MORE MUSIC."
                description="Ink'd+® Wireless Earbuds"
                price="39.99"
                color="olive"
                quantity={quantity}
                setQuantity={setQuantity}
                link="inkd-plus-wireless-earbuds"
                mobile={require('./mobile1.jpg')} />
            <Second />
            <img src={require('./quote.jpg')} alt="people" style={{ width: `100%` }} className="quote-img" />
            <img src={require('./quote-m.jpg')} alt="people" style={{ width: `100%` }} className="quote-img-m" />
            <Eight />
            <Grid image1={require('./grid1.jpg')} image2={require('./grid2.jpg')} />
        </div>
    );
};

export default InkdPlus;