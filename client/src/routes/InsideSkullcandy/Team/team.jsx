import React from 'react';
import InsideSkull from '../../../components/insideSkull/insideSkull';
import './team.css';

const Team = ({ history }) => {
    return (
        <div className="indy-fuel-container">
            <div className="team-section1-container">
                <h1 className="team-section1-header">MEET TEAM SKULLCANDY</h1>
                <p className="team-section1-p">Many thanks to all our friends who represent the brand by ripping the mountains, waves
                and streets.</p>
            </div>
            <div className="team-section2-grid">
                <div className="team-section2-grid-item">
                    <img src={require('./Images/img1.jpg')} alt="team" className="team-section2-grid-img" />
                    <p className="team-section2-grid-p">Surfer</p>
                    <h1 className="team-section2-grid-header">COCO HO</h1>
                </div>
                <div className="team-section2-grid-item">
                    <img src={require('./Images/img2.jpg')} alt="team" className="team-section2-grid-img" />
                    <p className="team-section2-grid-p">Skateboarder</p>
                    <h1 className="team-section2-grid-header">JENN SOTO</h1>
                </div>
                <div className="team-section2-grid-item">
                    <img src={require('./Images/img3.jpg')} alt="team" className="team-section2-grid-img" />
                    <p className="team-section2-grid-p">Surfer</p>
                    <h1 className="team-section2-grid-header">CONNER COFFIN</h1>
                </div>
                <div className="team-section2-grid-item">
                    <img src={require('./Images/img4.jpg')} alt="team" className="team-section2-grid-img" />
                    <p className="team-section2-grid-p">Snowboarder</p>
                    <h1 className="team-section2-grid-header">ANNA GASSER</h1>
                </div>
                <div className="team-section2-grid-item">
                    <img src={require('./Images/img5.jpg')} alt="team" className="team-section2-grid-img" />
                    <p className="team-section2-grid-p">Surfer</p>
                    <h1 className="team-section2-grid-header">ALYSSA SPENCER</h1>
                </div>
                <div className="team-section2-grid-item">
                    <img src={require('./Images/img6.jpg')} alt="team" className="team-section2-grid-img" />
                    <p className="team-section2-grid-p">Snowboarder</p>
                    <h1 className="team-section2-grid-header">MARK MCMORRIS</h1>
                </div>
                <div className="team-section2-grid-item">
                    <img src={require('./Images/img7.jpg')} alt="team" className="team-section2-grid-img" />
                    <p className="team-section2-grid-p">Snowboarder</p>
                    <h1 className="team-section2-grid-header">HAILEY LANGLAND</h1>
                </div>
                <div className="team-section2-grid-item">
                    <img src={require('./Images/img8.jpg')} alt="team" className="team-section2-grid-img" />
                    <p className="team-section2-grid-p">Skateboarder</p>
                    <h1 className="team-section2-grid-header">CHRIS JOSLIN</h1>
                </div>
                <div className="team-section2-grid-item">
                    <img src={require('./Images/img9.jpg')} alt="team" className="team-section2-grid-img" />
                    <p className="team-section2-grid-p">Snowboarder</p>
                    <h1 className="team-section2-grid-header">EERO ETTALA</h1>
                </div>
                <div className="team-section2-grid-item">
                    <img src={require('./Images/img10.jpg')} alt="team" className="team-section2-grid-img" />
                    <p className="team-section2-grid-p">Skateboarder</p>
                    <h1 className="team-section2-grid-header">VINCENT MATHERON</h1>
                </div>
                <div className="team-section2-grid-item">
                    <img src={require('./Images/img11.jpg')} alt="team" className="team-section2-grid-img" />
                    <p className="team-section2-grid-p">Snowboarder</p>
                    <h1 className="team-section2-grid-header">AUSTIN LAMOREAUX</h1>
                </div>
                <div className="team-section2-grid-item">
                    <img src={require('./Images/img12.jpg')} alt="team" className="team-section2-grid-img" />
                    <p className="team-section2-grid-p">Snowboarder</p>
                    <h1 className="team-section2-grid-header">ZAK HALE</h1>
                </div>
                <div className="team-section2-grid-item">
                    <img src={require('./Images/img13.jpg')} alt="team" className="team-section2-grid-img" />
                    <p className="team-section2-grid-p">Skateboarder</p>
                    <h1 className="team-section2-grid-header">THOMAS TURNER</h1>
                </div>
                <div className="team-section2-grid-item">
                    <img src={require('./Images/img14.jpg')} alt="team" className="team-section2-grid-img" />
                    <p className="team-section2-grid-p">Skateboarder</p>
                    <h1 className="team-section2-grid-header">PARKER DULLIN</h1>
                </div>
                <div className="team-section2-grid-item">
                    <img src={require('./Images/img15.jpg')} alt="team" className="team-section2-grid-img" />
                    <p className="team-section2-grid-p">BMX</p>
                    <h1 className="team-section2-grid-header">MATTHIAS DANDOIS</h1>
                </div>
                <div className="team-section2-grid-item">
                    <img src={require('./Images/img16.jpg')} alt="team" className="team-section2-grid-img" />
                    <p className="team-section2-grid-p">Skateboarder</p>
                    <h1 className="team-section2-grid-header">VINCENT MILOU</h1>
                </div>
            </div>
            <InsideSkull history={history} first={true} second={true} third={true} />
        </div>
    );
};

export default Team;