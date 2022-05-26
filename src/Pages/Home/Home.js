import React from 'react';
import Banner from './Banner';
import Best from './Best';
import Offer from './Offer';
import Parts from './Parts';
import Summary from './Summary';
import UserReviews from './UserReviews';

// max-w-7xl	mx-auto px-10

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Best></Best>
            <UserReviews></UserReviews>
            <Offer></Offer>
        </div>
    );
};

export default Home;