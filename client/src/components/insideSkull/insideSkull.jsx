import React from 'react';

const InsideSkull = ({ history, first, second, third, fourth }) => {
    return (
        <div className="inside-final-container">
            <div className="inside-final">
                {first && <div className="inside-final-item">
                    <img src={require('./icon1.png')} alt="icon" className="inside-final-item-img" />
                    <h1 className="inside-final-item-header">Mission, Vision and Values</h1>
                    <h1 className="inside-final-item-p">The principles that guide the way we work and play.</h1>
                    <p onClick={() => history.push('/inside-skullcandy/mission')}
                        className="inside-final-item-learn-more">Learn More</p>
                </div>}
                {second && <div className="inside-final-item">
                    <img src={require('./icon2.png')} alt="icon" className="inside-final-item-img" />
                    <h1 className="inside-final-item-header">Culture</h1>
                    <h1 className="inside-final-item-p">Get a look at our unique office in Park City, Utah.</h1>
                    <p onClick={() => history.push('/inside-skullcandy/culture')} className="inside-final-item-learn-more">Learn More</p>
                </div>}
                {third && <div className="inside-final-item">
                    <img src={require('./icon3.png')} alt="icon" className="inside-final-item-img" />
                    <h1 className="inside-final-item-header">Partnerships</h1>
                    <h1 className="inside-final-item-p">Learn how Skullcandy is doing well by doing good.</h1>
                    <p onClick={() => history.push('/inside-skullcandy/partners')} className="inside-final-item-learn-more">Learn More</p>
                </div>}
                {fourth && <div className="inside-final-item">
                    <img src={require('./icon4.png')} alt="icon" className="inside-final-item-img" />
                    <h1 className="inside-final-item-header">Team</h1>
                    <h1 className="inside-final-item-p">Meet the athletes that inspire us every day.</h1>
                    <p onClick={() => history.push('/inside-skullcandy/team')} className="inside-final-item-learn-more">Learn More</p>
                </div>}
            </div>
        </div>
    );
}

export default InsideSkull;