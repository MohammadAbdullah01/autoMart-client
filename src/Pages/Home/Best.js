import React from 'react';
import fit from '../../Assets/fit.svg'
import ship from '../../Assets/ship.svg'
import calendar from '../../Assets/calendar.svg'

const Best = () => {
    return (
        <>
            <div class="text-center mt-10 mb-8"><span className='text-xl font-bold text-rose-400 md:text-4xl lg:text-5xl'>Why Choose autoMart.com</span></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-rose-50 p-3 mb-12'>
                <div className='mt-5 md:mt-0'>
                    <h1 className='text-center text-xl font-bold md:text-2xl'><span className='border-b-4 border-b-orange-500 '>Guaranteed Fit</span>
                    </h1>
                    <div >
                        <img className='w-40 md:w-44 mx-auto my-5 md:my-8' src={fit} alt="" />
                    </div>
                    <p>Take the guesswork out of shopping for auto parts with autoparts.com. We make purchasing car parts online easier by providing accurate and detailed fitment information, which makes for a straightforward and hassle-free shopping experience. Our built-in vehicle selector also allows you to search from our catalog of high-quality aftermarket parts and accessories by year, make, and model—so you're always guaranteed a perfect fit for your vehicle.</p>
                </div>
                <div className='mt-5 md:mt-0'>
                    <h1 className='text-center text-xl font-bold md:text-2xl'><span className='border-b-4 border-b-orange-500 '>Fast Shipping</span>
                    </h1 >
                    <div>
                        <img className='w-40 md:w-44 mx-auto my-5 md:my-8' src={ship} alt="" />
                    </div>
                    <p>
                        Get back on the road faster with Autoparts.com. We deliver the parts you need, when you need them. Our three strategically-located auto parts warehouses are equipped with the latest technologies for efficient order processing and faster shipping. Customers within the continental U.S. can expect their car accessories or replacement parts to arrive in as little as two (2) business days, when ordered by 12pm ET.


                    </p>
                </div>
                <div className='mt-5 md:mt-0'>
                    <h1 className='text-center text-xl font-bold md:text-2xl'><span className='border-b-4 border-b-orange-500 '>90-Day Returns</span>
                    </h1>
                    <div>
                        <img className='w-40 md:w-44 mx-auto my-5 md:my-8' src={calendar} alt="" />
                    </div>
                    <p>
                        At Auto parts, we're confident that you'll be able to find the right part or accessory for your car, truck or SUV. But if for some reason you aren't completely satisfied with your order, we accept returns within 90 days of purchase—and we'll give you your money back! As a leading retailer of aftermarket car parts, our goal is to give our customers the peace of mind to buy parts online.


                    </p>
                </div>
            </div>
        </>
    );
};

export default Best;