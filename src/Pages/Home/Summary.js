import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import smile from '../../Assets/smile.jpg'

import { BsFillPeopleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { AiTwotoneFlag } from "react-icons/ai";

// class Question extends React.Component {
//     render() {
//         return <h3> Lets go for a <FaBeer />? </h3>
//     }
// }

const Summary = () => {
    return (
        <div>
            <h1 className='text-3xl lg:text-5xl font-bold text-center mt-16 mb-5' >OUR BUSINESS SUMMARY</h1>
            <div className='grid grid-cols-3 h-28 md:h-48 gap-5'>
                <div className=' pt-7 lg:pt-10 text-center shadow-lg p-2 bg-rose-400 rounded-md text-white'>
                    <p className='text-2xl font-bold lg:text-5xl' >
                        <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                            {({ isVisible }) => (
                                <div style={{ height: 10 }}>
                                    <span className='block mx-auto mr-[54%] lg:mr-[55%] w-1'><BsFillPeopleFill /></span>
                                    {isVisible ? <CountUp end={35000} /> : null}
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
                                    {isVisible ? <CountUp end={19600} /> : null}
                                    <br />
                                    <p className='text-xs lg:text-xl'>Reviews</p>
                                </div>
                            )}
                        </VisibilitySensor>
                    </p>
                </div>
            </div>
            {/* <div className='bg-rose-300 p-2 rounded shadow-xl my-5'>
                <div>
                    <h1 className='text-xl font-bold'>We are highly secure about our clients product.</h1>
                </div>
                
            </div> */}
            <div class="hero bg-base-200 my-5 rounded">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='lg:w-1/3' src={smile} alt='img' />
                    <div>
                        <h1 class="text-5xl font-bold">We are highly care our clients!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;