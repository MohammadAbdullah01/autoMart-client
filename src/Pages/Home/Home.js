import React from 'react';
import Banner from './Banner';
import Parts from './Parts';
import Summary from './Summary';

// max-w-7xl	mx-auto px-10

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
        </div>
    );
};

export default Home;