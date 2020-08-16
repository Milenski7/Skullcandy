import React from 'react';
import Jumbotron from './Jumbotron/jumbotron';
import Trending from './Trending/trending';
import Charged from './Charged/charged';
import MoodBoost from './MoodBoost/mood';

const HomePage = ({ history }) => {
    return (
        <React.Fragment>
            <Jumbotron history={history} />
            <Trending history={history} />
            <Charged history={history} />
            <MoodBoost history={history} />
        </React.Fragment>
    );
};

export default HomePage;