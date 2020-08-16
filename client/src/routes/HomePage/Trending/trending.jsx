import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './trending.css';

const Trending = ({ history }) => {

    const [x, setX] = useState(0);
    const handleNext = () => { x === -200 ? setX(0) : setX(x - 100) };
    const handlePrev = () => { x === 0 ? setX(-200) : setX(x + 100) };
    return (
        <div className="trending-container">
            <div onClick={() => history.push('/shop/push-ultra')} className="trending-img1" ></div>
            <div onClick={() => history.push('/shop/indy-evo')} className="trending-img2" ></div>
            <div onClick={() => history.push('/shop/hesh-3')} className="trending-img3" ></div>
            <div className="trending-carousel">
                <img onClick={() => history.push('/shop/push-ultra')} style={{ transform: `translateX(${x}%)` }} src={require('./mobile1.jpg')} alt="mobile" className="trending-carousel-img" />
                <img onClick={() => history.push('/shop/indy-evo')} style={{ transform: `translateX(${x}%)` }} src={require('./mobile2.jpg')} alt="mobile" className="trending-carousel-img" />
                <img onClick={() => history.push('/shop/hesh-3')} style={{ transform: `translateX(${x}%)` }} src={require('./mobile3.jpg')} alt="mobile" className="trending-carousel-img" />
                <FontAwesomeIcon onClick={handlePrev} icon={faChevronLeft} className="trending-prev" />
                <FontAwesomeIcon onClick={handleNext} icon={faChevronRight} className="trending-next" />
            </div>
        </div>
    );
};

export default Trending;