import React from 'react';
import TextRightImage from '../../components/textRightImage/textRightImage';
import TextLeftImage from '../../components/textLeftImage/textLeftImage';
import InsideSkull from '../../components/insideSkull/insideSkull';
import './home.css';

const InsideSkullcandy = ({ history }) => {
    return (
        <div className="inside-container">
            <TextRightImage image={require('./img1.jpg')} header="OUR MISSION, VISION AND VALUES" p="See the principles 
            that guide the way we work and play." button="LEARN MORE" link="/inside-skullcandy/mission" history={history}
                mobile={require('./mobile1.jpg')} />
            <TextLeftImage image={require('./img2.jpg')} header="OUR CULTURE" p="Get a look at our unique office life in 
            Park City, Utah." button="LEARN MORE" link="/inside-skullcandy/culture" history={history} mobile={require('./mobile2.jpg')} />
            <TextRightImage image={require('./img3.jpg')} header="OUR CHARITABLE PARTNERSHIPS" p="Learn how 
            Skullcandy is doing well by doing good." button="LEARN MORE" link="/inside-skullcandy/partners" history={history}
                mobile={require('./mobile3.jpg')} />
            <TextLeftImage image={require('./img4.jpg')} header="OUR TEAM" p="Meet the athletes 
            that inspire us every day." button="LEARN MORE" link="/inside-skullcandy/team" history={history}
                mobile={require('./mobile4.jpg')} />
            <InsideSkull history={history} first={true} second={true} third={true} fourth={true} />
        </div>
    );
};

export default InsideSkullcandy;