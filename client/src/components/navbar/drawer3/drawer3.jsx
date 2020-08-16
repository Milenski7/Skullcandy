import React from 'react';
import './drawer3.css';

const DrawerInside = ({ z, setZ, history }) => {
    return (
        <div onMouseLeave={() => setZ('none')} style={{ display: `${z}` }} className="drawer-container">
            <div className="drawer3">
                <div onClick={() => { history.push('/inside-skullcandy/mission'); setZ('none') }} style={{ borderLeft: `none` }} className="drawer3-1">
                    <img src={require('./pic1.jpg')} alt="mission" className="drawer3-img" />
                    <h1 className="drawer3-text">OUR MISSION, VISION AND VALUES</h1>
                </div>
                <div onClick={() => { history.push('/inside-skullcandy/culture'); setZ('none') }} className="drawer3-1">
                    <img src={require('./pic2.jpg')} alt="mission" className="drawer3-img" />
                    <h1 className="drawer3-text">OUR CULTURE</h1>
                </div>
                <div onClick={() => { history.push('/inside-skullcandy/partners'); setZ('none') }} className="drawer3-1">
                    <img src={require('./pic3.jpg')} alt="mission" className="drawer3-img" />
                    <h1 className="drawer3-text">OUR CHARITABLE PARTNERSHIPS</h1>
                </div>
                <div onClick={() => { history.push('/inside-skullcandy/team'); setZ('none') }} style={{ borderRight: `none` }} className="drawer3-1">
                    <img src={require('./pic4.jpg')} alt="mission" className="drawer3-img" />
                    <h1 className="drawer3-text">OUR TEAM</h1>
                </div>
            </div>
        </div>
    );
};

export default DrawerInside;