import React from 'react';
import './drawer2.css';

const DrawerMood = ({ y, setY, history }) => {
    return (
        <div onMouseLeave={() => { setY('none') }} style={{ display: `${y}` }} className="drawer-container">
            <div className="drawer2">
                <div onClick={() => { history.push('/shop/strong-bundle'); setY('none') }} className="drawer2-left">
                    <h1 className="drawer2-left-header">SHOP THE DROP.</h1>
                </div>
                <div className="drawer2-center"></div>
                <div onClick={() => { history.push('/mood-boost'); setY('none') }} className="drawer2-right">
                    <h1 className="drawer2-right-header">EXPLORE THE MOOD.</h1>
                </div>
            </div>
        </div>
    );
};

export default DrawerMood;