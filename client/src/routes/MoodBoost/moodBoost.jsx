import React from 'react';
import TextRightImage from '../../components/textRightImage/textRightImage';
import ReactPlayer from 'react-player';
import './moodBoost.css';

const MoodBoost = () => {
    return (
        <div className="mood-boost-container">
            <div className="mood-boost-jumbotron" />
            <div className="mood-boost-section2">
                <img src={require('./img2.png')} alt="music" className="mood-boost-section2-img1" />
                <p className="mood-boost-section2-p">We’re on a mission to boost mental health. Join us by celebrating a
                different feel-good mood every month and help people who are struggling with depression, addiction and suicide.
                Because nothing changes the way we feel like music.</p>
                <img src={require('./img3.png')} alt="music2" className="mood-boost-section2-img2" />
            </div>
            <TextRightImage image={require('./img4.jpg')} header="LETS FEEL WILD THIS MONTH."
                p="With all the unexpected challenges 2020 has thrown at us, we’re feeling like we need to let loose and get a 
            little ‘Wild.’ We hope you’ll join us along with artwork from award-winning illustrator Ju Schnee and performances from
             music artists, Rico Nasty and Gus Dapperton." height="62rem" mobile={require('./mobile4.jpg')} mobileHeight="90%"
                justify="flex-end" />
            <img src={require('./img5.jpg')} alt="music" className="mood-boost-section4" />
            <img src={require('./mobile5.jpg')} alt="music" className="mood-boost-section4-m" />
            <div className="mood-boost-video-player">
                <ReactPlayer
                    className="react-player"
                    width="90%"
                    height="800px"
                    url="https://www.youtube.com/watch?v=yK5vJwKcy04&feature=emb_logo"
                    controls={true} />
                <ReactPlayer
                    className="react-player2"
                    width="90%"
                    height="400px"
                    url="https://www.youtube.com/watch?v=yK5vJwKcy04&feature=emb_logo"
                    controls={true} />
            </div>
            <TextRightImage image={require('./img6.jpg')} header="YOUR PURCHASE HELPS FUND HOPE."
                p="When you buy any Mood Boost bundle, you’ll be helping people find hope and treatment for mental health issues
             through non-profit movement, To Write Love on Her Arms. Get to know them @twloha." height="40rem"
                mobile={require('./mobile6.jpg')} mobileHeight="97%" justify="flex-end" />
            <img src={require('./img7.jpg')} alt="music" className="mood-boost-section5" />
            <img src={require('./mobile7.jpg')} alt="music" className="mood-boost-section5-m" />
            <div className="mood-boost-video-player">
                <ReactPlayer
                    className="react-player"
                    width="90%"
                    height="800px"
                    url="https://www.youtube.com/watch?time_continue=7&v=Y-chwtRlHPk&feature=emb_logo"
                    controls={true} />
                <ReactPlayer
                    className="react-player2"
                    width="90%"
                    height="400px"
                    url="https://www.youtube.com/watch?v=yK5vJwKcy04&feature=emb_logo"
                    controls={true} />
            </div>
            <div className="mood-boost-section7">
                <h1 className="mood-boost-section7-header">SHOP THE LIMITED-EDITION BUNDLE.</h1>
                <img src={require('./img8.png')} alt="music" className="mood-boost-section7-img" />
                <img src={require('./mobile8.png')} alt="music" className="mood-boost-section7-img-m" />
                <button className="mood-boost-section7-btn">SHOP NOW</button>
            </div>
        </div>
    );
};

export default MoodBoost;