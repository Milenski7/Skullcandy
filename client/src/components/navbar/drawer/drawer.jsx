import React, { useEffect } from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Link } from 'react-router-dom';
import './drawer.css';

const DrawerShop = ({ x, setX, history }) => {
    return (
        <div style={{ display: `${x}` }} onMouseLeave={() => setX('none')} className="drawer-container">
            <div className="drawer">
                <div className="drawer-left">
                    <Link to="/shop" className="drawer-left-link">New Arrivals</Link>
                    <Link to="/mood-boost" className="drawer-left-link">Mood Boost</Link>
                    <Link to="/shop" className="drawer-left-link">Custom Products</Link>
                    <Link to="/shop" className="drawer-left-link">Tile&#8482; - Enabled Products</Link>
                    <Link to="/shop" className="drawer-left-link">Corporate Sales</Link>
                    <Link to="/shop" style={{ color: 'red' }} className="drawer-left-link">Sale</Link>
                </div>
                <div className="drawer-center">
                    <div className="drawer-center-list1">
                        <h1 onClick={() => history.push('/shop')} className="drawer-center-list1-header">True Wireless Earbuds</h1>
                        <p onClick={() => history.push('/shop/sesh-evo')} className="drawer-center-list1-link">Sesh Series</p>
                        <p onClick={() => history.push('/shop/indy-fuel')} className="drawer-center-list1-link">Indy Series</p>
                        <p onClick={() => history.push('/shop/push-ultra')} className="drawer-center-list1-link">Push Series</p>
                        <p onClick={() => history.push('/shop')} className="drawer-center-list1-link">Compare All True Wireless</p>
                    </div>
                    <div className="drawer-center-list2">
                        <h1 onClick={() => history.push('/shop')} className="drawer-center-list2-header">Headphones</h1>
                        <p onClick={() => history.push('/shop')} className="drawer-center-list2-link">Wireless Headphones</p>
                        <p onClick={() => history.push('/shop')} className="drawer-center-list2-link">Wired Headphones</p>
                        <h1 onClick={() => history.push('/shop')} className="drawer-center-list2-header2">Earbuds</h1>
                        <p onClick={() => history.push('/shop')} className="drawer-center-list2-link">Wireless Earbuds</p>
                        <p onClick={() => history.push('/shop')} className="drawer-center-list2-link">Wired Earbuds</p>
                    </div>
                    <div className="drawer-center-list3">
                        <h1 onClick={() => history.push('/shop')} className="drawer-center-list3-header">Accessories</h1>
                        <p onClick={() => history.push('/shop')} className="drawer-center-list3-link">Power Accessories</p>
                        <p onClick={() => history.push('/shop')} className="drawer-center-list3-link">Speakers</p>
                        <p onClick={() => history.push('/shop')} className="drawer-center-list3-link">Bags and Cases</p>
                        <p onClick={() => history.push('/shop')} className="drawer-center-list3-link">Hats</p>
                    </div>
                </div>
                <div className="drawer-right">
                    <img onClick={() => history.push('/shop')} src={require('./drawer.jpg')} alt="headphones" className="drawer-right-img" />
                    <div className="drawer-right-bottom">
                        <p onClick={() => history.push('/shop')} className="drawer-right-bottom-text">Compare True Wireless</p>
                        <ArrowRightIcon onClick={() => history.push('/shop')} className="drawer-right-arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrawerShop;