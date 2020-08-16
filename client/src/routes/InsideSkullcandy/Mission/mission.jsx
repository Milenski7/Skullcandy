import React from 'react';
import TextLeftImage from '../../../components/textLeftImage/textLeftImage';
import TextRightImage from '../../../components/textRightImage/textRightImage';
import InsideSkull from '../../../components/insideSkull/insideSkull';
import './mission.css';

const Mission = ({ history }) => {
    return (
        <div className="indy-fuel-container">
            <img style={{ width: `100%` }} src={require('./Images/img1.jpg')} alt="inside" className="mission-img1" />
            <img style={{ width: `100%` }} src={require('./Images/mobile1.jpg')} alt="inside-mobile" className="mission-img1-m" />
            <div className="mission-img2-container">
                <img src={require('./Images/img2.png')} alt="inside" className="mission-img2" />
            </div>
            <TextLeftImage image={require('./Images/img3.jpg')} header="OUR MISSION." p="Unleash the visceral 
            power of music for all." mobile={require('./Images/mobile3.jpg')} />
            <TextRightImage image={require('./Images/img4.jpg')} header="OUR VISION." p="Be the #1 brand for the 
            youthful and adventurous audio consumer." mobile={require('./Images/mobile4.jpg')} />
            <img style={{ width: `100%` }} src={require('./Images/img5.jpg')} alt="inside" className="mission-img5" />
            <img style={{ width: `100%` }} src={require('./Images/mobile5.jpg')} alt="inside" className="mission-img5-m" />
            <TextLeftImage image={require('./Images/img6.jpg')} header="Fresh tracks." color="black"
                p="Skullcandy wasn’t founded in some corporate office. We were born on a chairlift in Park City, Utah. Even our
             name defies convention. To stay true to our core, we can’t settle for easy or obvious. Everything we do should challenge
             the status quo." mobile={require('./Images/mobile6.jpg')} />
            <TextRightImage image={require('./Images/img7.jpg')} header="Relentless underdogs." p="Being a challenger brand runs deep 
             in our DNA. That's the match that lights the fire and stokes everything we create. We dare you to underestimate us."
                mobile={require('./Images/mobile7.jpg')} />
            <TextLeftImage image={require('./Images/img8.jpg')} header="Banded together." color="black"
                p="Every single one of us makes Skullcandy an incredible place to work. We always put our minds together and go after 
                solutions as a collective. Together, we’re a force to be reckoned with." mobile={require('./Images/mobile8.jpg')} />
            <TextRightImage image={require('./Images/img9.jpg')} header="First chair, last call." p="Working here should be as 
                much of a lifestyle as a job. We don’t believe in “office hours” or some imaginary line between work and fun. So 
                take a powder morning, or a halfpipe break. Leave early to go for a run. Whatever. We expect you to do your job 
                exceptionally; when and how you do it is up to you." mobile={require('./Images/mobile9.jpg')} />
            <TextLeftImage image={require('./Images/img10.jpg')} header="Owning it." p="We’re only as strong as our weakest link. 
            Which is why we need to be accountable to and for each other. If it’s your responsibility, take it. If you need help, 
            ask for it. There’s a solution out there. We trust you to solve it like a pro." mobile={require('./Images/mobile10.jpg')} />
            <InsideSkull history={history} second={true} third={true} fourth={true} />
        </div>
    );
};

export default Mission;