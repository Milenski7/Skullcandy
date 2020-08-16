import React, { useState } from 'react';
import FirstProduct from '../../../components/FirstProductPage/firstProduct';
import TextRightImage from '../../../components/textRightImage/textRightImage';
import TextLeftImage from '../../../components/textLeftImage/textLeftImage';
import Ninth from './Ninth/ninth';
import './strongBundle.css';

const StrongBundle = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className='indy-fuel-container'>
            <FirstProduct
                header="LIMITED STRONG BUNDLE."
                description="Strong Push™ Ultra True Wireless Earbuds with Print"
                price="$99.99"
                quantity={quantity}
                setQuantity={setQuantity}
                image={require('./strong-bundle.jpg')}
                color="darkred"
                link="strong-bundle"
                background="rgb(199, 1, 1)"
                mobile={require('./mobile1.jpg')} />
            <img src={require('./img2.jpg')} alt="headphones" className="strong-bundle-img2" />
            <img src={require('./mobile2.webp')} alt="headphones" className="strong-bundle-img2-m" />
            <TextRightImage image={require('./img3.jpg')} p="Singer/songwriter, Rina Sawayama co-headlines our July installment of 
            Mood Boost. Don’t miss her special mini-performance of “Bad Friend” over on our Instagram feed this month @skullcandy."
                mobile={require('./mobile3.webp')} />
            <TextLeftImage image={require('./img4.jpg')} p="Our July Mood features the artwork of Paris-based designer Paiheme Studio, 
            (AKA Pierre-Marie Postel). Get his “Strong” print in the limited-edition Strong Bundle." mobile={require('./mobile4.webp')}
                mobileHeight="90%" justify="flex-end" />
            <TextRightImage image={require('./img5.jpg')} p="The always-fire Rico Nasty is here to light up your screen in our 
            limited-edition Push Ultra True Wireless in Strong Red. Don’t miss her mini-performance of “Hard” celebrating this month’s 
            mood." mobile={require('./mobile5.webp')} />
            <TextLeftImage image={require('./img6.webp')} header="YOUR PURCHASE HELPS FUND HOPE."
                p="When you buy any Mood Boost bundle, you’ll be helping people find hope and treatment for mental health issues through 
            our friends at To Write Love on Her Arms. Get to know them @twloha." mobile={require('./mobile6.webp')} mobileHeight="90%"
                justify="flex-end" />
            <Ninth />
            <img src={require('./img7.webp')} alt="mood-boost" className="strong-bundle-img2" />
            <img src={require('./mobile7.webp')} alt="mood-boost" className="strong-bundle-img2-m" />
        </div>
    );
};

export default StrongBundle;