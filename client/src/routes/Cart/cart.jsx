import React, { useState, useEffect } from 'react';
import http from '../../services/http';
import * as config from '../../config/config.json';
import _ from 'lodash';
import { toast } from 'react-toastify';
import './cart.css';

const Cart = ({ history }) => {
    const [cart, setCart] = useState(null);
    const [total, setTotal] = useState(0);

    const getCartItems = async () => {
        try {
            let storageCart = JSON.parse(localStorage.getItem('cart'));
            if (!storageCart) { setCart([]); return }
            const { data } = await http.post(`${config.apiEndpoint}/product/get-cart-item`, { cart: storageCart });
            setCart(data);
            let total = [];
            data.map(item => total.push(item.price * item.quantity));
            total = _.sum(total).toFixed(2);
            setTotal(total);
        } catch (ex) {
            console.error(ex);
            toast.error('Something failed while getting cart items...');
        }
    };
    const handleIncrement = async item => {
        const prevCart = [...cart];
        const prevTotal = total;
        let newTotal = [];
        const newCart = [...cart];
        const index = prevCart.findIndex(i => i._id === item._id);
        newCart[index].quantity += 1;
        newCart.map(item => newTotal.push(item.quantity * item.price));
        newTotal = _.sum(newTotal).toFixed(2);
        try {
            await http.put(`${config.apiEndpoint}/product/update-quantity/${item._id}`, { quantity: newCart[index].quantity });
            setCart(newCart);
            setTotal(newTotal);
        } catch (ex) {
            console.error(ex);
            setCart(prevCart);
            setTotal(prevTotal);
        }
    };

    const handleDecrement = async item => {
        const prevCart = [...cart];
        const prevTotal = total;
        const newCart = [...cart];
        let newTotal = [];
        const index = newCart.findIndex(i => i._id === item._id);
        if (newCart[index].quantity === 1) return;
        newCart[index].quantity -= 1;
        newCart.map(item => newTotal.push(item.quantity * item.price));
        newTotal = _.sum(newTotal).toFixed(2);
        try {
            await http.put(`${config.apiEndpoint}/product/update-quantity/${item._id}`, { quantity: newCart[index].quantity });
            setCart(newCart);
            setTotal(newTotal);
        } catch (ex) {
            console.error(ex);
            setCart(prevCart);
            setTotal(prevTotal);
        }
    };

    const handleProductRemove = item => {
        const newCart = [...cart];
        const index = newCart.findIndex(i => i._id === item._id);
        newCart.splice(index, 1);
        setCart(newCart);
        const storageCart = JSON.parse(localStorage.getItem('cart'));
        if (!storageCart) return;
        let storageIndex = storageCart.findIndex(i => i._id === item._id);
        storageCart.splice(storageIndex, 1);
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(storageCart));
        let newTotal = [];
        newCart.map(item => newTotal.push(item.quantity * item.price));
        newTotal = _.sum(newTotal).toFixed(2);
        setTotal(newTotal);
    };

    useEffect(() => {
        getCartItems();
    }, []);

    return (
        <div className='cart-container'>
            <h1 className="cart-header">CART</h1>
            <div className="cart">
                <div className="cart-row-header">
                    <h1 className="cart-row-header-item">Item</h1>
                    <h1 className="cart-row-header-price">Price</h1>
                    <h1 className="cart-row-header-quantity">Quantity</h1>
                    <h1 className="cart-row-header-total">Total</h1>
                </div>
                {cart && cart.length === 0 && <h1 className="no-cart-items">There are no items in your cart.</h1>}
                {cart && cart.map(item => (
                    <div className="cart-row">
                        <div className="cart-row-item">
                            <img src={`${config.apiEndpoint}/product/get-photo/${item._id}`}
                                alt="product-photo"
                                className="cart-row-item-img" />
                            <div className="cart-row-item-text">
                                <h1 className="cart-row-item-title">{item.title}</h1>
                                <div className="cart-row-buttons">
                                    <h1 onClick={() => history.push(`/shop/${item.link}`)} className="cart-row-button">VIEW</h1>
                                    <h1 onClick={() => handleProductRemove(item)} className="cart-row-button">REMOVE</h1>
                                </div>
                            </div>
                        </div>
                        <h1 className="cart-row-price">${item.price}</h1>
                        <div className="cart-row-quantity">
                            <button onClick={() => handleIncrement(item)} className="cart-row-quantity-button">+</button>
                            <h1 className="cart-row-quantity-counter">{item.quantity}</h1>
                            <button onClick={() => handleDecrement(item)} className="cart-row-quantity-button">-</button>
                        </div>
                        <h1 className="cart-row-total">${(item.price * item.quantity).toFixed(2)}</h1>
                    </div>
                ))}
            </div>
            <div className="cart-total-container">
                <h1 className="cart-total-text">TOTAL (USD)</h1>
                <h1 className="cart-total-amount">${total}</h1>
            </div>
        </div>
    );
};

export default Cart;