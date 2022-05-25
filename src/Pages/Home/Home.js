import React from 'react';
import Banner from './Banner';
import Offer from './Offer';
import Parts from './Parts';
import Summary from './Summary';

// max-w-7xl	mx-auto px-10

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Offer></Offer>
        </div>
    );
};

export default Home;