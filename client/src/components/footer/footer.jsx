import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={require('./logo.jpg')} alt="skullcandy-logo" className="nav-logo" />
                    <h1 className="nav-brand-text">Skullcandy</h1>
                </div>
                <div className="footer-top-center">
                    <div className="footer-top-list1">
                        <Link to="/" className="footer-list-item">Help Center</Link>
                        <Link to="/" className="footer-list-item">Contact Us</Link>
                        <Link to="/" className="footer-list-item">Account</Link>
                        <Link to="/" className="footer-list-item">Product Help</Link>
                        <Link to="/" className="footer-list-item">Warranty</Link>
                        <Link to="/" className="footer-list-item">Order Status</Link>
                    </div>
                    <div className="footer-top-list2">
                        <Link to="/" className="footer-list-item">Discount</Link>
                        <Link to="/" className="footer-list-item">Programs</Link>
                        <Link to="/" className="footer-list-item">Compare</Link>
                        <Link to="/" className="footer-list-item">Custom Product</Link>
                        <Link to="/" className="footer-list-item">Bulk Orders</Link>
                        <Link to="/" className="footer-list-item">Press Releases</Link>
                    </div>
                    <div className="footer-top-list3">
                        <Link to="/" className="footer-list-item">About</Link>
                        <Link to="/" className="footer-list-item">Born in PC</Link>
                        <Link to="/" className="footer-list-item">Protect Our</Link>
                        <Link to="/" className="footer-list-item">Winters</Link>
                        <Link to="/" className="footer-list-item">Careers</Link>
                    </div>
                </div>
                <div className="footer-top-right">
                    <h1 className="footer-top-right-header">FOLLOW US</h1>
                    <div className="footer-top-right-icons">
                        <InstagramIcon onClick={() => window.open('https://www.instagram.com/skullcandy/', '_blank')} className="footer-top-right-icon" />
                        <YouTubeIcon onClick={() => window.open('https://www.youtube.com/user/SKULLCANDYTV', '_blank')} className="footer-top-right-icon" />
                        <FacebookIcon onClick={() => window.open('https://www.facebook.com/skullcandy/', '_blank')} className="footer-top-right-icon" />
                        <TwitterIcon onClick={() => window.open('https://twitter.com/skullcandy', '_blank')} className="footer-top-right-icon" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom-container">
                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <Link to="/" className="footer-bottom-link">Privacy Policy |</Link>
                        <Link to="/" className="footer-bottom-link"> Terms of Use</Link>
                    </div>
                    <div className="footer-bottom-right">
                        &copy; 2020 Skullcandy.com All Rights Reserved
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;