import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import DrawerShop from './drawer/drawer';
import DrawerMood from './drawer2/drawer2';
import DrawerInside from './drawer3/drawer3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import MobileNav from './Mobile/mobile';
import './navbar.css';

const Navbar = ({ history, curUser, newSetX }) => {
    const [scroll, setScroll] = useState('flex');
    const [toggle, setToggle] = useState('none');
    const [x, setX] = useState('none');
    const [y, setY] = useState('none');
    const [z, setZ] = useState('none');
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY;
            if (isTop >= 490) { setScroll('none') }
            else { setScroll('flex') }
        });
    }, []);
    return (
        <React.Fragment>
            <div className="navbar">
                <div className="mobile-nav">
                    <FontAwesomeIcon onClick={() => setToggle('block')} icon={faBars} className="mobile-nav-bars" />
                    <MobileNav toggle={toggle} setToggle={setToggle} history={history} newSetX={newSetX} curUser={curUser} />
                    <div onClick={() => history.push('/')} className="mobile-nav-center">
                        <img src={require('./logo.jpg')} alt="mobile-logo" className="mobile-logo" />
                        <h1 className="mobile-nav-center-text">Skullcandy</h1>
                    </div>
                    <FontAwesomeIcon onClick={() => history.push('/cart')} icon={faShoppingCart} className="mobile-nav-cart" />
                </div>
            </div>
            <div className="navbar">
                <div className="nav">
                    <div className="nav-brand">
                        <img onClick={() => { history.push("/"); setX('none'); setY('none'); setZ('none') }} src={require('./logo.jpg')} alt="skullcandy-logo" className="nav-logo" />
                        <h1 onClick={() => { history.push("/"); setX('none'); setY('none'); setZ('none') }} style={{ display: `${scroll}` }} className="nav-brand-text">Skullcandy</h1>
                        <div className="nav-list1">
                            <Link
                                onMouseOver={() => { setX('flex'); setY('none'); setZ('none') }}
                                onClick={() => { setX('none') }}
                                to="/shop" className="nav-list1-link">SHOP</Link>
                            <Link
                                onMouseOver={() => { setX('none'); setY('flex'); setZ('none') }}
                                onClick={() => setY('none')}
                                to="/mood-boost" className="nav-list1-link">MOOD BOOST</Link>
                            <Link
                                onMouseOver={() => { setX('none'); setY('none'); setZ('flex') }}
                                onClick={() => setZ('none')}
                                to="/inside-skullcandy" className="nav-list1-link">INSIDE SKULLCANDY</Link>
                        </div>
                    </div>
                    <div className="nav-list2">
                        {!curUser && <PersonOutlineIcon className="nav-list2-icon" onClick={() => history.push('/login')} />}
                        {curUser && <PersonOutlineIcon className="nav-list2-icon" onClick={() => history.push('/user')} />}
                        <SearchIcon onClick={() => newSetX(0)} className="nav-list2-icon" />
                        <ShoppingCartOutlinedIcon onClick={() => history.push('/cart')} className="nav-list2-icon" />
                    </div>
                </div>
                <div style={{ display: `${scroll}` }} className="nav-bottom">
                    <p className="nav-bottom-p">Free Standard Shipping on orders over $99.99 | There may be order
                processing delays due to high order volumes and the COVID-19 pandemic.</p>
                </div>
                <DrawerShop x={x} setX={setX} history={history} />
                <DrawerMood y={y} setY={setY} history={history} />
                <DrawerInside z={z} setZ={setZ} history={history} />
            </div>
        </React.Fragment>
    );
};

export default withRouter(Navbar);