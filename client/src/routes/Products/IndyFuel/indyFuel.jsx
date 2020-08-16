import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player"
import TextRightImage from '../../../components/textRightImage/textRightImage';
import TextLeftImage from '../../../components/textLeftImage/textLeftImage';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Second from './Second/second';
import Eight from './Eigth/eight';
import Grid from '../../../components/ProductGrid/grid';
import http from '../../../services/http';
import { toast } from 'react-toastify';
import * as config from '../../../config/config.json';
import './indyFuel.css';
import CartOnScroll from '../../../components/cartOnScroll/cartOnScroll';

const IndyFuel = () => {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [cartClicked, setCartClicked] = useState(false);

    const getProduct = async () => {
        try {
            const { data } = await http.get(`${config.apiEndpoint}/product/indy-fuel`);
            setProduct(data);
        } catch (ex) {
            console.error(ex);
        }
    };
    const getButtonName = () => {
        if (product) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            if (cart) {
                let index = cart.findIndex(i => i._id === product._id);
                if (index !== -1) { return { name: "PRODUCT IN CART", color: "lightpink" } }
                else { return { name: "ADD TO CART", color: "lightgrey" } }
            }
        }
        return { name: 'ADD TO CART', color: 'lightgrey' };
    };

    const addToCart = async () => {
        let cart = [];
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        let index = cart.findIndex(i => i._id === product._id);
        if (index !== -1) return;
        cart.push({ _id: product._id });
        localStorage.setItem('cart', JSON.stringify(cart));
        try {
            await http.put(`${config.apiEndpoint}/product/update-quantity/${product._id}`, { quantity: quantity });
            toast('Product added to cart successfully!');
            setCartClicked(true);
        } catch (ex) {
            console.error(ex);
            toast.error('Something failed while adding item to cart.');
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div id="indy-fuel-container" className="indy-fuel-container">
            {product && <CartOnScroll product={product} addToCart={addToCart} getButtonName={getButtonName} />}
            {product && (<React.Fragment><div className="indy-fuel-first">
                <h1 className="indy-fuel-first-header">{product.description}</h1>
                <h1 className="indy-fuel-first-description">{product.title}</h1>
                <p className="indy-fuel-first-price">${product.price}</p>
                <div className="indy-fuel-first-quantity-container">
                    <ExpandLessIcon onClick={() => setQuantity(quantity + 1)} className="indy-fuel-quantity-icon" />
                    <h1 className="indy-fuel-quantity-counter">{quantity}</h1>
                    <ExpandMoreIcon onClick={() => quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)} className="indy-fuel-quantity-icon" />
                    <button
                        style={{ backgroundColor: `${getButtonName().color}` }}
                        onClick={addToCart}
                        className="indy-fuel-add-to-cart">{getButtonName().name}</button>
                </div>
                <p className="indy-fuel-app">Works with the Skullcandy App.</p>
                <p className="indy-fuel-video">Product Video</p>
            </div>
                <div className="indy-fuel-first-m">
                    <div className="indy-fuel-first-m-image">
                        <h1 className="indy-fuel-first-header">{product.description}</h1>
                        <h1 className="indy-fuel-first-description">{product.title}</h1>
                        <p className="indy-fuel-first-price">${product.price}</p>
                    </div>
                    <div className="indy-fuel-first-text">
                        <div className="indy-fuel-first-quantity-container">
                            <ExpandLessIcon onClick={() => setQuantity(quantity + 1)} className="indy-fuel-quantity-icon" />
                            <h1 className="indy-fuel-quantity-counter">{quantity}</h1>
                            <ExpandMoreIcon onClick={() => quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)} className="indy-fuel-quantity-icon" />
                            <button
                                style={{ backgroundColor: `${getButtonName().color}` }}
                                onClick={addToCart}
                                className="indy-fuel-add-to-cart">{getButtonName().name}</button>
                        </div>
                        <p className="indy-fuel-app">Works with the Skullcandy App.</p>
                        <p className="indy-fuel-video">Product Video</p>
                    </div>
                </div>
                <Second />
                <ReactPlayer
                    width="100%"
                    height="800px"
                    url="https://www.youtube.com/watch?time_continue=4&v=88KkpddRzsE&feature=emb_logo"
                    controls={true} />
                <TextRightImage image={require('./img3.jpg')} header="CHARGE THE CASE WITHOUT WIRES." p="True wireless means no wires. 
                And, with Indy Fuel, even the case can charge wirelessly. Just drop it on your favorite wireless charging pad 
                (or pair it with one of our Fuelbase™ series of chargers). Together, the case and buds hold up to 30 hours of total 
                play time." height="37rem" mobile={require('./mobile3.webp')} />
                <TextLeftImage image={require('./img4.jpg')} header="USE EITHER BUD BY ITSELF." p="Sometimes, you just want to use one 
                earbud, while you keep your other ear free to hear what’s around you. No problem. With Indy Fuel, you can use either the 
                left or right earbud solo." mobile={require('./mobile4.webp')} />
                <TextRightImage image={require('./img5.webp')} header="CONTROL WITHOUT YOUR PHONE." p="A simple series of touches control 
                everything directly from your buds. Answer calls, skip tracks, adjust volume, activate an assistant, switch EQ modes, even 
                turn on Ambient Mode to hear more of your surroundings—all without ever touching your device." mobile={require('./mobile5.webp')}
                    textColor="black" />
                <TextLeftImage image={require('./img6.webp')} header="NEVER LOST WITH TILE." p="Built-in Tile™ technology makes it easy to 
                track down either earbud if you ever misplace them. Download the Tile app and follow the instructions to activate."
                    mobile={require('./mobile6.webp')} color="black" justify="flex-end" mobileHeight="90%" />
                <TextRightImage image={require('./img7.jpg')} header="DURABLE AND REPLACEABLE." p="Indy Fuel earbuds are resistant to water, sweat
                 and dust. And just in case any part is lost or damaged, our Fearless Use Promise® means we’ll replace it at a discount."
                    mobile={require('./mobile7.webp')} />
                <img src={require('./other.jpg')} alt="quote" className="indy-fuel-img" />
                <img src={require('./mobile8.jpg')} alt="quote" className="indy-fuel-img-m" />
                <Eight />
                <Grid image1={require('./1.jpg')} image2={require('./2.jpg')} />
            </React.Fragment>)}
        </div>
    );
};

export default IndyFuel;