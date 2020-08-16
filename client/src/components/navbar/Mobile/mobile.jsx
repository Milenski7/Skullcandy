import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './mobile.css';

const MobileNav = ({ toggle, setToggle, history, newSetX, curUser }) => {
    const [arrow1, setArrow1] = useState(0);
    const [arrow2, setArrow2] = useState(0);
    const [arrow3, setArrow3] = useState(0);
    const [x, setX] = useState('none');
    const [y, setY] = useState('none');
    const [z, setZ] = useState('none');
    return (
        <div style={{ display: `${toggle}` }} className="mobile-drawer-container">
            <div className="mobile-drawer">
                <div className="mobile-drawer-link-container">
                    <h1 onClick={() => history.push('/shop')} className="mobile-drawer-link">SHOP</h1>
                    <FontAwesomeIcon
                        style={{ transform: `rotate(${arrow1}deg)` }}
                        onClick={() => {
                            x === 'none' ? setX('block') : setX('none');
                            arrow1 === 0 ? setArrow1(180) : setArrow1(0)
                        }} icon={faChevronDown} className="mobile-drawer-link-icon" />
                </div>
                <div style={{ display: `${x}` }} className="mobile-drawer-shop">
                    <h1 onClick={() => { history.push('/shop'); setToggle('none'); setX('none'); setArrow1(0) }}
                        className="mobile-drawer-shop-link">TRUE WIRELESS</h1>
                    <h1 onClick={() => { history.push('/shop'); setToggle('none'); setX('none'); setArrow1(0) }}
                        className="mobile-drawer-shop-link">EARBUDS</h1>
                    <h1 onClick={() => { history.push('/shop'); setToggle('none'); setX('none'); setArrow1(0) }}
                        className="mobile-drawer-shop-link">HEADPHONES</h1>
                    <h1 onClick={() => { history.push('/shop'); setToggle('none'); setX('none'); setArrow1(0) }}
                        className="mobile-drawer-shop-link">SALE</h1>
                </div>
                <div className="mobile-drawer-link-container">
                    <h1 onClick={() => { history.push('/mood-boost'); setToggle('none') }} className="mobile-drawer-link">MOOD BOOST</h1>
                    <FontAwesomeIcon
                        style={{ transform: `rotate(${arrow2}deg)` }}
                        onClick={() => {
                            y === 'none' ? setY('block') : setY('none');
                            arrow2 === 0 ? setArrow2(180) : setArrow2(0)
                        }}
                        icon={faChevronDown} className="mobile-drawer-link-icon" />
                </div>
                <div style={{ display: `${y}` }} className="mobile-drawer-mood-boost">
                    <img onClick={() => { history.push('/shop/indy-fuel'); setToggle('none'); setY('none'); setArrow2(0) }}
                        src={require('./shop1.jpg')} alt="mobile-photo" className="mobile-drawer-mood-boost-img1" />
                    <img onClick={() => { history.push('/mood-boost'); setToggle('none'); setY('none'); setArrow2(0) }}
                        src={require('./shop2.jpg')} alt="mobile-photo" className="mobile-drawer-mood-boost-img2" />
                </div>
                <div className="mobile-drawer-link-container">
                    <h1 onClick={() => { history.push('/inside-skullcandy'); setToggle('none') }} className="mobile-drawer-link">INSIDE SKULLCANDY</h1>
                    <FontAwesomeIcon
                        style={{ transform: `rotate(${arrow3}deg)` }}
                        onClick={() => {
                            z === 'none' ? setZ('block') : setZ('none');
                            arrow3 === 0 ? setArrow3(180) : setArrow3(0)
                        }}
                        icon={faChevronDown} className="mobile-drawer-link-icon" />
                </div>
                <div style={{ display: `${z}` }} className="mobile-drawer-mood-boost">
                    <img src={require('./inside1.jpg')} alt="mobile-photo" className="mobile-drawer-mood-boost-img1" />
                    <img src={require('./inside2.jpg')} alt="mobile-photo" className="mobile-drawer-mood-boost-img1" />
                    <img src={require('./inside3.jpg')} alt="mobile-photo" className="mobile-drawer-mood-boost-img1" />
                    <img src={require('./inside4.jpg')} alt="mobile-photo" className="mobile-drawer-mood-boost-img1" />
                </div>
                {!curUser && <div style={{ cursor: `pointer` }} onClick={() => { history.push('/login'); setToggle('none') }} className="mobile-drawer-icon-container">
                    <FontAwesomeIcon icon={faUser} className="mobile-drawer-icon" />
                    <p className="mobile-drawer-icon-text">Login/Logout</p>
                </div>}
                {curUser && <div style={{ cursor: `pointer` }} onClick={() => { history.push('/user'); setToggle('none') }} className="mobile-drawer-icon-container">
                    <FontAwesomeIcon icon={faUser} className="mobile-drawer-icon" />
                    <p className="mobile-drawer-icon-text">Login/Logout</p>
                </div>}
                <div style={{ cursor: `pointer` }} className="mobile-drawer-icon-container" onClick={() => { newSetX(0); setToggle('none') }}>
                    <FontAwesomeIcon icon={faSearch} className="mobile-drawer-icon" />
                    <p className="mobile-drawer-icon-text">Search</p>
                </div>
            </div>
            <div onClick={() => setToggle('none')} className="mobile-drawer-backdrop">
                <img src={require('../logo.jpg')} alt="mobile-logo" className="mobile-drawer-logo" />
            </div>
        </div>
    );
};

export default MobileNav;