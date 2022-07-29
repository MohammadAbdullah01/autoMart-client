import React from 'react';
import banner from '../../Assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} style={{ width: "100%" }} className="max-w-sm rounded-lg shadow-2xl" alt='img' />
                <div>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Find The Right Parts Faster</h1>
                    <p className="py-6">At AutoMart.com, we're confident that you'll be able to find the right part or accessory for your car, truck or SUV. We provide best service worldwide. Get connected with us for the bes service.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;