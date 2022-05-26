import React from 'react';
import bg from '../../Assets/bg.jpg'
import { FaPaperPlane } from "react-icons/fa";

const Offer = () => {
    return (
        <div style={{ background: `url(${bg})`, backgroundAttachment: "fixed", backgroundPosition: "center center", backgroundSize: "cover" }} className="h-48  text-white text-center flex justify-center align-middle flex-col py-3 ">
            <div>
                <h1 className='font-bold text-xl md:text-3xl'><FaPaperPlane className='text-orange-400 inline' /> SIGN UP TO AUTO MART
                </h1>

                <p className='text-lg md:text-2xl text-gray-400'>Receive $50 Coupon for Shopping</p>
            </div>
            <div>
                <input type="email" placeholder='Enter your email address..' className=' border-r-inherit p-2 my-2 text-black' /><input style={{ text: "black" }} className="   border-l-inherit bg-orange-400 p-2 my-2 font-bold text-white cursor-pointer" type="submit" value="SIGN UP" />
            </div>
        </div>
    );
};

export default Offer;