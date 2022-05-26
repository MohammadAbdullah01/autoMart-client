import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import smile from '../../Assets/smile.jpg'

import { BsFillPeopleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { AiTwotoneFlag } from "react-icons/ai";



const Summary = () => {
    return (
        <div>
            <h1 className='text-3xl lg:text-5xl font-bold text-center mt-16 mb-5 text-rose-400' >OUR BUSINESS SUMMARY</h1>
            <div className='grid grid-cols-3 h-32 md:h-48 gap-2 md:gap-5'>
                <div className=' pt-7 lg:pt-10 text-center shadow-lg p-2 bg-rose-400 rounded-md text-white'>
                    <p className='text-2xl font-bold lg:text-5xl' >
                        <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                            {({ isVisible }) => (
                                <div style={{ height: 10 }}>
                                    <span className='block mx-auto mr-[54%] lg:mr-[55%] w-1'><BsFillPeopleFill /></span>
                                    {isVisible ? <CountUp end={35600} /> : null}+
                                    <br />
                                    <p className='text-xs lg:text-xl'>Happy Clients</p>
                                </div>
                            )}
                        </VisibilitySensor>
                    </p>
                </div>
                <div className=' pt-7 lg:pt-10 text-center shadow-lg p-2 bg-rose-400 rounded-md text-white'>
                    <p className='text-2xl font-bold lg:text-5xl' >
                        <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                            {({ isVisible }) => (
                                <div style={{ height: 10 }}>
                                    <span className='block mx-auto mr-[54%] lg:mr-[55%] w-1'><AiTwotoneFlag /></span>
                                    {isVisible ? <CountUp end={75} /> : null}
                                    <br />
                                    <p className='text-xs lg:text-xl'>Countries</p>
                                </div>
                            )}
                        </VisibilitySensor>
                    </p>
                </div>
                <div className=' pt-7 lg:pt-10 text-center shadow-lg p-2 bg-rose-400 rounded-md text-white'>
                    <p className='text-2xl font-bold lg:text-5xl' >
                        <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                            {({ isVisible }) => (
                                <div style={{ height: 10 }}>
                                    <span className='block mx-auto mr-[54%] lg:mr-[55%] w-1'><FaStar /></span>
                                    {isVisible ? <CountUp end={19600} /> : null}+
                                    <br />
                                    <p className='text-xs lg:text-xl'>Reviews</p>
                                </div>
                            )}
                        </VisibilitySensor>
                    </p>
                </div>
            </div>
            <div class="hero bg-rose-50 my-5 rounded">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='lg:w-1/3' src={smile} alt='img' />
                    <div>
                        <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold">We are highly care our clients!</h1>
                        <p class="py-6">At autoparts.com, we're confident that you'll be able to find the right part or accessory for your car, truck or SUV. We provide best service worldwide. Get connected with us for the bes service.</p>
                        <button class="btn btn-primary">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;