import React, { useState, useEffect } from 'react';
import BottomScrollListener from 'react-bottom-scroll-listener';
import './cartOnScroll.css';

const CartOnScroll = ({ product, addToCart, getButtonName }) => {
    const [display, setDisplay] = useState(100);
    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            const isTopNew = window.scrollY;
            if (isTopNew >= 790) { setDisplay(0) }
            else { setDisplay(100) }
        });
    }, []);
    return (
        <React.Fragment>
            <div style={{ transform: `translateY(${display}%)`, transition: `transform 0.2s linear` }} className="cart-on-scroll-container">
                {product && <div className="cart-on-scroll">
                    <h1 className="cart-on-scroll-header">{product.title}</h1>
                    <h1 className="cart-on-scroll-price">${product.price}</h1>
                    <button
                        style={{ backgroundColor: `${getButtonName().color}` }}
                        onClick={addToCart} className="cart-on-scroll-button">{getButtonName().name}</button>
                </div>}
            </div>
            <BottomScrollListener onBottom={() => setDisplay(100)} />
        </React.Fragment>
    );
};

export default CartOnScroll;