import React from 'react';
import './mood.css';

const MoodBoost = ({ history }) => {
    return (
        <div className="mood-container">
            <img onClick={() => history.push('/mood-boost')} src={require('./mood-gif.gif')} alt="mood-boost" className="mood-gif" />
            <img onClick={() => history.push('/mood-boost')} src={require('./mobile.gif')} alt="mood-boost" className="mood-mobile" />
        </div>
    );
};

export default MoodBoost;