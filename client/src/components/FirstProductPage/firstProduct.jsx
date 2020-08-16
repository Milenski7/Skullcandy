import React, { useState, useEffect } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CartOnScroll from '../cartOnScroll/cartOnScroll';
import http from '../../services/http';
import { toast } from 'react-toastify';
import * as config from '../../config/config.json';
import './firstProduct.css';

const First = ({ quantity, setQuantity, image, color, link, mobile, background }) => {
    const [product, setProduct] = useState(null);
    const [cartClicked, setCartClicked] = useState('false');
    const getProduct = async () => {
        try {
            const { data } = await http.get(`${config.apiEndpoint}/product/${link}`);
            setProduct(data);
        } catch (ex) {
            console.error(ex);
            toast.error('Something failed while getting product...');
        }
    }
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
        <React.Fragment>
            <div style={{ backgroundImage: `url("${image}")` }} className="indy-fuel-first2">
                {product && (<React.Fragment><h1 className="indy-fuel-first-header">{product.description}</h1>
                    <h1 className="indy-fuel-first-description">{product.title}</h1>
                    <p className="indy-fuel-first-price">${product.price}</p>
                    <div className="indy-fuel-first-quantity-container">
                        <ExpandLessIcon style={{ backgroundColor: `${color}` }} onClick={() => setQuantity(quantity + 1)} className="indy-fuel-quantity-icon" />
                        <h1 className="indy-fuel-quantity-counter">{quantity}</h1>
                        <ExpandMoreIcon style={{ backgroundColor: `${color}` }} onClick={() => quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)} className="indy-fuel-quantity-icon" />
                        <button onClick={addToCart} style={{ backgroundColor: `${getButtonName().color}` }} className="indy-fuel-add-to-cart">{getButtonName().name}</button>
                    </div>
                    <p className="indy-fuel-app">Works with the Skullcandy App.</p>
                    <p className="indy-fuel-video">Product Video</p></React.Fragment>)}
            </div>
            {product && <div className="indy-fuel-first-m">
                <div style={{ backgroundImage: `url("${mobile}")` }} className="indy-fuel-first-m-image">
                    <h1 className="indy-fuel-first-header">{product.description}</h1>
                    <h1 className="indy-fuel-first-description">{product.title}</h1>
                    <p className="indy-fuel-first-price">${product.price}</p>
                </div>
                <div style={{ backgroundColor: `${background}` }} className="indy-fuel-first-text">
                    <div className="indy-fuel-first-quantity-container">
                        <ExpandLessIcon style={{ backgroundColor: `${color}` }} onClick={() => setQuantity(quantity + 1)} className="indy-fuel-quantity-icon" />
                        <h1 className="indy-fuel-quantity-counter">{quantity}</h1>
                        <ExpandMoreIcon style={{ backgroundColor: `${color}` }} onClick={() => quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)} className="indy-fuel-quantity-icon" />
                        <button
                            style={{ backgroundColor: `${getButtonName().color}` }}
                            onClick={addToCart}
                            className="indy-fuel-add-to-cart">{getButtonName().name}</button>
                    </div>
                    <p className="indy-fuel-app">Works with the Skullcandy App.</p>
                    <p className="indy-fuel-video">Product Video</p>
                </div>
            </div>}
            <CartOnScroll addToCart={addToCart} product={product} getButtonName={getButtonName} />
        </React.Fragment>
    );
};

export default First;