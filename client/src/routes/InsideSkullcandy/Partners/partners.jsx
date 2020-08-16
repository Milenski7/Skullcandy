import React, { useRef } from 'react';
import InsideSkull from '../../../components/insideSkull/insideSkull';
import './partners.css';

const Partners = ({ history }) => {
    let myRef1 = useRef();
    let myRef2 = useRef();
    let myRef3 = useRef();
    return (
        <div className="indy-fuel-container">
            <div className="partners-section1-container">
                <h1 className="partners-section1-header">OUR PARTNERS</h1>
                <div className="partners-section1-button-container">
                    <button onClick={() => window.scrollTo({ behavior: 'smooth', top: myRef1.current.offsetTop })}
                        className="partners-section1-button">To Write Love on Her Arms</button>
                    <button onClick={() => window.scrollTo({ behavior: 'smooth', top: myRef2.current.offsetTop })}
                        className="partners-section1-button">Protect Our Winters</button>
                    <button onClick={() => window.scrollTo({ behavior: 'smooth', top: myRef3.current.offsetTop })}
                        className="partners-section1-button">Born In PC</button>
                </div>
            </div>
            <div ref={myRef1} className="partners-section2-container">
                <img src={require('./Images/img1.jpg')} alt="partners" className="partners-section2-img" />
                <img src={require('./Images/mobile1.jpg')} alt="partners" className="partners-section2-img-m" />
                <img src={require('./Images/img2.png')} alt="partners" className="partners-section2-img2" />
                <p className="partners-section2-p">
                    To Write Love on Her Arms is a non-profit movement dedicated to presenting hope and finding help for people
                    struggling with depression, addiction, self-injury and suicide.
                </p>
            </div>
            <div className="partners-section3-container">
                <img src={require('./Images/img3.jpg')} alt="partners" className="partners-section3-img" />
                <p className="partners-section3-p">
                    TWLOHA founder Jamie Tworkowski didn’t set out to start a non-profit organization in 2006. All he wanted to do was
                    help his friend Renee who was suffering from depression, addiction and self-injury. Through writing about the
                    experience and selling t-shirts to help fund her treatment, Jamie discovered a community of people struggling with
                    their own mental health and seeking similar support. Since then, TWLOHA has reached millions of people online and
                    in-person with the message that hope and help are real, and has worked to invest over $2.6 million into treatment and
                    recovery for those who can't afford it. A portion of every purchase of limited-edition products during our Mood Boost
                    campaign goes to benefit TWLOHA.
                </p>
            </div>
            <div className="partners-section4-container">
                <h1 className="partners-section4-header">Products that benefit To Write Love on Her Arms.</h1>
                <img src={require('./Images/img4.jpg')} alt="partners" className="partners-section4-img" />
                <p className="partners-section4-p">Wild Indy™ Evo Wireless Earbuds</p>
            </div>
            <div ref={myRef2} className="partners-section2-container">
                <img src={require('./Images/img5.jpg')} alt="partners" className="partners-section2-img" />
                <img src={require('./Images/mobile2.jpg')} alt="partners" className="partners-section2-img-m" />
                <img src={require('./Images/img6.png')} alt="partners" className="partners-section5-img2" />
                <p className="partners-section2-p">
                    Protect Our Winters is a non-profit group dedicated to turning passionate outdoor people into effective climate
                    advocates.
                </p>
            </div>
            <div className="partners-section3-container">
                <img src={require('./Images/img7.jpg')} alt="partners" className="partners-section3-img" />
                <p className="partners-section3-p">
                    As a company founded at the intersection of music and board sports, we believe strongly in protecting the earth and
                    our access to outdoor recreation. Which is why we’re proud to partner with Protect Our Winters. Founded by professional
                    snowboarder, Jeremy Jones, POW is a non-profit group that turns passionate outdoor people into effective climate
                    advocates. They have successfully led a community of outdoor enthusiasts, athletes, scientists, creatives and business
                    leaders to affect systemic political solutions to climate change since 2007. A portion of proceeds from our Upcycling
                    Program, which refurbishes returned or damaged products to reduce landfill waste, goes to Protect Our Winters, along
                    with 10% of online sales from our Stash Mini Power Bank.
                </p>
            </div>
            <div className="partners-section4-container">
                <h1 className="partners-section4-header">Products that benefit Protect Our Winters.</h1>
                <div className="partners-section4-img-container">
                    <img src={require('./Images/img8.jpg')} alt="partners" className="partners-section8-img" />
                    <img src={require('./Images/img9.jpg')} alt="partners" className="partners-section8-img2" />
                </div>
            </div>
            <div ref={myRef3} className="partners-section2-container">
                <img src={require('./Images/img11.jpg')} alt="partners" className="partners-section2-img" />
                <img src={require('./Images/mobile3.jpg')} alt="partners" className="partners-section2-img-m" />
                <img src={require('./Images/img10.png')} alt="partners" className="partners-section5-img2" />
                <p className="partners-section2-p">
                    Park City, Utah is an incubator for action sports, art and culture. Skullcandy
                    wouldn’t have been conceived without the community that inspired it.
                </p>
            </div>
            <div className="partners-section3-container">
                <img src={require('./Images/img12.jpg')} alt="partners" className="partners-section3-img" />
                <p className="partners-section3-p">
                    Since 2015, Skullcandy has reinvested back into the Park City community through our Born in PC program.
                    We’re proud to support Park City and other Utah organizations that share our love for music, the environment
                    and outdoor recreation. It’s our way of saying thanks for the inspiration.
                </p>
            </div>
            <div className="partners-section2-container">
                <img src={require('./Images/img13.jpg')} alt="partners" className="partners-section2-img" />
                <img src={require('./Images/mobile1.jpg')} alt="partners" className="partners-section2-img-m" />
                <h1 className="partners-section10-header">SHOP OUR HQ STORE</h1>
                <p className="partners-section2-p">6301 North Landmark Drive Park City, Utah 84098</p>
            </div>
            <InsideSkull history={history} first={true} second={true} fourth={true} />
        </div>
    );
};

export default Partners;